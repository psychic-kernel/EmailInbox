import { NextRequest, NextResponse } from "next/server";
import {IncomingMail} from "cloudmailin";

// 201 Created.
export async function POST(request: NextRequest) {
  let mail: IncomingMail = await request.json();
  console.log(mail.plain);
  console.log(mail.html);
  console.log(mail.envelope.from);
  console.log(mail.envelope.to);

  return NextResponse.json({ message: `Thanks for the email ${mail.envelope.from}` }, { status: 201 });
}
