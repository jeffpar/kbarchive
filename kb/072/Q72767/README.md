---
layout: page
title: "Q72767: WD97: Setting Sequence Numbering Using a Bookmark"
permalink: /kb/072/Q72767/
---

## Q72767: WD97: Setting Sequence Numbering Using a Bookmark

	Article: Q72767
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You can use the {SET} statement to set the sequence numbering in a {SEQ \r}
	statement in a Microsoft Word document.
	
	MORE INFORMATION
	================
	
	The \r switch used in a sequence field resets the sequence number to the number
	following the \r. You can also use a bookmark with a numeric value in this
	field. The SET variable is considered a bookmark after the SET field is updated.
	(The field can be updated by pressing F9 while the field is selected.) In the
	following example, the bookmark {year} is set to 1992 at the beginning of the
	document. The {SEQ} field starts the sequence number at {year}, which results in
	1992.
	
	Note that the variable {year} becomes a bookmark that must be contained in field
	code brackets when used.
	
	Example                 Result
	-------                 ------
	
	{set year 1992}
	{SEQ yr \r{year} }       1992
	{SEQ yr}                1993
	{SEQ yr}                1994
	
	Additional query words: anual sequences numerical series
	
	======================================================================
	Keywords          : kbdta winword 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
