---
layout: page
title: "Q10216: Using EndPaint() and BeginPaint()"
permalink: /kb/010/Q10216/
---

## Q10216: Using EndPaint() and BeginPaint()

	Article: Q10216
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
	
	The PAINTSTRUCT structure contains information for an application that can be
	used to paint the client area of a window owned by that application.
	
	The PAINTSTRUCT data structure is automatically updated by the BeginPaint()
	function; if a window has been restored, BeginPaint() will update the
	PAINTSTRUCT fields (for example, fRestore). The application would be duplicating
	effort if it also updated the fields of the PAINTSTRUCT after a window is
	restored. The EndPaint() procedure is required after BeginPaint(). The
	application only needs to be concerned about its own paint procedure that comes
	between BeginPaint() and EndPaint().
	
	For additional information on the PAINTSTRUCT data structure, see page 7-55 in
	the "Microsoft Windows Software Development Kit Reference Volume 2" for version
	3.0 of the Windows SDK, and page 384 in the "Microsoft Windows Software
	Development Kit Programmer's Reference, Volume 3: Messages, Structures, and
	Macros" for version 3.1 of the Windows SDK.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
