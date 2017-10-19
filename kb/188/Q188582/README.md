---
layout: page
title: "Q188582: HOWTO: Deploy an ActiveX Control with License Information"
permalink: /kb/188/Q188582/
---

## Q188582: HOWTO: Deploy an ActiveX Control with License Information

	Article: Q188582
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbCtrl kbCtrlCreate kbVBp kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic 6.0 allows an ActiveX control to require a design-time license in
	order for it to be used in a development environment. This license is not
	automatically included when the Package and Deployment Wizard (PDW) packages the
	control for distribution.
	
	MORE INFORMATION
	================
	
	When packaging an ActiveX control that has been developed with Visual Basic 6.0,
	the license for the control can be included in the distribution. This means that
	whomever installs this control can then use the control for development
	(design-time), and include it their own projects and applications.
	
	When the "Require License Key" option is selected as a Project Property, the
	ActiveX control cannot be used within a development environment unless the
	control's license has been installed upon that system.
	
	By default, compiling an ActiveX control with the "Require License Key" option
	selected will generate a license for that control and install it on that system.
	This allows the control to be used in a development environment on that machine
	without any extra work by the developer.
	
	Distributing the ActiveX control with the Package and Deployment Wizard does not
	automatically bring the license along with the control. Choosing the default
	options with the PDW will simply create a run-time setup for the control (the
	control will install and programs can use it during run- time, but end users
	cannot develop with the control). Attempting to use the control in a design
	environment without the proper license will result in the following error:
	
	  License information for this component not found. You do not have an
	  appropriate license to use this functionality in the design environment.
	
	Adding the Design License to an ActiveX Control Distribution Set
	----------------------------------------------------------------
	
	1. Create a new ActiveX control in Visual Basic.
	
	2. Select Properties from the Project menu, then select General. Check the
	  "Require License Key" option.
	
	3. Add the following code to the UserControl1 object:
	
	        Private Sub UserControl_Initialize()
	           UserControl.BackColor = vbBlue
	        End Sub
	
	4. Save the project and make the OCX.
	
	5. On the original development machine, start the Package and Deployment Wizard.
	
	6. Go through the setup as you normally would until you get to the step "Package
	  And Deployment Wizard - Included Files."
	
	7. Click the "Add" button. You will then be allowed to add files to the
	  distribution set.
	
	8. Change the "Files Of Type" filter to "License Files."
	
	9. Select the VBL file that is associated with your test ActiveX Control
	  (Project1) and then continue.
	
	10. There will be a new dialog "Package And Deployment Wizard - Registry
	  Information." This appears because of the VBL file. For this Demonstration,
	  select the default action of "Update Registry." This option will install the
	  license for the ActiveX control into the system's registry and there is no
	  need for a file to be installed.
	
	11. Continue through the wizard, selecting the default settings.
	
	12. Install the ActiveX control onto a second development machine.
	
	The ActiveX control can now be used in a design environment. You can test this by
	creating a new project in Visual Basic on the second development machine and
	adding the control to a form.
	
	Additional query words: kbDSupport kbdss kbAppSetup kbCtrlCreate kbCtrl kbVBp600 kbWizard 
	kbVBp usercontrol
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbCtrl kbCtrlCreate kbVBp kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
