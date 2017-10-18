---
layout: page
title: "Q89119: DOC: Avoid GDI Object Private Clipboard Formats"
permalink: kb/089/Q89119/
---

## Q89119: DOC: Avoid GDI Object Private Clipboard Formats

	Article: Q89119
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbSDKPlatform
	Last Modified: 12-JUN-1999
	
	3.10
	WINDOWS
	kbtoolkbtoolg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows Software Development Kit (SDK) version 3.1
	"Programmer's Reference Volume 2: Functions," page 828 of the documentation for
	the SetClipboardData function states:
	
	Private data formats in the range CF_GDIOBJFIRST through CF_GDIOBJLAST will be
	automatically removed by a call to the DeleteObject function when the data is
	removed from the clipboard.
	
	This statement is incorrect under Windows 3.1. Private data formats with types in
	this range are treated like global memory handles by Windows. As such, this
	range of private data formats should be avoided.
	
	MORE INFORMATION
	================
	
	Under the debugging version of Windows, if an application calls the
	SetClipboardData function with a handle to a GDI object, and a format identifier
	in the range CF_GDIOBJFIRST through CF_GDIOBJLAST, Windows will output the
	following message on the debugging terminal:
	
	  err APPNAMEHERE->USER GLOBALREALLOC+15: Invalid global handle: 0x1234
	
	This is due to a problem in Windows version 3.1. Windows treats the GDI object's
	handle as a global memory handle, when it should treat it as a GDI handle (for
	example, a handle to a brush, palette, font, and so on.)
	
	In addition, the object will not be deleted properly when the EmptyClipboard
	function is called. This leads to a loss of memory in GDI's heap. When GDI's
	heap is exhausted, either Windows crashes or output is corrupted.
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
