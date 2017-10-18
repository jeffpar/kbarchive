---
layout: page
title: "Q126017: Cannot Play Uncompressed Wave Sounds with Windows NT 3.5"
permalink: kb/126/Q126017/
---

## Q126017: Cannot Play Uncompressed Wave Sounds with Windows NT 3.5

	Article: Q126017
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0; :1994 edition,1995 edition; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Bookshelf for Windows versions 1994 edition, 1995 edition 
	- Microsoft Cinemania for Windows 1995 edition 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Musical Instruments for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The applications listed at the top of this article may generate the following
	messages during startup or while attempting to play certain sounds when you run
	the applications in the Windows NT version 3.5 environment:
	
	Encarta 1994 and 1995
	---------------------
	
	  The specified device is not open or is not recognized by MCI.
	  device: WaveAudio.
	
	Cinemania 1995
	--------------
	
	  Cinemania had problems playing the audio (wav) file. The specified device is
	  not open or is not recognized by MCI.
	
	Musical Instruments, Ancient Lands, Dinosaurs, and Dangerous Creatures
	----------------------------------------------------------------------
	
	  Unexpected error [mci602]. Cannot play sounds. Would you like to continue
	  using <program> without sound?
	
	Bookshelf 1994
	--------------
	
	  The specified device is not open or is not recognized by MCI. File:
	  X:\BOOKS\mm\<filename>.wav.
	
	RESOLUTION
	==========
	
	Check the registry for the following lines.
	
	The HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\WINDOWS NT\MCI line should be:
	
	  WaveAudio:REG_SZ:mciwave.drv
	
	The HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\WINDOWS NT\MCI32 line should be:
	
	  WaveAudio:REG_SZ:mciwave.dll
	
	Ensure that the following files are in the System32 directory:
	
	  Filename       Size      Date
	  -------------------------------
	
	  Mciwave.dll    24,704    9/4/94
	  Mciwave.drv    28,160    9/4/94
	
	Additional query words: multi media multimedia multi-media mmtitles winnt windowsnt
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbZNotKeyword kbBookshelfSearch kbEncartaEncycSearch kbCineManiaSearch kbAncientLands kbBookShelf1994 kbBookShelf1995 kbCinemania1995 kbDangerousCreatures kbDinosaurs100 kbMusicalInst kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac
	Version           : WINDOWS:1.0; :1994 edition,1995 edition; winnt:3.5
	
	=============================================================================
	
