---
layout: page
title: "Q82311: Problems Using Borland's Turbo Debugger with Windows"
permalink: /kb/082/Q82311/
---

## Q82311: Problems Using Borland's Turbo Debugger with Windows

{% raw %}

	Article: Q82311
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Borland Turbo Debugger for Windows that comes with most Borland development
	tools for Windows may experience problems when run under Windows version 3.1.
	For example, the following may occur:
	
	- Screen colors may contain random blocks and stripes.
	
	- Buttons may not be repainted properly.
	
	- The mouse icon may disappear after exiting from Turbo Debugger.
	
	These problems only occur in enhanced mode and occur with both the standard and
	super VGA video drivers that come with Windows 3.1.
	
	CAUSE
	=====
	
	The WINDEBUG.DLL file that is shipped with Borland's C++ 2.0, 3.0, Turbo C++,
	Turbo PASCAL, and so on dated before April 1992 is incompatible with Windows
	3.1. This incompatibility exists because the debugger depends on data structures
	specific to Windows 3.0.
	
	WORKAROUND
	==========
	
	If you have a licensed copy of the Windows 3.1 Software Development Kit (SDK),
	you can rename the CVWIN.DLL file to WINDEBUG.DLL. This should be an acceptable
	workaround until you can obtain Borland's updated releases of WINDEBUG.DLL.
	
	The Borland products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 winfest 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	
	=============================================================================
	

{% endraw %}
