import AdminAllUsers from "@/components/admin/all-users";
import { authOptions } from "@/lib/auth";
import isAdmin from "@/utils/isAdmin";
import { getServerSession } from "next-auth";

export default async function AllUsers(){


    const session = await getServerSession(authOptions);

    if(!session){
        return <section className="w-full h-screen justify-center items-center">
            You are not Authenticated!
        </section>
    }

    const adminCheck = await isAdmin(session);

    if(!adminCheck){
        return <section className="w-full h-screen justify-center items-center">
            You are not Authorized
        </section>
    }

    return <AdminAllUsers />

}