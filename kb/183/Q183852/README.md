---
layout: page
title: "Q183852: DOC: PRINTER_DEFAULTS Contains an Incorrectly Typed Member"
permalink: /kb/183/Q183852/
---

## Q183852: DOC: PRINTER_DEFAULTS Contains an Incorrectly Typed Member

	Article: Q183852
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbdocfix kbAPI kbSDKWin32 kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The API Text Viewer shows the pDevMode member of the PRINTER_DEFAULTS user-
	defined type as DEVMODE user-defined type. If you pass this member to another
	Windows API to control a printer, the API works correctly only under Windows 95,
	Windows 98, and Windows Me, but not under Windows NT or Windows 2000. The
	pDevMode member should be declared as a long.
	
	MORE INFORMATION
	================
	
	The following is the correct type declaration for the PRINTER_DEFAULTS user-
	defined type:
	
	     Type PRINTER_DEFAULTS
	        pDatatype As String
	        pDevMode As Long
	        pDesiredAccess As Long
	     End Type
	
	REFERENCES
	==========
	
	To learn more about the API Text Viewer, on the Visual Basic 5.0 Help menu,
	click Books Online. In the Find text box, enter the search criterion "api"
	(without the quotation marks). The first item under the Visual Basic Books
	Online node is the topic "Accessing the Microsoft Windows API."
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbdocfix kbAPI kbSDKWin32 kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	
	=============================================================================
	
