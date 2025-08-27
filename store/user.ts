import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { UserType } from '../types/user'
import AuthService from '../services/auth.service'
import type { DocumentData } from 'firebase/firestore'
import { auth } from '~/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  // State (using ref)
  const userData = ref<UserType | undefined>(undefined)
  const isLoggedIn = ref(false)

  // Getters (computed properties)
  const getUserData = computed(() => userData.value)
  const getAuthentication = computed(() => isLoggedIn.value)

  // Actions (replacing mutations & actions)
const checkAuth = () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const res = await AuthService.getUserData(user.uid);
        setAuth(true);
        setUser(res);
        console.log("User data:", res);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
        // Ne pas faire logout, juste mettre user undefined
        setUser(undefined);
        setAuth(true); // Toujours connecté à Firebase
      }
    } else {
      console.log("No user logged in");
      setAuth(false);
      setUser(undefined);
      // Ici seulement logout si tu veux vraiment déconnecter Firebase
      // AuthService.Logout()
    }
  });
};

  const login = async (email: string, password: string) => {
    try {
  
    await AuthService.login(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    await AuthService.Logout()
    afterLogout()
  }

  const afterLogout = async () => {
    setAuth(false)
    setUser(undefined)
    localStorage.setItem('isLoggedIn', false.toString())
    localStorage.removeItem('idUser')
  }

  // Private functions (replacing mutations)
  const setAuth = async (value: boolean) => {
    localStorage.setItem('isLoggedIn', value.toString())
    isLoggedIn.value = value
  }

  const setUser = async (data: DocumentData | undefined) => {
    userData.value = data as UserType
  }

  return {
    userData,
    isLoggedIn,
    getUserData,
    getAuthentication,
    checkAuth,
    login,
    logout,
    afterLogout
  }
})
