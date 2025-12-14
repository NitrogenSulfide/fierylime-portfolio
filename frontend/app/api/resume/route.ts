import { NextResponse } from "next/server";

export async function GET() {
    const backendUrl =
        process.env.BACKEND_BASE_URL ?? "http://localhost:8080";

    try {
        const backendRes = await fetch(
            `${backendUrl}/api/public/resume`,
            {
                headers: { "Accept": "application/json" },
                cache: "no-store",
            }
        );

        const text = await backendRes.text();

        if (!backendRes.ok) {
            console.error("Backend returned error:", {
                status: backendRes.status,
                body: text,
            });

            return NextResponse.json(
                {
                    error: "Backend error",
                    status: backendRes.status,
                    body: text,
                },
                { status: 500 }
            );
        }

        // IMPORTANT: parse AFTER reading text
        const data = JSON.parse(text);
        return NextResponse.json(data);

    } catch (err: any) {
        console.error("Failed to reach backend:", err);

        return NextResponse.json(
            {
                error: "Failed to reach backend",
                message: err?.message ?? String(err),
            },
            { status: 500 }
        );
    }
}