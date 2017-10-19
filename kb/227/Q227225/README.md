---
layout: page
title: "Q227225: WD97: TOC Shows Backslash Instead of Quotation Marks"
permalink: /kb/227/Q227225/
---

## Q227225: WD97: TOC Shows Backslash Instead of Quotation Marks

	Article: Q227225
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a table of contents entry field (that is, a TC field) that
	contains quoted material at the end of the TC field, the table of contents shows
	the entry concluding with a backslash (\) rather than a set of quotation marks
	as its final character.
	
	This behavior occurs when the "Straight quotes" with "smart quotes" option is not
	selected (on the Tools menu, point to AutoCorrect, click the AutoFormat As You
	Type tab, and look under "Replace as you type").
	
	For example, the following item in the document
	
	Use of the Phrase "The quick brown fox jumps over the lazy dog."
	
	appears in the TC field as
	
	{TC "Use of the Phrase \"The quick brown fox jumps over the lazy dog.\" "}
	
	and appears in the table of contents as:
	
	Use of the Phrase "The quick brown fox jumps over the lazy dog.\
	
	WORKAROUND
	==========
	
	Place a period between the final two sets of quotation marks.
	
	{TC "Use of the Phrase \"The quick brown fox jumps over the lazy dog.\"."}
	
	MORE INFORMATION
	================
	
	The backslashes in the field indicate to Word that the quotation marks are to
	appear in the table of contents and that they do not indicate the end of the
	material. If the backslashes are not present, the text that appears in the table
	of contents ends with the second set of quotation marks. In the above example,
	
	Use of the Phrase
	
	would appear in the table of contents.
	
	Additional query words: table of contents entry winword backslash slash missing quotes quotation mark incorrect
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
