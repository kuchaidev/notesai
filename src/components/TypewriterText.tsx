"use client";
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypewriterText = (props: Props) => {
  return (
    <Typewriter
        options={{
            loop: true,
        }}
        onInit={(typewriter) => {
            typewriter.typeString("📈 Supercharged productivity.")
            // Pause in milliseconds
            .pauseFor(1000)
            .deleteAll()
            typewriter.typeString("📒 Intelligent organization.")
            .start();
        }}
    />
  )
}

export default TypewriterText