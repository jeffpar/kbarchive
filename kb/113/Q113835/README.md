---
layout: page
title: "Q113835: MS-DOS Setup Patch Gauge Hangs at 99 Percent"
permalink: kb/113/Q113835/
---

## Q113835: MS-DOS Setup Patch Gauge Hangs at 99 Percent

	Article: Q113835
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install MS-DOS 6.21, Setup attempts to patch your existing DoubleSpace
	files to update them for 6.21 and yet still retain the DoubleSpace
	functionality.
	
	If the patch contains a valid header signature (FXPF) but the rest of the patch
	file is damaged, the system may stop responding (hang) with the patch gauge at
	99 percent.
	
	WORKAROUND
	==========
	
	To work around this problem, reboot the system, run uninstall, and obtain
	replacement MS-DOS 6.21 disks.
	
	Additional query words: 6.22 6.20 hung frozen locked up lock freeze upgrade DBLSPACE.EX# 99%
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621
	Version           : MS-DOS:6.21
	
	=============================================================================
	
