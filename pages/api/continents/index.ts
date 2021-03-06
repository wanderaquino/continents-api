import { NextApiRequest, NextApiResponse } from "next"
import continents from "../../../db.json"

export default function Continents (request:NextApiRequest, response:NextApiResponse) {
    if(request.method === "GET") {
        response.status(200).json(continents)
    }
}