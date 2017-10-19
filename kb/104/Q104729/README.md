---
layout: page
title: "Q104729: MemMaker Removes XLOAD Device Drivers from CONFIG.SYS"
permalink: /kb/104/Q104729/
---

## Q104729: MemMaker Removes XLOAD Device Drivers from CONFIG.SYS

	Article: Q104729
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have any commands in your CONFIG.SYS file for device drivers containing
	the text "XLOAD," MemMaker removes them.
	
	CAUSE
	=====
	
	MemMaker used XLOAD as an internal keyword and does not correctly deal with
	device drivers using that keyword.
	
	RESOLUTION
	==========
	
	You may be able to work around this problem by renaming the device driver. For
	more information, contact the hardware or software vendor that supplied the
	device driver.
	
	Additional query words: 6.22 6.20 404XLOAD.SYS Thomas Conrad
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
