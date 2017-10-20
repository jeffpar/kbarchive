---
layout: page
title: "Q191912: FIX: Constituent Control Validate Event Can Fail on UserControl"
permalink: /kb/191/Q191912/
---

## Q191912: FIX: Constituent Control Validate Event Can Fail on UserControl

{% raw %}

	Article: Q191912
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrlCreate kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp5fix
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Validate event of a constituent control fails to fire when you move the
	focus from the constituent control on a User Control to a control that is placed
	directly on a form.
	
	RESOLUTION
	==========
	
	To work around this problem, call the ValidateControls method from the LostFocus
	event of the User Control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Microsoft Visual Studio 6.0 Service Pack 5. For
	additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	The Validate event occurs before the focus shifts to a control that has its
	CausesValidation property set to True. If you are moving focus between
	constituent controls on a User Control, the Validate event will fire for each
	control. However, if you move from a constituent control on a User Control to a
	control that is placed directly on a form, the Validate event of the constituent
	control on the User Control will not fire until focus returns to a constituent
	control.
	
	The workaround is to call the ValidateControls method. However, when you do this,
	the LostFocus for the constituent control will fire after the LostFocus event.
	This is the reverse of the normal event order.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, select Add User Control.
	
	3. Place two TextBox controls on the User Control.
	
	4. Add the following code to the User Control:
	
	        Private Sub Text1_LostFocus()
	          Debug.Print "text1 lostfocus"
	        End Sub
	
	        Private Sub Text1_Validate(Cancel As Boolean)
	          Debug.Print "text1 validate"
	        End Sub
	
	        Private Sub Text2_LostFocus()
	          Debug.Print "text2 lostfocus"
	        End Sub
	
	        Private Sub Text2_Validate(Cancel As Boolean)
	          Debug.Print "text2 validate"
	        End Sub
	
	        Private Sub UserControl_ExitFocus()
	          ' The On Error is needed because if the Validate returns a
	          ' False then you will receive error 380 on the ValidateControls.
	          ' To cause the Validate event to fire when you move the focus
	          ' from the constituent control to a control on the form, uncomment
	          ' the following two lines:
	          'On Error Resume Next
	          'ValidateControls
	        End Sub
	
	        Private Sub UserControl_Initialize()
	          UserControl.BackColor = RGB(0, 0, 255)
	        End Sub
	
	5. Place a TextBox control and UserControl1 on Form1.
	
	6. Add the following Code to the module of Form1:
	
	        Private Sub Text1_LostFocus()
	          Debug.Print "form1 text1 lost focus"
	        End Sub
	
	        Private Sub Text1_Validate(Cancel As Boolean)
	          Debug.Print "form1 text1 validate"
	        End Sub
	
	7. Save and run the project. Try moving focus from Text1 on the form to a
	  TextBox on UserControl1. Then move focus from a TextBox on UserControl1 to
	  Text1 on the form. The Validate for the TextBox on UserControl1 will not
	  fire.
	
	8. To work around this bug, add the following code to the UserControl's
	  LostFocus event:
	
	        Private Sub UserControl11_LostFocus()
	           ValidateControls
	        End Sub
	
	9. Save and run the project again. Note this time that the Validate event does
	  fire from the TextBox on the UserControl.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrlCreate kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
