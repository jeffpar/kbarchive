---
layout: page
title: "Q159748: WD97: How to Protect VBA Code from Unauthorized Access"
permalink: /kb/159/Q159748/
---

## Q159748: WD97: How to Protect VBA Code from Unauthorized Access

	Article: Q159748
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbusage kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In earlier versions of Word, you can use the WordBasic MacroCopy statement to
	convert an editable macro to an execute-only macro. You cannot edit or view an
	execute-only macro.
	
	The execute-only option was used with earlier versions of Word that used
	WordBasic as their programming language and is used to protect macros from being
	modified. This execute-only feature is no longer available in Word 97 and later
	versions. Instead, you can use the Microsoft Visual Basic for Applications Lock
	Project property to protect your code from unauthorized changes or to prevent
	others from viewing the code.
	
	MORE INFORMATION
	================
	
	To lock your project, set Project Properties, using the following steps:
	
	1. Start the Microsoft Visual Basic Editor and open your project.
	
	2. On the Tools menu, click Project Properties, and then click the General tab.
	
	3. Set the following properties:
	
	   - Project Name
	
	   - Project Description
	
	   - Help File Name
	
	   - Project Help Context ID
	
	4. Click the Protection tab.
	
	5. Click to select the Lock Project For Viewing check box.
	
	6. Type your password in the Password and Confirm Password boxes.
	
	7. Save and close your project.
	
	  NOTE: Protection does not take effect until you save and close your project.
	
	For more information about locking projects, while in the Visual Basic for
	Applications Editor, click the Office Assistant, type "lock project" (without
	the quotation marks), click Search, and then click to view "Protection Tab
	(Project Properties dialog Box)."
	
	For information about how to change a macro to execute-only status in earlier
	versions of Word, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q79024' Changing a Macro to Execute-Only Status
	
	Additional query words: wordcon word8 word97 8.0 protect protecting protects execute only executable vb vba vbe
	
	======================================================================
	Keywords          : kbmacro kbusage kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
