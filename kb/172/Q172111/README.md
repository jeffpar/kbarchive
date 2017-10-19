---
layout: page
title: "Q172111: FIX: VB5 Focus Not Returned to MDI Form After a Dialog Is Shown"
permalink: /kb/172/Q172111/
---

## Q172111: FIX: VB5 Focus Not Returned to MDI Form After a Dialog Is Shown

	Article: Q172111
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the versions of Microsoft Visual Basic listed at the beginning of this
	article, if an MDI Form's Enabled property is set to False before a CommonDialog
	(such as ShowOpen) is displayed, the focus does not return to the MDI form, even
	if it is set programmatically. The subsequent behavior is that instead of giving
	the MDI form the focus, focus is given to the last window that had focus before
	the MDI form.
	
	RESOLUTION
	==========
	
	The current workaround for this confirmed bug is to not set the MDI Form's
	Enabled property to False. The CommonDialog is Modal and automatically disables
	the MDI Form because of its Modal nature. Thus the workaround code for the code
	example in this article is:
	
	     Private Sub Picture1_Click()
	        CommonDialog1.ShowOpen
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic. Form1 is created by default.
	
	2. Add a MDI Form (MDIForm1) to the Project.
	
	3. Make the MDI Form the Startup Form.
	
	4. Add a Common Dialog Control (CommonDialog1) to the MDIForm1.
	
	5. Add a Picture Box Control (Picture1) to the MDIForm1.
	
	6. Add the following code to the Picture1_Click Event:
	
	        Private Sub Picture1_Click()
	           MDIForm1.Enabled = False
	           CommonDialog1.ShowOpen
	           MDIForm1.Enabled = True
	        End Sub
	
	7. Run the project. Note that the focus does not return to the MDIForm1. Instead
	  the focus is sent to the next available window.
	
	  NOTE: This behavior did not occur with the Cmdialog.vbx that shipped with
	  Visual Basic 3.0.
	
	Additional query words: kbVBp300bug kbVBp400bug kbVBp500bug kbVBp600fix kbVBp kbdsd kbDSupport 
	kbControl kbMDI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
