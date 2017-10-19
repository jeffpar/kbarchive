---
layout: page
title: "Q113686: FIX: Lost MouseDown Event with Command Button &amp; Check Box"
permalink: /kb/113/Q113686/
---

## Q113686: FIX: Lost MouseDown Event with Command Button &amp; Check Box

	Article: Q113686
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, versions 2.0, 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a user repeatedly clicks a command button or check box, the control does not
	receive all the MouseDown events, but it does receive all the MouseUp events.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in Visual Basic
	version 4.0.
	
	MORE INFORMATION
	================
	
	The following steps demonstrate that a MouseDown event is lost after repeatedly
	clicking a command button.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Command button (Command1) to Form1.
	
	3. Add the following code to the Command1_MouseDown event procedure of Form1:
	
	     Sub Command1_MouseDown ()
	        Static i
	        i = i + 1
	        Debug.Print "MouseDown - "; i
	     End Sub
	
	4. Add the following code to the Command1_MouseUp event procedure of Form1:
	
	     Sub Command1_MouseUp ()
	        Static j
	        j = j + 1
	        Debug.Print "MouseUp - "; j
	     End Sub
	
	5. From the Run menu, choose Start (ALT, R, S) or press the F5 key to run the
	  program.
	
	6. Click the Command1 button repeatedly. The debug window will show that fewer
	  MouseDown events are generated than MouseUp events.
	
	Additional query words: buglist2.00 buglist3.00 2.00 3.00 fixlist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :2.0,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
