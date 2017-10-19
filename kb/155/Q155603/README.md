---
layout: page
title: "Q155603: Some S3 Video Cards Do Not Set Refresh Rate Properly"
permalink: /kb/155/Q155603/
---

## Q155603: Some S3 Video Cards Do Not Set Refresh Rate Properly

	Article: Q155603
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Due to differences in BIOS mode tables, some S3 video cards do not set the
	proper refresh rate from the Display tool in Control Panel.
	
	MORE INFORMATION
	================
	
	Windows NT determines the display mode options by obtaining display mode
	information from the video card BIOS mode tables. On occasion, because of
	differences in manufacturers and BIOS revisions, this results in a different
	refresh rate being used after reboot than the setting you selected.
	
	On the Diamond Stealth 64 Video 2001 video card, for example, the following modes
	are not set correctly:
	
	- 800 x 600 x 65536 Colors at 120hz (actually displayed at 100 Hz)
	
	- 800 x 600 x True Color at 90hz (actually displayed at 75 Hz)
	
	- 800 x 600 x True Color at 100hz (actually displayed at 75 Hz)
	
	- 800 x 600 x True Color at 120hz (actually displayed at 75 Hz)
	
	The Diamond video card cannot display the higher modes at the refresh rate
	displayed by the BIOS, so the BIOS automatically uses the highest possible
	refresh rate (in these cases, 100 or 75 Hz).
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
