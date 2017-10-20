---
layout: page
title: "Q140869: WD97: Mouse Click Selects Multiple Cells in Embedded Spreadsheet"
permalink: /kb/140/Q140869/
---

## Q140869: WD97: Mouse Click Selects Multiple Cells in Embedded Spreadsheet

{% raw %}

	Article: Q140869
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbole word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word, when you click a cell in an embedded Microsoft Excel
	spreadsheet, multiple cells are selected. Repeatedly clicking in other cells
	continues to select cells instead of clearing the current selection.
	
	This action is similar to holding down the SHIFT key while you click in a
	different section of the spreadsheet.
	
	Other symptoms include loss of characters and characters changing between
	uppercase and lowercase.
	
	CAUSE
	=====
	
	The possible causes for this problem include the following:
	
	- The SHIFT key is stuck in the down position.
	
	  -or-
	
	- The extend selection mode is turned on.
	
	  -or-
	
	- All Caps formatting is turned on.
	
	WORKAROUND
	==========
	
	To work around this problem, use the appropriate method for your situation.
	
	Method 1: Stuck SHIFT Key
	-------------------------
	
	Check to see if either SHIFT key is stuck in the down position on your keyboard.
	
	Method 2: Turn Off Extend Mode
	------------------------------
	
	If EXT appears bold in your status bar, press ESC on your keyboard and then click
	somewhere in your document to deselect any selection.
	
	Method 3: Turn Off All Caps Formatting
	--------------------------------------
	
	To turn off All Caps formatting, follow these steps:
	
	1. Select any words that are in all capital letters.
	
	2. On the Format menu, click Font.
	
	3. Check to clear the All Caps check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	
	MORE INFORMATION
	================
	
	The following table lists ways you can extend a selection.
	
	  To do this                             Press this key
	  ------------------------------------------------------------------------
	
	  Turn extend mode on                    F8
	
	  Select the nearest character           F8, and then press the LEFT ARROW
	                                         key or the RIGHT ARROW key
	
	  Increase the size of a selection       F8 (press once to select a
	                                         word, twice to select a sentence,
	                                         and so forth)
	
	  Reduce the size of a selection         SHIFT+F8
	
	  Turn extend mode off                   ESC
	
	Additional query words: highlight select many shift cells loss missing characters case change embedded OLE winword Graph spreadsheet
	
	======================================================================
	Keywords          : kbinterop kbole word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
