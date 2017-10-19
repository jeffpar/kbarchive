---
layout: page
title: "Q119454: PRB: Creating Many Fonts Causes a GPF in Windows 3.1"
permalink: /kb/119/Q119454/
---

## Q119454: PRB: Creating Many Fonts Causes a GPF in Windows 3.1

	Article: Q119454
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKWin16
	Last Modified: 27-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create or generate TrueType fonts, selectors are lost. Eventually, if
	you create enough fonts, this problem causes a general protection fault (GP)
	fault in your application.
	
	CAUSE
	=====
	
	Under Windows version 3.1, each time a new TrueType font is created, the cache
	is allocated to hold the TrueType font data. This memory is allocated as
	discardable memory, so that Windows can discard the font data and give the
	memory to other applications that need more memory. This way, TrueType font
	caching does not adversely affect available memory.
	
	The cache memory blocks are not discarded unless forced. Deleting the font handle
	(HFONT) does not cause the TrueType font cache memory to be deleted. This is a
	system optimization made in case another application uses the same font.
	
	Each cached TrueType font uses two selectors for its font data. Windows has a
	system-wide limit of 8192 selectors. When you create many TrueType fonts at
	once, you can run out of free selectors, which causes Windows to behave
	unexpectedly; your application may have a general protection fault (GP) fault.
	Deleting the font handles when you are finished with the fonts does not prevent
	this behavior.
	
	In addition, if you allocate a single TrueType font and change the mapping mode
	frequently, a new physical font is generated for each mapping-mode change. This
	can also cause the system to run out of free selectors and your application to
	have a GP fault.
	
	RESOLUTION
	==========
	
	GlobalAlloc() a large block of memory, create a font, and then delete the font.
	This forces segments to be discarded, so that the selectors are freed.
	
	The True Type font cache in Windows 95 is designed so that this problem does not
	occur.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
