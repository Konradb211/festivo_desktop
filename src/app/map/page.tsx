"use client"

import {
	MapContainer,
	TileLayer,
	ImageOverlay,
	Marker,
	Popup,
} from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import Title from "../components/Title/Title"

const bounds: L.LatLngBoundsExpression = [
	[51.47818, 18.3495],
	[51.475, 18.3545],
]

const customIcon = (url: string) =>
	L.icon({
		iconUrl: url,
		iconSize: [40, 40],
		iconAnchor: [20, 40],
	})

export default function MapPage() {
	return (
		<div className='bg-gradient-to-b from-yellow-50 to-white'>
			<div className='wrapper pb-20'>
				<div className='h-20' />
				<Title />
				<div className='mt-8 h-[60vh] w-full rounded-lg overflow-hidden border-2 border-slate-200 shadow'>
					<MapContainer
						center={[51.4766, 18.35182119589565]}
						zoom={17}
						minZoom={17}
						maxZoom={20}
						scrollWheelZoom={true}
						style={{ height: "100%", width: "100%", borderRadius: 5 }}>
						<TileLayer
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
						/>

						<ImageOverlay
							url='/render-mapy.png'
							bounds={bounds}
							zIndex={1000}
						/>

						<Marker
							position={[51.47678, 18.35114]}
							icon={customIcon("/icons/stage1_pin.png")}>
							<Popup>Scena BLUE</Popup>
						</Marker>

						<Marker
							position={[51.4766, 18.35256]}
							icon={customIcon("/icons/stage2_pin.png")}>
							<Popup>Scena GREEN</Popup>
						</Marker>

						<Marker
							position={[51.4777, 18.35203]}
							icon={customIcon("/icons/stage3_pin.png")}>
							<Popup>Scena RED</Popup>
						</Marker>

						<Marker
							position={[51.47754, 18.35256]}
							icon={customIcon("/icons/stage_power.png")}>
							<Popup>Scena POWER</Popup>
						</Marker>

						<Marker
							position={[51.4772, 18.350999]}
							icon={customIcon("/icons/tent_pin.png")}>
							<Popup>Strefa namiotowa</Popup>
						</Marker>

						<Marker
							position={[51.47715, 18.35219]}
							icon={customIcon("/icons/sprite_pin.png")}>
							<Popup>Sprite Zone</Popup>
						</Marker>

						<Marker
							position={[51.47725, 18.3536]}
							icon={customIcon("/icons/WC_pin.png")}>
							<Popup>Łazienki</Popup>
						</Marker>

						<Marker
							position={[51.47606, 18.35123]}
							icon={customIcon("/icons/pin_gate_entry.png")}>
							<Popup>Bramki Festiwalu</Popup>
						</Marker>
						<div className='absolute bottom-4 left-4 bg-white/90 rounded-lg shadow px-4 py-3 text-sm text-slate-700 space-y-1 backdrop-blur z-999'>
							<div className='flex items-center gap-2'>
								<img src='/icons/stage1_pin.png' className='w-7 h-7' />
								<span>Scena BLUE</span>
							</div>
							<div className='flex items-center gap-2'>
								<img src='/icons/stage2_pin.png' className='w-7 h-7' />
								<span>Scena GREEN</span>
							</div>
							<div className='flex items-center gap-2'>
								<img src='/icons/stage3_pin.png' className='w-7 h-7' />
								<span>Scena RED</span>
							</div>
							<div className='flex items-center gap-2'>
								<img src='/icons/stage_power.png' className='w-7 h-7' />
								<span>Scena POWER</span>
							</div>
							<div className='flex items-center gap-2'>
								<img src='/icons/tent_pin.png' className='w-7 h-7' />
								<span>Strefa namiotowa</span>
							</div>
						</div>
					</MapContainer>
				</div>
			</div>
		</div>
	)
}
