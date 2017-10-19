---
layout: page
title: "Q44094: INFO: GETPHYSPAGESIZE Landscape vs. Portrait Mode"
permalink: /kb/044/Q44094/
---

## Q44094: INFO: GETPHYSPAGESIZE Landscape vs. Portrait Mode

	Article: Q44094
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbOSWin310 _IK kbSDKWin16
	Last Modified: 02-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The printer driver considers the page to be in Landscape mode when you use the
	Escape(..., GETPHYSPAGESIZE, ...) function, if the page width is greater than
	the page length.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
