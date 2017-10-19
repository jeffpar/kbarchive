---
layout: page
title: "Q154754: STB PowerGraph Video VLB Display Adapter Not Detected"
permalink: /kb/154/Q154754/
---

## Q154754: STB PowerGraph Video VLB Display Adapter Not Detected

	Article: Q154754
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 4.0, the STB PowerGraph Video VLB adapter in your
	computer may be detected as a VGA-compatible display adapter.
	
	CAUSE
	=====
	
	The STB PowerGraph Video VLB adapter uses an S3-765 chip set. This chip set is
	supported with Windows NT 4.0 only on a PCI bus.
	
	
	RESOLUTION
	==========
	
	Windows NT 4.0 installs and uses the VGA-compatible display driver and functions
	correctly, but you cannot use any of the performance advantages of the display
	adapter.
	
	Additional query words: hcl misdetected
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
