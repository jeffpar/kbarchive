---
layout: page
title: "Q59090: Flight Simulator: EGA Mode on Toshiba T3200"
permalink: kb/059/Q59090/
---

## Q59090: Flight Simulator: EGA Mode on Toshiba T3200

	Article: Q59090
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	It has been reported that the Toshiba T3200 can be run in an EGA mode by
	selecting Option H, "EGA 16 color 640x350 Enhanced Monochrome" when starting
	Flight Simulator. The graphics resolution will be significantly better than CGA
	mode, but the screen will be limited to four shades of gray.
	
	The T3200 system disks have a utility called XCHAD that allows you to modify
	which shades of gray are used. More information about XCHAD can be found in the
	T3200 reference manual.
	
	XCHAD should be executed with color parameters (that is, "XCHAD 1,4,2...3,4")
	before running Flight Simulator. XCHAD is partially disabled once Flight
	Simulator is started. The CTRL+SYS+RQ hotkey is disabled (choice of colors), but
	the ALT+SYS+RQ hotkey (cycling color change) still works properly.
	
	Microsoft has not tested Flight Simulator with this configuration on the Toshiba
	T3200, and therefore, cannot guarantee proper results.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
