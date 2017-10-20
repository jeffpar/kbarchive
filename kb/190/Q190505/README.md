---
layout: page
title: "Q190505: BUG: Passing a Double Variable Causes Overflow Error in IDE"
permalink: /kb/190/Q190505/
---

## Q190505: BUG: Passing a Double Variable Causes Overflow Error in IDE

{% raw %}

	Article: Q190505
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
	
	If you pass a variable of type Double as a single argument to a sub or function,
	you may get the following error when you run the project in the design
	environment:
	
	  Run-time error "6" Overflow
	
	However, when you compile the project and run it as a standalone executable, no
	overflow error is reported.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Paste the following code into the code window of Form1:
	
	        Private Sub Form_Load()
	           Dim v As Double
	           v = CDbl(3.1E+50)
	           Test v
	        End Sub
	
	        Sub Test(ByVal X As Single)
	           MsgBox X
	        End Sub
	
	3. Press the F5 key to run the project. You get the following error message:
	
	  Run-time error "6" Overflow
	
	4. Compile the executable by clicking File, Make Project1.exe.
	
	5. Run the executable. Note that no overflow error is reported. Instead it
	  prints out "1#.INF."
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600bug kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
