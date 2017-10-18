---
layout: page
title: "Q137995: Windows 95 Refresh.txt File in Drivers&#92;Display&#92;Trident Folder"
permalink: kb/137/Q137995/
---

## Q137995: Windows 95 Refresh.txt File in Drivers&#92;Display&#92;Trident Folder

	Article: Q137995
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbdisplay win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is a copy of the information in the Refresh.txt file
	in the Drivers\Display\Trident folder on the Windows 95 CD-ROM. Setup does not
	copy this file to your hard disk.
	
	MORE INFORMATION
	================
	
	The TRIDENTL.DRV driver does not automatically configure the display adapter's
	refresh rate according to the capabilities of the monitor to which it is
	attached. Instead, the refresh rate must be manually set. To do so, follow these
	steps:
	
	1. Copy the SMONITOR.EXE utility into its own subdirectory.
	
	2. Boot Windows 95 to a Command Prompt (restart the machine and hit F8 when the
	  "Starting Windows 95" message is displayed).
	
	3. Run the SMONITOR utility from the Command Prompt. All available refresh rate
	  groups will be displayed.
	
	4. From the list of refresh rate groups, decide which one you will use. Type
	  "SMONITOR X" at the Command Prompt, where X is the refresh rate group number
	  you have chosen.
	
	5. You can now start Windows 95 by entering WIN and the Command Prompt.
	
	If you have any problems, contact Trident's BBS number at 415-691-1016.
	
	======================================================================
	Keywords          : kbdisplay win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbinfo
	
	=============================================================================
	
