---
layout: page
title: "Q93704: Xircom Adapter Unable to Connect in Enhanced Mode"
permalink: /kb/093/Q93704/
---

## Q93704: Xircom Adapter Unable to Connect in Enhanced Mode

	Article: Q93704
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Xircom network adapter with Windows for Workgroups, you may not
	be able to access the network while in enhanced mode, but can make connections
	at the MS-DOS command prompt.
	
	CAUSE
	=====
	
	This problem may be caused by an incorrect entry in the SYSTEM.INI file for the
	Xircom 3270 emulation driver.
	
	WORKAROUND
	==========
	
	Comment out the following line in the [386Enh] section of the SYSTEM.INI file:
	
	     [386Enh]
	     Device=P3EFTVD1.386
	
	by inserting a semicolon at the start of the line, as follows:
	
	     [386Enh]
	     ;Device=P3EFTVD1.386
	
	For additional information, contact Xircom technical support.
	
	The Xircom product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
