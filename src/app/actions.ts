"use server";

export async function submitContact(prevState: any, formData: FormData) {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScPhQ_pqSdQVsHIFtuKwMvNkioVAHQQjWbxhr8aweavax2X4g/formResponse";
  
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Simple validation
  if (!firstName || !lastName || !email || !message) {
      return { success: false, message: "Please fill in all fields." };
  }

  // Construct Google Form parameters
  const params = new URLSearchParams();
  params.append("entry.1242991441", `${firstName} ${lastName}`); // Full Name
  params.append("entry.1502607910", email);
  params.append("entry.1146144071", message);
  // Optional fields left empty: Phone (entry.128645579), Project Type (entry.1273995875), Budget (entry.1273995875)

  try {
      await fetch(GOOGLE_FORM_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
      });

      return { success: true, message: "Transmission received. We will be in touch." };
  } catch (error) {
      console.error("Form submission error:", error);
      return { success: false, message: "Transmission failed. Please try again." };
  }
}
