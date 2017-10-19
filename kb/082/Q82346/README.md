---
layout: page
title: "Q82346: What Is SEGENTRY.DAT?"
permalink: /kb/082/Q82346/
---

## Q82346: What Is SEGENTRY.DAT?

	Article: Q82346
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The SEGENTRY.DAT file is used for profiling purposes and is created by the
	VPROD.386 device driver. It is created in the directory in which Windows is
	started. This is why there may be multiple copies of this file on the hard
	drive.
	
	The device driver VPROD.386 is only needed when profiling. Removing the
	DEVICE=<path>VPROD.386 line from the SYSTEM.INI file stops SEGENTRY.DAT
	files from appearing everywhere Windows is started.
	
	This information is documented in the Windows Software Development Kit
	documentation.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
