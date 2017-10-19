---
layout: page
title: "Q171733: PRB: FlexGrid Control Doesn't Trap Arrow Keys"
permalink: /kb/171/Q171733/
---

## Q171733: PRB: FlexGrid Control Doesn't Trap Arrow Keys

	Article: Q171733
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The KeyUp and KeyDown events of the Flexgrid control do not trap the Arrow keys.
	This affects the arrow keys on the numeric keypad as well as the "stand-alone"
	arrow keys.
	
	CAUSE
	=====
	
	The Flexgrid control responds to the arrow keys to change the selection,
	therefore they are not passed to the key events.
	
	RESOLUTION
	==========
	
	There are no workarounds at this time.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Turn the NumLock setting on your keyboard off.
	
	2. Create a new Visual Basic project, Standard Exe.
	
	3. Place a FlexGrid control on the new default form.
	
	4. In the KeyUp event of the FlexGrid control, place the following code:
	
	        Msgbox KeyCode
	
	5. Run the form, and click on the FlexGrid control.
	
	6. Press any arrow key and note that the message box does not appear.
	
	7. Press any other key and observe that the message box appears. (Hint: use the
	  mouse to close the message box.)
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
