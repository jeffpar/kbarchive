---
layout: page
title: "Q202052: 3Dlabs Permedia 2 Video Drivers Cause Problems Under SP4"
permalink: kb/202/Q202052/
---

## Q202052: 3Dlabs Permedia 2 Video Drivers Cause Problems Under SP4

	Article: Q202052
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft BackOffice Small Business Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installing Service Pack 4 on a Digital 333i with an embedded Permedia 2 chip can
	result in erratic screen displays. This behavior has been found to be expecially
	significant when using 1024 x 768 resolution and True Color.
	
	RESOLUTION
	==========
	
	To resolve this problem, get the corrected driver from 3Dlabs:
	
	  http://www.3dlabs.com/drivers/index.html
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	The most serious problems were exhibited on a test platform configured in the
	following way:
	
	- Resolution 1024 x 768
	
	- True Color
	
	- 3Dlabs driver - 2.11-0516, 4.0.0, Glint.sys, Glint.dll
	
	- Chip Set - 3Dlabs Permedia 2
	
	- DAC Type - TI TVP4020
	
	- Memory - 4 MB
	
	All configurations implementing these drivers displayed some level of video
	disruption. The disruptions seemed to be evident only when desktop activity
	(mouse movements, programs loading, and so on) was in progress.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
