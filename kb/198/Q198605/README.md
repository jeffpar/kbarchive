---
layout: page
title: "Q198605: BUG: Find Next Crashes After Closing a Maximized Code Window"
permalink: /kb/198/Q198605/
---

## Q198605: BUG: Find Next Crashes After Closing a Maximized Code Window

{% raw %}

	Article: Q198605
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVBp kbVBp500bug kbVBp600bug kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Closing a maximized code window after performing a Find and Find Next
	subsequently on the code window causes Visual Basic to crash.
	
	The possible error messages are:
	
	  An application error has occurred.
	  VB6.exe
	  Exception: Access Violation (0x00000005) Address: 0x0fb16e90
	
	  -or-
	
	  An application error has occurred.
	  VB5.exe
	  Exception: Access Violation (0x00000005) Address: 0x0fb16e90
	
	  -or-
	
	  This program has performed an illegal operation and will be shut down.
	
	  -or-
	
	  Edit: VB6.EXE Application Error
	  The instruction at "0x0fa76bb1" referenced memory at "0x00000058". The
	  memory could not be "read".
	
	  -or-
	
	  Edit: VB5.EXE Application Error
	  The instruction at "0x0fa76bb1" referenced memory at "0x00000058". The
	  memory could not be "read".
	
	RESOLUTION
	==========
	
	This problem does not occur if the code window is not maximized.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Paste the following code in Form1:
	
	        Private Sub Form_Load()
	           Dim x As Integer
	           x = 3
	        End Sub
	
	3. Maximize the code window.
	
	4. From the Edit menu, select Find.
	
	5. Enter 'x' in the Find What text box of the Find dialog box.
	
	6. Click the Find Next command button.
	
	7. Close the code window by clicking on the 'X' button in the upper right hand
	  corner of the code window, not for Visual Basic IDE.
	
	8. Click the Find Next button.
	
	Visual Basic fails with one of the error messages listed in the SYMPTOMS section.
	
	======================================================================
	Keywords          : kbide kbVBp kbVBp500bug kbVBp600bug kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
