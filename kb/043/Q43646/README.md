---
layout: page
title: "Q43646: INFO: What Causes the Startup Code to Be Included"
permalink: /kb/043/Q43646/
---

## Q43646: INFO: What Causes the Startup Code to Be Included

{% raw %}

	Article: Q43646
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The object modules created by the Microsoft C Compiler versions 5.1 and earlier
	contain a reference to the variable _acrtused. This variable causes the linker
	to bring in the C startup code. To not link the C startup code, it is necessary
	to define _acrtused as follows:
	
	     int _acrtused = 0;
	
	Object modules created with the Microsoft C Compiler for MS-DOS, version 6.0,
	6.0a, or 6.0ax only have a reference to the _acrtused variable if the source
	file contains a function called main(). In addition, C/C++ versions 7.0 and 8.0
	for MS-DOS generate the reference for files containing a WinMain() or LibMain()
	function.
	
	For 32-bit targets, __acrtused is not used. Instead, the linker must be told what
	entry point name to use. The Visual C++ for Windows NT linker picks the name
	based on the executable type. With the Windows Software Development Kit (SDK)
	linker, the correct entry point must be specified in the makefile or on the
	command line. The three entry points are:
	
	  Executable Type     Entry Point     Entry Point Name
	  ----------------------------------------------------
	  Console             main()          _mainCRTStartup
	  Windows             WinMain()       _WinMainCRTStartup
	  DLL                 DllMain()       _DllMainCRTStartup@12
	
	MORE INFORMATION
	================
	
	With Visual C++ 2.x and above, if a DLL project specifies an entry point and
	attempts to call a CRT function, the linker issues error LNK2001 because it is
	looking for main(). To successfully link the DLL, remove the project setting for
	entry point. As mentioned in the SUMMARY, _DllMainCRTStartup is the correct
	entry point.
	
	Additional query words: MFC AFXDLL AFXEXT extension acrtused kbvc100 kbvc150 kbvc1.51 kbvc152 kbvc200 kbvc210 kbvc400 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:1.0,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
