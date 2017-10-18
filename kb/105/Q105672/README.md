---
layout: page
title: "Q105672: Explanation of Numbers in Device Settings in MPLAYER.INI"
permalink: kb/105/Q105672/
---

## Q105672: Explanation of Numbers in Device Settings in MPLAYER.INI

	Article: Q105672
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Media Player for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the Device settings in the MPLAYER.INI file (the
	initialization file for Media Player for Windows).
	
	MORE INFORMATION
	================
	
	The [Devices] section of your MPLAYER.INI file can include the following
	entries:
	
	  CDAudio=17, CD Audio
	  Sequencer=22, MIDI Sequencer
	  WaveAudio=22, Sound
	  Mixer=0, Media Vision Multimedia Mixer
	  AVIVideo=22, Video for Windows
	  MMMovie=22, Microsoft Multimedia Movie Player
	
	The numbers that follow each equals sign indicate whether the device is simple or
	compound, and whether or not it is present.
	
	  17 = simple device
	  22 = compound device
	   0 = device not present
	
	Simple devices do not need additional elements (such as a filename) for playback.
	Compound devices require a filename (such as the name of a waveform [.WAV] file)
	for playback.
	
	NOTE: Informal testing has found that you may need to set the CD Audio line to 21
	to be able to use Media Player to play CD tracks and display CD track
	information.
	
	Additional query words: multi media multimedia multi-media wave kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMediaPlayerSearch kbWinMediaPlayer95
	Version           : :
	
	=============================================================================
	
