---
layout: page
title: "Q150950: DOCFIX: SelectObject Declaration is Incorrect in API Viewer"
permalink: kb/150/Q150950/
---

## Q150950: DOCFIX: SelectObject Declaration is Incorrect in API Viewer

	Article: Q150950
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following describes a documentation error for the SelectObject function call
	as listed in the 32-bit edition of Visual Basic version 4.0 WIN32API.TXT file
	used by the Application Programming Interface (API) Viewer:
	
	     Declare Function SelectObject Lib "user32" Alias "SelectObject" _
	     (ByVal hdc As Long, ByVal hObject As Long) As Long
	
	Attempting to use this function as documented results in the following (error
	453) error message:
	
	  Specified DLL Function Not Found
	
	STATUS
	======
	
	This documentation error was fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	The SelectObject function is incorrectly documented as existing in the
	USER32.DLL file. This function is a Graphics Device Interface function and is
	therefore in the GDI32.DLL file. The correct declaration is as follows:
	
	     Declare Function SelectObject Lib "GDI32" Alias "SelectObject" _
	     (ByVal hdc As Long, ByVal hObject As Long) As Long
	
	You can also change the statement in the file win32api.txt so the next time you
	use the API Text Viewer, the Declare statement will be correct.
	
	Additional query words: kbVBp400 kbAPI kbDSupport kbdsd kbtoolkit
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	
	=============================================================================
	
