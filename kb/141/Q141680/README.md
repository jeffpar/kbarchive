---
layout: page
title: "Q141680: BUG: Error Occurs When Printing a Form Stored in an Array"
permalink: /kb/141/Q141680/
---

## Q141680: BUG: Error Occurs When Printing a Form Stored in an Array

	Article: Q141680
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp400bug kbGrpDSVB kbDSupport
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
	
	An application error occurs when calling the Print method of a form object
	contained within a form array.
	
	RESOLUTION
	==========
	
	To work around this problem, define a non-array form variable and set the
	variable to reference the form array element that you want to manipulate. Once
	this variable has been initialized, you can safely call the Print method of the
	newly defined Form variable, as shown in the example below:
	
	     Private Sub Form_Load()
	     Dim MyForm As Form
	       Dim fl(1) As Form2
	       Set fl(0) = New Form2
	       Set MyForm = fl(0)
	       MyForm.Show  'Show the Form2 form
	       MyForm.Print 'Print the form to the screen
	     End Sub
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. Microsoft is researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic 4.0 or if it is already running, click New Project on the
	  File menu.
	
	2. Copy the following code to the Code window of the Form1 form:
	
	        Private Sub Form_Load()
	           Dim fl(1) As Form2
	           Set fl(0) = New Form2
	           fl(0).Show  'Show the Form2 form
	           fl(0).Print 'Print the form to the screen
	        End Sub
	
	3. On the Insert menu, click Form to insert a second form into the project.
	
	4. On the Run menu, click start or press the F5 key to start the program. An
	  application error occurs displaying one of the following messages and Visual
	  Basic ends. The error occurs when the form array element's Print method is
	  called.
	
	
	  
	
	     32-bit Visual Basic
	        Windows NT 3.51-An application error has occurred and an
	                        application error log is being generated.
	                        VB32.exe. Exception illegal instructions
	                        (0xc000001d), Address: (0x001818b3)
	
	        Windows 95/98-VB32 executed an invalid instruction in module
	                   <unknown> at 0000:00562eb3.
	
	  
	
	     16-bit Visual Basic under all operating systems
	        VB caused a General Protection Fault in module VBA2.DLL at
	        0009:87FD.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp400bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
