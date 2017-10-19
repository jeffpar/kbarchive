---
layout: page
title: "Q177085: FIX: Set Keyword with ParamArray Causes Type Mismatch Error"
permalink: /kb/177/Q177085/
---

## Q177085: FIX: Set Keyword with ParamArray Causes Type Mismatch Error

	Article: Q177085
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Set keyword is used to place a value in a ParamArray, the following
	run-time error occurs:
	
	  Run-time error '13':
	  Type mismatch
	
	RESOLUTION
	==========
	
	There are no known workarounds at this time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic 5.0. Form1 is created by
	  default.
	
	2. Add the following code to Form1:
	
	        Private Sub Form_Load()
	           Dim x
	           f x
	        End Sub
	
	        Public Sub f(ParamArray p())
	           Dim x
	           Set x = New Collection
	           Set p(0) = x          '<--- The error occurs on this statement
	        End Sub
	
	3. Run the project, and note that you receive the run-time error on the line
	  indicated above.
	
	Additional query words: kbVBp500bug kbVBp600fix kbVBp kbdsd kbDSupport kbVBA
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
