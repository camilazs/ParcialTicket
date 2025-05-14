"use client";
import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import React from "react";

interface BoardingPassProps {
  departure: {
    code: string;
    city: string;
    time: string;
  };
  arrival: {
    code: string;
    city: string;
    time: string;
  };
  date: string;
  passenger: string;
  flight: string;
  bookingRef: string;
  boarding: string;
  gate: string;
  boardingTime: string;
  seat: string;
}

export default function BoardingPass({
  departure,
  arrival,
  date,
  passenger,
  flight,
  bookingRef,
  boarding,
  gate,
  boardingTime,
  seat,
}: BoardingPassProps) {
  const qrRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (qrRef.current) {
      QRCode.toCanvas(
        qrRef.current,
        `Flight: ${flight}, Passenger: ${passenger}, Seat: ${seat}`,
        {
          width: 100,
          margin: 0,
          color: {
            dark: "#000000",
            light: "#FFFFFF",
          },
        }
      );
    }
  }, [flight, passenger, seat]);

  return (
    <div className="boarding-pass relative">
      {/* Franja roja lateral */}
      <div className="bp-red-stripe"></div>

      {/* Sección superior */}
      <div className="bp-top">
        <div className="bp-flight-info flex justify-between">
          <div>
            <div className="text-sm font-bold">{departure.code}</div>
            <div className="text-xs text-gray-500">{departure.city}</div>
            <div className="mt-1 text-sm font-bold">{departure.time}</div>
          </div>

          {/* Ícono de avión inline */}
          <div className="flex items-center">
            <svg
              className="h-4 w-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2.5 19l19-7-19-7v7l12 0-12 0z" />
            </svg>
          </div>

          <div className="text-right">
            <div className="text-sm font-bold">{arrival.code}</div>
            <div className="text-xs text-gray-500">{arrival.city}</div>
            <div className="mt-1 text-sm font-bold">{arrival.time}</div>
          </div>
        </div>
        <div className="bp-date">{date}</div>
      </div>

      {/* Divider con línea punteada y círculos recortados */}
      <div className="bp-divider relative flex items-center justify-center">
        <div className="bp-divider-line"></div>
        <div className="bp-divider-dot-left"></div>
        <div className="bp-divider-dot-right"></div>
      </div>

      {/* Sección inferior */}
      <div className="bp-bottom">
        {/* Información del pasajero y QR */}
        <div className="bp-passenger-info flex justify-between mb-4">
          <div>
            <div className="bp-passenger-label text-xs text-gray-500">
              NAME
            </div>
            <div className="bp-passenger-value text-sm font-bold">
              {passenger}
            </div>
          </div>
          <div>
            <canvas ref={qrRef} className="h-[100px] w-[100px]"></canvas>
          </div>
        </div>

        {/* Detalles de vuelo */}
        <div className="bp-detail-row flex justify-between mb-4">
          <div>
            <div className="bp-detail-label text-xs text-gray-500">
              FLIGHT
            </div>
            <div className="bp-detail-value text-sm font-bold">{flight}</div>
          </div>
          <div>
            <div className="bp-detail-label text-xs text-gray-500">
              BOOKING REF
            </div>
            <div className="bp-detail-value text-sm font-bold">
              {bookingRef}
            </div>
          </div>
        </div>

        {/* Detalles de boarding */}
        <div className="bp-detail-row flex justify-between mb-4">
          <div>
            <div className="bp-detail-label text-xs text-gray-500">
              BOARDING
            </div>
            <div className="bp-detail-value text-sm font-bold">{boarding}</div>
          </div>
          <div>
            <div className="bp-detail-label text-xs text-gray-500">GATE</div>
            <div className="bp-detail-value text-sm font-bold">{gate}</div>
          </div>
          <div>
            <div className="bp-detail-label text-xs text-gray-500">
              TIME
            </div>
            <div className="bp-detail-value text-sm font-bold">
              {boardingTime}
            </div>
          </div>
        </div>

        {/* Asiento y Website */}
        <div className="bp-seat-website flex items-end justify-between">
          <div className="flex items-center">
            <div className="mr-1 h-5 w-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="black"
                />
                <path d="M12 17L17 12H14V7H10V12H7L12 17Z" fill="black" />
              </svg>
            </div>
            <div className="text-xs">www.gabair.ng</div>
          </div>
          <div className="bp-seat-container flex flex-col items-center border border-gray-300 p-2">
            <div className="bp-seat-label text-xs text-gray-500">SEAT</div>
            <div className="bp-seat-value text-lg font-bold">{seat}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
