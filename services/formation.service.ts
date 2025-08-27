/* eslint-disable @typescript-eslint/no-explicit-any */

import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import type { FormationType } from '../types/formation'
import { db } from '../firebaseConfig';

// }

export default {

  async getAllFormations(): Promise<FormationType[]> {
    try {
      const querySnapshot = await getDocs(collection(db, "formations"));
      const documents: FormationType[] = querySnapshot.docs.map(doc => doc.data() as FormationType);
      return documents;
    } catch (error) {
      console.error("Failed to get formations:", error);
      throw error;
    }
  },
async addFormation(formation: any) {
    try {
      // On crée le document dans la collection 'formations'
      const docRef = await addDoc(collection(db, "formations"), formation);

      console.log("Document added with ID:", docRef.id);

      // On met à jour le champ 'id' avec l'ID généré
      await updateDoc(doc(db, "formations", docRef.id), { id: docRef.id });

      console.log("Document updated with id field");
    } catch (error) {
      console.error("Error adding formation:", error);
    }
  },
  async updateFormation(formation: any) {
    if (!formation.id) throw new Error("Formation ID is required");

    try {
      const docRef = doc(db, "formations", formation.id);
      await updateDoc(docRef, formation);
      console.log("Formation updated:", formation?.id);
    } catch (error) {
      console.error("Failed to update formation:", error);
      throw error;
    }
  },
  // Supprimer une formation
  async deleteformation(id?: string) {
    if (!id) throw new Error("Formation ID is required");

    try {
      const docRef = doc(db, "formations", id);
      await deleteDoc(docRef);
      console.log("Formation deleted:", id);
    } catch (error) {
      console.error("Failed to delete formation:", error);
      throw error;
    }
  }
}
