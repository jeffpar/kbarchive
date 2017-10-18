---
layout: page
title: "Q145638: FIX: Cannot Select Sheridan Tab Control from Modal Form"
permalink: kb/145/Q145638/
---

## Q145638: FIX: Cannot Select Sheridan Tab Control from Modal Form

	Article: Q145638
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
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
	
	When showing a Modal form containing the Sheridan Tab control from the Load
	event of another form, none of the Tabs on this dialog box can be selected.
	
	RESOLUTION
	==========
	
	Instead of showing the second form from the Load event of another form, show the
	form in the Activate event. The following code could be used as a workaround:
	
	     Private Sub Form_Activate()
	       Static AlreadyShown As Boolean
	       If Not AlreadyShown Then
	         Form2.Show vbModal
	       End If
	       AlreadyShown = True
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0 and 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. In the Load event for Form1, place the following line of code:
	
	        Form2.Show vbModal
	
	3. Add a new form to the project (on the Insert menu, click Form).
	
	4. Place the Sheridan tab (SSTab) onto Form2.
	
	5. Run the project by pressing the F5 key. On Form2, try clicking on any of the
	  Tabs on the Sheridan control. None of these Tabs can be selected.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q149274 BUG: SSTab Is Locked When on Modal Form Shown at Load Time
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp600fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
