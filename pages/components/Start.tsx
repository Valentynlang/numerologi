export default function Start() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="justify-center relative bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl  md:pt-24 lg:flex lg:gap-x-20  lg:pt-0">
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 ">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Порахуй свою долю
                            <br />
                            Почни тут
                        </h2>

                        <div className="mt-10 flex items-center justify-center gap-x-6 ">
                            <a
                                href="/Calculator"
                                className="rounded-md mb-20 lg:mb-0 bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Перейти
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
