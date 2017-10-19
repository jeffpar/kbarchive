---
layout: page
title: "Q149325: BUG: Can't Load VB 3 Binary Form with Some Extended Characters"
permalink: /kb/149/Q149325/
---

## Q149325: BUG: Can't Load VB 3 Binary Form with Some Extended Characters

	Article: Q149325
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbGrpDSVB
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding a Visual Basic 3.0 form that contains code with some extended characters
	to a Visual Basic 4.0 16-bit or 32-bit project causes the following error:
	
	  The basic code in <filename> was corrupt, and couldn't be loaded.
	
	The problem has been confirmed with the ANSI characters 196/228, 197/229,
	214/246, 201/233, and 220/252. It may occur with other extended characters also.
	The problem only occurs if actual code contains these extended characters; it
	doesn't happen if a property is set to a string with one or more of the problem
	characters. This problem does not occur if the Visual Basic 3.0 form is saved as
	text rather than as binary, and also does not occur if the file name of the form
	does not contain any of the problem characters.
	
	RESOLUTION
	==========
	
	Use one of the following workarounds to avoid this problem:
	
	- Load the form(s) into Visual Basic 3.0 and save them as text before loading
	  them into either bitness of Visual Basic 4.0. This is the preferred solution
	  and should work in all cases.
	
	- It may be possible to work around the problem by changing the file name of
	  each problem form to one that does not contain any of the problem characters.
	  This can be done with File Manager or Explorer after saving the form in
	  Visual Basic 3.0 but before loading the form into Visual Basic 4.0 16- or
	  32-bit. Once the form has been loaded, it can be saved from Visual Basic 4.0
	  with the original filename.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start an utility that can output characters of any ANSI value (the Character
	  Map utility that ships with Windows NT performs this function). Select and
	  copy to the clipboard the ANSI characters numbered 196 and 197.
	
	2. Start Visual Basic 3.0. Form1 is created by default.
	
	3. Add this code to the Form_Click event of Form1:
	
	        Sub Form_Click()
	           Form1.Caption = "[ASCII 196][ASCII 197]"
	        End Sub
	
	4. Save the form file from Visual Basic 3.0 with a name of [ASCII 196][ASCII
	  197].FRM. Ensure that the Save As Text check box is NOT selected so the form
	  will be saved as binary.
	
	5. Shut down Visual Basic 3.0 and start either Visual Basic 4.0 16-bit or Visual
	  Basic 4.0 32-bit.
	
	6. Select Remove File from the File menu to remove the default Form1.
	
	7. Choose Add File from the File menu and choose to add the file saved in step
	  4. After clicking OK to dismiss the previous version message, the error
	  mentioned above will be displayed. If the form is examined at this point, no
	  code will be present.
	
	Additional query words: kbIDE 3.00
	
	======================================================================
	Keywords          : kbVBp400bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
