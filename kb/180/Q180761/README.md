---
layout: page
title: "Q180761: BUG: Line Controls Drawn on a Frame Are Not Visible at Run-time"
permalink: /kb/180/Q180761/
---

## Q180761: BUG: Line Controls Drawn on a Frame Are Not Visible at Run-time

	Article: Q180761
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp kbVBp500bug kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 21-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0, used with:
	   - Microsoft Windows CE version 2.11 for the Handheld PC 
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A line control can be drawn on a frame control at design-time, but it is not
	visible at run-time.
	
	RESOLUTION
	==========
	
	One workaround that affects only horizontal and vertical lines is to use a frame
	control instead of a line control. The caption property of this frame should be
	removed.
	
	When creating a horizontal line, set the height of the frame to 90 and the width
	of the frame to the desired width of the line needed. For vertical lines, set
	the width of the frame to 15 and the height of the frame to the desired line
	length.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE HPC Pro Project in either Visual Basic or eMbedded
	  Visual Basic. Form1 is created by default.
	
	2. Add a frame control to Form1.
	
	3. Draw one or more line controls onto the frame control.
	
	4. Press F5to Run the project and note that the line control(s) is not visible.
	
	Additional query words: vbce vbce6 kbGrpVB evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp kbVBp500bug kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch
	Version           : :2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
