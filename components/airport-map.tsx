'use client'

import { useEffect } from 'react'

export function AirportMap() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Dynamically import Leaflet
      import('leaflet').then((L) => {
        // Airport coordinates (updated to match actual addresses)
        const serCoords = [38.9590, -85.9001] // Freeman Municipal Airport, 1025 A Ave, Seymour, IN
        const ovoCoords = [39.0028, -85.6172] // North Vernon Muni Airport-Ovo, 645 E County Rd 450 N
        const bfrCoords = [38.8397, -86.4456] // Virgil I. Grissom Municipal, 3213 Tunnelton Rd, Bedford, IN
        
        // Center map on Indiana
        const centerCoords = [38.9, -86.0]
        
        // Create map
        const map = L.map('airport-map').setView(centerCoords, 10)
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map)
        
        // Create popup content function
        function createPopupContent(name: string, code: string, location: string, address: string) {
          const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`
          return `
            <div style="text-align: center; font-family: inherit;">
              <h3 style="margin: 0 0 8px 0; color: #D2042D; font-weight: bold;">${name}</h3>
              <p style="margin: 4px 0; font-weight: bold;">${code}</p>
              <p style="margin: 4px 0; color: #666;">${location}</p>
              <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" style="color: #D2042D; text-decoration: none; font-weight: bold;">Get Directions</a>
            </div>
          `
        }
        
        // Add markers with popups
        L.marker(serCoords).addTo(map)
          .bindPopup(createPopupContent('Freeman Municipal Airport', 'SER', 'Seymour, IN', '1025 A Ave, Seymour, IN 47274'))
          
        L.marker(ovoCoords).addTo(map)
          .bindPopup(createPopupContent('North Vernon Muni Airport-Ovo', 'OVO', 'North Vernon, IN', '645 E County Rd 450 N, North Vernon, IN 47265'))
          
        L.marker(bfrCoords).addTo(map)
          .bindPopup(createPopupContent('Virgil I. Grissom Municipal Airport', 'BFR', 'Bedford, IN', '3213 Tunnelton Rd, Bedford, IN 47421'))
        
        // Locate user function
        function locateUser() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              const userLat = position.coords.latitude
              const userLng = position.coords.longitude
              map.setView([userLat, userLng], 12)
              L.marker([userLat, userLng])
                .addTo(map)
                .bindPopup('You are here!')
                .openPopup()
            })
          }
        }
        
        // Add geolocation control
        const locateControl = L.control({position: 'topleft'})
        locateControl.onAdd = function (map) {
          const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom')
          div.innerHTML = '<a href="#" title="Locate Me" role="button" aria-label="Locate Me" style="font-size: 1.2em; line-height: 1.2; text-align: center; display: block; width: 30px; height: 30px;">📍</a>'
          div.onclick = function(e){
            e.stopPropagation()
            locateUser()
          }
          return div
        }
        locateControl.addTo(map)
        
        // Cleanup function
        return () => {
          map.remove()
        }
      })
    }
  }, [])

  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <div id="airport-map" className="w-full h-full"></div>
    </>
  )
}
