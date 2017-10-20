---
layout: page
title: "Q140351: PRB: Assertion in Dlgprop.cpp Line 499"
permalink: /kb/140/Q140351/
---

## Q140351: PRB: Assertion in Dlgprop.cpp Line 499

{% raw %}

	Article: Q140351
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbHWMAC kbVC kbprb
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Displaying a property sheet within a project for a Macintosh target results in
	the appearance of this assertion message:
	
	  xxxx: File dlgprop.cpp, line 499
	
	This may start with line 497 instead (as in the PROPDLG sample), but it will be
	followed by more assertions (501, 503, and more in various locations).
	
	CAUSE
	=====
	
	As there was no update to the Macintosh cross-compiler in version 2.1, building
	a Macintosh application still requires the MFC header files from version 2.0.
	One of these files includes the Afxres.rc file, which contains some resources,
	such as some scroll bitmaps, which are not found in Afxres.rc file from version
	2.1.
	
	RESOLUTION
	==========
	
	Run the provided Setupmfc.exe program, and add a path for the MFC 3.0 include
	directory to the INCLUDE environment variable in the development environment.
	More details follow.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual C++ 2.1 Setup programs install a program called Setupmfc.exe in the
	Msvc20\Bin directory and install an icon for it in the Microsoft Visual C++ 2.0
	program group. The icon's label is "MFC 3.0 Source Setup." To see the icon, you
	need to have the Macintosh add-on installed before you install Visual C++ 2.1.
	
	1. Use Setupmfc.exe to reinstall MFC 3.0 source code. Be sure to use the Visual
	  C++ 2.0 compact disc when the program asks for the MFC 3.0 source directory.
	  Using the Visual C++ 2.1 compact disc will not work.
	
	2. Open the Visual C++ development environment. On the Tools menu, click Tools,
	  and then click the Directories tab. Under Platform, click Macintosh, and
	  under Show Directories for, click Include files. Remove the existing header
	  file directory for MFC 3.1. Click the Add button to add a path for the MFC
	  3.0 include directory. For example:
	
	  c:\msvc20\mfc30\include
	
	
	Additional query words: 2.10 2.1 2.00
	
	======================================================================
	Keywords          : kbsetup kbHWMAC kbVC kbprb 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev200Mac
	Version           : MACINTOSH:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
