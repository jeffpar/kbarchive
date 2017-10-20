---
layout: page
title: "Q75632: Anatomy of the Sound Blaster"
permalink: /kb/075/Q75632/
---

## Q75632: Anatomy of the Sound Blaster

{% raw %}

	Article: Q75632
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbmm
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article is a brief overview of the Sound Blaster card hardware and how it
	works with the Multimedia Extensions to Microsoft Windows.
	
	MORE INFORMATION
	================
	
	The following is a list of features that the Sound Blaster card offers.
	Differences between the version 1.0 and version 1.5 boards are noted where
	appropriate. Differences between the versions 1.x and version 2.0 digital signal
	processors (DSPs) are also noted.
	
	1. 12-Voice Stereo C/MS Music
	
	  C/MS stands for creative music synthesizer. C/MS is a low-end synthesizer
	  that is compatible with the Game Blaster. As the name implies, it synthesizes
	  music by taking a basic waveform and manipulating it (note that this is a
	  generalization).
	
	  This particular synthesizer uses a technique called square wave synthesis. It
	  is similar to a synthesizer found in an inexpensive toy; but the Sound
	  Blaster does not have a keyboard attached. Instead using of keys, notes are
	  turned on and off by writing commands to hardware registers on the Sound
	  Blaster board.
	
	  When C/MS is marketed as having 12 voices, reference is being made to the
	  number of different sounds the C/MS synthesizer can play at the same time
	  (commonly referred to as "polyphony").
	
	  The Sound Blaster uses two C/MS chips, each with six voices. In this way, the
	  first chip can be assigned to the left channel and the second chip can be
	  assigned to the right channel. Thus, the Sound Blaster can produce stereo
	  sound.
	
	  The version 1.0 Sound Blaster board was shipped with the C/MS chip set
	  installed. However, Creative Labs removed the chips from the version 1.5
	  board and sells the C/MS chips separately. The version 1.0 box sells the
	  Sound Blaster as the "24-Voice All-in-One Sound Card." The version 1.5 box
	  shortened this to "The All-in-One Sound Card" because they removed 12 of the
	  "voices."
	
	  To determine if the C/MS chips are in place, run TEST-SBC.EXE. If the chips
	  are present, the features list will list them. The Multimedia Extensions to
	  Windows currently does not use the C/MS feature.
	
	2. 11-Voice FM Music (AdLib Compatible)
	
	  FM stands for frequency modulation, which is how the sound is produced. The
	  Sound Blaster has 11 FM-voices (11 notes polyphony), and unlike FM-stereo
	  radio, the sound is mono only. FM-synthesis produces slightly better sounds
	  than square wave synthesis, which is what the C/MS chip set does.
	
	  The Sound Blaster's FM synthesizer is "AdLib" compatible. AdLib is the brand
	  name of an FM synthesizer chip set; many different companies (including
	  Creative Labs) clone these chips. The AdLib driver in Multimedia Windows will
	  work with any AdLib-compatible synthesizer, which, of course, includes the
	  Sound Blaster.
	
	3. 1 Digitized Voice Channel
	
	  This can be called many things: sampled sound, digitized sound, and so forth.
	  The Sound Blaster refers to it as a digitized voice, which is not the same as
	  the voices mentioned above. The Multimedia Extensions to Windows calls this
	  digitized sound output "waveform output," which is confusing because all
	  sound is comprised of waves! Digital enthusiasts call this pulse code
	  modulation (PCM), which is actually a more accurate title.
	
	  Digitized sound is real sound (human voice, music, effects, and so forth) that
	  is sampled and digitized with a digital-to-analog converter (DAC). This is
	  the same type of data stored on audio compact discs (CDs); however, CDs have
	  a much greater resolution both in sample rate (44.1 KHz) and sample word size
	  (12 to 16 bits).
	
	  PCM is a simple technique of encoding analog audio in a digital format, where
	  the waveform amplitude is sampled periodically (at the sampling frequency)
	  and stored as a number. The term "8 bit" means that the stored number can
	  have one of 256 discrete values; 12 bit has 4096 discrete values; and 16 bit
	  has 65535.
	
	  The Sound Blaster has one mono 8-bit DAC that can be set to a sample rate
	  between ~4 KHz and ~23 KHz. This does not produce very high quality but it
	  can be fun none the less. Incidentally, this is where that 24th voice of the
	  version 1.0 card came from: 12 C/MS + 11 FM + 1 DAC = 24.
	
	  The Multimedia Extensions require a minimum of 11 KHz and 22 KHz 8-bit wave
	  output, which the Sound Blaster can do.
	
	  Another interesting thing about the Sound Blaster is that it supports three
	  different adaptive differential pulse code modulation (ADPCM) decompression
	  ratios (as well as no compression) in hardware. Below is a list of these
	  ratios:
	
	   - 2 to 1 data compression: 4 bit ADPCM
	
	   - 3 to 1 data compression: 2.6 bit ADPCM
	
	   - 4 to 1 data compression: 2 bit ADPCM
	
	  This may be the only justification for Creative Labs's use of the term digital
	  signal processor (DSP) for its programmable logic array (PLA). Keep in mind
	  that the greater the ratio, the greater the degradation in sample quality.
	
	  The Multimedia Extensions to Windows does not make use of ADPCM at this time.
	  Also note that Multimedia Windows uses the direct memory access (DMA) mode of
	  the Sound Blaster for recording and playing digitized sound.
	
	  If a board with the versions 1.x DSP is installed and Multimedia Windows is
	  running in enhanced mode, a periodic click is audible when playing a wave
	  file. This is caused by interrupt latency, meaning that interrupts are not
	  serviced immediately. This causes the Sound Blaster to click because the
	  versions 1.x DSP produce an interrupt when the current DMA buffer is
	  exhausted. The click is the time it takes for the interrupt to be serviced by
	  the Sound Blaster driver (which is delayed by the 386 enhanced mode of
	  Windows).
	
	  The click is still present in standard mode, although it is much less
	  pronounced because the interrupt latency is less. The click is more
	  pronounced for pure tones.
	
	  The version 2.0 DSP solves this problem by using the auto- initialize mode of
	  the DMA controller (the 8237). In this mode, the DMA controller automatically
	  reloads the start address and count registers with the original values. In
	  this way, the Sound Blaster driver can allocate a 4K DMA buffer; using the
	  lower 2K as the "ping" buffer and the upper 2K as the "pong" buffer.
	
	  While the DMA controller is processing the contents of the ping buffer, the
	  driver can update the pong; and vice versa. Therefore, when the DMA
	  controller auto-initializes, it will already have valid data available. This
	  removes the click from the output sound.
	
	  However, the 386 enhanced mode of Windows 3.0 does not support the
	  auto-initialize mode of the DMA controller. Therefore, Multimedia Windows
	  provides a virtual device driver (VxD) called VADMAD.386 (virtual
	  auto-initialize DMA device) that attaches itself to the virtual DMA device
	  (VDMAD). Its purpose, as the name implies, is to support the auto-initialize
	  mode of the DMA controller. However, VADMAD.386 does not fully support this
	  mode -- it was designed only to correct the problem with the Sound Blaster.
	  Because Windows 3.1 supports auto-initialize DMA, do not use VADMAD with
	  Windows 3.1.
	
	4. Voice Input (Digital Sampling) Capability
	
	  This is more commonly referred to as a digitizer. The Sound Blaster supports
	  an 8-bit analog-to-digital converter (ADC) with a variable sampling rate of
	  ~4 KHz to ~12 KHz. The Multimedia Extensions to Windows requires a minimum
	  sampling rate of 11 KHz. This provides sound quality approximately equal to
	  that of normal voice phone lines.
	
	  The Sound Blaster has a built-in microphone jack and amplifier with auto-gain
	  control (AGC) for direct input (sampling) of sound. The microphone used
	  should be ~600 ohms; AGC range 10 mV to 100 mV. This translates to "an
	  inexpensive, low-end microphone."
	
	5. Built-In Stereo Power Amplifier
	
	  The Sound Blaster has a built-in amplifier that provides a maximum output of
	  4 watts per channel into a 4 ohm load. This is enough to drive an inexpensive
	  set of headphones or some "Walkman" style speakers.
	
	  And although the output is "stereo," the ONLY thing that is truly stereo on
	  the Sound Blaster is the C/MS chip set (which Multimedia Windows does not
	  use). All of those neat sounds played in Multimedia Windows are mono.
	
	6. Built-in Game I/O Port
	
	  This is a standard 15-pin D-Sub PC analog joystick adapter port. The Sound
	  Blaster allows two joysticks to be connected through this port with the aid
	  of a Y-cable (sold separately). The Multimedia Extensions to Windows can be
	  configured to use this as two normal two-dimensional joysticks or one
	  three-dimensional joystick.
	
	  The only confusing part is Creative Lab's use of "I/O" for this joystick port.
	  Joysticks are input devices only. The only output that this port provides is
	  for MIDI (see part 7 below); this must be what Creative Labs was referring
	  to.
	
	7. Built-in MIDI Interface
	
	  MIDI stands for musical instrument digital interface. Simply put, this is a
	  protocol for connecting intelligent musical instruments and computers for the
	  purpose of controlling the instruments in real time.
	
	  To use the MIDI interface on the Sound Blaster, the MIDI connector box is
	  required (sold separately). It plugs into the joystick port and has a
	  pass-through for the joystick (so the joystick remains available). The MIDI
	  connector box gives one MIDI-in and five MIDI-out connectors.
	
	  With the version 1.x DSP, the MIDI port can be used only in half-duplex mode
	  (one direction at a time). The version 2.0 DSP allows full-duplex operation,
	  which allows playing and recording simultaneously (with the option of other
	  accompanying instruments).
	
	  The MCI-sequencer in Multimedia Windows allows use of the MIDI port or the
	  AdLib (FM) synthesizer to play MIDI data. An external synthesizer will
	  probably sound much better than the AdLib synthesizer and is therefore
	  recommended.
	
	Additional query words: 3.00 soundblaster
	
	======================================================================
	Keywords          : kbmm 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
