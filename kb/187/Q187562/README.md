---
layout: page
title: "Q187562: HOWTO: Resize the Controls in SSTab When Form is Resized"
permalink: /kb/187/Q187562/
---

## Q187562: HOWTO: Resize the Controls in SSTab When Form is Resized

{% raw %}

	Article: Q187562
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a form is resized, the controls present in the form can be resized to fit
	into the form by using the Move method. However, it is not straightforward to
	resize the controls present inside an SSTab control because the Left property
	values of controls present in the inactive tabs are less than 0. This article
	describes a way to resize the controls present in an SSTab control.
	
	MORE INFORMATION
	================
	
	The SSTab control hides the controls present in the inactive tabs by setting
	their Left property values less by 75000. Hence, changing the Left property of a
	control on an inactive tab in the form's resize event may cause that control to
	stop showing in a particular tab.
	
	The following sample code illustrates a way to handle this problem. The controls
	with a Left property less than 0 are identified first, and, after the resize
	code, the Left properties of these controls are adjusted by -75000:
	
	     Private Sub Form_Resize()
	        Dim Ctl As Control, CtlCln As New Collection
	        On Error Resume Next
	        For Each Ctl In Controls
	           If Ctl.Left < 0 Then CtlCln.Add Ctl
	        Next
	        SSTab1.Visible = False
	
	       ' Put the code here to resize the controls
	
	        For Each Ctl In CtlCln
	           If Ctl.Left > 0 Then Ctl.Left = Ctl.Left - 75000
	        Next
	        SSTab1.Visible = True
	     End Sub
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Standard EXE project. Form1 is created by default.
	
	2. Choose Components from the Project menu. Select the "Microsoft Tabbed Dialog
	  Control" component and click OK. The SSTab control is added to the Toolbox.
	
	3. Put a SSTab control on Form1. Change the Tabs property to 2.
	
	4. Put a CommandButton on the first tab (Tab 0). Put a TextBox control on the
	  second tab (Tab 1).
	
	5. Paste the following code in the General Declarations section of Form1's code
	  window:
	
	        Private Sub Form_Resize()
	           SSTab1.Move 0.1 * ScaleWidth, 0.1 * ScaleHeight, _
	              0.8 * ScaleWidth, 0.8 * ScaleHeight
	           Command1.Move 0.2 * SSTab1.Width, 0.2 * SSTab1.Height, _
	              0.4 * SSTab1.Width, 0.4 * SSTab1.Height
	           Text1.Move 0.4 * SSTab1.Width, 0.4 * SSTab1.Height, _
	              0.4 * SSTab1.Width, 0.4 * SSTab1.Height
	
	        ' NOTE: The Height property cannot be changed for the DriveListBox
	        ' control or for the ComboBox control, whose Style property setting
	        ' is 0 (Dropdown Combo) or 2 (Dropdown List). See the REFERENCES
	        ' section for an article that discusses how to resize a ComboBox.
	        End Sub
	
	6. Run the project. Note that the control present in the inactive tab is not
	  resized correctly.
	
	7. Stop the project and replace the code from step 5 with the following code:
	
	        Private Sub Form_Resize()
	           Dim Ctl As Control, CtlCln As New Collection
	           On Error Resume Next
	           For Each Ctl In Controls
	              If Ctl.Left < 0 Then CtlCln.Add Ctl
	           Next
	           SSTab1.Visible = False
	
	           ' Add the code to resize the controls:
	           SSTab1.Move 0.1 * ScaleWidth, 0.1 * ScaleHeight, _
	              0.8 * ScaleWidth, 0.8 * ScaleHeight
	           Command1.Move 0.2 * SSTab1.Width, 0.2 * SSTab1.Height, _
	              0.4 * SSTab1.Width, 0.4 * SSTab1.Height
	           Text1.Move 0.4 * SSTab1.Width, 0.4 * SSTab1.Height, _
	              0.4 * SSTab1.Width, 0.4 * SSTab1.Height
	
	        ' NOTE: The Height property can't be changed for the DriveListBox
	        ' control or for the ComboBox control, whose Style property setting
	        ' is 0 (Dropdown Combo) or 2 (Dropdown List). See the REFERENCES
	        ' section for an article that discusses how to resize a ComboBox.
	
	           For Each Ctl In CtlCln
	              If Ctl.Left > 0 Then Ctl.Left = Ctl.Left - 75000
	           Next
	           SSTab1.Visible = True
	        End Sub
	
	8. Run the project. Note that the controls are resized properly.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q182070 : HOWTO: Create a Resolution-Independent Form
	
	Additional query words: visible top tabctl32.ocx kbDSupport kbDSD kbVBp500 kbCtrl kbUsage 
	kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
