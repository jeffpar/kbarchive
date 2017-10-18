---
layout: page
title: "Q196047: WD97: SectionPages Field Loses Formatting"
permalink: kb/196/Q196047/
---

## Q196047: WD97: SectionPages Field Loses Formatting

	Article: Q196047
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Direct formatting, such as bold, italic, or underline formatting, applied to the
	SectionPages field, may not be retained when the SectionPages field is
	positioned with other text or fields inside the document header. This problem is
	intermittent and occurs when the SectionPages field accompanies other text,
	similar to this:
	
	  Page {Page} of {SectionPages}.
	
	In contrast, direct formatting applied to a SectionPages field is retained when
	the field is not surrounded by other text or fields.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Clear "Preserve Formatting During Updates"
	----------------------------------------------------
	
	Clear the Preserve Formatting During Updates check box when you insert the field
	code. (To locate this option, click Field on the Insert menu.)
	
	  -or-
	
	If you have already inserted the field, turn on field codes view by pressing
	ALT+F9 and remove the "\*Mergeformat" switch from the field code.
	
	Method 2: Insert Field Manually
	-------------------------------
	
	Insert the SectionPages field manually. To insert the field braces, press CTRL+F9
	and then type the field name inside the field braces.
	
	Method 3: Modify Style
	----------------------
	
	Modify the Header (or Footer) style to include the formatting you want.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
