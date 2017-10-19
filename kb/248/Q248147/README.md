---
layout: page
title: "Q248147: PRB: Cannot Cycle Through Pageframe Controls with Tab Key"
permalink: /kb/248/Q248147/
---

## Q248147: PRB: Cannot Cycle Through Pageframe Controls with Tab Key

	Article: Q248147
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDSupport kbCodeSnippet kbGrpDSFox kbOOP kbContainer kbCtrl kbvfp600
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When tabbing through the controls on a pageframe with the TabStop property of
	the pageframe set to false, you cannot reach the first control by pressing tab
	on the last control. You have to press Shift + Tab keys to get back to the first
	control.
	
	RESOLUTION
	==========
	
	Include the following code in the LostFocus event of the last control:
	
	  This.Parent.controlname.SetFocus
	
	MORE INFORMATION
	================
	
	Using the arrow keys to move between objects on the pageframe produces the same
	behavior.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place a pageframe on a form.
	
	2. Place at least two text boxes and two command buttons on any page of the
	  pageframe.
	
	3. Change the TabStop property of the pageframe to .f.
	
	4. Run the form.
	
	5. Click on first control and tab through until you have reached the last
	  control.
	
	6. Pressing tab again does not bring focus to the first control.
	
	Additional query words: kbDSE
	
	======================================================================
	Keywords          : kbDSupport kbCodeSnippet kbGrpDSFox kbOOP kbContainer kbCtrl kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
