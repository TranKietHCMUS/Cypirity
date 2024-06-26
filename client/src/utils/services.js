export const baseUrl = "http://localhost:3000/api";

export const postRequest = async(url, body) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body
    });
    const data = await response.json();

    if (!response.ok) {
        let message;
        if (data?.message) // check xem co message nao hay ko
            message = data.message;
        else
            message = data;

        return { error: true, message };
    }

    return data;
};

export const getRequest = async (req, res) => {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
        let message = "An error occured!";
        if (data?.message) // check xem co message nao hay ko
            message = data.message;
        else
            message = data;

        return { error: true, message };
    }

    return data;
}