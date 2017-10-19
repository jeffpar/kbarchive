---
layout: page
title: "Q127987: VFW Err Msg: Unable to Load the Capture Driver"
permalink: /kb/127/Q127987/
---

## Q127987: VFW Err Msg: Unable to Load the Capture Driver

	Article: Q127987
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the CapScrn tool (CAPSCRN.EXE) that is included with
	Microsoft Video for Windows version 1.1 and the Video for Windows portion of
	Microsoft Office Professional version 4.3c, you receive the following error
	message:
	
	  Unable to load the capture driver. The driver is either already in use, out
	  of memory, or is not installed.
	
	CAUSE
	=====
	
	When you start CapScrn, SCRNCAP.DRV (the capture device driver) is loaded into
	memory. MSVIDEO.DLL, the file responsible for loading this device driver, has
	changed from Windows version 3.1 and requires an entry in the SYSTEM.INI file to
	load the driver into memory correctly in Windows 95.
	
	RESOLUTION
	==========
	
	To resolve this problem, use any text editor (such as Notepad) to edit the
	SYSTEM.INI file. Add the following line to the [Drivers] section of the file:
	
	  MSVIDEO8=SCRNCAP.DRV
	
	After you add this line, save and close the file and then restart your computer.
	
	Additional query words: screen capture
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
