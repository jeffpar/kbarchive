---
layout: page
title: "Q196724: WD97: Change Case Does Not Apply Formatting to Merge Results"
permalink: kb/196/Q196724/
---

## Q196724: WD97: Change Case Does Not Apply Formatting to Merge Results

	Article: Q196724
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Changing the case of MERGEFIELD fields using SHIFT+F3 or Change Case from the
	Format menu does not format the results of your merge fields with the selected
	case change.
	
	CAUSE
	=====
	
	Changing the case changes the ASCII value of the characters; it does not apply
	direct formatting to the characters.
	
	WORKAROUND
	==========
	
	To apply case changes to merge field results, use one of the following methods:
	
	Method 1: Use the All Caps Option or Shortcut Keys
	--------------------------------------------------
	
	Select the MERGEFIELD field (including the chevrons or field braces) and press
	CTRL+SHIFT+A for All Caps formatting. Or, on the Format menu, click Font, and
	then under Effects, click to select the All Caps check box, and then click OK.
	
	Method 2: Use the CharFormat Switch
	-----------------------------------
	
	Display Field Codes by pressing ALT+F9. Select the first character of the merge
	field, and format this character as noted in method 1 above. Add the
	
	
	applies the formatting of the field type's first character to the entire result.
	Your field code should look like the following:
	
	     {Mergefield name \* charformat}
	
	Method 3: Use a Case Switch
	---------------------------
	
	Display Field Codes by pressing ALT+F9. Add one of the following format switches
	to the end of the MERGEFIELD field.
	
	  Switch        Description
	  ------        -----------
	
	
	To format the MERGEFIELD result in all caps, your field code should look Like
	this:
	
	     {mergefield name \* upper}
	
	NOTE: Firstcap only works if text is all lower case. If text is all upper case,
	include the lower switch before the firstcap switch. For example:
	
	     {MERGEFIELD name \*lower \*firstcap}
	
	Result: RICHARD becomes Richard.
	
	Additional query words: format switches switch capital letters all caps mailing mergefield mail merge field short-cut results keystrokes change case
	
	======================================================================
	Keywords          : kbualink97 kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
