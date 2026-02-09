import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as Ably from "ably";

const ably = new Ably.Rest(process.env.ABLY_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        const { roomId } = req.query;
        if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
        if (!roomId) return res.status(400).json({ error: "Missing roomId" });

        const token = await ably.auth.createTokenRequest({
            capability: { [`room:${roomId}`]: ["publish","subscribe"] },
            ttl: 24 * 60 * 60 * 1000,
            clientId: `user-${Math.random().toString(36).slice(2, 10)}`
        });

        const user = crypto.randomUUID();

        res.status(200).json(token);
    } catch (err) {
        res.status(500).json({ error: "Auth error"});
    }
}