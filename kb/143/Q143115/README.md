---
layout: page
title: "Q143115: FIX: Choose Function Incorrectly Uses Option Base Setting"
permalink: kb/143/Q143115/
---

## Q143115: FIX: Choose Function Incorrectly Uses Option Base Setting

	Article: Q143115
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
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
	
	A Visual Basic program using the Choose function incorrectly returns the wrong
	value if the program sets the Option Base to a 1.
	
	RESOLUTION
	==========
	
	The following are the ways to work around this issue:
	
	1. Add 1 to the index argument.
	
	2. Create the following function in a module. Copy the following code to the
	  code window of the module:
	
	        Option Explicit
	
	        'This function will be used in place of the built in Choose function
	        'and this takes the setting of Option Base into account.
	
	        Public Function Choose(i As Integer, ParamArray a())
	           Choose = a(i + LBound(a) - 1)
	        End Function
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	The following creates a program to reproduce this behavior. A command button
	displays the results of the Choose function in the Debug window. When you set
	the Option Base to 1, the Choose function incorrectly returns a Null value.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 4.0, or if it is already running, click New Project on the
	  File menu.
	
	2. Add a Command button to the Form1 form.
	
	3. Copy the following code to the Code window of the Form1 form:
	
	        Option Explicit
	
	        'Comment the next line to work around this behavior
	        Option Base 1
	
	        Private Sub Command1_Click()
	           Debug.Print Choose(1, "Index 1a", "Index 1b", "Index 1c")
	           Debug.Print Choose(2, "Index 2a", "Index 2b", "Index 2c")
	           Debug.Print Choose(3, "Index 3a", "Index 3b", "Index 3c")
	        End Sub
	
	4. On the Run menu, click Start or press the F5 key to start the program. Click
	  the Command button. The Debug window displays, "Null" and "b." The correct
	  values should be "a" and "b."
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
