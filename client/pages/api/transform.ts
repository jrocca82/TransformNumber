import { NextApiHandler } from "next";
import axios, { AxiosResponse } from "axios";
import { TransformReturnType } from "@/types/Transform";

const endpointBase = process.env.SERVER_ENDPOINT;

const handler: NextApiHandler = async (req, res) => {
    const { input } = req.body;

    try {
        // This endpoint works in postman and swagger from the server
        const { data: serverResponse }: AxiosResponse<TransformReturnType, string> = await axios.post(`${endpointBase}/input?input=${input}`);
        res.status(200).json(serverResponse);
    } catch (e) {
        res.status(400).send("FAIL");
    }

};

export default handler