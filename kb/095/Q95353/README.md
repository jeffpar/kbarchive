---
layout: page
title: "Q95353: No Sounds with PC-Speaker Driver"
permalink: /kb/095/Q95353/
---

## Q95353: No Sounds with PC-Speaker Driver

{% raw %}

	Article: Q95353
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0 2.0 1991 1992 1993 1994
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions, versions 1992, 1994 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Complete Baseball for Windows, 1994 edition (see below) 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft Multimedia Beethoven for Windows, versions 1.0, 1.0a 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Wine Guide for Windows, versions 1.0, 2.0 
	- Microsoft SoundBits, Hanna-Barbera 
	- Microsoft SoundBits, MGM Movies 
	- Microsoft SoundBits, Musical Instruments 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sounds in some multimedia applications do not play if the PC-Speaker driver
	SPEAKER.DRV is the only sound driver installed on your system.
	
	MORE INFORMATION
	================
	
	The PC-Speaker driver has some limitations. The sound events work correctly and
	Sound Recorder plays the waveform (.WAV) files; however, Media Browser cannot
	play the same .WAV files using the PC-Speaker driver. Media Browser uses Media
	Control Interface (MCI) command strings to play the .WAV files, whereas Sound
	Recorder uses the low-level Windows APIs (waveInOpen, waveOutOpen,
	waveInGetPosition, and so on). The PC-Speaker driver cannot respond to MCI
	commands.
	
	Additional query words: 2.00 sound bits windows 3.10 extensions sound drivers windows Hanna-Barbera classic hollywood movies mgm Sound Bits musical instruments world kbmm dinos
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbBookshelfSearch kbSoundBitsSearch kbBaseballSearch kbEncartaEncycSearch kbCineManiaSearch kbAncientLands kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbMMBeethoven100 kbMMBeethoven100a kbCompleteBaseball1994 kbDinosaurs100 kbMusicalInst kbSoundBits kbWine100 kbWine200 kbArtGallery kbEncartaEnCyc1994
	Version           : 1.0 2.0 1991 1992 1993 1994
	
	=============================================================================
	

{% endraw %}
