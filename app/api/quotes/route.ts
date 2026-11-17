import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";

interface QuoteRequestBody {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  website?: string;
  message?: string;
}

export async function GET() {
  try {
    const prisma = getPrisma();
    const totalQuotes = await prisma.quoteRequest.count();

    return NextResponse.json({
      ok: true,
      service: "postgres",
      orm: "prisma",
      totalQuotes,
    });
  } catch (error) {
    console.error("GET /api/quotes failed:", error);
    return NextResponse.json(
      { ok: false, error: "Database connection failed" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequestBody;
    const name = body.name?.trim() ?? "";
    const businessName = body.business?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() || null;
    const website = body.website?.trim() || null;
    const message = body.message?.trim() ?? "";

    if (!name || !businessName || !email || !message) {
      return NextResponse.json(
        {
          ok: false,
          error: "Name, business name, email, and project details are required.",
        },
        { status: 400 }
      );
    }

    const prisma = getPrisma();
    const created = await prisma.quoteRequest.create({
      data: {
        name,
        businessName,
        email,
        phone,
        website,
        message,
      },
      select: {
        id: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        ok: true,
        id: created.id,
        createdAt: created.createdAt,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/quotes failed:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to save your quote request right now." },
      { status: 500 }
    );
  }
}
