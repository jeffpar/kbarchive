---
layout: page
title: "Q190226: HOWTO: Programmatically Add Child Controls to a CoolBar"
permalink: /kb/190/Q190226/
---

## Q190226: HOWTO: Programmatically Add Child Controls to a CoolBar

{% raw %}

	Article: Q190226
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCtrl kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When adding a Child control to a CoolBar Band, you must specify the container
	argument in the Controls.Add method call, and then set the Child property of a
	Band to the new control.
	
	MORE INFORMATION
	================
	
	The Child property of a CoolBar Band must be a control that is contained by the
	CoolBar. Therefore, while the Container argument of the Add method is optional,
	it must be supplied in order to add a Child control to a Band of a CoolBar
	control.
	
	The Add method of the Controls Collection has these parts:
	
	     object.Add(ProgID, name, container)
	
	Adding a control in this way does not make the control automatically appear
	because it is not yet a Child of a Band. Therefore, after you add the control,
	set the Child property of the appropriate Band to the new control. The control
	now appears. Note that a Band can only have one Child, so attempting to set the
	Child property of a Band that already has a Child control produces an error. See
	the REFERENCES section of this article for more information.
	
	Step By Step Example
	--------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Select Components from the Projects menu, select "Microsoft Windows Common
	  Controls-3 6.0", and click OK.
	
	3. Place a CoolBar control onto Form1. It has three Bands by default.
	
	4. Add two CommandButtons to Form1.
	
	5. Place the following code into the form's module:
	
	        Private Sub Command1_Click()
	           Dim MyCtrl As Object
	           ' Add a new CommandButton to the first Band.
	           Set MyCtrl = Controls.Add("VB.CommandButton", "cmdTest", CoolBar1)
	           MyCtrl.Caption = "Test Button"
	           Set CoolBar1.Bands(1).Child = MyCtrl  ' place on first Band
	           ' Add a new TextBox to the second Band.
	           Set MyCtrl = Controls.Add("VB.TextBox", "txtTest", CoolBar1)
	           MyCtrl.Text = "Testing Text"
	           Set CoolBar1.Bands(2).Child = MyCtrl  ' place on second Band
	        End Sub
	
	        Private Sub Command2_Click()
	           Dim MyCtrl As Object
	           ' Add a new CheckBox to a new Band.
	           Set MyCtrl = Controls.Add("VB.CheckBox", "ckTest", CoolBar1)
	           MyCtrl.Caption = "Check Test"
	           CoolBar1.Bands.Add Child:=MyCtrl, Visible:=True    ' add a Band
	           CoolBar1.Bands(CoolBar1.Bands.Count).Width = 1000  ' expand it
	        End Sub
	
	6. Run the project and click Command1. You will see a new CommandButton appear
	  in the first Band and a new TextBox appear in the second Band.
	
	7. Click Command2 and a fourth Band is added with a new CheckBox. Note that when
	  you set the Width property of a Band through code, it is not larger than the
	  minimum necessary to accommodate its Child control, but you can resize it
	  with the Mouse.
	
	REFERENCES
	==========
	
	Visual Basic Online Documentation; search on "Adding Controls to a CoolBar";
	search on "Add Method (Controls Collection)"
	
	NOTE: click the "Search titles only" CheckBox in the lower left portion of the
	Help Window.
	
	Please see the following article in the Microsoft Knowledge Base:
	
	  Q187232 : HOWTO: Add Multiple Controls to a CoolBar Control Band
	
	======================================================================
	Keywords          : kbcode kbCtrl kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
