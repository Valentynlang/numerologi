import React, {Fragment, useState} from 'react';
import DateMaskInput from '@/pages/components/DateMaskInput';
import Image from "next/image";
import {Popover, Transition} from "@headlessui/react";
export default function Calculator() {
    const [dayDateValue, setDayDateValue] = useState<number>(0);
    const [montDateValue, setMontDateValue] = useState<number>(0);
    const [yearsDateValue, setYearsDateValue] = useState<number>(0);
    const updateDateValues = (day: string, month: string, year: string) => {
        setDayDateValue(Number(day));
        setMontDateValue(Number(month));
        setYearsDateValue(Number(year));

    };

    function template(num1: number | undefined, num2: any, ...numbers: any[]) {

        let numDate = num1 + num2 ;
        if (numbers.length >= 0) {
            numDate += numbers.reduce((acc, num) => acc + num, 0);
        }
        if (numDate <= 22) {
            return numDate;
        } else if (numDate >= 22) {
            const numDateStr = numDate.toString();
            const numD1 = parseInt(numDateStr[0]);
            const numD2 = parseInt(numDateStr[1]);
            return numD1 + numD2;
        }
    }

    const dDate = function () {
        if (dayDateValue  <= 22) {
            return dayDateValue;
        } else if (dayDateValue >= 22) {
            const dayStr = dayDateValue.toString();
            const d1 = parseInt(dayStr[0]);
            const d2 = parseInt(dayStr[1]);
            return d1 + d2;
        }
    };

    const mDate =function () {
        return montDateValue
    }


    const yDate = function () {
        const yearStr = yearsDateValue.toString()
        const y1 = parseInt(yearStr[0])
        const y2 = parseInt(yearStr[1])
        const y3 = parseInt(yearStr[2])
        const y4 = parseInt(yearStr[3])
        const yearDate = y1 + y2 + y3 + y4
        if (yearDate <= 22) {
            return yearDate
        } else if (yearDate >= 22) {
            const yearDateStr = yearDate.toString()
            const yD1 = parseInt(yearDateStr[0])
            const yD2 = parseInt(yearDateStr[1])
            return yD1 + yD2
        }
    }
    const a1 = dDate ()

    const b1 = mDate ()
    const v1 = yDate ()

    const g1 = template(a1 ,b1 , v1)


    const zk = template(a1 , b1 , v1 , g1)

    const d1 = template(a1 , b1 )

    const e1 = template( b1 , v1 )

    const j1 = template( v1 , g1)

    const z1 = template( a1 , g1 )

///////////////////////

    const aM = template( a1 , zk )

    const dM = template( d1 , zk )

    const bM = template( b1 , zk )

    const eM = template( e1 , zk )

    const vM = template( v1 , zk )

    const jM = template( j1 , zk )

    const gM = template( g1 , zk )

    const zM = template( z1 , zk )

/////////////////////

    const aL = template( a1 , aM )

    const dL = template( d1 , dM )

    const bL = template( b1 , bM )

    const eL = template( e1 , eM )

    const vL = template( v1 , vM )

    const jL = template( j1 , jM )

    const gL = template( g1 , gM )

    const zL = template( z1 , zM )

//////////

    const aT = template( aM , zk )

    const bT = template( bM , zk )

    const kT = template( bM , gM )

    const nT = template( kT , gM )

    const oT = template( kT , bM )

////////

    const physics = template( a1 , aM , aT , aL , zk , vM, v1 )

    const energy = template( b1 , bM , bT , bL , zk , gM, g1 )

    const em1 = template( a1 , b1  )

    const em2 = template( aL , bL  )

    const em3 = template( aM , bM  )

    const em4 = template( aT , bT )

    const em5 = template( zk , zk  )

    const em6 = template( vM , gM  )

    const em7 = template( v1 , g1  )

    const emotions = template( em1 , em2 , em3 , em4 , em5 , em6 , em7 )

///////

    const sky = template( b1 , g1 )

    const ground = template( a1 , v1 )

    const sG = template(sky, ground)

//////

    const man = template( d1 , j1 )

    const woman = template( e1 , z1 )

    const mW = template( man , woman )

////

    const spirit = template( sG , mW )

    const planetary = template( spirit , mW )

    const power = template( d1, e1, j1, z1  )

////////

    const b5 = template(b1 , e1)

    const b3 = template(b1 , b5)

    const b2 = template(b1 , b3)

    const b4 = template(b3 , b5)

    const b7 = template(b5 , e1)

    const b6 = template(b5 , b7)

    const b8 = template(b7 , e1)

    /////

    const e5 = template(e1 , v1)

    const e3 = template(e1 , e5)

    const e2 = template(e1 , e3)

    const e4 = template(e3 , e5)

    const e7 = template(e5 , v1)

    const e6 = template(e5 , e7)

    const e8 = template(e7 , v1)

    /////

    const v5 = template(v1 , j1)

    const v3 = template(v1 , v5)

    const v2 = template(v1 , v3)

    const v4 = template(v3 , v5)

    const v7 = template(v5 , j1)

    const v6 = template(v5 , e7)

    const v8 = template(v7 , j1)

    /////

    const j5 = template(j1 , g1)

    const j3 = template(j1 , j5)

    const j2 = template(j1 , j3)

    const j4 = template(j3 , j5)

    const j7 = template(j5 , g1)

    const j6 = template(j5 , j7)

    const j8 = template(j7 , g1)

    /////

    const g5 = template(g1 , z1)

    const g3 = template(g1 , g5)

    const g2 = template(g1 , g3)

    const g4 = template(g3 , g5)

    const g7 = template(g5 , z1)

    const g6 = template(g5 , g7)

    const g8 = template(g7 , z1)

    /////

    const z5 = template(z1 , a1)

    const z3 = template(z1 , z5)

    const z2 = template(z1 , z3)

    const z4 = template(z3 , z5)

    const z7 = template(z5 , a1)

    const z6 = template(z5 , z7)

    const z8 = template(z7 , a1)

    /////

    const a5 = template(a1 , d1)

    const a3 = template(a1 , a5)

    const a2 = template(a1 , a3)

    const a4 = template(a3 , a5)

    const a7 = template(a5 , d1)

    const a6 = template(a5 , a7)

    const a8 = template(a7 , d1)

    /////

    const d5 = template(d1 , b1)

    const d3 = template(d1 , d5)

    const d2 = template(d1 , d3)

    const d4 = template(d3 , d5)

    const d7 = template(d5 , b1)

    const d6 = template(d5 , d7)

    const d8 = template(d7 , b1)






    return <div className={`App`}>
        <div className="p-2">
            <a href="/" className="link link-hover">Головна</a>
        </div>
        <div className={`block flex-1 border-0 bg-transparent py-1.5 pl-1  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 user-form`}>
            <DateMaskInput  onDateChange={updateDateValues} minDate={new Date(1900, 0, 1)}
                            maxDate={new Date(2100, 12, 31)} />
        </div>

        <div className="section-with-diagram__top-content">
            <div className="section-with-diagram__col-with-table">
                <div className="h5 section-with-diagram__table-title">Карта здоров'я</div>
                <table className="section-with-diagram__table table health-table "><thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col" className="h5 table-title-with-prompt">Назва Чакри</th>
                    <th scope="col">Фізика</th>
                    <th scope="col">Енергія</th>
                    <th scope="col">Емоції</th>
                </tr>
                </thead>
                    <tbody>
                    <tr className="-purple-row" data-row-number="1">
                        <th scope="row">1</th>
                        <td>
                            <div className="h5 table-title-with-prompt">
                                <span className="table-title-with-prompt__text">Сахасрара</span>
                                <Popover className="relative ml-1">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={`
                ${open ? 'text-black' : 'text-black/90'}
                group inline-flex items-center rounded-full text-xs border-black  border px-1 py-0  font-light hover:text-gray-500 hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                            >
                                                <span>?</span>
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition  ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/3 z-10 mt-1 w-screen max-w-sm -translate-x-32 sm:-translate-x-8  transform px-4 sm:px-0 ">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                                        <div className=" bg-white p-7 ">
                                                            <p className="text-sm font-light text-gray-900">
                                                                Волося, мозок, верхня частина черепа.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </div>
                            <div className="h6 table-sub-title">Покликання, призначення</div>
                        </td>
                        <td className="js-personal-calculation-item">{bL ? a1 : null}</td>
                        <td className="js-personal-calculation-item">{bL ? b1 : null}</td>
                        <td className="js-personal-calculation-item">{bL ? em1 : null}</td>
                    </tr>
                    <tr className="-blue-row" data-row-number="2">
                        <th scope="row">2</th>
                        <td>
                            <div className="h5 table-title-with-prompt">
                                <span className="table-title-with-prompt__text">Аджна</span>
                                <Popover className="relative ml-1">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={`
                ${open ? 'text-black' : 'text-black/90'}
                group inline-flex items-center rounded-full text-xs px-1 border-black  border  py-0  font-light hover:text-gray-500 hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                            >
                                                <span>?</span>
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition  ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/3 z-10 mt-1 w-screen max-w-sm -translate-x-1/4 sm:-translate-x-8  transform px-4 sm:px-0 ">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                                        <div className=" bg-white p-7 ">
                                                            <p className="text-sm font-light text-gray-900">
                                                                Очі, вуха, обличчя, щитовидка, плечі, руки.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </div>
                            <div className="h6 table-sub-title">Цілостність, егрегори, соціалізація</div>
                        </td>
                        <td className="js-personal-calculation-item">{aL}</td>
                        <td className="js-personal-calculation-item">{bL}</td>
                        <td className="js-personal-calculation-item">{em2}</td>
                    </tr>
                    <tr className="-cyan-row" data-row-number="3">
                        <th scope="row">3</th>
                        <td>
                            <div className="h5 table-title-with-prompt">
                                <span className="table-title-with-prompt__text">Вішудха</span>
                                <Popover className="relative ml-1">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={`
                ${open ? 'text-black' : 'text-black/90'}
                group inline-flex items-center rounded-full text-xs px-1 border-black  border py-0 font-light hover:text-gray-500 hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                            >
                                                <span>?</span>
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition  ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/3 z-10 mt-1 w-screen max-w-sm -translate-x-28 sm:-translate-x-8  transform px-4 sm:px-0 ">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                                        <div className=" bg-white p-7 ">
                                                            <p className="text-sm font-light text-gray-900">
                                                                Горло, нижня щелепа, щитовидка, плечі, руки.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </div>
                            <div className="h6 table-sub-title">Оцінка минулого, творчість, таланти</div>
                        </td>
                        <td className="js-personal-calculation-item">{aM}</td>
                        <td className="js-personal-calculation-item">{bM}</td>
                        <td className="js-personal-calculation-item">{em3}</td>
                    </tr>
                    <tr className="-green-row" data-row-number="4">
                        <th scope="row">4</th>
                        <td>
                            <div className="h5 table-title-with-prompt">
                                <span className="table-title-with-prompt__text">Анахата</span>
                                <Popover className="relative ml-1">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={`
                ${open ? 'text-black' : 'text-black/90'}
                group inline-flex items-center rounded-full text-xs px-1 border-black  border py-0 font-light hover:text-gray-500 hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                            >
                                                <span>?</span>
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition  ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/3 z-10 mt-1 w-screen max-w-sm -translate-x-1/4 sm:-translate-x-8  transform px-4 sm:px-0 ">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                                        <div className=" bg-white p-7 ">
                                                            <p className="text-sm font-light text-gray-900">
                                                                Серце, легені, бронхи, ребра, груди.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </div>
                            <div className="h6 table-sub-title">Радість, стосунки, кохання</div>
                        </td>
                        <td className="js-personal-calculation-item">{aT}</td>
                        <td className="js-personal-calculation-item">{bT}</td>
                        <td className="js-personal-calculation-item">{em4}</td>
                    </tr>
                    <tr className="-yellow-row" data-row-number="5">
                        <th scope="row">5</th>
                        <td>
                            <div className="h5 table-title-with-prompt">
                                <span className="table-title-with-prompt__text">Маніпура</span>
                                <i className="table-title-with-prompt__icon icomoon-prompt js-popover" data-content="Отвечает за состояние Середина позвоночника, ЖКТ, печень."></i>
                                <Popover className="relative ml-1">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={`
                ${open ? 'text-black' : 'text-black/90'}
                group inline-flex items-center rounded-full text-xs px-1 border-black  border py-0 font-light hover:text-gray-500 hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                            >
                                                <span>?</span>
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition  ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/3 z-10 mt-1 w-screen max-w-sm -translate-x-32 sm:-translate-x-8  transform px-4 sm:px-0 ">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                                        <div className=" bg-white p-7 ">
                                                            <p className="text-sm font-light text-gray-900">
                                                                Середина хребта, ШКТ, печінка.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </div>
                            <div className="h6 table-sub-title">Сила волі, мотивація, статус</div>
                        </td>
                        <td className="js-personal-calculation-item">{zk}</td>
                        <td className="js-personal-calculation-item">{zk}</td>
                        <td className="js-personal-calculation-item">{em5}</td>
                    </tr>
                    <tr className="-orange-row" data-row-number="6">
                        <th scope="row">6</th>
                        <td>
                            <div className="h5 table-title-with-prompt">
                                <span className="table-title-with-prompt__text">Свадхістана</span>
                                <Popover className="relative ml-1">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={`
                ${open ? 'text-black' : 'text-black/90'}
                group inline-flex items-center rounded-full text-xs px-1 border-black  border py-0 font-light hover:text-gray-500 hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                            >
                                                <span>?</span>
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition  ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/3 z-10 mt-1 w-screen max-w-sm -translate-x-36 sm:-translate-x-8  transform px-4 sm:px-0 ">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                                        <div className=" bg-white p-7 ">
                                                            <p className="text-sm font-light text-gray-900">
                                                                Нирки, товстий кишечник, надниркові залози, статеві органи.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </div>
                            <div className="h6 table-sub-title">Дитинство, емоційність, насолода</div>
                        </td>
                        <td className="js-personal-calculation-item">{vM}</td>
                        <td className="js-personal-calculation-item">{gM}</td>
                        <td className="js-personal-calculation-item">{em6}</td>
                    </tr>
                    <tr className="-red-row" data-row-number="7">
                        <th scope="row">7</th>
                        <td>
                            <div className="h5 table-title-with-prompt">
                                <span className="table-title-with-prompt__text">Муладхара</span>
                                <i className="table-title-with-prompt__icon icomoon-prompt js-popover" data-content="Отвечает за состояние Ноги, анус, крестец, мочеполовая система."></i>
                                <Popover className="relative ml-1">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={`
                ${open ? 'text-black' : 'text-black/90'}
                group inline-flex items-center rounded-full text-xs px-1 border-black  border py-0  font-light hover:text-gray-500 hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                            >
                                                <span>?</span>
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition  ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/3 z-10 mt-1 w-screen max-w-sm -translate-x-32 sm:-translate-x-8  transform px-4 sm:px-0 ">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                                        <div className=" bg-white p-7 ">
                                                            <p className="text-sm font-light text-gray-900">
                                                                Ноги, анус, криж, сечостатева система.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </div>
                            <div className="h6 table-sub-title">Здорове тіло, матерія</div>
                        </td>
                        <td className="js-personal-calculation-item">{v1}</td>
                        <td className="js-personal-calculation-item">{g1}</td>
                        <td className="js-personal-calculation-item">{em7}</td>
                    </tr>
                    <tr className="-grey-row" data-row-number="8">
                        <th scope="row">8</th>
                        <td>
                            <div className="h5 table-title-with-prompt">
                                <span className="table-title-with-prompt__text">Підсумок</span>
                                <i className="table-title-with-prompt__icon icomoon-prompt js-popover" data-content="Сиситемы: Костная, лимфатическая, кровеносная. Лишний вес."></i>
                                <Popover className="relative ml-1">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={`
                ${open ? 'text-black' : 'text-black/90'}
                group inline-flex items-center rounded-full text-xs px-1 border-black  border py-0 font-light hover:text-gray-500 hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                            >
                                                <span>?</span>
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition  ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/3 z-10 mt-1 w-screen max-w-sm -translate-x-1/4 sm:-translate-x-8  transform px-4 sm:px-0 ">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                                        <div className=" bg-white p-7 ">
                                                            <p className="text-sm font-light text-gray-900">
                                                                Система: кісткова, лімфатична, кровоносна. Зайва вага
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </div>
                            <div className="h6 table-sub-title">Загальне енергополе</div>
                        </td>
                        <td className="js-personal-calculation-item">{physics}</td>
                        <td className="js-personal-calculation-item">{energy}</td>
                        <td className="js-personal-calculation-item">{emotions}</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div className="section-with-diagram__col-with-diagram">
                <div className="section-with-diagram__matrix-diagram">
                    <div className="matrix-diagram">
                        <div className="matrix-diagram__svg">
                            <Image src="/diagram.svg" alt={"diagram"}  className="img" height={872} width={872} />
                        </div>
                        <div className="matrix-diagram__circle -size-lg -position-a -purple -active">{ bL ? a1 : null}</div>
                        <div className="matrix-diagram__circle -size-md -position-a2 -blue -active">{aL}</div>
                        <div className="matrix-diagram__circle -size-sm -position-a1 -cyan -active">{aM}</div>
                        <div className="matrix-diagram__circle -size-sm -position-a3 -green -active">{aT}</div>
                        <div className="matrix-diagram__circle -size-lg -position-b -purple -active">{bL ? b1 : null}</div>
                        <div className="matrix-diagram__circle -size-md -position-b2 -blue -active">{bL}</div>
                        <div className="matrix-diagram__circle -size-sm -position-b1 -cyan -active">{bM}</div>
                        <div className="matrix-diagram__circle -size-sm -position-b3 -green -active">{bT}</div>
                        <div className="matrix-diagram__circle -size-lg -position-c -red -active">{v1}</div>
                        <div className="matrix-diagram__circle -size-md -position-c2 -white -active">{vL}</div>
                        <div className="matrix-diagram__circle -size-sm -position-c1 -orange -active">{vM}</div>
                        <div className="matrix-diagram__circle -size-lg -position-d -red -active">{g1}</div>
                        <div className="matrix-diagram__circle -size-md -position-d2 -white -active">{gL}</div>
                        <div className="matrix-diagram__circle -size-sm -position-d1 -orange -active">{gM}</div>
                        <div className="matrix-diagram__circle -size-lg -position-e -yellow -active">{zk}</div>
                        <div className="matrix-diagram__circle -size-lg -position-f -white -active">{bL ? d1 : null}</div>
                        <div className="matrix-diagram__circle -size-md -position-s2 -white -active">{dL}</div>
                        <div className="matrix-diagram__circle -size-sm -position-s1 -white -active">{dM}</div>
                        <div className="matrix-diagram__circle -size-lg -position-g -white -active">{e1}</div>
                        <div className="matrix-diagram__circle -size-md -position-p2 -white -active">{eL}</div>
                        <div className="matrix-diagram__circle -size-sm -position-p1 -white -active">{eM}</div>
                        <div className="matrix-diagram__circle -size-lg -position-y -white -active">{j1}</div>
                        <div className="matrix-diagram__circle -size-md -position-s3 -white -active">{jL}</div>
                        <div className="matrix-diagram__circle -size-sm -position-s4 -white -active">{jM}</div>
                        <div className="matrix-diagram__circle -size-lg -position-k -white -active">{z1}</div>
                        <div className="matrix-diagram__circle -size-md -position-p4 -white -active">{zL}</div>
                        <div className="matrix-diagram__circle -size-sm -position-p3 -white -active">{zM}</div>
                        <div className="matrix-diagram__circle -size-sm -position-x -white -active">{kT}</div>
                        <div className="matrix-diagram__circle -size-sm -position-x1 -white -active">{nT}</div>
                        <div className="matrix-diagram__circle -size-sm -position-x2 -white -active">{oT}</div>
                        <div className="matrix-diagram__number -position-b8">{b2}</div>
                        <div className="matrix-diagram__number -position-b7">{b3}</div>
                        <div className="matrix-diagram__number -position-k2">{b4}</div>
                        <div className="matrix-diagram__number -position-k1">{b5}</div>
                        <div className="matrix-diagram__number -position-k4">{b6}</div>
                        <div className="matrix-diagram__number -position-k3">{b7}</div>
                        <div className="matrix-diagram__number -position-k5">{b8}</div>
                        <div className="matrix-diagram__number -position-k8">{e2}</div>
                        <div className="matrix-diagram__number -position-k7">{e3}</div>
                        <div className="matrix-diagram__number -position-k6">{e4}</div>
                        <div className="matrix-diagram__number -position-c4">{e5}</div>
                        <div className="matrix-diagram__number -position-c6">{e6}</div>
                        <div className="matrix-diagram__number -position-c5">{e7}</div>
                        <div className="matrix-diagram__number -position-c7">{e8}</div>
                        <div className="matrix-diagram__number -position-y3">{v2}</div>
                        <div className="matrix-diagram__number -position-y2">{v3}</div>
                        <div className="matrix-diagram__number -position-y4">{v4}</div>
                        <div className="matrix-diagram__number -position-y1">{v5}</div>
                        <div className="matrix-diagram__number -position-y6">{v6}</div>
                        <div className="matrix-diagram__number -position-y5">{v7}</div>
                        <div className="matrix-diagram__number -position-y7">{v8}</div>
                        <div className="matrix-diagram__number -position-d6">{j2}</div>
                        <div className="matrix-diagram__number -position-y8">{j3}</div>
                        <div className="matrix-diagram__number -position-d5">{j4}</div>
                        <div className="matrix-diagram__number -position-d4">{j5}</div>
                        <div className="matrix-diagram__number -position-d8">{j6}</div>
                        <div className="matrix-diagram__number -position-d7">{j7}</div>
                        <div className="matrix-diagram__number -position-d9">{j8}</div>
                        <div className="matrix-diagram__number -position-g3">{g2}</div>
                        <div className="matrix-diagram__number -position-g2">{g3}</div>
                        <div className="matrix-diagram__number -position-g4">{g4}</div>
                        <div className="matrix-diagram__number -position-g1">{g5}</div>
                        <div className="matrix-diagram__number -position-g7">{g6}</div>
                        <div className="matrix-diagram__number -position-g5">{g7}</div>
                        <div className="matrix-diagram__number -position-g6">{g8}</div>
                        <div className="matrix-diagram__number -position-t3">{z2}</div>
                        <div className="matrix-diagram__number -position-t2">{z3}</div>
                        <div className="matrix-diagram__number -position-t4">{z4}</div>
                        <div className="matrix-diagram__number -position-t1">{z5}</div>
                        <div className="matrix-diagram__number -position-t6">{z6}</div>
                        <div className="matrix-diagram__number -position-t5">{z7}</div>
                        <div className="matrix-diagram__number -position-t7">{z8}</div>
                        <div className="matrix-diagram__number -position-a5">{ bL ? a2 : null}</div>
                        <div className="matrix-diagram__number -position-a4">{ bL ? a3 : null}</div>
                        <div className="matrix-diagram__number -position-a6">{ bL ? a4 : null}</div>
                        <div className="matrix-diagram__number -position-f1">{ bL ? a5 : null}</div>
                        <div className="matrix-diagram__number -position-f3">{ bL ? a6 : null}</div>
                        <div className="matrix-diagram__number -position-f2">{ bL ? a7 : null}</div>
                        <div className="matrix-diagram__number -position-f4">{ bL ? a8 : null}</div>
                        <div className="matrix-diagram__number -position-f7">{ bL ? d2 : null}</div>
                        <div className="matrix-diagram__number -position-f6">{ bL ? d3 : null}</div>
                        <div className="matrix-diagram__number -position-f8">{ bL ? d4 : null}</div>
                        <div className="matrix-diagram__number -position-f5">{ bL ? d5 : null}</div>
                        <div className="matrix-diagram__number -position-b5">{ bL ? d6 : null}</div>
                        <div className="matrix-diagram__number -position-b4">{ bL ? d7 : null}</div>
                        <div className="matrix-diagram__number -position-b6">{ bL ? d8 : null}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" section-with-diagram__table-title ">Призначення</div>
        <div className="section-with-diagram__bottom-values-row row">
            <div className="col">
                <div className="diagram-values-item">
                    <div className="h6 diagram-values-item__title">Особисте</div>
                    <div className="diagram-values-item__description text-block">
                        <p>Створення відносин, народження дітей, формування необхідних якостей.</p>
                    </div>
                    <div className="small-diagram-values">
                        <div className="small-diagram-values__titles-block">
                            <div className="h6 small-diagram-values__title">Небо</div>
                            <div className="h6 small-diagram-values__title">Земля</div>
                        </div><div className="small-diagram-values__values-block">
                        <div className="small-diagram-values__path-img">
                            <Image height={48} width={38} src="/together-line.svg" alt="route"/>
                        </div>
                        <div className="small-diagram-values__value js-personal-calculation-item -top-left diagram-value -active">{sky}</div>
                        <div className="small-diagram-values__value js-personal-calculation-item -bottom-left diagram-value -active">{ground}</div>
                        <div className="small-diagram-values__value js-personal-calculation-item -center diagram-value -active">{sG}</div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="diagram-values-item">
                    <div className="h6 diagram-values-item__title">Соціальне</div>
                    <div className="diagram-values-item__description text-block">
                        <p>У чому моя користь для людей? Пошук справи до душі.</p>
                    </div>
                    <div className="small-diagram-values">
                        <div className="small-diagram-values__titles-block">
                            <div className="h6 small-diagram-values__title">Чол</div>
                            <div className="h6 small-diagram-values__title">Жін</div>
                        </div><div className="small-diagram-values__values-block">
                        <div className="small-diagram-values__path-img">
                            <Image height={48} width={38} src="/together-line.svg" alt="route"/>
                        </div>
                        <div className="small-diagram-values__value js-personal-calculation-item -top-left diagram-value -active">{man}</div>
                        <div className="small-diagram-values__value js-personal-calculation-item -bottom-left diagram-value -active">{woman}</div>
                        <div className="small-diagram-values__value js-personal-calculation-item -center diagram-value -active">{mW}</div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="diagram-values-item">
                    <div className="h6 diagram-values-item__title">Духовне:</div>
                    <div className="diagram-values-item__description text-block">
                        <p>Через що мій шлях до бога?<br/> Де бог у мені?</p>
                    </div>
                    <div className="small-diagram-values">
                        <div className="diagram-value js-personal-calculation-item -active">{spirit}</div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="diagram-values-item">
                    <div className="h6 diagram-values-item__title">Планетарне:</div>
                    <div className="diagram-values-item__description text-block">
                        <p>Чим я можу бути корисним для своєї планети?</p>
                    </div>
                    <div className="small-diagram-values">
                        <div className="diagram-value js-personal-calculation-item -active">{planetary}</div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="diagram-values-item">
                    <div className="h6 diagram-values-item__title">Родова сила:</div>
                    <div className="small-diagram-values">
                        <div className="diagram-value js-personal-calculation-item -active">{power}</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
