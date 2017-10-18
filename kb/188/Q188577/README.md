---
layout: page
title: "Q188577: HOWTO: What is the Licenses Collection Used For?"
permalink: kb/188/Q188577/
---

## Q188577: HOWTO: What is the Licenses Collection Used For?

	Article: Q188577
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic 6.0 allows you to dynamically load ActiveX controls when an
	application is running. Some ActiveX controls require the use of a license in
	order for them to be used within a program. The Licenses Collection of an
	application contains the license information for all loaded ActiveX controls and
	allows you to add and remove these Licenses as needed.
	
	This article demonstrates how to create an ActiveX Control that requires a
	license and how to load that control dynamically.
	
	MORE INFORMATION
	================
	
	ActiveX controls used within a Visual Basic 6.0 application may require a
	license. During development, you can add references to controls within your
	project and use these controls as you would use intrinsic Visual Basic controls.
	At compile-time, Visual Basic will incorporate the license for a control into
	the EXE, so the control can be used in that application on other machines
	without needing the license on that machine.
	
	Steps to Create an ActiveX Control
	----------------------------------
	
	1. Create a New ActiveX Control project in Visual Basic.
	
	2. Add a Label to the control, and set the label's caption to "Test Control."
	
	3. Select Project1 Properties from the Project menu.
	
	4. On the "General" tab, check "Require License Key." This will ensure a
	  design-time license is required for using this control.
	
	5. Add the following code to the UserControl1 object:
	
	        Private Sub UserControl_Initialize()
	           UserControl.BackColor = vbBlue
	        End Sub1
	
	6. Save the project and make the .OCX.
	
	NOTE: The ProgId (Programmatic Identifier) of the ActiveX control will be
	Project1.Usercontrol1. ProgIds will be discussed in more detail later in this
	article.
	
	Steps to Create a Test Client for the License Control
	-----------------------------------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 will be created by
	  default.
	
	2. Add two CommandButtons to Form1.
	
	3. Add the following code to Form1:
	
	      Option Explicit
	
	      ' create an object reference so a control can be dynamically loaded
	      ' during run-time.
	      Private ctlMyTestControl As VBControlExtender
	
	      Private Sub Command1_Click()
	
	         ' The test control will be loaded without its design-time license
	         ' first. This will result in an error that will be trapped or
	         ' reported in a MSGBOX.
	
	         On Error GoTo NoLicense
	
	         ' load the test control dynamically.
	         Set ctlMyTestControl = Form1.Controls.Add("Project1.UserControl1", _
	            "ctlTest")
	
	         ' show the test control.
	         ctlMyTestControl.Visible = True
	
	         ' exit this function.
	      Exit Sub
	
	      NoLicense:
	
	      ' make sure the error is about the license for this control.
	         If Err.Number = 731 Then
	            MsgBox "You need a License to dynamically load this ActiveX" & _
	               & " control"
	         End If
	
	      End Sub
	
	      Private Sub Command2_Click()
	
	         ' add the license of the test ActiveX control to the
	         ' running application and then dynamically load the
	         ' control.
	
	         Licenses.Add "Project1.usercontrol1"
	
	         ' load the test control dynamically.
	         Set ctlMyTestControl = Form1.Controls.Add("Project1.UserControl1", _
	            "ctlTest")
	
	         ' show the test control.
	         ctlMyTestControl.Visible = True
	
	      End Sub
	
	4. Press the F5 key to run the project.
	
	5. Press the "Command1" button. This will load the ActiveX UserControl without
	  loading its design-time license. You will receive an error message.
	
	6. Press the "Command2" button. This will load the ActiveX UserControls license
	  and then dynamically load the control and display it on the form.
	
	Caveats About ActiveX Control and Licenses
	------------------------------------------
	
	- ActiveX controls referenced within a Visual Basic project do not need to have
	  their licenses loaded before dynamically loading them. They are already
	  included within the Licenses Collection and trying to add a license twice
	  will result in a trappable run-time error.
	
	- Simply copying and registering a Visual Basic ActiveX UserControl onto a
	  target machine does not mean the license will be installed. You need to
	  distribute the ActiveX control through the Package and Deployment Wizard and
	  have the end user install the control before the ActiveX control can be
	  dynamically loaded during run-time.
	
	- Trying to add a license to the License Collection of an ActiveX control that
	  does not need one will result in a trappable run-time error.
	
	- The Licenses Collection has two properties for each item; a LicenseKey and a
	  ProgId. The LicenseKey item is encrypted so the actual license for an ActiveX
	  control is not revealed to either the developer or the end user.
	
	- It is common to reference a control during development and forget to remove
	  its reference before compiling and distributing the end application. Select
	  the "Remove Information About Unused ActiveX Controls" from the Project
	  Properties Make Tab to remove references to UserControls that you might have
	  added during development time, but are only used dynamically at runtime. This
	  will ensure that the license information for unused controls are not included
	  within the EXE.
	
	ProgIds for ActiveX Controls
	----------------------------
	
	In order to load an ActiveX control Dynamically, you need to know the ProgId of
	the control. If the control was developed by you in Visual Basic 6.0, the ProgId
	will follow the PROJECTNAME.CONTROLNAME convention.
	
	To learn the ProgId for an ActiveX control, add a reference to the control to a
	project. Use the Object Browser (F2) to see all the object models available.
	
	If you are going to load an ActiveX control at run-time and perform license
	checking, make sure you remove the reference to the control from the project, or
	select the "Remove Information About Unused Active Controls" option mentioned
	above.
	
	Additional query words: kbDSupport kbdss kbCtrl kbCtrlCreate kbVBp600 kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
