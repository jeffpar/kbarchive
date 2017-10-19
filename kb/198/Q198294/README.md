---
layout: page
title: "Q198294: WD97: Tabs in Tables Lost When Saving As Text with Layout"
permalink: /kb/198/Q198294/
---

## Q198294: WD97: Tabs in Tables Lost When Saving As Text with Layout

	Article: Q198294
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
	
	When you save a Word document as either Text with Layout or MS-DOS Text with
	Layout, and the document contains a table that is formatted with tab stops, some
	or all tabs that were in the table may be lost when the document is converted.
	
	CAUSE
	=====
	
	When the Word for Windows document contains a table, the converter separates the
	table columns by using a tab in the text file. The converter cannot handle a
	right-aligned tab correctly. This tab is lost in the text file, and a space is
	placed between the text instead of the tab. All other tabs are retained from the
	table: table column separators, left-aligned, center-aligned, and
	decimal-aligned.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
