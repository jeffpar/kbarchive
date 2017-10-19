---
layout: page
title: "Q193261: BUG: Error 458 Using For Each with Variant Array of UDTs"
permalink: /kb/193/Q193261/
---

## Q193261: BUG: Error 458 Using For Each with Variant Array of UDTs

	Article: Q193261
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a For Each to loop over a Variant containing an array of User
	Defined Types (UDTs), the following error may occur:
	
	  Run-time error '458': Variable uses an Automation type not supported in
	  Visual Basic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX EXE project in Visual Basic. Class1 is created by
	  default.
	
	2. Paste the following code into Class1:
	
	        Type MyType
	           x As Integer
	           y(5) As Integer
	        End Type
	
	3. Add a standard module to the project by selecting "Add Module" from the
	  "Project" menu.
	
	4. Paste the following code into Module1:
	
	        Sub main()
	           Dim x(5) As MyType
	           Dim y as Variant
	           y = x
	           For Each g In y
	           Next g
	        End Sub
	
	5. Open the Immediate Window by selecting it from the View menu.
	
	6. Type "main" (without quotes) into the Immediate Window and press the ENTER
	  key to run the main subroutine. Note that the above error occurs on the For
	  Each line.
	
	  NOTE: If you change the line "For Each g In y" to "For Each g In x" so that
	  the "For Each" statement will loop through the array X, the correct error
	  description "For Each may not be used on an array of user-defined types or
	  fixed-length strings" will occur instead.
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600bug kbCompiler
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
