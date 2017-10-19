---
layout: page
title: "Q197190: BUG: Memory Leak Using UBound or LBound When Returning Array"
permalink: /kb/197/Q197190/
---

## Q197190: BUG: Memory Leak Using UBound or LBound When Returning Array

	Article: Q197190
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a function that returns an array as a parameter to the UBound or
	LBound functions, the memory allocated for the array is not released.
	
	CAUSE
	=====
	
	The array is copied to temporary return storage, but the temporary storage is
	not released until the application ends.
	
	RESOLUTION
	==========
	
	To avoid this problem, assign the return value to a local variable before using
	UBound or LBound. For example:
	
	     vntReturn = ArryFunc()
	     iAryLen = UBound(vntReturn)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a New Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton (Command1) to Form1.
	
	3. Add the following code to Form1:
	
	        Public Sub Command1_Click()
	           iAryLen = UBound(ArryFunc())
	        End Sub
	
	4. Add a standard Module to the project and add the following code:
	
	        Public Function ArryFunc() as Long ()
	           Dim x(100000) as Long
	           ArryFunc = x
	        End Function
	
	5. Run the project.
	
	RESULT: When you click the button, it leaks ~400k with each click.
	
	======================================================================
	Keywords          : kbnokeyword kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
