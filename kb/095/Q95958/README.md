---
layout: page
title: "Q95958: DoubleSpace: Serious Disk Error Occurred Writing to Drive &lt;x&gt;"
permalink: /kb/095/Q95958/
---

## Q95958: DoubleSpace: Serious Disk Error Occurred Writing to Drive &lt;x&gt;

	Article: Q95958
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install DoubleSpace on a hard drive, DoubleSpace creates a compressed
	volume file (CVF), but when DoubleSpace runs Defragmenter (Defrag), you receive
	the following error message:
	
	  ATTENTION: A serious disk error occurred writing to drive x:
	
	where x is the drive you are compressing. There are no options at this point
	other than restarting the computer.
	
	When you restart the computer, DoubleSpace recovers and completes the
	installation. DoubleSpace ignores any clusters marked as unusable in the file
	allocation table (FAT).
	
	CAUSE
	=====
	
	Your hard drive has physical errors (such as unusable sectors).
	
	WORKAROUND
	==========
	
	Run a disk repair utility such as Norton Disk Doctor (NDD) before you compress
	the drive.
	
	Norton Disk Doctor is manufactured by a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 6.0 defrag.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
