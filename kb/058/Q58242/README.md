---
layout: page
title: "Q58242: FORMAT.COM Cannot Be Directly Run with Parameters"
permalink: kb/058/Q58242/
---

## Q58242: FORMAT.COM Cannot Be Directly Run with Parameters

	Article: Q58242
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a PIF file that runs the MS-DOS version 3.x FORMAT.COM utility;
	the PIF may have a question mark in the Parameters field. When you run the PIF,
	enter a: or b: as the parameter, and then choose the OK button, FORMAT.COM will
	start and then print the following error message:
	
	  Drive letter must be specified
	
	FORMAT.COM then exits without doing anything.
	
	This PIF file works properly with Windows/386 Versions 2.x.
	
	WORKAROUND
	==========
	
	To work around this problem, do not run FORMAT.COM directly; instead, run
	FORMAT.COM from the MS-DOS command prompt, or run FORMAT.COM from the file
	manager under the Disk Menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows version 3.0. We are
	researching this problem and will post new information here as it becomes
	available.
	
	This problem does not occur with MS-DOS version 4.0 or 4.01.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
