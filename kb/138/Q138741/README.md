---
layout: page
title: "Q138741: Intermittent System Hangs with OPTI-495SLC Chipset"
permalink: /kb/138/Q138741/
---

## Q138741: Intermittent System Hangs with OPTI-495SLC Chipset

	Article: Q138741
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running any of the listed Windows versions, your computer may
	occasionally stop responding (hang). This problem is known to occur on computers
	with the following chipsets:
	
	  OPTI-495SLC
	
	
	CAUSE
	=====
	
	The Turbo Switch feature of your system ROM BIOS is enabled. This feature causes
	the computer to monitor keyboard input for a particular series of keystrokes.
	When this series of keystrokes is detected, the computer is placed in Turbo
	mode.
	
	Windows also queries the keyboard periodically. When the computer and Windows
	attempt to query the keyboard at the same time, your computer may hang.
	
	RESOLUTION
	==========
	
	Disable the Turbo Switch feature of your system ROM BIOS. For information about
	how to do so, contact your computer manufacturer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: ami opti495slc opti 495slc opti495 495 slc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.0,3.0a,3.1,3.11
	
	=============================================================================
	
