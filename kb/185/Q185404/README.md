---
layout: page
title: "Q185404: WD97: Incorrect Value/Table Cell Inserted Referencing Bookmark"
permalink: kb/185/Q185404/
---

## Q185404: WD97: Incorrect Value/Table Cell Inserted Referencing Bookmark

	Article: Q185404
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Case 1
	------
	
	When you reference a bookmarked table cell using a formula field, Word inserts an
	incorrect value.
	
	Case 2
	------
	
	When you reference a bookmarked table cell using the Ref field, Word inserts a
	table cell containing the correct value.
	
	WORKAROUND
	==========
	
	Use the appropriate method to reference the correct information in a table cell
	or to use a value contained in a table cell in a calculation.
	
	Method 1: Bookmark the Contents of the Table Cell
	-------------------------------------------------
	
	Do not bookmark the entire table cell. Ensure that the end of cell marker is not
	selected when you set the bookmark in the table cell.
	
	Use either a formula or Ref field to retrieve the contents of the bookmark.
	
	  For example: {= bookmarkname} or {REF bookmarkname}
	
	Method 2: Bookmark the Entire Table
	-----------------------------------
	
	Use the formula field to reference the appropriate table cell using the formula
	{= SUM(bookmarkname cell)}.
	
	  For example: {= SUM(table1 C3)}
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about bookmarks and reference fields, click Contents And
	Index on the Help menu, click the Index tab in Microsoft Word Help, type the
	following text
	
	  ref
	
	and then double-click the selected text to go to the "Field codes: Bookmark and
	Ref fields" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
	Additional query words: wrong value
	
	======================================================================
	Keywords          : kbdta kbfield word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
