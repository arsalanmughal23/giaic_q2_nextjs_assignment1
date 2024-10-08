import services, { Service } from '@/app/data/services';


export default function ServicesPage({params}:{params:{serviceId:number}}) {
    const service:Service | undefined = services.find((service) => service.id == params.serviceId);

    return (
        <div className="p-5 h-96 grid items-center">
            <div>

                <div className='flex justify-center'>
                    <h1 className="text-6xl">Service Detail</h1>
                </div>
                <div className='mt-5 flex gap-4 justify-center'>
                    <div className="card border border-slate-100 rounded p-3 px-5 w-3/12" key={service?.id}>
                        <div className="card-header text-3xl py-2">
                            { service?.name || 'Service Name' }
                        </div>
                        <div className="card-body">
                            <div className="flex justify-between">
                                <div>{ service?.developer || 'Dev' }</div>
                                <div>{ service?.rate_per_hour || 0 }</div>
                            </div>
                            <p className="mt-3">
                                { service?.description }
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
