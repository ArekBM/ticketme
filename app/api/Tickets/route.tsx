import Ticket from "../../(models)/Tickets";
import { NextResponse } from 'next/server';

export async function POST(req: { json: () => any; }){
    console.log('POST RAN')
    try{
        const body = await req.json()
        const ticketData = body.formData
        await Ticket.create(ticketData)

        return NextResponse.json({message: 'Ticket Created'}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: 'Error', error}, { status: 500});
    }
}