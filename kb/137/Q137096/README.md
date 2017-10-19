---
layout: page
title: "Q137096: PRB: Type Mismatch When Passing Variants to Word Using OLE"
permalink: /kb/137/Q137096/
---

## Q137096: PRB: Type Mismatch When Passing Variants to Word Using OLE

	Article: Q137096
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to pass a Variant data type to Microsoft Word using OLE automation,
	a "Type mismatch" error occurs. For example, if objVar is an object variable set
	to a Word.Basic object, and Text1 is some text box containing a string value,
	the following line of code generates the error:
	
	     objVar.Insert  Text1
	
	This problem did not exist in Visual Basic version 3.0, so it must be taken into
	consideration when doing any code porting and/or upgrading.
	
	RESOLUTION
	==========
	
	To avoid this problem, the variable passed to Word must be explicitly typed. The
	previous example can be replaced by either of the following to prevent this
	error:
	
	     objVar.Insert Text1.Text
	
	  -or-
	
	     objVar.Insert CStr(Text1)
	
	STATUS
	======
	
	This behavior is by design
	
	MORE INFORMATION
	================
	
	Steps to Reproduce and Correct Behavior
	---------------------------------------
	
	1. Start a new project in Visual Basic 4.0. Form1 is created by default.
	
	2. Add a command button (Command1) and a text box (Text1) to Form1.
	
	3. Place the following code in the Command1_Click event procedure:
	
	        Dim objVar As Object
	        Set objVar = CreateObject("Word.Basic")
	        objVar.FileNew
	        objVar.Insert Text1
	        Set objVar = Nothing
	
	4. Press F5 to run the program.
	
	5. Click Command1. Error 13, "Type mismatch" is generated.
	
	6. Modify the code in the Command1_Click event procedure to this:
	
	        Dim objVar As Object
	        Set objVar = CreateObject("Word.Basic")
	        objVar.FileNew
	        ' Notice that this is the only line changed
	        objVar.Insert Text1.Text
	        Set objVar = Nothing
	
	7. Repeat step 5. No error is encountered. Check Microsoft Word, and you will
	  find a new document containing the word "Text1" (the value of Text1.Text).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
