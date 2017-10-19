---
layout: page
title: "Q132297: Bookshelf 95: Problems Playing South African Anthem"
permalink: /kb/132/Q132297/
---

## Q132297: Bookshelf 95: Problems Playing South African Anthem

	Article: Q132297
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1995 edition; WINDOWS:3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1995 edition 
	- the operating system: Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to play the South African National Anthem from Microsoft
	Bookshelf 1995 Atlas, one of the following occurs:
	
	- You may receive the following error message from the MIDI Sequencer:
	
	  This file may not play correctly with the default MIDI setup. Don't display
	  this warning in the future.
	
	  NOTE: No speaker will be visible on the opening Southern Africa screen. Move
	  the cursor (arrow) until it resembles a small hand and click South Africa
	  located towards the bottom of the map. The speaker will appear in the next
	  screen.
	
	  -or-
	
	- The South African anthem does not play.
	
	RESOLUTION
	==========
	
	To eliminate the MIDI Sequencer error, make sure the Don't Display This Warning
	In The Future box is checked. This adds the following lines to the System.ini
	file:
	
	     [mciseq.drv]
	     DisableWarning=TRUE
	
	This problem does not occur with the 32-bit version of Microsoft Bookshelf '95
	for Windows 95.
	
	MORE INFORMATION
	================
	
	The MIDI Sequencer warning message indicates that the file has not been flagged
	as General MIDI. The MIDI Sequencer driver supplied with Microsoft Windows 3.x
	(MCISEQ.DRV) reads the header of all MIDI files before attempting to play them.
	If there is no flag indicating that the file is in General MIDI format, the
	above warning message displays.
	
	Additional query words: 1.0 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeMMsearch kbZNotKeyword6 kbBookshelfSearch kbBookShelf1995 kbOSWin310 kbOSWin311 kbOSWin300 kbOSWin300a
	Version           : :1995 edition; WINDOWS:3.x
	
	=============================================================================
	
