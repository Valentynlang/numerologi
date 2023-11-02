import ButtonToInstagram from "@/pages/components/ButtonToInstagram";
import React from "react";

export default function Start() {
    return (
        <div >
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
                                className="btn btn-primary"
                            >
                                Перейти до калькулятора
                            </a>

                            <ButtonToInstagram/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
