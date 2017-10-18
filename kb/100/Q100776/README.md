---
layout: page
title: "Q100776: PRB: Using Windows NT PDK Header Files in Visual C++"
permalink: kb/100/Q100776/
---

## Q100776: PRB: Using Windows NT PDK Header Files in Visual C++

	Article: Q100776
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbGenInfo kbVC kbVC100 kbVC200 kbVC400 kbVC500 kbDSupport kbArtTypeINF
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to use the header files provided with the Microsoft Windows NT
	Pre-Release Development Kit (PDK) in Visual C++, 32-bit Edition, can cause
	problems ranging from incorrect results to General Protection Faults(GPF).
	
	CAUSE
	=====
	
	Several data structures changed between the Windows NT Pre-Release and the code
	that Visual C++, 32-bit Edition supports. Most of the changes converted data
	from type short to type int or from type unsigned short to type unsigned int.
	Code developed with the PDK header files passes incorrectly sized items to the
	functions in the C run-time library.
	
	RESOLUTION
	==========
	
	Verify that the version of the header files used to build your application match
	the version of the library.
	
	MORE INFORMATION
	================
	
	To determine which directories are in the compiler search path for files and
	libraries, type "SET" (without quotation marks) at the Windows NT system prompt
	or choose the System icon in Control Panel.
	
	Additional query words: 1.00 2.00 gpfault 4.00
	
	======================================================================
	Keywords          : kbGenInfo kbVC kbVC100 kbVC200 kbVC400 kbVC500 kbDSupport kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC500 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : winnt:1.0,2.0,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
