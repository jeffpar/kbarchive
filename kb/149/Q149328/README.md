---
layout: page
title: "Q149328: FIX: Selecting Invisible Tab Can Cause GPF with SSTab Control"
permalink: /kb/149/Q149328/
---

## Q149328: FIX: Selecting Invisible Tab Can Cause GPF with SSTab Control

	Article: Q149328
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp600fix kbGrpDSVB
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
	
	With the SSTab control, switching to a tab that has been previously made
	invisible can cause application errors or GPFs. In testing these, exceptions
	were raised in both TABCTL16.OCX and TABCTL32.OCX at these addresses:
	
	  TABCTL16.OCX   0001:00004D88
	  TABCTL32.OCX   0137:0578B4E5
	
	This problem may also manifest itself at other addresses on different
	configurations.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add a single SSTab control to the form.
	
	3. Add this code to the Form_Load event of Form1:
	
	        Private Sub Form_Load()
	           SSTab1.TabVisible(0) = False
	           SSTab1.Tab = 0
	        End Sub
	
	4. Press F5 or select Start from the Run menu to run the application. An
	  application error or GPF will occur before the form finishes loading. This
	  problem also occurs if an EXE is made and run.
	
	Additional query words: kbVBp400bug kbVBp600fix kbVBp kbdsd kbDSupport general protection fault gp-f kbCtrl
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp600fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
