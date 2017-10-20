---
layout: page
title: "Q118814: DOCERR: Win32 APIs Callable from a QuickWin Application"
permalink: /kb/118/Q118814/
---

## Q118814: DOCERR: Win32 APIs Callable from a QuickWin Application

{% raw %}

	Article: Q118814
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 166 of the PowerStation 32 "Programmer's Guide," the first paragraph
	implies that you cannot call Win32 APIs from a QuickWin application; however,
	you actually can call Win32 APIs that do not require a window handle.
	
	MORE INFORMATION
	================
	
	To call a Win32 API, you must create a proper INTERFACE TO statement and link
	with the proper import library.
	
	You can determine the proper INTERFACE TO statement by reading the "Win32
	Programmer's Reference". The STDCALL attribute is required for the function
	declaration.
	
	The sample code below calls the MessageBox() API, contained in the import
	library, USER32.LIB, which is already linked into the program for a QuickWin
	application by default. The first parameter of MessageBox() is a window handle
	or 0 (NULL). You must use 0, because the window handle is not available in a
	QuickWin application.
	
	NOTE: When you pass a string to an API, make sure that you use the C convention,
	so that the string is NULL terminated. See page 53 of the "Programmer's Guide"
	for a discussion of C strings.
	
	Sample Code
	-----------
	
	  C Compile options needed: /MW
	
	        INTERFACE TO FUNCTION
	       +MESSAGEBOX  (hwnd, text, title, icon)
	        INTEGER*4 MESSAGEBOX [STDCALL, ALIAS:'_MessageBoxA@16']
	        INTEGER*4 hwnd [VALUE]
	        CHARACTER*(*) text [REFERENCE]
	        CHARACTER*(*) title [REFERENCE]
	        INTEGER*4 icon [VALUE]
	        END
	
	        CHARACTER text*34, title*21
	
	        text = 'This API was called from FORTRAN.'C
	        title = 'QuickWin Application'C
	
	        PRINT*, "Enter any character to continue: "
	        READ(*, '(A)')
	
	        i = MESSAGEBOX(0, text, title, 1)
	
	        PRINT*, "MessageBox called"
	
	        END
	
	Additional query words: 1.00 4.00 docerr
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower32400NT
	Version           : :1.0,4.0
	
	=============================================================================
	

{% endraw %}
