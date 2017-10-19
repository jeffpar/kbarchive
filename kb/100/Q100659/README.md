---
layout: page
title: "Q100659: INFO: Exporting Callback Functions Not Required in Win32 Apps"
permalink: /kb/100/Q100659/
---

## Q100659: INFO: Exporting Callback Functions Not Required in Win32 Apps

	Article: Q100659
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGenInfo kbVC kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbDSupport kbArtTypeINF
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Win32 operating system, an application is not required to export callback
	functions. In 16-bit Windows 3.1 and prior versions, an application must export
	callback functions primarily to allow them to fix up references to global data
	and to ensure that any required EMS memory is available. Neither of these
	situations applies to applications running under the Windows NT 32-bit operating
	system.
	
	MORE INFORMATION
	================
	
	It is necessary to export a function to make it available to the
	GetProcAddress() function (for dynamic linking) or to list it in an import
	library (for static linking). Either of these linking methods require
	information about the function name or ordinal number. Exporting the function
	places the name or ordinal number into the application's exported entry points
	table and allows Windows to determine the associated address at run time.
	
	The loader performs load-time linking by looking up the imported entry points an
	application requires to load. Typically, it looks up this information by ordinal
	number. An application performs dynamic linking with the GetProcAddress()
	function which instructs the system to look up the desired function in the
	desired dynamic-link library (DLL) exports table by ordinal number or by name.
	It is not necessary to export functions in the Win32 application programming
	interface (API).
	
	In 16-bit Windows, the linker automatically fixes exported entries to load the
	appropriate value into the DS register. Exporting an entry in Win32 simply adds
	the entry to the application's exported names and ordinal numbers table; the
	linker need not "fix" them. To maintain source code compatibility with 16-bit
	Windows, you may want to continue using the MakeProcInstance() function and
	exporting all callback functions.
	
	The following table summarizes this information:
	
	Function Type      Windows 3.x (16-bit Windows)     Windows NT (Win32)  
	Callback           Exported or MakeProcInstance     Address of fn() *
	GetProcAddress     Must be exported                 Must be exported
	Static linking     Must be exported                 Must be exported
	
	* Because the MakeProcInstance() macro has no effect, it works as well.
	
	Additional query words: exporting vcnt
	
	======================================================================
	Keywords          : kbGenInfo kbVC kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbDSupport kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :1.0,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
