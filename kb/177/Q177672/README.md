---
layout: page
title: "Q177672: &quot;Fatal Exception 0E&quot; Error Message When Running McAfee VirusScan"
permalink: /kb/177/Q177672/
---

## Q177672: &quot;Fatal Exception 0E&quot; Error Message When Running McAfee VirusScan

	Article: Q177672
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg osr2 win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When McAfee VirusScan95 with VShield scanning software detects a virus on your
	computer, you may receive the following error message:
	
	  A fatal exception 0E has occurred at 0028:C0003C72 in VXD VMM(01) + 00002C72.
	  The current application will be terminated.
	
	NOTE: In addition to this error message, your computer may stop responding (hang)
	or restart when a virus is detected.
	
	CAUSE
	=====
	
	This behavior can occur if your video adapter uses the Tseng Labs ET6000 chip
	set.
	
	RESOLUTION
	==========
	
	Upgrade to Release 6, version 4.03.4800 or later of the Tseng Labs ET6000 video
	adapter driver for Windows 95. To obtain this driver, contact Tseng Labs.
	
	MORE INFORMATION
	================
	
	When McAfee VirusScan95 detects a virus, it switches to MS-DOS mode. The video
	adapter drivers for the Tseng Labs ET6000 chip set do not handle this change
	correctly.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: display
	
	======================================================================
	Keywords          : kbdisplay kberrmsg osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : :95
	
	=============================================================================
	
