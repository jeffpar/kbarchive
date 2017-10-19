---
layout: page
title: "Q188552: BUG: UserControl's ContainedControls Do Not Inherit ScaleMode"
permalink: /kb/188/Q188552/
---

## Q188552: BUG: UserControl's ContainedControls Do Not Inherit ScaleMode

	Article: Q188552
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
	
	SYMPTOMS
	========
	
	A control in the ContainedControls collection of a UserControl reports its
	dimensions and placement in Twips regardless of the ScaleMode setting of the
	UserControl or the Parent. Because ScaleMode is inherited elsewhere in Visual
	Basic, this behavior is inconsistent.
	
	RESOLUTION
	==========
	
	Programmatically, you can use the ScaleX and ScaleY methods to convert the
	property values from one ScaleMode to another. Note that this does not change
	the actual ScaleMode of the properties. ScaleX and ScaleY are merely conversion
	functions. There are no workarounds for how the properties are reported in the
	Property Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard Exe project in Visual Basic. Form1 is created by
	  default.
	
	2. Set the ScaleMode property of Form1 to 6 - Millimeters.
	
	3. Add a UserControl to the project.
	
	4. Set the ScaleMode property of the UserControl to 6 - Millimeters.
	
	5. Set the ControlContainer property of the UserControl to True.
	
	6. Close the UserControl window.
	
	7. Place the UserControl on Form1.
	
	8. Drag a CommandButton onto the UserControl.
	
	9. Drag a CommandButton onto Form1.
	
	10. View the Properties for the UserControl (such as Width) and note that all
	  coordinates are reported in millimeters.
	
	11. View the Properties for the two CommandButtons. Compare the Width of the
	  CommandButton placed inside the UserControl with the CommandButton placed
	  onto the Form. Notice the Width of the CommandButton placed inside the
	  UserControl is in Twips whereas the Width of the CommandButton placed on the
	  Form is in millimeters.
	
	Additional query words: kbDSupport kbDSD kbVBp kbCtrl kbVBp500bug kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
