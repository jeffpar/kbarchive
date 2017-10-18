---
layout: page
title: "Q141879: PRB: Print Function Evaluation Order Has Changed"
permalink: kb/141/Q141879/
---

## Q141879: PRB: Print Function Evaluation Order Has Changed

	Article: Q141879
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
	
	The order of evaluation of the arguments to the Print statement differs in
	Visual Basic 3.0 and Visual Basic 4.0.
	
	CAUSE
	=====
	
	All products that use Visual Basic for Applications, including Visual Basic 4.0,
	evaluate all function calls contained within a Print statement first, before any
	printing is done. Visual Basic 3.0 evaluates functions while executing the Print
	statement.
	
	STATUS
	======
	
	This behavior is by design. The order of evaluation of multiple functions within
	an expression is undefined and may change from version to version. This is
	documented at the end of the online Help for the Function statement.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic.
	
	2. On the File menu, click New Project.
	
	3. Double-click the command button box on the toolbar (symbolized by a shaded
	  oval). This will display a command button named Command1 on the form.
	
	4. Add the following code to the general declarations section of Form1:
	
	        Function Test(N As Integer) As Integer
	           N = N + 1
	           Test = N
	        End Function
	
	5. Add the following code to the command buttons click event:
	
	        Sub Command1_Click()
	           Dim M As Integer
	           M = 1
	           Form1.Print M, Test(M), M, Test(M)
	        End Sub
	
	6. On the Run menu, click start (ALT, R, S) or press the F5 key.
	
	The following chart illustrates the behavior of this program under Visual Basic
	3.0 and Visual Basic 4.0:
	
	                      Print M    Test(M)    M    Test(M)
	
	Visual Basic 3.0         1          2          2     3
	Visual Basic 4.0         3          2          3     3
	
	Visual Basic 3.0 evaluates functions while processing the Print statement.
	Because Visual Basic 4.0 uses Visual Basic for Applications, all functions are
	evaluated first, before any printing is done.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
