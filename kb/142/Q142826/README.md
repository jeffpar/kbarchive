---
layout: page
title: "Q142826: BUG: DBGrid Does Not Paint Correctly When Aligned"
permalink: kb/142/Q142826/
---

## Q142826: BUG: DBGrid Does Not Paint Correctly When Aligned

	Article: Q142826
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form with a bottom-aligned data control and a bottom-aligned DBGrid
	control is resized vertically, the DBGrid control paints over a portion of the
	data control. This same behavior occurs when a bottom-aligned picture box
	replaces the data control.
	
	
	RESOLUTION
	==========
	
	Add the following line of code in the form's Resize event (which is called when
	the form is drawn initially and every time the form is resized):
	
	     <name of DBGrid control>.Refresh
	
	This causes the DBGrid control to repaint itself and not to obscure the data
	control (or picture box).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a issue in the Microsoft products listed at
	the beginning of this article. We are researching the situation and will post
	more information here in the Microsoft Knowledge Base when it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic, or, if it is already running, click New Project on the
	  File Menu.
	
	2. Double-click on the data control button in the Toolbox to add a data control,
	  named Data1, to the project. Change the data control's Align property to '2 -
	  Align Bottom'.
	
	3. Double-click in the Toolbox, this time on the DBGrid control. Change the
	  DBGrid control's Align property to '2 - Align Bottom'.
	
	4. On the Run menu, click Start (ALT, R, S) or press F5 to run the application.
	
	5. Drag the bottom border of the form to resize the form, and notice how the
	  DBGrid control paints over the top of the data control. Adding
	  DBGrid1.Refresh alleviates the problem.
	
	Additional query words: 4.00 vb4win vb4all buglist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	
