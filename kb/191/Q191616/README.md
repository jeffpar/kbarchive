---
layout: page
title: "Q191616: BUG: Order of Evaluation Change Between Native Code and P-Code"
permalink: kb/191/Q191616/
---

## Q191616: BUG: Order of Evaluation Change Between Native Code and P-Code

	Article: Q191616
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
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
	
	A program appears to be incorrectly evaluating expressions, or evaluates
	differently between P-Code and Native Code with optimizations.
	
	CAUSE
	=====
	
	Visual Basic does not guarantee the order of evaluation in expressions when
	programs are compiled to native code with optimizations.
	
	RESOLUTION
	==========
	
	In a no-optimization case, the expression is evaluated left to right. In a
	optimized case, Visual Basic may change the order in which it evaluates
	expressions. A change in logic may be required to achieve the desired results.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Microsoft Visual Basic. Form1 is created
	  by default.
	
	2. Select Add Module from the Project menu to add a standard code module
	  (Module1) to the project.
	
	3. Copy and Paste the following code into Module1:
	
	        Dim Sample As String
	
	        Public Sub Main()
	
	           Dim Temp1 As String
	
	           While (get_String) And Not (Sample Like "*/*/*")
	              MsgBox "In loop --> " & Sample & " " & Not _
	              (Sample Like "*/*/*")
	           Wend
	           MsgBox "after --> " & Sample
	        End Sub
	
	        Function get_String() As Boolean
	           Sample = "09/19/97"
	           get_String = True
	        End Function
	
	4. Select Project Properties from the Project menu. Change the Startup Object to
	  "Sub Main."
	
	5. Select the Compile tab and ensure the project is set to compile to Native
	  Code.
	
	6. Create the EXE by selecting Make Project1.EXE from the File menu.
	
	7. Run the EXE and note the results.
	
	8. Recompile the EXE by changing the project compile properties so that it
	  compiles to P-Code.
	
	9. Run the EXE again and note the different results. When compiled to P- Code,
	  the expression 'While (get_String) And Not (Sample Like "*/*/*")' is
	  evaluated as expected. However, when compiled to Native Code with
	  optimizations, the (Sample Like "*/*/*") will be evaluated first.
	
	Additional query words: kbDSupport kbVBp600bug kbCompiler kbdss kbVBp kbVBp500bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
