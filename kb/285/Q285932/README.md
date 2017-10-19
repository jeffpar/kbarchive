---
layout: page
title: "Q285932: BUG: MaxLength Property Is Ignored When Alignment Is Changed"
permalink: /kb/285/Q285932/
---

## Q285932: BUG: MaxLength Property Is Ignored When Alignment Is Changed

	Article: Q285932
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MaxLength property of a TextBox control is set at design time, and the
	Alignment property of the control is changed at run time, the MaxLength value is
	ignored.
	
	RESOLUTION
	==========
	
	To work around this problem, reset and assign the MaxLength property at run
	time. See the code sample in the "More Information" section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a TextBox control to Form1.
	
	3. Set the MaxLength property of the TextBox control to 1.
	
	4. Paste the following code into the code window of Form1:
	
	  Private Sub Form_Load()
	      Text1.Text = ""
	      Text1.Alignment = 1
	  ' To work around this bug, uncomment the following two lines of code.
	  '    Text1.MaxLength = 0
	  '    Text1.MaxLength = 1
	  End Sub
	
	5. Press the F5 key to run the program.
	
	6. Type multiple characters in the TextBox control, and notice that the
	  MaxLength property is ignored.
	
	NOTE: This bug does not occur in Visual Basic 5.0 because the Alignment property
	is read-only at run time.
	
	Additional query words: left right center justify
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
