---
layout: page
title: "Q190352: PRB: Cannot Load EM.dll on Win98 with WinCE Toolkit for VC5.0"
permalink: /kb/190/Q190352/
---

## Q190352: PRB: Cannot Load EM.dll on Win98 with WinCE Toolkit for VC5.0

{% raw %}

	Article: Q190352
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbide kbVC500 kbOSWinCEsearch kbOSWin98
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++, on platform(s):
	   - the operating system: Microsoft Windows 98 
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0, on platform(s):
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows CE Toolkit for Visual C++ 5.0 or the Windows CE
	Embedded Toolkit for Visual C++ 5.0 on Windows 98, you might get the following
	error when opening or debugging a project in Developer Studio:
	
	  Microsoft Developer Studio
	  EM.DLL
	  This required file cannot be loaded.
	  Please re-install Microsoft Developer Studio
	
	This might result in Developer Studio crashing with the following error:
	
	  MSDEV caused an invalid page fault in module DEVDBG.PKG at
	  015f:50c4fc9a.
	
	CAUSE
	=====
	
	Windows 98 installs an older version of ImageHlp.dll (file version 4.00) in the
	System directory.
	
	RESOLUTION
	==========
	
	Copy the ImageHlp.dll (file version 5.00.1418.1) from the
	DevStudio\SharedIDE\bin directory into the Windows System directory to overwrite
	the older ImageHlp.dll.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Windows 98 ships ImageHlp.dll, file version 4.00 with a May 1998 date. The
	Windows CE Toolkit for Visual C++ 5.0 ships ImageHlp.dll file version
	5.00.1418.1. This newer DLL contains functions that the older DLL does not have.
	The Visual C++ debugger as modified by the Windows CE Toolkit uses some of these
	new functions. The debugger cannot function without the newer functions, so
	Developer Studio is terminated.
	
	The Windows CE Toolkit for Visual C++ 5.0 and Windows CE Embedded Toolkit for
	Visual C++ 5.0 product requirements state that Windows NT 4.0 is needed,
	therefore toolkit features are not guaranteed to work under Windows 95 and
	Windows 98.
	
	======================================================================
	Keywords          : kberrmsg kbide kbVC500 kbOSWinCEsearch kbOSWin98 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
