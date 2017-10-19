---
layout: page
title: "Q154885: PRB: Tabbing Problem When Sheridan SSTab Control Hosts OCXs"
permalink: /kb/154/Q154885/
---

## Q154885: PRB: Tabbing Problem When Sheridan SSTab Control Hosts OCXs

	Article: Q154885
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the SSTab control is used to host OCXs, then the OCX controls remain in the
	tab order regardless of whether their host tab is the current tab. When the user
	tabs to these controls, it appears that no control has the focus. This behavior
	does not occur with intrinsic controls.
	
	RESOLUTION
	==========
	
	Disable the TabStop property of all controls hosted by the SSTab control that do
	not appear on the current tab. See the More Information Section below for steps
	to work around the problem.
	
	MORE INFORMATION
	================
	
	The SSTab control maps hosted controls off the left edge of the form, when they
	are not on the current tab, and maps them back onto the form when necessary. You
	can use this behavior to help determine whether a control is able to obtain the
	focus. If the control's Left property is negative, then the control should not
	be able to get the focus.
	
	Steps to Reproduce and Work Around Problem
	------------------------------------------
	
	1. Start a project in Visual Basic. Form1 is created by default.
	
	2. Add a SSTab control to Form1. Three tabs are displayed by default. If the
	  SSTab control does not appear in the toolbox, perform the following:
	
	   - VB4: From the Tools menu, choose Custom Controls and check the "Sheridan
	     Tabbed Dialog Control" component. If the component is not listed, click
	     the browse button and locate TABCTL16.OCX or TABCTL32.OCX.
	
	   - VB5 and VB6: From the Project menu, choose Components and check the
	     "Microsoft Tabbed Dialog Control" component. If the component is not
	     listed, click the browse button, and locate TABCTL32.OCX.
	
	3. Add a MaskEdBox control to Tab1 of SSTab1. If the MaskEdBox control does not
	  appear in the toolbox, perform the following:
	
	   - VB4: From the Tools menu, choose Custom Controls and check the "Microsoft
	     Masked Edit control" component. If the component is not listed, click the
	     browse button and locate MSMASK16.OCX or MSMASK32.OCX.
	
	   - VB5 and VB6: From the Project menu, choose Components and check the
	     "Microsoft Masked Edit Control" component. If the component is not listed,
	     click the browse button and locate MSMASK32.OCX.
	
	4. Choose Start from the Run menu, or press the F5 key to start.
	
	5. Select Tab 2.
	
	6. Press the TAB key to tab onto the hidden MaskedEdBox control and note that
	  the focus rectangle disappears. Now, enter some characters and click on Tab1.
	  You will see that the MaskEdBox control contains the characters you typed.
	
	To work around the problem, follow these steps:
	
	1. Choose End from the Run menu, or click the Stop button on the toolbar to stop
	  the program.
	
	2. Add the following code to the General Declarations section of Form1:
	
	        Private Sub Form_Load()
	          SSTab1_Click 0
	        End Sub
	
	        Private Sub SSTab1_Click(PreviousTab As Integer)
	          Dim c As Control
	          For Each c In Controls
	            If TypeOf c.Container Is SSTab Then
	              'Not all controls have the TabStop property
	              On Error Resume Next
	              c.TabStop = c.Left > 0
	              On Error GoTo 0
	            End If
	          Next
	        End Sub
	
	3. Choose Start from the Run menu, or press the F5 key to start.
	
	All the controls that are not displayed in the SSTab controls current tab will
	now have their TabStop property set to FALSE, making them unable to receive the
	focus using the Tab key.
	
	Note that the above workaround assumes that the controls are children of the
	SSTab control and not the children of container controls contained by the SSTab
	(such as PictureBoxes).
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q150417 PRB: Read-Only SSTab Does Not Display Child Controls Properly
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
