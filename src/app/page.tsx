"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative text-white py-4 px-6" style={{backgroundColor: '#1e242a'}}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L19 7L14.5 12.5L21 12L12 13L3 12L9.5 12.5L5 7L10.91 8.26L12 2Z"/>
            </svg>
            <h1 className="text-2xl font-bold">Papa Francisco</h1>
          </div>

          <nav className="hidden md:flex gap-4">
            <Button variant="outline" className="text-white border-gray-300 hover:bg-gray-700 hover:text-white bg-transparent">
              Inicio
            </Button>
            <Button variant="outline" className="text-white border-gray-300 hover:bg-gray-700 hover:text-white bg-transparent">
              Sobre Nosotros
            </Button>
            <Button variant="outline" className="text-white border-gray-300 hover:bg-gray-700 hover:text-white bg-transparent">
              Programas
            </Button>
            <Button variant="outline" className="text-white border-gray-300 hover:bg-gray-700 hover:text-white bg-transparent">
              Blog
            </Button>
            <Button variant="outline" className="text-white border-gray-300 hover:bg-gray-700 hover:text-white bg-transparent">
              Contacto
            </Button>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:flex text-white border-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
            >
              Iniciar Sesión
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden text-white border-gray-300 bg-transparent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-gray-600 z-50">
              <nav className="flex flex-col p-4 space-y-2">
                <Button variant="ghost" className="justify-start text-white hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Inicio
                </Button>
                <Button variant="ghost" className="justify-start text-white hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Sobre Nosotros
                </Button>
                <Button variant="ghost" className="justify-start text-white hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Programas
                </Button>
                <Button variant="ghost" className="justify-start text-white hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Button>
                <Button variant="ghost" className="justify-start text-white hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Contacto
                </Button>
                <Button variant="outline" className="mt-4 text-white border-gray-300 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Iniciar Sesión
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://ext.same-assets.com/2909063135/3968571097.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-white text-center max-w-sm mx-auto px-4 sm:text-left sm:mr-96 sm:max-w-md lg:max-w-lg">
            <h1 className="text-2xl sm:text-3xl text-white mb-4 font-bold">Grupo Scout "Papa Francisco"</h1>
            <p className="text-lg text-white leading-relaxed">
              Somos un movimiento de jóvenes y adultos comprometidos en forma libre y
              voluntaria con un modelo de educación no formal, complementario de la
              familia y la escuela, que procura el desarrollo integral y la educación
              permanente de los jóvenes estimulando su aprecio por el mundo natural y su
              compromiso con la integridad del medio ambiente.
              Así mismo, propiciamos
              que jóvenes y adultos compartan la tarea de crecimiento común en una
              relación que fomente el diálogo, la comprensión y la participación.
            </p>
          </div>
        </div>
      </section>

      <main>
        {/* Scout Programs Section */}
        <section id="ramas" className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Programas Scout</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* Castores */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-full h-32 mb-4 rounded-lg bg-cover bg-center"
                   style={{backgroundImage: 'url(https://ext.same-assets.com/2909063135/3275267180.png)'}}>
              </div>
              <h3 className="text-lg font-semibold mb-2">Castores</h3>
              <span className="text-base font-semibold uppercase text-green-600 p-0">6 a 7 años</span>
              <p className="text-black mb-4">
                Los más pequeños exploran y aprenden juntos de forma divertida.
              </p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Ver más</Button>
            </div>

            {/* Lobatos */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-full h-32 mb-4 rounded-lg bg-cover bg-center"
                   style={{backgroundImage: 'url(https://ext.same-assets.com/2909063135/527634784.png)'}}>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lobatos</h3>
              <span className="text-base font-semibold uppercase text-green-600 p-0">7 a 10 años</span>
              <p className="text-black mb-4">
                La aventura y la amistad son la base de sus actividades.
              </p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Ver más</Button>
            </div>

            {/* Scout */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-full h-32 mb-4 rounded-lg bg-cover bg-center"
                   style={{backgroundImage: 'url(https://ext.same-assets.com/2909063135/3530770626.png)'}}>
              </div>
              <h3 className="text-lg font-semibold mb-2">Scout</h3>
              <span className="text-base font-semibold uppercase text-green-600 p-0">10 a 13 años</span>
              <p className="text-black mb-4">
                Desarrollan habilidades y trabajan en equipo para cumplir sus objetivos.
              </p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Ver más</Button>
            </div>

            {/* Caminantes */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-full h-32 mb-4 rounded-lg bg-cover bg-center"
                   style={{backgroundImage: 'url(https://ext.same-assets.com/2909063135/1240114617.png)'}}>
              </div>
              <h3 className="text-lg font-semibold mb-2">Caminantes</h3>
              <span className="text-base font-semibold uppercase text-green-600 p-0">13 a 18 años</span>
              <p className="text-black mb-4">
                Exploran nuevos horizontes y se preparan para liderar.
              </p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Ver más</Button>
            </div>

            {/* Rovers - Single card in next row */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-full h-32 mb-4 rounded-lg bg-cover bg-center"
                   style={{backgroundImage: 'url(https://ext.same-assets.com/2909063135/599322143.png)'}}>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rovers</h3>
              <span className="text-base font-semibold uppercase text-green-600 p-0">18 a 99 años</span>
              <p className="text-black mb-4">
                Continúan su crecimiento personal y contribuyen a la comunidad.
              </p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Ver más</Button>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Calendario de Eventos</h2>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">‹</Button>
                <Button variant="outline" size="sm">›</Button>
                <Button variant="outline" size="sm">today</Button>
              </div>
              <h3 className="text-lg font-semibold">Jun 1 – 7, 2025</h3>
              <Button variant="outline" size="sm" className="bg-blue-500 text-white">list</Button>
            </div>
            <div className="text-center py-16 text-gray-500">
              No events to display
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4 text-center">Últimas Noticias</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out mb-6 flex flex-col items-stretch">
              <img
                src="https://ext.same-assets.com/2909063135/1317827047.jpeg"
                alt="Distrital Gral. Alvear 2024"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">Distrital Gral.Alvear 2024</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                Este fin de semana participamos del distrital que se realizó en la ciudad de Gral. Alvear. Dos días ...
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600">Leer más</Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-center mb-8">¿Cómo nos puedes contactar?</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 space-y-4">
              <p className="text-lg font-semibold mb-1">Grupo Papa 1279 Francisco</p>
              <p className="text-sm italic text-gray-600 mb-2">• Sábados de 14:30 a 17:30hs</p>
              <div className="flex items-center mb-4">
                <img
                  src="https://ext.same-assets.com/2909063135/539861662.svg"
                  alt="Location icon"
                  width="24"
                  height="24"
                  className="mr-2"
                />
                <p className="text-sm italic text-gray-600">• La Chacra</p>
              </div>

              <p className="text-sm italic text-gray-600 mb-2">Via Instagram:</p>
              <Button
                className="bg-sky-600 hover:bg-sky-700 w-full sm:w-auto"
                onClick={() => window.open('https://www.instagram.com/gruposcoutpapafrancisco_/', '_blank')}
              >
                Instagram
              </Button>

              <div>
                <p className="text-sm italic text-gray-600 mb-2">Via Email:</p>
                <Button
                  className="bg-sky-600 hover:bg-sky-700 w-full sm:w-auto"
                  onClick={() => window.open('mailto:gruposcoutpapafrancisco@gmail.com', '_blank')}
                >
                  Envianos un Correo
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.8234567890123!2d-59.45393!3d-35.35233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIxJzA4LjQiUyA1OcKwMjcnMTQuMSJX!5e0!3m2!1sen!2sar!4v1234567890123!5m2!1sen!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Grupo Scout Papa Francisco"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-4">
          <p className="text-sm text-center sm:text-left">© 2023-2024 Grupo Scout Papa Francisco</p>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/groups/537312063036892/" className="hover:text-gray-400 transition-colors">
              Facebook
            </a>
            <a href="https://www.instagram.com/gruposcoutpapafrancisco_/" className="hover:text-gray-400 transition-colors">
              Instagram
            </a>
            <a href="mailto:gruposcoutpapafrancisco@gmail.com" className="hover:text-gray-400 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
