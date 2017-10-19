---
layout: page
title: "Q135914: PRB: SHOW WINDOW ALL May Cause Empty Browse Window to Appear"
permalink: /kb/135/Q135914/
---

## Q135914: PRB: SHOW WINDOW ALL May Cause Empty Browse Window to Appear

	Article: Q135914
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, using the SHOW WINDOW ALL command to display a
	previously established and populated Browse window, may cause the Browse window
	to reappear with no data in the headers or cells.
	
	CAUSE
	=====
	
	This occurs if you set the Browse window's Visible property to false (.F.)
	before using the SHOW WINDOW ALL command.
	
	RESOLUTION
	==========
	
	Set the Browse window's Visible property to true (.T.) to redisplay the correct
	contents of the headers and cells.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open any table into the active work area.
	
	2. Type the BROWSE NAME TEST command in the Command window, and press ENTER.
	  This brings up a Browse window with an Object name of Test that displays the
	  contents of the table opened in step 1.
	
	3. Type the TEST.VISIBLE = .F. command in the Command window, and press ENTER.
	  This sets the Visible property of the Browse window to false, causing it to
	  disappear.
	
	4. Type SHOW WINDOW ALL in the Command window, and press ENTER. Note that the
	  Browse window reappears but does not contain any data in either the header or
	  the cells.
	
	5. Type TEST.VISIBLE = .T. in the Command window and press ENTER. Note that the
	  Browse window now contains the expected values.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
