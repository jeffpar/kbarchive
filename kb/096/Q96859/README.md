---
layout: page
title: "Q96859: CD Audio Does Not Play Through Sound System Speakers"
permalink: /kb/096/Q96859/
---

## Q96859: CD Audio Does Not Play Through Sound System Speakers

	Article: Q96859
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Audio signals from a CD-ROM drive emulating a CD player (through Music Box or
	Media Player) cannot play through a headphone or set of speakers attached to the
	Microsoft Windows Sound System card unless an external connection is made
	between the headphone jack of the CD-ROM drive and the line-in jack on the
	Windows Sound System card. Waveform (.WAV) and MIDI (.MID, .RMI) files that are
	opened from a CD-ROM by an application such as Sound Finder or Quick Recorder
	will play without this connection.
	
	Page 180 of the "Windows Sound System User's Guide" provides an illustration of
	how this connection should be made.
	
	MORE INFORMATION
	================
	
	When Quick Recorder, Sound Finder, or Sound Recorder play a sound file from a
	CD-ROM, the data describing that sound is loaded into memory from the CD-ROM
	drive through the data ribbon cable and CD controller. This data is ultimately
	transferred to the Windows Sound System through the computer's data bus. The
	Sound System then plays the sound.
	
	When Music Box and Media Player play an audio CD, the audio signal is produced in
	the CD-ROM were it is made ready as analog output at the CD-ROM's headphone
	connector or as digital output on a digital connector if available. No data is
	sent to the data bus or to the Sound System directly.
	
	If a patch cord with a 1/8-inch male stereo mini-plug at each end is used to
	connect the headphone jack of the CD-ROM drive to the line-in jack on the
	Windows Sound System card, the audio will play through the Sound System speakers
	or headphones.
	
	Some audio cards can act as CD-ROM controllers. These cards usually have an
	internal attachment to control digital input from a CD-ROM. The Windows Sound
	System card does not function as a CD-ROM controller and does not have this
	connector; it requires the external connection.
	
	Reference(s):
	
	"Windows Sound System User's Guide," page 180
	
	Additional query words: 1.00 1.00a 2.00 port multimedia line in out 1/8
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
