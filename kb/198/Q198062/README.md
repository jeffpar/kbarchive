---
layout: page
title: "Q198062: BUG: Mouse Cursor Disappears After Typing in VB IDE"
permalink: /kb/198/Q198062/
---

## Q198062: BUG: Mouse Cursor Disappears After Typing in VB IDE

{% raw %}

	Article: Q198062
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbide kbMouse kbVBp kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The mouse cursor disappears while either typing in the code window of a Visual
	Basic ActiveX Control project or changing any property value in the property
	window of a ActiveX Control project. This occurs if you are using the
	IntelliMouse with IntelliPoint driver 2.0 or above.
	
	CAUSE
	=====
	
	This problem occurs when the "Vanish When Typing" setting in the IntelliPoint
	Mouse Properties dialog is turned on.
	
	RESOLUTION
	==========
	
	Open the Mouse applet from the Control Panel and select the Visibility tab.
	Under Vanish, deselect the "Vanish When Typing" checkbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the IntelliPoint Software that comes with IntelliMouse.
	
	2. From the Control Panel, open the Mouse applet.
	
	3. In the IntelliPoint Mouse Properties dialog, select the Visibility tab and
	  under Vanish, check the "Vanish When Typing" checkbox.
	
	4. Create a new ActiveX Control project in Visual Basic. UserControl1 is created
	  by default.
	
	5. Click on the design window of UserControl1 to open the code window.
	
	6. Start typing some code in the window. The mouse cursor will disappear as
	  expected, but it will not reappear when you move the mouse.
	
	  The mouse will return when you click on certain Visual Basic design
	  environment windows, click the Taskbar, or switch to another running
	  application.
	
	======================================================================
	Keywords          : kbide kbMouse kbVBp kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
