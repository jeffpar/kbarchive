---
layout: page
title: "Q196979: WD97: Save As Text Converts Table to Paragraph-Delimited Text"
permalink: /kb/196/Q196979/
---

## Q196979: WD97: Save As Text Converts Table to Paragraph-Delimited Text

	Article: Q196979
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A table in a Microsoft Word document collapses into a single column of text when
	the document is saved in one of the following formats:
	
	  Text Only
	  Text Only with Line Breaks
	  MS-DOS Text
	  MS-DOS Text with Line Breaks
	
	CAUSE
	=====
	
	A table row is actually a special case of sequential paragraphs, using Chr(7)
	following the text's paragraph mark and Chr(13), as the end-of-cell and two of
	them for end-of-row delimiters. When the file is saved as text, the export
	routine strips the Chr(7) characters, leaving only the hard returns Chr(13).
	
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods.
	
	Method 1
	--------
	
	Save the document in Text With Layout format.
	
	Method 2
	--------
	
	Convert the table to tab-delimited text before you save the file. To do this,
	follow these steps:
	
	1. Place the insertion point inside the first cell of the table.
	
	2. On the Table menu, click Select Table.
	
	3. On the Table menu, click Convert Table To Text.
	
	4. Under the Separate Text With option, click Tabs.
	
	5. Click OK.
	
	Additional query words: one word convert converted converts converting conversion transfer transferred transfers transferring translate translated translates translating translation import importing
	
	======================================================================
	Keywords          : kbdta kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
