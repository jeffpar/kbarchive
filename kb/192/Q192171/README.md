---
layout: page
title: "Q192171: BUG: OLEDragDrop Fails on Contained Windowless Controls"
permalink: /kb/192/Q192171/
---

## Q192171: BUG: OLEDragDrop Fails on Contained Windowless Controls

	Article: Q192171
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
	
	SYMPTOMS
	========
	
	Setting the ControlContainer property of a User Control to True allows a
	developer or end user to place a control on the User Control at the control's
	run-time. If you place a Windowless control on the User Control when the User
	Control is in run-time, the Windowless control's OLEDragDrop will fail. You will
	be able to drag over the control but the mouse cursor will never change to let
	you know that you can do a drop.
	
	RESOLUTION
	==========
	
	Use a windowed control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Setting the ControlContainer property to True allows you to develop a control
	that can contain other controls in the same way the PictureBox control can
	contain other controls. When a windowless control is the contained control on a
	User Control, the no-drop cursor doesn't change and releasing the mouse over the
	control has no effect when you are doing an OLEDragDrop.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, select Components, check "Microsoft Windowless
	  Controls 6.0," then click OK. If you don't have the Windowless controls
	  Installed, please see the REFERENCES section for how to install them.
	
	3. From the Project menu, select Add User Control.
	
	4. Set the ControlContainer property to True and the BackColor of the User
	  Control to some color you can see.
	
	5. Place a TextBox and UserControl1 onto Form1.
	
	6. Place a WLText control on the instance of UserControl1 that is on Form1.
	
	7. Set the following properties for Text1:
	
	  OLEDragMode = 1-Automatic OLEDropMode = 2-Automatic
	
	8. Set the following properties for WLText1:
	
	  OLEDragMode = 1-wlOLEDragAutomatic OLEDropMode = 2-wlOLEDropAutomatic
	
	9. Save and run the project. Try highlighting the text in Text1, then dragging
	  it over WLText1. You will see that the mouse drag cursor does not change to a
	  drop cursor.
	
	10. Stop the project and remove the WLText1 from UserControl1. Repeat step 4 but
	  use a standard TextBox.
	
	11. Set the following properties for Text2:
	
	  OLEDragMode = 1-Automatic OLEDropMode = 2-Automatic
	
	12. Repeat step 7 and you will be able to do a drag and drop to Text2.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q189950 HOWTO: Install the Microsoft Windowless Controls for VB6
	
	Additional query words: kbDSupport kbDSD kbVBp kbCtrl kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
