---
layout: page
title: "Q114393: WD97:Word Prompts to Select Header Delimiter Opening Header File"
permalink: kb/114/Q114393/
---

## Q114393: WD97:Word Prompts to Select Header Delimiter Opening Header File

	Article: Q114393
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbualink97 word97 kbmerge kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a header file using the Mail Merge command, Word for Windows
	prompts you to select the header record delimiter.
	
	CAUSE
	=====
	
	By design, when Word reads a mail merge header or data document that contains
	only one line, Word prompts you to select the record delimiter. In a mail merge
	data or header document that contains at least two lines, Word compares the two
	lines and, if both lines contain the same number of a single delimiter, Word
	does not prompt you to select the delimiter.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	Method 1: Create the header document as a table
	-----------------------------------------------
	
	To avoid being prompted, create the header document using a table format or
	convert the one row of data to a table format.
	
	To create a table:
	
	1. Click Insert Table on the Table menu.
	
	2. Specify one row and a number of columns equal to the number of fields in your
	  header record.
	
	3. Type in the field names in each cell.
	
	Method 2: Convert an existing header row to a table
	---------------------------------------------------
	
	To Convert an existing header row to a table:
	
	1. Select the entire header row.
	
	2. On the Table menu, click Convert Text to Table.
	
	Method 3: create a header document that contains two records
	------------------------------------------------------------
	
	To avoid being prompted, create a header document that contains two records that
	use the same delimiter. For example:
	
	  Name,Address,City,State,Zip
	  Name,Address,City,State,Zip
	
	  -or-
	
	  Name,Address,City,State,Zip
	  ,,,,
	
	When the file contains two or more lines, Word compares the number of delimiters
	in the first and second lines. If both lines contain the same number of
	delimiters, Word does not prompt you to select the delimiter.
	
	NOTE: Word uses only the first record as the header record.
	
	The field delimiter used in the two identical records can be any character listed
	in the Field Delimiter list in the Header Record Delimiter dialog box.
	
	This method for automating the determination of the field delimiter does not
	extend to record delimiters. Even though the dialog box will allow you to
	specify alternative record delimiters, you cannot use any character other than a
	paragraph mark to delimit the two identical records in the header file if you
	want to avoid being prompted for delimiter selection.
	
	
	MORE INFORMATION
	================
	
	If the data document contains any identical records or only a single record, the
	Header Record Delimiter dialog box appears after you have selected the data
	document. This dialog box does not appear if your data document contains only
	dissimilar records.
	
	Additional query words: winword word97
	
	======================================================================
	Keywords          : kbprint kbualink97 word97 kbmerge kbPrinting 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
