---
layout: page
title: "Q68286: Unrecoverable Application Error with hDC Express"
permalink: kb/068/Q68286/
---

## Q68286: Unrecoverable Application Error with hDC Express

	Article: Q68286
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get Unrecoverable Application Errors (UAEs) when using hDC's Express
	program with Microsoft Windows version 3.0.
	
	CAUSE
	=====
	
	This error occurs when you use the Express program as the Windows shell; it is
	caused by the Automaximize feature in Express.
	
	WORKAROUND
	==========
	
	Use either of the following two workarounds to resolve this problem:
	
	- Turn off the Automaximize feature in Express.
	
	  -or-
	
	- Load Express from the Run= line in the WIN.INI file instead of from the
	  Shell= line of the SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3rdparty WIN30 3.0 3.00a 3.0a UAE
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
