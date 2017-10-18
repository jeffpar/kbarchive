---
layout: page
title: "Q98344: DOCERR: Correction to MM Viewer DW_SIZE Message Parameters"
permalink: kb/098/Q98344/
---

## Q98344: DOCERR: Correction to MM Viewer DW_SIZE Message Parameters

	Article: Q98344
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	The lParam1 and lParam2 parameters for the DW_SIZE message are documented
	incorrectly in the Microsoft Multimedia Viewer version 2.0 "Technical
	Reference." The LOWORD of lParam1 has the width of the main window, and the
	HIWORD of lParam1 has the height of the main window. lParam2 is always 0
	(zero). The correct documentation for lParam1 matches the documentation for
	the lParam of the Windows WM_SIZE message, which is documented in the
	Microsoft Windows Software Development Kit (SDK) "Programmer's Reference,
	Volume 3: Messages, Structures, and Macros" for version 3.1, page 194.
	
	Additional query words: 2.00 LDLLHandler DC_MINMAX docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200
	Version           : :2.0
	
	=============================================================================
	
