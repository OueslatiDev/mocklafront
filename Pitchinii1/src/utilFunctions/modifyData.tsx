export async function modifyData(formData: any, apiPath: string) {
  console.log(formData);

  try {
    const response = await fetch(apiPath, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Failed to register user: ${response.statusText}`);
    }

    const responseBody = await response.json();

    console.log("data registered successfully!");
    return responseBody.id;
  } catch (error) {
    if (error instanceof Error) {
        console.error("Failed to modify data:", error.message);
        // Gérer l'erreur de manière appropriée ici (par exemple, afficher un message d'erreur à l'utilisateur)
        throw error; // Propager l'erreur pour une gestion ultérieure si nécessaire
    } else {
        console.error("An unknown error occurred:", error);
        // Gérer d'autres types d'erreurs
        throw new Error("An unknown error occurred.");
    }
}

}
