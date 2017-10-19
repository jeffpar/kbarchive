---
layout: page
title: "Q11941: How to Get a Pointer to the Stack"
permalink: /kb/011/Q11941/
---

## Q11941: How to Get a Pointer to the Stack

	Article: Q11941
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	C pushes its parameters in reverse order (right to left) for the _cdecl calling
	convention (default) and in order (left to right) for the Pascal calling
	convention.
	
	The first (or last, for the Pascal convention) parameter is always the last one
	pushed, and always has the same address relative to the start of the frame.
	
	In the C compiler documentation, see vsprintf and the va_start macro in STDARG.H
	for an example of accessing variable arguments on the stack.
	
	To get a pointer to the stack, use the following code:
	
	     far MyFunction()
	     {
	     int x;
	     int far *y = &x;
	     }
	
	NOTE: This pointer will not be valid when the function is exited, since the stack
	contents will change.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
