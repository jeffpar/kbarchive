---
layout: page
title: "Q130610: How to Call a Wizard in a Program"
permalink: kb/130/Q130610/
---

## Q130610: How to Call a Wizard in a Program

	Article: Q130610
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To start a Wizard from code in the Command window or in a program, use the
	_WIZARD system variable. This system variable contains the full path and
	filename of the currently assigned wizard application. By default, this is set
	to the C:\VFP\WIZARD.APP wizard application that ships with Visual FoxPro. To
	launch the full list of available wizards, use this command:
	
	     DO (_WIZARD)
	
	To call a specific type of wizard, pass a parameter to WIZARD.APP such as:
	
	     DO (_WIZARD) WITH 'FORM'
	
	This invokes the Auto Form Wizard if you have a table open. Or you can call a
	type of wizard such as:
	
	     DO (_WIZARD) WITH 'QUERY'
	
	This opens the Wizard Selection dialog box with only the Query type of wizards
	listed.
	
	The WIZARD.DBF free table located in the C:\VFP\WIZARDS directory contains the
	names, descriptions, types, parameters, and other information for all the
	wizards included with Visual FoxPro. The Type field in the WIZARD.DBF table
	contains the string or name used as the parameter to passed to WIZARD.APP.
	
	To directly call the Form Designer wizard, and by pass the dialog boxes, use the
	following:
	
	      DO (_WIZARD) WITH 'Form', 'Form', 'Form'
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
