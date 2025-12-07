import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as Ably from "ably";

const ably = new Ably.Rest(process.env.ABLY_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        const { roomId } = req.query;
        if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
        if (!roomId) return res.status(400).json({ error: "Missing roomId" });

        const token = await ably.auth.createTokenRequest({
            capability: { [`room:${roomId}`]: ["publish","subscribe"] },
            ttl: 60 * 60 * 1000,
        });

        res.status(200).json(token);
    } catch (err) {
        res.status(500).json({ error: "Auth error"});
    }
}