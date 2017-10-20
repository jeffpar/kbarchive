---
layout: page
title: "Q172673: BUG: Control Unexpectedly Gains Focus When Made Visible"
permalink: /kb/172/Q172673/
---

## Q172673: BUG: Control Unexpectedly Gains Focus When Made Visible

{% raw %}

	Article: Q172673
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the Visible property of a control to True at run-time, the active
	control loses focus. The control for which you changed the Visible property
	gains the focus.
	
	This problem occurs with the Sheridan 3D controls (SSRibbon, SOption, SSPanel,
	SSCommand, SSFrame and SSCheck).
	
	NOTE: This problem will occur with other controls created with the MFC Control
	FrameWork.
	
	RESOLUTION
	==========
	
	To work around this problem, set the focus back to the control that was active
	prior to changing the Visible property of the Sheridan 3D control. The following
	code illustrates how you can restore focus to the active control after changing
	the Visible property of a SSPanel control:
	
	     Dim ctrl as Control
	
	     Set ctrl = ActiveControl
	     SSPanel1.Visible = True
	     ctrl.SetFocus
	
	NOTE: This code does not prevent the LostFocus and GotFocus event from firing
	when focus is inadvertently set to the Sheridan 3D control.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new "Standard EXE" project.
	
	2. Click Components on the Project menu. Check "Sheridan 3D Controls"
	  (THREED32.OCX) and click OK.
	
	  NOTE: If you do not have THREED32.OCX installed, refer to README.TXT in the
	  \Tools\Controls directory of your Visual Basic 5.0 CD-ROM.
	
	3. Add an SSPanel control and a TextBox control to Form1.
	
	4. Set the Visible property of the SSPanel control to False.
	
	5. Add the following code to the Click event of Form1.
	
	        SSPanel1.Visible = True
	        Debug.Print ActiveControl.Name
	
	6. Press the F5 key to run the application.
	
	7. Set the focus to Text1 and then click the Form. Notice that the SSPanel
	  control has the focus and not Text1 as expected.
	
	Additional query words: 3-D activex ocx mfc c++ kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
