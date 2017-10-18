---
layout: page
title: "Q196511: WD97: &quot;Bookmark Not Defined&quot; When Merging Document That Has TOC"
permalink: kb/196/Q196511/
---

## Q196511: WD97: &quot;Bookmark Not Defined&quot; When Merging Document That Has TOC

	Article: Q196511
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform a mail merge to a new document and the main document contains a
	table of contents or a table of figures, the following error message appears,
	instead of page numbers, when you update the table:
	
	  ERROR! Bookmark not defined
	
	Indexes and tables of authorities are not affected by this problem.
	
	This does not happen when you perform the mail merge directly to the printer.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1
	--------
	
	Unlink the table of contents before merging to a new document. This converts the
	TOC field to actual text, and the table of contents can no longer be updated. If
	you want to update the table of contents, you must reinsert it.
	
	Follow these steps to unlink the table of contents:
	
	1. Place the insertion point within the table of contents.
	
	2. Press CTRL+SHIFT+F9.
	
	Method 2
	--------
	
	Insert the table of contents after merging to the new document.
	
	Method 3
	--------
	
	Merge directly to the printer, instead of merging to a new document.
	
	MORE INFORMATION
	================
	
	The GOTO fields and PAGEREF fields that display the page numbers in the table of
	contents remain linked after the merge, but the bookmarks they refer to are
	unlinked and are no longer available.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
