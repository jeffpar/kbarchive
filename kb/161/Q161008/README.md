---
layout: page
title: "Q161008: HOWTO: Add an About Box to an ActiveX Control (UserControl)"
permalink: kb/161/Q161008/
---

## Q161008: HOWTO: Add an About Box to an ActiveX Control (UserControl)

	Article: Q161008
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An ActiveX control typically exposes an About property to allow developers to
	see extra information concerning the author of the control. Microsoft Visual
	Basic allows the creation of this About property for ActiveX controls
	(UserControls).
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Open your ActiveX Control project or start a new ActiveX Control project.
	
	2. In the Project window, right-click your ActiveX control (UserControl) object.
	  Click Add, and then click Form.
	
	3. In the Professional and Enterprise Editions, double-click "About Dialog" in
	  the list of form templates. In the Control Creation Edition, there is no
	  "About Dialog" form template. Use the following steps instead:
	
	  a. Double-click "Form" in the list of form templates.
	
	  b. Change the Name of the form to "frmAbout" and the Caption to "About
	     MyApp," where MyApp is the name of your application.
	
	  c. Add a CommandButton control to the form and change its Caption to "OK" and
	     its Default property to "True".
	
	  d. Add the following code to the CommandButton control's Click event
	     procedure:
	
	        Private Sub Command1_Click()
	           Unload Me
	        End Sub
	
	  e. Add other controls to the form to give it the appearance you desire. Label
	     controls with the application's title, version, description, and
	     disclaimers are common, as is a PictureBox control for displaying the
	     application's icon and a CommandButton control for displaying "System
	     Information."
	
	4. In the Project window, right-click your ActiveX control (UserControl) object.
	  Click View Code and add the following code to your ActiveX control
	  (UserControl):
	
	        Sub ShowAboutBox()
	           frmAbout.Show vbModal
	           Unload frmAbout
	           Set frmAbout = Nothing
	        End Sub
	
	5. From the Tools menu, click Procedure Attributes.
	
	6. Select the ShowAboutBox procedure in the Name field, and then click
	  "Advanced>>."
	
	7. Select AboutBox from the Procedure ID field and click OK.
	
	8. Close all of the windows for the ActiveX control (UserControl) project. This
	  will put the control in run mode.
	
	9. Add a "Standard EXE" project (using Add Project in the File menu) and place
	  the ActiveX control (UserControl) on the form. The About property is shown in
	  the control's property list. If you click on the ellipses for this property,
	  the frmAbout dialog box appears.
	
	Additional query words: AboutBox kbControl kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kb ActiveX
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	
