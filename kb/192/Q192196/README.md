---
layout: page
title: "Q192196: BUG: Unable to Tab Through Controls on UserControl"
permalink: /kb/192/Q192196/
---

## Q192196: BUG: Unable to Tab Through Controls on UserControl

{% raw %}

	Article: Q192196
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a UserControl containing constituent controls is placed on a form, while
	the UserControl is the only control on the form, tabbing through the constituent
	controls does not loop.
	
	CAUSE
	=====
	
	This is because Visual Basic treats the UserControl as one control. Because
	there is no other control to give focus to, no looping occurs.
	
	RESOLUTION
	==========
	
	Manually set focus to the control with the TabIndex of 0 in the KeyPress event
	of the last control in the tab sequence. See the MORE INFORMATION section below
	for sample code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the File menu, add an ActiveX Control project. UserControl1 is created
	  by default.
	
	3. Add three CommandButton controls to UserControl1.
	
	4. Close the UserControl1 window and add an instance of UserControl1 to Form1.
	
	  Note: In order to reproduce this problem, UserControl1 should be the only
	  control on Form1.
	
	5. Save and run the project. Begin pressing the TAB key to tab through all the
	  controls. Notice that the tab sequence does not loop through the controls on
	  the UserControl.
	
	6. Stop the project and add the following code to the KeyPress event of the last
	  control in the tab sequence for the UserControl:
	
	        Private Sub Command3_KeyPress(KeyAscii As Integer)
	           Dim Ctrl As Control
	           Dim FirstTab As Integer
	           Dim FirstCtrl As Control
	           Dim Count As Integer
	
	           Count = 0
	           ' Loop though all the controls and find
	           ' the last control in the tab order
	           For Each Ctrl In Controls
	              If Count = 0 Then
	                 FirstTab = Ctrl.TabIndex
	                 Set FirstCtrl = Ctrl
	              End If
	              If Ctrl.TabIndex < FirstTab Then
	                 FirstTab = Ctrl.TabIndex
	                 Set FirstCtrl = Ctrl
	              End If
	              Count = Count + 1
	           Next Ctrl
	
	           ' Set focus to last control in the tab order
	           If KeyAscii = 9 Then
	              FirstCtrl.SetFocus
	           End If
	        End Sub
	
	7. Save and run the project again. Note that the tab sequence now loops through
	  all the controls on the UserControl.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbVBp500bug kbCtrlCreate
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
