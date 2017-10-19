---
layout: page
title: "Q182069: BUG: Compile Error on Print Statement in a With..End Block"
permalink: /kb/182/Q182069/
---

## Q182069: BUG: Compile Error on Print Statement in a With..End Block

	Article: Q182069
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You invoke the Print method from within a With..End block, as follows:
	
	     With Form1
	        .Print "Generates Error"
	     End With
	
	When you run the project, the following error message is displayed:
	
	  Compile Error
	  Method or Data not found.
	
	CAUSE
	=====
	
	"Print" is a reserved word. If Print is used within a With statement, Visual
	Basic incorrectly parses the word.
	
	RESOLUTION
	==========
	
	Explicitly reference the object when invoking the Print method. For example, use
	the following code sample to eliminate this behavior:
	
	     Form1.Print "Printed on the Form."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub Form_Click()
	           With Form1
	               .Print "Generates Error"
	           End With
	
	           'To use the workaround code, comment the
	           'previous three lines and uncomment the
	           'following line:
	
	           'Form1.Print "Desired Behavior"
	        End Sub
	
	3. On the Run menu, click Start or press the F5 key to start the program. Click
	  on the Form, and note that the following error message appears:
	
	  Compile Error
	  Method or Data not found.
	
	Additional query words: kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport kbCompiler
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
