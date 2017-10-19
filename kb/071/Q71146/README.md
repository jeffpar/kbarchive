---
layout: page
title: "Q71146: PRB: SDK Sample Applications Use Incorrect Background Brush"
permalink: /kb/071/Q71146/
---

## Q71146: PRB: SDK Sample Applications Use Incorrect Background Brush

	Article: Q71146
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
	
	Many of the sample applications that come with the Windows Software Development
	Kit (SDK) use a stock object white brush for the window background color. When
	the system background color is changed through the Control Panel, the
	backgrounds of these sample applications do not change along with the other
	applications.
	
	RESOLUTION
	==========
	
	To correct this problem, change the value of the hbrBackground field in the
	WNDCLASS structure from GetStockObject(WHITE_BRUSH) to COLOR_WINDOW+1. The
	background of each modified sample will change with that of every other
	Windows-based application.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
