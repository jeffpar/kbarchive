---
layout: page
title: "Q172328: WD97: Mail Merge with Merged Cells in Data Table Hangs Word"
permalink: /kb/172/Q172328/
---

## Q172328: WD97: Mail Merge with Merged Cells in Data Table Hangs Word

	Article: Q172328
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmerge kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attach a data file to a mail merge main document, Microsoft Word may
	stop responding when switching between Edit Data Source and Edit Main Document.
	
	CAUSE
	=====
	
	This problem occurs if the data file contains too many merged columns, rows, and
	cells.
	
	WORKAROUND
	==========
	
	To work around this problem, reformat the data file into a standard format: such
	as a tab and comma delimited file, or a standard table or spreadsheet structure.
	
	STATUS
	======
	
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Word 97 allows you to merge (or combine) adjacent and vertical table rows,
	columns, or cells. By doing so, you can create a table that is too difficult for
	Word to parse into the correct rows and columns. If this occurs, Word may stop
	responding when working with the data file.
	
	NOTE: Because the table drawing tool uses cell merging and splitting frequently
	to create and format tables, it may create a table that is too difficult for
	Word 97 to parse.
	
	
	REFERENCES
	==========
	
	For more information about creating data files, click the Office Assistant, type
	"creating a data file," click Search, and then click "Create a new mail merge
	data source in Word."
	
	For more information about merging and splitting cells, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q161671 WD97: "Word Could Not Split..." Attempting to Split Cells
	
	  Q166951 WD97: Merge Cells Before Split Setting Causes Unexpected Results
	
	  Q155910 WD97: Table Column Selection May Show Incorrect With Merged Cell
	
	  Q157478 WD97: What's New in Word 97
	
	Or, click the Office Assistant, type "merging table cells," click Search, and
	then click "merge cells into one cell in a table"
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : kbmerge kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
