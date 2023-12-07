"use client"

import Pokemon from  "@/components/pokemon"


export default function Home() {
  return (
    <main>
      <h1>Hej Verden</h1>
      <Pokemon name="Pikachu" type="lightning"/>
      <Pokemon name="Snorlax" type="normal"/>
      <Pokemon name="Raichu" type="extra mega lightning"/>
      <Pokemon name="Squirtle" type="water"/>
    </main>
  )
}