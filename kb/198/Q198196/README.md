---
layout: page
title: "Q198196: WD97: Excel Object Pasted As Hyperlink Is a Single Link"
permalink: /kb/198/Q198196/
---

## Q198196: WD97: Excel Object Pasted As Hyperlink Is a Single Link

{% raw %}

	Article: Q198196
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you paste a selection of several cells into Word using the Paste As
	Hyperlink command, the contents of each cell appear as separate hyperlinks.
	However, the entire object is actually a single hyperlink. For example, when you
	display fields codes, you see something like this:
	
	     {HYPERLINK "c:\\My Documents\Book1.xls" \l "sheet1!C2"}
	
	Where C2 in this example represents the last cell in the range of data in
	Microsoft Excel. Note that this is a single cell reference and not a reference
	to a range of cells. This cell reference can point to any cell, A1 or Z255 for
	example, and depends on the amount of data that you copy and paste.
	
	CAUSE
	=====
	
	When the information is copied from Excel and placed on the clipboard, it is
	pasted as one large selection. Therefore, when you paste this selection into
	Word, it pastes as a single object.
	
	
	WORKAROUND
	==========
	
	To create hyperlinks to individual cells in an Excel worksheet, copy and paste a
	single cell from Excel to Word.
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
