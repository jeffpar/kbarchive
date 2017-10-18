---
layout: page
title: "Q117815: Mac Cinemania 94: Sounds Do Not Play with Insufficient Memory"
permalink: kb/117/Q117815/
---

## Q117815: Mac Cinemania 94: Sounds Do Not Play with Insufficient Memory

	Article: Q117815
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for the Macintosh 1994 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have 50 kilobytes or less of system memory available, audio playback may
	fail in Cinemania.
	
	This problem occurs because the WAVE library cannot allocate a sound channel if
	there is not sufficient memory available.
	
	RESOLUTION
	==========
	
	To correct this problem, do the following:
	
	1. Exit from Cinemania.
	
	2. From the Apple menu at the left end of the menu bar, choose About This
	  Macintosh.
	
	3. Check to see how much memory is available to the system. The "Largest Unused
	  Block" needs to be greater than 2500k to successfully run Cinemania 1994.
	
	If you can make enough memory available to your system and to Cinemania, your
	sounds should play correctly.
	
	MORE INFORMATION
	================
	
	Cinemania 1994 needs a relatively large amount of your computer's system memory
	(RAM) to display pictures and play sounds. Cinemania should be able to run on
	systems with 4 MB or more of memory. If you have only 4 MB of memory, and your
	system software uses a large portion of your RAM, you may need to adjust memory
	usage to allow Cinemania 1994 to run properly.
	
	For more information about adjusting your Macintosh's memory usage, refer to item
	#2, "Memory Use", in the Microsoft Cinemania 1994 readme file.
	
	Additional query words: mac 1994 multi media multimedia multi-media audio sounds soundtrack effects movies films
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1994Mac
	Version           : :1994 edition
	
	=============================================================================
	
