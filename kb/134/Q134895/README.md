---
layout: page
title: "Q134895: BUG: DragIcon Can Be Dragged Outside Visual FoxPro Window"
permalink: /kb/134/Q134895/
---

## Q134895: BUG: DragIcon Can Be Dragged Outside Visual FoxPro Window

	Article: Q134895
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The custom mouse pointer being dragged in a FoxPro window retains its icon
	outside the window. The icon should be reset to the default Windows pointer
	outside the FoxPro Window.
	
	CAUSE
	=====
	
	This problem occurs when the DragIcon property is set for an object and dragging
	is then enabled by using the Drag method or the DragMode property. Visual FoxPro
	does not reset the mouse pointer when it passes outside Visual FoxPro
	boundaries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	The problem can be duplicated in Visual FoxPro 3.0 and 3.0b by running
	Controls.app from the Visual FoxPro \Samples\Controls directory:
	
	1. Type the following commands in the Command window:
	
	     SET DEFAULT TO HOME() + "SAMPLES\CONTROLS"
	     DO controls.app
	
	2. Select the Understanding Visual FoxPro option.
	
	3. Select the See Event Firing Sequences option, and choose Run Example.
	
	4. Drag the Foxhead graphic. You will see that if the Visual FoxPro window is
	  not maximized, you can drag the icon off the Visual FoxPro window, and it
	  retains its shape as a Foxhead instead of turning into the standard Windows
	  arrow pointer.
	
	Additional query words: cursor
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	
	=============================================================================
	
