import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword, sendEmailVerification, signInAnonymously, signInWithEmailAndPassword } from "firebase/auth";

class AuthService {
  authToken = null;
  userProfile = null;
  tokenExpiry = null;
  // Login With Firebase
  async login(email: string, password: string) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const authResult = await signInWithEmailAndPassword(auth, email, password)
        resolve(authResult)
      } catch (error) {
        console.log(error)

        reject(error)
      }
    })
  }

  async signUp(email: string, password: string) {
    try {
      const authResult = await createUserWithEmailAndPassword(auth, email, password);

      if (!authResult.user) throw new Error("User not found in authResult");

      // Création de l’objet utilisateur pour Firestore
      const user = {
        name: "",
        age: "",
        number: "",
        formations: [] as string[],
        profession: "",
        email: authResult.user.email,
        id: authResult.user.uid,
        role: "Student"
      };

      // Création du document Firestore avec l’ID de l’utilisateur
      await setDoc(doc(db, "users", user.id), user);

      // Envoi de l’email de vérification
      await sendEmailVerification(authResult.user);

      // Marquer l’utilisateur comme connecté
      localStorage.setItem("isloggedIn", "true");

      return authResult.user; // on peut retourner l’utilisateur pour info
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Sign up failed:", error.message);
      throw error; // propager l’erreur pour le front-end
    }
  }

  async Logout() {
    await auth.signOut()
  }

  async getUserData(userId: string) {
    console.log("Fetching user data for ID:", userId);
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error("User not found");
    }
console.log(docSnap.data());  
    return docSnap.data(); // retourne l'objet user
  }

  async anonymous() {
    await signInAnonymously(auth)
  }
}

export default new AuthService()
