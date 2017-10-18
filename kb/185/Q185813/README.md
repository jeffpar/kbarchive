---
layout: page
title: "Q185813: WD97: Drop Cap Jumps to Previous Column"
permalink: kb/185/Q185813/
---

## Q185813: WD97: Drop Cap Jumps to Previous Column

	Article: Q185813
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbframe
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a multi-column document, when you insert a "dropped" drop cap at the
	beginning of the second or subsequent column, the drop cap jumps to the bottom
	of the previous column.
	
	CAUSE
	=====
	
	This functionality is by design and occurs when the paragraph starts in the
	previous column and wraps to the top of the next column. When you format a drop
	cap as "dropped," Word moves the formatted letter to the beginning of the
	paragraph.
	
	WORKAROUND
	==========
	
	Do one of the following to correctly position a drop cap:
	
	- Make sure the letter you are formatting as a drop cap is the first letter of
	  the paragraph, and that the paragraph starts at the top of the column in the
	  previous column.
	
	  NOTE: Make sure the paragraph does not continue from the previous column.
	
	  -or-
	
	- After you insert the drop cap, drag it to the correct position.
	
	MORE INFORMATION
	================
	
	When you click Drop Cap on the Format menu, Word formats a letter, word, or
	selected text as a large initial, or dropped, capital letter. A "drop cap,"
	which is traditionally the first letter in a paragraph, can appear either in the
	left margin or dropped from the base line of the first line in the paragraph.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q185923 WD97: Text Formatted with "Drop Cap" in Wrong Place on Page
	
	Additional query words: large initial character dropcap
	
	======================================================================
	Keywords          : kbdta word97 kbframe 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
