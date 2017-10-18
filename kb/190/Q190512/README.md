---
layout: page
title: "Q190512: HOWTO: Read Extender Properties from a UserControl"
permalink: kb/190/Q190512/
---

## Q190512: HOWTO: Read Extender Properties from a UserControl

	Article: Q190512
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
	
	There are times when your UserControl needs to check the value of an Extender
	Property when your control loads. This example shows how to check the values of
	Extender Properties from inside the UserControl. As an author of a control, you
	should not attempt to set Extender Properties with code in the UserControl.
	
	MORE INFORMATION
	================
	
	Extender properties are provided by the container your control is placed on, but
	they appear to be a seamless extension of your control. A UserControl object can
	access extender properties through its Extender object.
	
	To access an extender property, you must make sure your control is sited on the
	container. When the ReadProperties event of a UserControl happens, the control
	should be sited. However it still may not have access to all the extender
	properties. Because of this, the best place to read the value of an extender
	property is from the controls Show event.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new ActiveX Control project. UserControl1 is created by default.
	
	2. Change the BackColor of the UserControl to a different color such as red.
	
	3. Add the following code to the UserControl:
	
	        Private Sub UserControl_Show()
	           Debug.Print "WhatsThisHelpID " & Extender.WhatsThisHelpID
	
	           Debug.Print "Tooltiptext " & Extender.ToolTipText
	           Debug.Print "HelpContextID " & Extender.HelpContextID
	           Debug.Print "Tag " & Extender.Tag
	           Debug.Print "Name " & Extender.Name
	        End Sub
	
	4. Close the UserControl's design and code windows.
	
	5. From the File Menu, select Add Project, and add a Standard EXE project. Form1
	  is created by default.
	
	6. Make the Standard EXE project the Startup project by choosing Properties from
	  the Project menu and, on the General tab, pick Form1 as the Startup Object.
	
	7. Place an instance of the UserControl on Form1. You will see a list of
	  Extender properties in the Immediate Window.
	
	8. Set the following properties for UserControl1 on Form1:
	
	        WhatsThisHelpID = 101
	        HelpContextID= 101
	        Tag = "MyControl"
	        ToolTipText = "Usercontrol"
	        Name = "Bubba"
	
	9. Save and run the project group. In the Immediate window you will see the new
	  values for the different Extender properties.
	
	REFERENCES
	==========
	
	For more information, Search for Extender Object in Online Help and read
	"Understanding the Container's Extender Object" in the "Component Tools Guide."
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbVBp600 kbCtrlCreate
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
