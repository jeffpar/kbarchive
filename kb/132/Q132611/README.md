---
layout: page
title: "Q132611: System Performance Slow When Windows 95 Starts the First Time"
permalink: /kb/132/Q132611/
---

## Q132611: System Performance Slow When Windows 95 Starts the First Time

	Article: Q132611
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows 95 on a computer with a Plug and Play system ROM BIOS,
	system performance is unusually slow after Windows 95 starts for the first time.
	If you check the File System line in the System Properties dialog box, you see
	that one or more drives are using MS-DOS Compatibility Mode.
	
	NOTE: To check the File System line, follow these steps:
	
	1. Using the right mouse button, click My Computer, and then click Properties on
	  the menu that appears.
	
	2. In the System Properties dialog box, click the Performance tab, and under
	  Performance status, locate the File System line.
	
	After restarting Windows 95, system performance returns to normal.
	
	CAUSE
	=====
	
	When configuring Plug and Play hard disk controllers, Windows 95 must access the
	devices in real mode. Once the devices have been fully configured after Windows
	95 starts for the first time, protected-mode drivers are loaded for compatible
	hard disk controllers, and performance returns to normal.
	
	
	RESOLUTION
	==========
	
	If you are not prompted to restart your computer after Windows 95 starts for the
	first time and finishes the configuration process, restart your computer to
	ensure that all appropriate protected-mode disk drivers are loaded.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
