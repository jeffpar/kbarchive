---
layout: page
title: "Q74360: Three Methods to Import Functions from a DLL"
permalink: /kb/074/Q74360/
---

## Q74360: Three Methods to Import Functions from a DLL

	Article: Q74360
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, an application can import a
	function from a dynamic-link library (DLL) in three different ways:
	
	1. Implicitly at link time
	
	2. Explicitly at link time
	
	3. Dynamically at run time
	
	Importing at link time is the simplest and the most commonly used.
	
	While importing at run time is cumbersome, it is the most powerful and it should
	be used if the link is not certain to succeed.
	
	MORE INFORMATION
	================
	
	An application implicitly imports a DLL function at link time when the import
	library for the DLL is listed on the linker command line for the application.
	For example, an application implicitly links to Windows functions because its
	linker command line includes LIBW.LIB.
	
	An application explicitly imports a DLL function at link time when the IMPORTS
	section of the application's module definition (DEF) file includes the name of
	the function.
	
	Both methods are easy to use because the application can call an imported
	function as if it were part of the application.
	
	However, in certain situations, importing at link time has drawbacks. For
	example, if the DLL is not found when Windows loads the application, Windows
	displays a system-modal message box: "please insert (a disk with the DLL) in
	drive A." Therefore, an application should not perform an implicit import at
	link time if the DLL may not be present.
	
	Another situation in which importing at link time is not appropriate occurs when
	the application needs to import a routine that is not exported by all versions
	of the DLL. An attempt to link to an invalid export ordinal results in an
	unrecoverable application error (UAE).
	
	Both of these situations are addressed by importing the function at run time. An
	application does this by calling the LoadLibrary function to load the DLL and
	then calling the GetProcAddress function to retrieve the address of the required
	function. The application should check the values returned from LoadLibrary and
	from GetProcAddress to ensure that these functions succeed. If the DLL is not
	found or does not export the desired function, one of these calls fails, and the
	application can handle the error gracefully.
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
