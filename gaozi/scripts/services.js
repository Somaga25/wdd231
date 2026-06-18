export async function getServices() {

    try {

        const response =
            await fetch("data/services.json");

        if (!response.ok) {
            throw new Error("Unable to load data");
        }

        const services =
            await response.json();

        return services;

    } catch (error) {

        console.error(error);

        return [];

    }

}