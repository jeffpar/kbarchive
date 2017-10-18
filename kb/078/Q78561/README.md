---
layout: page
title: "Q78561: Incorrect Settings in SYSTEM.INI for Sound Blaster Pro"
permalink: kb/078/Q78561/
---

## Q78561: Incorrect Settings in SYSTEM.INI for Sound Blaster Pro

	Article: Q78561
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Beethoven for Windows, versions 1.0, 1.0A 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Musical Instruments for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Early version of the Creative Labs' Multimedia Extensions to Windows Setup
	program does not add certain entries to the SYSTEM.INI, which are necessary for
	the Sound Blaster Pro audio card to work properly. Because of this error,
	Bookshelf for Windows may not play MIDI audio files correctly.
	
	MORE INFORMATION
	================
	
	To correct the problem, add the following lines to the SYSTEM.INI. The
	individual parameters will be dependent upon the actual settings on the board.
	The factory default settings are listed below:
	
	  [SoundBlaster]
	  port=220
	  int=7
	  dma=1
	
	Additional query words: Viewer 1.0 2.0 2.00kbmm Sound Tbook MediaView VB C run
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbZNotKeyword kbBookshelfSearch kbEncartaEncycSearch kbMMSchubert kbMMStravinsky kbMMMozart100 kbMMBeethoven100 kbMMBeethoven100a kbMusicalInst kbEncartaEnCyc1994
	
	=============================================================================
	
