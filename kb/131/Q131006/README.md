---
layout: page
title: "Q131006: PRB: Dr Watson Won't Log Stack Symbols in Visual C++ App"
permalink: /kb/131/Q131006/
---

## Q131006: PRB: Dr Watson Won't Log Stack Symbols in Visual C++ App

{% raw %}

	Article: Q131006
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.1,3.5,3.51,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbOSWinNT310 kbOSWinNT351 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbOSWinNT350
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dr. Watson won't log stack information in postmortem debug log if the
	application was built with the Visual C++, versions 2.x and later, default
	settings.
	
	CAUSE
	=====
	
	Dr. Watson can be configured to log debug information into a log file when an
	unhandled user mode exception occurs. For more information about this please see
	the following article in the Microsoft Knowledge Base:
	
	  Q121434 Specifying the Debugger for Unhandled User Mode Exceptions
	
	
	With applications built with Visual C++ version 1.0, the stack information
	includes the symbol information for the functions on the stack frame. With
	applications built with Visual C++ versions 2.x and later this information is no
	longer included. This results in an incomplete log.
	
	This is because Dr. Watson requires that symbol information be in COFF format. By
	default, the Visual C++ version 1.0 link build options included both COFF and
	Microsoft Format debug symbols. However, with Visual C++ versions 2.x and later,
	this has changed; only Microsoft Format style symbols are included.
	
	RESOLUTION
	==========
	
	To build the application with the required symbols for Dr. Watson, the build
	parameters must be changed for the project. Use the following steps from within
	the Visual C++ integrated development environment:
	
	1. Load the desired project.
	
	2. For Visual C++ version 4.0, choose Settings... from the Build menu.
	
	  For Visual C++ version 2.x, choose Settings from the Project menu.
	
	3. Select the Link tab.
	
	4. Select Debug from the Category list box.
	
	5. Select the "Generate Debug Info" check box.
	
	6. Select the "Both Formats" option to include COFF and Microsoft Format
	  symbols.
	
	7. Rebuild the application.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbOSWinNT310 kbOSWinNT351 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbOSWinNT350 
	Technology        : kbVCsearch kbVC400 kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :2.0,2.1,3.1,3.5,3.51,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
