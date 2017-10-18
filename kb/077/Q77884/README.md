---
layout: page
title: "Q77884: PRB: Complex Printing Region Printed Incorrectly"
permalink: kb/077/Q77884/
---

## Q77884: PRB: Complex Printing Region Printed Incorrectly

	Article: Q77884
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application uses region and clipping functions on a printer device
	context (DC) to create a complex printing area, some of the clipping functions
	have no effect on the printed page.
	
	CAUSE
	=====
	
	The Windows Graphics Device Interface (GDI) is running out of heap space.
	
	RESOLUTION
	==========
	
	The application must perform some additional steps to simplify the drawing.
	Verify that calculated regions are freed between function calls.
	
	
	Additional query words: no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbprb
	
	=============================================================================
	
