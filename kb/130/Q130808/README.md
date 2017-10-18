---
layout: page
title: "Q130808: Help Building Fortran PowerStation 32 App that Targets Win32s"
permalink: kb/130/Q130808/
---

## Q130808: Help Building Fortran PowerStation 32 App that Targets Win32s

	Article: Q130808
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran kbOSWin32s
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Fortran PowerStation 32 was not designed to build applications that target
	Win32s, nor has this capability been tested. Therefore, developing Win32-based
	applications with Fortran PowerStation 32 that target Win32s is not supported.
	
	However, it is possible to create a Win32-based application that runs on Win32s
	if you follow the guidelines for all applications that target Win32s.
	
	MORE INFORMATION
	================
	
	There are many Win32 APIs that are not supported under Win32s. They will return
	ERROR_CALL_NOT_IMPLEMENTED. The Win32 Programmer's Reference identifies whether
	or not each Win32 API is supported under Win32s. As long as you use only the
	Win32 APIs that are supported on Win32s, your application should run on Win32s.
	
	
	Fortran PowerStation 32 can create two kinds of applications: Console and
	QuickWin (Standard Graphics is a disguised QuickWin). Win32s does not support
	the Console API, so console applications are not an option under Win32s. In
	addition, Fortran PowerStation 32 QuickWin libraries were not restricted to the
	subset of Win32 APIs that are supported under Win32s. Therefore, some functions
	and statements in a QuickWin application will fail under Win32s.
	
	We do not have a list of the things in a QuickWin application that will fail
	under Win32s, so when you use QuickWin under Win32s, you use it at your own
	risk.
	
	The "Sample Code" in this article is an example of a program that does not work
	as expected under Win32s. If the sample code is compiled with Fortran
	PowerStation 32 using the /MW compile option (create QuickWin app) and run under
	Windows NT, the following is displayed in a child window:
	
	     character * 20
	
	When the application is run under Win32s, this string is not displayed.
	
	Sample Code
	-----------
	
	  C Compile options needed: /MW
	
	        character * 20  ch20
	
	        open (1,file='test.for')
	        read (1,' (a)') ch20
	        write(*,' (1x,a)') ch20
	        close(1)
	        stop
	        end
	
	REFERENCES
	==========
	
	For information regarding Win32s and Microsoft FORTRAN PowerStation versions 1.0
	and 1.0a for MS-DOS, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q118549 PRB: PowerStation Applications Do Not Start Under Win32s
	
	Additional query words: 1.00 4.00 win32sdk
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbOSWin32s 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	
