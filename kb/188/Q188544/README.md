---
layout: page
title: "Q188544: BUG: Transparent Windowless UserControl Cannot Be Dragged"
permalink: kb/188/Q188544/
---

## Q188544: BUG: Transparent Windowless UserControl Cannot Be Dragged

	Article: Q188544
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
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot use the mouse to drag a UserControl with BackStyle = Transparent and
	Windowless = True in the Visual Basic IDE.
	
	RESOLUTION
	==========
	
	To work around this problem, try one of the following three options:
	
	- Set the Top and Left properties of the UserControl in the Property Window.
	
	-or-
	
	- Choose UserControl from the drop-down list in the Properties Window to select
	  it. Use the keyboard combination of the CTRL and arrow keys to move the
	  control. (Hold down the CTRL key, and press the arrow key for the desired
	  direction. Note that the UserControl disappears until the CTRL key is
	  released.)
	
	-or-
	
	- Position the control programmatically using the Move method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic.
	
	2. From the Project menu, add a UserControl to the project.
	
	3. For the UserControl, set the BackStyle property to Transparent, and the
	  Windowless property to True.
	
	4. Place the UserControl on Form1.
	
	5. Attempt to drag the UserControl with the Mouse. You can't do it.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbCtrl kbUsage
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
