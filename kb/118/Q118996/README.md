---
layout: page
title: "Q118996: Encarta 1994 Err Msg: Encarta Must Be Loaded To Use Dictionary!"
permalink: kb/118/Q118996/
---

## Q118996: Encarta 1994 Err Msg: Encarta Must Be Loaded To Use Dictionary!

	Article: Q118996
	Product(s): Microsoft Home Kids Products
	Version(s): 1994 edition,1995 edition; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to access the Encarta dictionary from within Encarta, you may
	receive the error message:
	
	  Encarta Must Be Loaded To Use Dictionary!
	
	Terminate-and-stay-resident (TSR) programs that modify the title bar of Encarta
	may cause this problem. Typically, these TSRs add information to the title bar,
	such as the current time or the amount of available system resources.
	
	RESOLUTION
	==========
	
	Do not load these TSR programs using Encarta. These types of TSRs will normally
	load either through the RUN= or LOAD= lines in the WIN.INI file, or through the
	Startup group in Windows.
	
	To disable TSRs in the WIN.INI file:
	
	1. Open the WIN.INI file in a text editor such as Notepad.
	
	2. If anything is listed on the LOAD= or RUN= lines, place a ";" (a semicolon
	  without the quotation marks) before the lines. This prevents the information
	  on these lines from loading.
	
	
	Additional query words: dict.exe Encart94 VB multi media multimedia multi-media terminate and stay resident
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1996 kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac
	Version           : :1994 edition,1995 edition; WINDOWS:
	
	=============================================================================
	
