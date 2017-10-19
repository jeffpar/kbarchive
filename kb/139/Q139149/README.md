---
layout: page
title: "Q139149: PPT7: Troubleshooting Video Driver UMA Conflicts"
permalink: /kb/139/Q139149/
---

## Q139149: PPT7: Troubleshooting Video Driver UMA Conflicts

	Article: Q139149
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kbgraphic
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your system may stop responding when you open or view a presentation containing
	imported graphics.
	
	CAUSE
	=====
	
	This behavior is caused by the expanded memory manager scanning too aggressively
	and setting up upper memory blocks (UMBs) that conflict with the video adapter.
	
	RESOLUTION
	==========
	
	To troubleshoot this problem, try the following:
	
	1. Open your Config.sys file.
	
	2. Locate the line similar to:
	
	  device=emm386.exe noems
	
	  Add the following to the end of this line:
	
	  "x=a000-c7ff" (without the quotation marks)
	
	  This line should now be similar to:
	
	  device=emm386.exe noems x=a000-c7ff
	
	3. Save the file and restart your computer.
	
	MORE INFORMATION
	================
	
	Windows 95 uses the MS-DOS expanded memory emulation driver, Emm386.exe, to
	provide expanded memory services (EMS) for MS-DOS applications that need it. If
	you load Emm386.exe with an x=<range> parameter, Windows 95 doesn't try to
	put an EMS pageframe in that range of memory addresses.
	
	A standard VGA card requires memory ranges A000-AFFF and B800-BFFF. Some VESA
	Local Bus and PCI cards use the entire range A000-C7FF.
	
	Additional query words: 7.00 97 ppt95 pp7 ppt7 ppt97 multi media diamond ati mach vram multimedia w_powerpt hang freeze lock up
	
	======================================================================
	Keywords          : kbenv kbgraphic 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	
	=============================================================================
	
