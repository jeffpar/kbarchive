---
layout: page
title: "Q243911: WD97: Error or Word Quits When Trying to Split Table Cells"
permalink: /kb/243/Q243911/
---

## Q243911: WD97: Error or Word Quits When Trying to Split Table Cells

{% raw %}

	Article: Q243911
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 01-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to split a cell in a table, Microsoft Word 97 may quit
	unexpectedly, or you may receive the following error message
	
	  WINWORD.exe has generated errors and will be closed by Windows. You will need
	  to restart the program.
	
	and then Word quits.
	
	NOTE: If Dr. Watson is running, you may receive a Dr. Watson error.
	
	CAUSE
	=====
	
	This behavior can occur if you first protect the document for forms, you then
	unprotect the document, and you then select an empty cell before you split the
	cell, as in the following example:
	
	1. Start Word 97, and then create a new document.
	
	2. On the Table menu, click Insert Table.
	
	3. In the Insert Table dialog box, accept the defaults, and then click OK.
	
	4. On the Tools menu, click Protect Document.
	
	5. In the Protect Document dialog box, click Forms, and then click OK.
	
	6. On the Tools menu, click Unprotect Document.
	
	7. Double-click an empty table cell to select the cell (the cell turns dark).
	
	8. On the Table menu, click Split Cells.
	
	Word quits unexpectedly, and you may receive an Invalid Page Fault (IPF) in
	Winword.exe.
	
	WORKAROUND
	==========
	
	To work around this issue, use one of the following methods.
	
	Method 1
	--------
	
	Instead of selecting a cell to split, place the insertion point inside the cell
	that you want, and then on the Table menu, click Split Cells.
	
	Method 2
	--------
	
	After you unprotect the document, and before you attempt to split the table cell,
	change the Zoom setting on the standard toolbar (to any new setting); after you
	split the table cell, return the Zoom setting to the setting that you want.
	
	Method 3
	--------
	
	After you unprotect the document, and before you attempt to split the table cell,
	on the View menu, click Web Layout, and then click Normal.
	
	STATUS
	======
	
	This problem was corrected in Word 2000.
	
	Additional query words: drwtsn dr watson
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
