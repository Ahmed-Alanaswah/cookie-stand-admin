import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/RepostTable'

export default function CookieStandAdmin(props) {
    const {cookiesArray,createResource,logout,deleteResource} = props
    console.log(cookiesArray);
    
    return (
        <>
            <Header logout={logout}/>
            <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                <CreateForm createResource={createResource}/>
                <ReportTable cookiesArray={cookiesArray} deleteResource={deleteResource}/>
            </main>
            <Footer len={cookiesArray} />
        </>
    )
}