---
layout: page
title: "Q197826: WD97: Underline Formatting Does Not Appear at End of Line"
permalink: /kb/197/Q197826/
---

## Q197826: WD97: Underline Formatting Does Not Appear at End of Line

	Article: Q197826
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You cannot apply underline character formatting to a line that contains only
	spaces. If you attempt to apply this type of formatting to a space character,
	the underline is not displayed or printed.
	
	CAUSE
	=====
	
	There must be at least one character other than a space at the end of a line for
	underline formatting to appear. Similarly, underline character formatting does
	not appear on spaces following the last character on a line.
	
	WORKAROUND
	==========
	
	Use one of the following procedures to extend an underline past the end of text
	on a line:
	
	- Type at least one non-breaking space at the end of the line where you want
	  the underline to stop. To type a non-breaking space, press
	  CTRL+SHIFT+SPACEBAR.
	
	  -or-
	
	- Set a right-aligned tab stop at the position where you want the underline to
	  stop. Apply underline formatting to the tab.
	
	  -or-
	
	- Set a right-aligned tab stop with a solid, underscore leader. To do this,
	  click to select the Leader 4 option button in the Tabs dialog box (Format
	  menu).
	
	If you apply hidden and underline character formatting to text, the underline
	formatting appears on the screen, but it is not displayed in print preview nor
	is it printed.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q195485 WD97: How to Create Ruling Lines or Blank Underlines in Word
	
	  Q196855 WD97: How to Extend Form Field Underlines to a Fixed Point
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbualink97 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
