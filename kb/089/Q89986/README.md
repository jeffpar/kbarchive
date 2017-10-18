---
layout: page
title: "Q89986: Windows Sound System Supports Audio Written for Windows 3.1"
permalink: kb/089/Q89986/
---

## Q89986: Windows Sound System Supports Audio Written for Windows 3.1

	Article: Q89986
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
	
	Windows Sound System supports Windows-based applications that have built-in
	sound and conform to the Windows 3.1 Software Development Kit (SDK).
	
	MORE INFORMATION
	================
	
	Windows Sound System supports Windows software that uses waveform (.WAV) and
	MIDI (.MID or .RMI) audio written for Windows 3.1 or Windows with Multimedia
	Extensions 1.0. Windows Sound System supports MS-DOS-based software written for
	Adlib or Sound Blaster cards only. Sound Blaster support requires configuration
	through Windows Control Panel or by running the GAMECNFG.EXE program that comes
	with Windows Sound System 2.0.
	
	Windows Sound System uses installable device drivers for wave-out, wave-in,
	MIDI-out, and auxiliary audio. Windows-based software can access all these types
	using standard Windows 3.1 audio API calls.
	
	The following restrictions apply to the wave-in and wave-out API support:
	
	- Simultaneous record and playback of audio is not possible with the current
	  driver (version 1.0).
	
	- Only mono/stereo playback is possible.
	
	- Only 16/8-bit linear PCM playback is possible without the use of the Audio
	  Compression Manager (ACM) module. (Mu-law and A-law are not supported in
	  version 1.0).
	
	- The following sampling rates are directly supported by the board. Other ones
	  can be achieved through the ACM module:
	
	     5510, 6620, 8000, 9600, 11025, 16000, 18900, 22050, 27420,
	     32000, 33075, 37800, 44100, 48000
	
	The following restrictions apply to the MIDI-out support:
	
	- Only 12 simultaneous voices (including drums) are supported.
	
	- The patches are General MIDI compliant.
	
	- Each voice is either entirely on the left, right, or both channels; there is
	  no fading.
	
	- The only MIDI messages used are:
	
	  Note on/off
	  Program change
	  Pitch bend
	  Balance
	  Volume level
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
