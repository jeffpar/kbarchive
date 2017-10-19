---
layout: page
title: "Q138704: DOC: GETFILE() Help Topic States DialogCaption Is at Top"
permalink: /kb/138/Q138704/
---

## Q138704: DOC: GETFILE() Help Topic States DialogCaption Is at Top

	Article: Q138704
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Help topic for the GETFILE() function describes the parameters that
	GETFILE() can accept. The Help topic describes the second parameter,
	cDialogCaption, with the following text:
	
	  Specifies the caption displayed at the top of the Open dialog box.
	
	If Visual FoxPro's Help file is opened on a machine running Windows 95, the above
	description (physical location) of the Dialog Caption is incorrect.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	The GETFILE() function calls Comdlg32.dll in Windows 95. The physical location
	of the string affected by the second parameter in GETFILE() is not at the top of
	the dialog box produced by Comdlg32.dll as it is in Window 3.x and as it is
	described in the Help file. It is in the lower-left corner of the dialog box
	produced by Comdlg32.Dll. By default, it contains the "File name:" string.
	
	Additional query words: docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
