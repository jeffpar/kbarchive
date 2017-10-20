---
layout: page
title: "Q199521: PRB: User-Defined onexit/atexit/cexit Not Called If /MD or /MDd"
permalink: /kb/199/Q199521/
---

## Q199521: PRB: User-Defined onexit/atexit/cexit Not Called If /MD or /MDd

{% raw %}

	Article: Q199521
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0,4.0b
	Operating System(s): 
	Keyword(s): kbprogramming kbHWMAC kbVC kbDSupport
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 4.0, 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	User-defined onexit, atexit, and cexit routines are not called for PowerMac
	applications using the C run-time dynamic-link library (DLL), /MD or /MDd.
	
	CAUSE
	=====
	
	DLLs and applications have different arrays of onexit pointers. The Win32
	libraries have a method for ensuring both arrays are run through when the
	application terminates; however, this was not put in place for PowerMac DLLs.
	
	Also, note that special handling is required for user-built DLLs!
	
	RESOLUTION
	==========
	
	Following are some possible ways to resolve this problem:
	
	- Use the static version instead of the DLL version of the C run-time
	  libraries.
	
	- Clean up in the destructor of a global C++ object.
	
	Additional query words: _cexit cexit _onexit
	
	======================================================================
	Keywords          : kbprogramming kbHWMAC kbVC kbDSupport 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400Mac kbVCXDev400bMac
	Version           : MACINTOSH:4.0,4.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
