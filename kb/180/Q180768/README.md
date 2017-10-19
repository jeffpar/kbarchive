---
layout: page
title: "Q180768: BUG: Label Control BackStyle Property Does Not Work"
permalink: /kb/180/Q180768/
---

## Q180768: BUG: Label Control BackStyle Property Does Not Work

	Article: Q180768
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500bug kbVBp600bug kbOSWinCE100bug kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Label Control BackStyle property is set to Transparent, the control is
	not be transparent at run-time. At run time, the control's BackColor is either
	the BackColor of the form as it was set at design time or as it was set during
	the Form_Load event.
	
	RESOLUTION
	==========
	
	If you use the Refresh method of the Label, the BackColor of the Label is
	updated to the BackColor of the form, but it will not be transparent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Add a Label to Form1, set its BackColor to blue, and its BackStyle to "0 -
	  Transparent."
	
	3. Add the following code to the form module:
	
	        Private Sub Form_Click()
	           Form1.BackColor = vbRed
	        End Sub
	
	        Private Sub Form_Load()
	           Form1.BackColor = vbGreen
	        End Sub
	
	4. Press F5 to run the project and note that the Label BackColor is set to the
	  form's BackColor, green.
	
	RESULT: Click the form and note that the form's BackColor changes to red, whereas
	the label's BackColor remains green.
	
	Additional query words: vbce evb vbce6 wce
	
	======================================================================
	Keywords          : kbToolkit kbVBp500bug kbVBp600bug kbOSWinCE100bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
