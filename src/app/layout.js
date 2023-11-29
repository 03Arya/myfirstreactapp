import "./globals.css"

export default function Rootlayout({ children }) {
  return (
    <html lang="da">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Forside</a>
              </li>
              <li>
                <a href="/settings">Indstillinger</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}