import Ticket from '@/app/(models)/Ticket'
import { NextResponse } from 'next/server'

export async function GET(_req: any, { params } : any){
    try {
        const { id } = params 
        const foundTicket = await Ticket.findOne({ _id: id })

        return NextResponse.json({ foundTicket }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Error', error}, { status: 500 })
    }
}

export async function DELETE(_req: any, { params } : any){
    try {
        const { id } = params
        await Ticket.findByIdAndDelete(id)

        return NextResponse.json({ message: 'Ticket Deleted'}, { status: 200 })
    } catch ( error ){
        return NextResponse.json({ message: 'Error', error}, { status: 500 })
    }
}

export async function PUT(_req: any, { params } : any){
    try {
        const { id } = params
        const body = await _req.json()
        const ticketData = body.formData

        const updateTicketData = await Ticket.findByIdAndUpdate(id, {
            ...ticketData,
        })

        return NextResponse.json({ message: 'Ticket Updated'}, { status: 200 })
    } catch ( error ){
        return NextResponse.json({ message: 'Error', error}, { status: 500 })
    }
}