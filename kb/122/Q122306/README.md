---
layout: page
title: "Q122306: PRB: Error C4226 and Defining WIN32"
permalink: /kb/122/Q122306/
---

## Q122306: PRB: Error C4226 and Defining WIN32

{% raw %}

	Article: Q122306
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbprb
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a source file that includes WINDOWS.H generates many C4226 errors,
	such as:
	
	  C:\MSVC20\INCLUDE\olebase.h (8954) : error C4226: nonstandard extension used
	  : '__export' is an obsolete keyword
	
	  ...
	
	  C:\MSVC20\INCLUDE\oleauto.h(293) : error C4226: nonstandard extension used :
	  '__huge' is an obsolete keyword
	
	  ...
	
	  C:\MSVC20\INCLUDE\ole2.h(4818) : error C4226: nonstandard extension used :
	  '__export' is an obsolete keyword
	
	Including these header files individually causes the same problem.
	
	CAUSE
	=====
	
	A number of the OLE header files that are included in the WINDOWS.H file require
	WIN32 to be defined. While _WIN32 is defined for you, WIN32 is not. Because
	WIN32 is not defined, the header file logic assumes that the definitions are for
	16-bit Windows-based applications and uses the __export and __huge keywords.
	
	RESOLUTION
	==========
	
	Here are three possible way to define WIN32:
	
	- Define WIN32 before the WINDOWS.H file is included.
	
	     #define WIN32
	     #include <windows.h>
	
	- Define WIN32 in a compiler switch. From the command line, use /DWIN32. In the
	  development environment, follow these following steps:
	
	  1. Choose Settings from the Projects menu, and click the C/C++ tab.
	
	  2. Select the Preprocessor category.
	
	  3. Add WIN32 to the Preprocessor Definitions field of the dialog box.
	
	- Add the following lines to the beginning of the WINDOWS.H file:
	
	     #if( defined (_WIN32) && !defined (WIN32) )
	     #define WIN32
	     #endif
	
	  NOTE: This will not take care of the case where individual OLE header files
	  are included in an application.
	
	MORE INFORMATION
	================
	
	This problem will most likely occur when building console applications.
	
	NOTE: Although this was by design, this behavior was changed in Microsoft Visual
	C++, 32-bit Edition, version 4.0.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          : kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbVC200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
