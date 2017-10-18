---
layout: page
title: "Q45704: Using GlobalFlags() to Test for GMEM_DISCARDABLE"
permalink: kb/045/Q45704/
---

## Q45704: Using GlobalFlags() to Test for GMEM_DISCARDABLE

	Article: Q45704
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When testing for GMEM_DISCARDABLE, do not use the following:
	
	     if(GlobalFlags(hMem) == GMEM_DISCARDABLE)
	
	Instead, use the following:
	
	     if(GlobalFlags(hMem) & GMEM_DISCARDABLE)
	
	This is necessary because GlobalFlags() returns a one, i.e., 0x0100, rather than
	0x0F00 if the object is discardable. It is also possible that the return value
	could be 0x0800 or 0x0400 or 0x0200. These cases are also taken care of with the
	bitwise AND.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
