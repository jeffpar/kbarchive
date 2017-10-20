---
layout: page
title: "Q174553: HOWTO: Detect When a Control Is Placed into a UserControl"
permalink: /kb/174/Q174553/
---

## Q174553: HOWTO: Detect When a Control Is Placed into a UserControl

{% raw %}

	Article: Q174553
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how you can create an ActiveX control that detects when
	a control is placed on it at design time.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The following example creates a custom ActiveX control that can perform some
	action when another control is placed on top of it:
	
	1. Start a new ActiveX Control project. UserControl1 is added by default.
	
	2. Set the ControlContainer property to True.
	
	3. Add a Timer control to UserControl1. Add the following code to the Timer
	  event of Timer1:
	
	        Private Sub Timer1_Timer()
	           Dim UserCtrl As Object
	           Debug.Print UserControl.ContainedControls.Count
	           For Each UserCtrl In UserControl.ContainedControls
	              Debug.Print UserCtrl.Name
	           Next
	
	        End Sub
	
	4. Set the Timer1 Interval property to 1000 so Private Sub Timer1_Timer() gets
	  called every 1 second.
	
	5. Close the UserControl1 design window.
	
	6. Click Add Project on the File menu. Select "Standard EXE" and click Open.
	
	  NOTE: You now have a project group consisting of an ActiveX control project
	  and a Standard EXE project.
	
	7. Click Immediate Window on the View menu.
	
	8. Draw the UserControl1 (the control you just created in your group) on Form1.
	
	9. Select any other control from the toolbox and put it on top of UserControl1.
	
	RESULTS: When you draw another control on top of UserControl1, the count of how
	many controls you have added plus the name of each control appears in the
	Immediate Window.
	
	Additional query words: Active kbActiveX kbVBp500 kbVBp600 kbdsi kbDSupport kbVBp kbInternet
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
