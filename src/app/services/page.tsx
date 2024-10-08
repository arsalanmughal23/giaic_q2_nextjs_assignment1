import Link from 'next/link';
import services, { Service } from '../data/services';


export default function ServicesPage() {
  return (
    <div className="p-5 h-96 grid items-center">
        <div>
            <div className='flex justify-center'>
                <h1 className="text-6xl">Services</h1>
            </div>
            <div className='mt-5 flex gap-4 justify-center'>
            {
                services.map(function(service:Service) {
                    return (
                        <div className="card border border-slate-100 rounded p-3 px-5 w-3/12" key={service.id}>
                            <div className="card-header text-3xl py-2">
                                { service.name || 'Service Name' }
                            </div>
                            <div className="card-body flex justify-between">
                                <div>{ service.developer || 'Dev' }</div>
                                <div>{ service.rate_per_hour || 0 }</div>
                            </div>
                            <div className="card-footer">
                                <Link href={`/services/${service.id}`}>
                                    <div className='border border-slate-100 rounded mt-2 p-0 px-2 w-fit'>Read More</div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  );
}
