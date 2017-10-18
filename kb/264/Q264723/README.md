---
layout: page
title: "Q264723: WD97: How to Suppress Blank Lines During a Mail Merge"
permalink: kb/264/Q264723/
---

## Q264723: WD97: How to Suppress Blank Lines During a Mail Merge

	Article: Q264723
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During a mail merge in Microsoft Word, you may want to remove blank lines from
	the merged document if no information is available for that line.
	
	For additional information about how to suppress a blank line when you use a
	conditional statement (IF field), click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q264787 WD97: Blank Line Is Not Suppressed in a Conditional Mail Merge
	
	MORE INFORMATION
	================
	
	Frequently, in mail merges that involve addresses, there is a second line for
	the street address. This second line is normally used for a suite or apartment
	number. In order to close the "gap" in the address when no data exists for that
	merge field, make sure you do not place any spaces, punctuation, or anything
	else except merge fields on that second line. If there is anything else on that
	line, that line appears in all merges.
	
	NOTE: Each line must end with a paragraph mark (<B6>) in order for Word to suppress
	the line, if the result of the MERGEFIELDS is blank. If the line ends with a New
	Line character, Word cannot suppress a blank line.
	
	The mail merge feature evaluates each line as the merge is performed. If there is
	any text on the line, that line appears in the merge result. If there is no text
	on the line, but there is a merge field, the mail merge feature checks to see
	whether there is any data for the merge field. If there is no data for the merge
	field, that line is not created in the merge result.
	
	To change this feature setting, follow these steps:
	
	NOTE: You must be in the mail merge Main (form) document to change the setting
	for the merge.
	
	1. On the Tools menu, click Mail Merge.
	
	2. In the Mail Merge Helper dialog box, click Merge.
	
	  NOTE: You must select the main document and data source for the merge before
	  you perform step 2.
	
	3. In the Merge dialog box, under When Merging Records, click either:
	
	   - Don't print blank lines when data fields are empty.
	
	     -or-
	
	   - Print blank lines when data fields are empty.
	
	4. Click Close in the Merge dialog box, and then click Close in the Mail Merge
	  Helper.
	
	  NOTE: If you made no changes in the Merge dialog box, the Close button is not
	  available. Click Cancel instead.
	
	REFERENCES
	==========
	
	For more information about suppressing blank lines in mail merges, click
	"Contents and Index" on the Help menu, click the Index tab in Word Help, type
	the following text
	
	  troubleshoot mail merge
	
	and then double-click the selected text to go to the "Blank lines are showing in
	the merged documents" topic. If you are unable to find the information you need,
	ask the Office Assistant.
	
	Additional query words: suppress remove empty null close mailmerge
	
	======================================================================
	Keywords          : kbdta word8 word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
