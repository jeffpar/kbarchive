---
layout: page
title: "Q156641: BUG: GETCOLOR Function Does Not Return Focus to Custom Color"
permalink: /kb/156/Q156641/
---

## Q156641: BUG: GETCOLOR Function Does Not Return Focus to Custom Color

	Article: Q156641
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Color dialog does not properly highlight a custom color that was previously
	selected with the GETCOLOR() function. Therefore, attempting to return focus
	within the Colors dialog to the earlier selected custom color fails.
	
	CAUSE
	=====
	
	The GETCOLOR() function calls the Colors dialog box, which is a Windows common
	dialog. Visual FoxPro has no control over what gets the initial focus in this
	dialog box.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The GETCOLOR function does not return focus to a previously-created custom
	color. The cursor rectangle surrounds the upper-left color object in the Basic
	Colors section of the Color dialog. However, a bold border appears around the
	custom color object.
	
	One can return focus to a color selected from the Basic Colors section of the
	Colors dialog.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type:
	
	        i=GETCOLOR()
	
	2. Click the Define Custom Color button in the Color dialog.
	
	3. Change the LUM field to 150, and choose a color.
	
	4. Click the Add to Custom Colors button. The color appears under Custom Colors
	  section.
	
	5. Click the OK button.
	
	6. In the Command window, type,
	
	     j=GETCOLOR(i)
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
