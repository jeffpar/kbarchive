---
layout: page
title: "Q215411: BUG: VBCE: Some MessageBox Options Not Implemented"
permalink: /kb/215/Q215411/
---

## Q215411: BUG: VBCE: Some MessageBox Options Not Implemented

	Article: Q215411
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MessageBox options vbOK and vbOKCancel are not implemented in the Microsoft
	Windows CE Toolkit for Visual Basic 6.0 (VBCE6).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Behavior
	
	---------------------------
	
	1. Start a new Windows CE H/PC Pro Project in Visual Basic. Form1 is created by
	  default.
	
	2. Paste the following code in the form's code window:
	
	  Option Explicit
	
	  Private Sub Form_Click()
	     MsgBox "test", vbYesNoCancel
	  End Sub
	
	3. Run the project and click on the form. Notice that "Yes," "No," and "Cancel"
	  appear in the MessageBox's client area (not in the titlebar).
	
	4. Stop the application and change the code in the Form_Click event to:
	
	  MsgBox "Test", vbOKCancel
	
	5. Run the project and click on the form. This time, only the "OK" button
	  appears in the titlebar.
	
	Additional query words: vbce wce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
