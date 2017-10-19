---
layout: page
title: "Q128237: PRB: Polyline Fails with NULL Clipping Region"
permalink: /kb/128/Q128237/
---

## Q128237: PRB: Polyline Fails with NULL Clipping Region

	Article: Q128237
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Polyline API will return a failure code if called on a DC that has a NULL
	clipping region selected. One situation in which this can occur is when Polyline
	is used to draw into a DC for a window that is completely obscured by another
	window.
	
	RESOLUTION
	==========
	
	Check to see if the clipping region is NULL before calling Polyline and testing
	its return value.
	
	STATUS
	======
	
	This behavior is by design on Windows 3.1.
	
	This behavior does not occur on Windows NT or on Windows 95.
	
	Additional query words: 3.10 no32bit Polygon fails hidden
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
