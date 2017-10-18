---
layout: page
title: "Q10213: INFO: Window Handles of Global Objects"
permalink: kb/010/Q10213/
---

## Q10213: INFO: Window Handles of Global Objects

	Article: Q10213
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A handle is a unique, fixed identifier for a global object. Handles exist to
	allow easy, indirect access to an object that may move in memory.
	
	Handles are unique only among the objects to which they refer. A handle to a
	window will always be different from all other handles to windows, but it could
	have the same value as a handle to a brush (or to any other object).
	
	It is safe to hold onto a window handle (or any handle) of a global object. As
	long as that object exists, its handle will not change.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
