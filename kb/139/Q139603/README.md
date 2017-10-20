---
layout: page
title: "Q139603: PRB: C2061 Errors When Compiling for Macintosh Target"
permalink: /kb/139/Q139603/
---

## Q139603: PRB: C2061 Errors When Compiling for Macintosh Target

{% raw %}

	Article: Q139603
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbHWMAC kbVC kbprb
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile a project for a Macintosh target, the following error messages
	occur:
	
	  C:\MSVC20\MFC\INCLUDE\afxwin.h(1908) : error C2061: syntax error : identifier
	  'LPSCROLLINFO'
	
	  C:\MSVC20\MFC\INCLUDE\afxwin.h(1910) : error C2061: syntax error : identifier
	  'LPSCROLLINFO'
	
	  C:\MSVC20\MFC\INCLUDE\afxwin1.inl(20) : fatal error C1903: unable to recover
	  from previous error(s); stopping compilation
	
	CAUSE
	=====
	
	The identifier LPSCROLLINFO is not defined in the Afxwin.h file in version 3.2
	of the Microsoft Foundation classes.
	
	RESOLUTION
	==========
	
	Run the provided Setupmfc.exe program, and add a path for the MFC 3.0 include
	directory to the INCLUDE environment variable in the development environment.
	More details follow.
	
	The Visual C++ 2.2 Setup program installs a program called Setupmfc.exe in the
	Msvc20\Bin directory and installs an "MFC 3.0 Source Setup" icon for it in the
	Microsoft Visual C++ 2.0 program group. To see the icon, you need to have the
	Macintosh add-on installed before you install Visual C++ 2.2. Here are the
	necessary steps:
	
	1. Use Setupmfc.exe to reinstall MFC 3.0 source code. Make sure you use the
	  Visual C++ 2.0 compact disc when the program asks for the MFC 3.0 source
	  directory. Using the Visual C++ 2.2 compact disc will not work.
	
	2. Open the Visual C++ development environment. On the Tools menu, click
	  Directories. Under Platform, click Macintosh. Under Show Directories for,
	  click Include files. Remove the existing header file directory for MFC 3.2.
	  Click the Add button, and add a path for the MFC 3.0 include directory. For
	  example:
	
	  C:\Msvc20\Mfc30\Include
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 2.20 2.2 2.00
	
	======================================================================
	Keywords          : kbsetup kbHWMAC kbVC kbprb 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev200Mac
	Version           : MACINTOSH:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
