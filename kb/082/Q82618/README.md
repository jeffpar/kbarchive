---
layout: page
title: "Q82618: No Sound When Playing MIDI Files in Midisoft Studio"
permalink: /kb/082/Q82618/
---

## Q82618: No Sound When Playing MIDI Files in Midisoft Studio

	Article: Q82618
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you play MIDI files from Midisoft Studio for Windows version 3.0 and run the
	files from Microsoft Windows operating system version 3.1, there may be no
	output or a faint crackling sound when playing sample MIDI files using the
	Windows MIDI Driver.
	
	This problem occurs because Midisoft Studio only uses the first MIDI device
	listed in the SYSTEM.INI file and does not look at the settings in the MIDI
	Mapper. To correct this problem, do the following:
	
	1. Edit SYSTEM.INI with an ASCII text editor.
	
	2. In the [drivers] section look for the "MIDI=" and "MIDI1=" lines. Edit these
	  lines so that what was listed after MIDI= is replaced by what was listed
	  after MIDI1= and vice versa.
	
	  For example:
	
	  Before
	
	     [drivers]
	     MIDI=msadlib.drv
	     MIDI1=sndblst2.drv
	
	  After
	
	     [drivers]
	     MIDI=sndblst2.drv
	     MIDI1=msadlib.drv
	
	3. Save your changes and restart Windows.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 3.11 3.1 adlib soundblaster roland 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
