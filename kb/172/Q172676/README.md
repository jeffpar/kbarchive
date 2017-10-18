---
layout: page
title: "Q172676: PRB: Autolist Feature Breaks When Project Cannot Compile"
permalink: kb/172/Q172676/
---

## Q172676: PRB: Autolist Feature Breaks When Project Cannot Compile

	Article: Q172676
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Visual Basic Development Environment, the Autolist feature does not work
	for Class or Standard Module objects.
	
	CAUSE
	=====
	
	This problem may occur when two Enum structures have the same name within a
	project. The project cannot be compiled under these circumstances; you receive
	the following error when the project compiles:
	
	  Compile Error: Ambiguous Name Detected: <name>
	
	
	RESOLUTION
	==========
	
	Resolve the ambiguous name by renaming one of the Enum structures. If you are
	unsure if this is the cause of the problem, select Start With Full Compile from
	the Run menu. If you receive an "Ambiguous Name Detected" error, check your code
	for the name listed in the error message.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new "Standard EXE" project in Visual Basic.
	
	2. Add a form, two class modules, and a standard module.
	
	3. Add the following code to the General Declarations section of Module1:
	
	     Public Sub modulesub()
	
	     End Sub
	
	4. Add the following code to Class1:
	
	     Public Enum test
	        a = 1
	        b = 2
	        c = 3
	     End Enum
	
	     Public Sub classonesub()
	
	     End Sub
	
	5. Add the following code to Class2:
	
	     Public Enum test
	        a = 1
	        b = 2
	        c = 3
	     End Enum
	
	     Public Sub classtwosub()
	
	     End Sub
	
	6. In the Click event of Form1, add the following code:
	
	     Dim c1 As New Class1
	     Dim c2 As New Class2
	     ' test code here
	
	7. In the Click event of Form1, try adding code that normally causes the
	  Autolist feature to display. You must type the following entries; do not cut
	  and paste. For example:
	
	     c1.
	     c2.
	     Module1.
	
	  Note that after you type the period, the Autolist feature is not invoked as
	  expected.
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport KBCOMPILE KBIDE
	
	======================================================================
	Keywords          : kbide kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
