---
layout: page
title: "Q190080: PRB: VBCE 5.0 on Same Machine as VB6 Causes Application Error"
permalink: /kb/190/Q190080/
---

## Q190080: PRB: VBCE 5.0 on Same Machine as VB6 Causes Application Error

	Article: Q190080
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAddIn kbide kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 12-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Windows CE Toolkit for Visual Basic 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to debug an Add-In project built in Visual Basic 6.0 while having the
	Windows CE Toolkit for Visual Basic 5.0 (VBCE5) installed on the system and
	loaded within the Add-In Manager Dialog for Visual Basic 5.0 leads to an
	Application Error.
	
	RESOLUTION
	==========
	
	Deselecting the Windows CE Add-In from the Visual Basic 5.0 Add-In manager
	prevents further Application Errors.
	
	STATUS
	======
	
	Windows CE Toolkit for Visual Basic 5.0 is not intended to work with Visual
	Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The steps below assume Visual Basic 5.0 and 6.0 are both installed on the system,
	as well as the Windows CE Toolkit for Visual Basic 5.0.
	
	1. Start Visual Basic 6.0 and create a new AddIn Project, with its default name
	  of "MyAddIn."
	
	2. Press the F5 key to run MyAddIn.
	
	3. Run a second instance of Visual Basic 6.0. The following error message
	  appears:
	
	  'MyAddIn' Could not be loaded. Remove it from the list of available Add-Ins?
	
	4. Click No.
	
	5. Create a New Standard EXE project, Project1. Form1 is created by default.
	
	6. Close Project1 without saving and open a New ActiveX DLL project. The ceide
	  dialog box appears with the following text:
	
	  Run-time error '48' File Not Found: Pvbcore.dll
	
	7. Click OK, and note that the ActiveX DLL project is loaded.
	
	8. Close the instance of Visual Basic 6.0 that is not running the Addin project
	  and note that an Application Error occurs.
	
	Additional query words: vbce vbce5 wince wce
	
	======================================================================
	Keywords          : kbAddIn kbide kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbWinCETKVBSearch kbWinCESearch
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
