---
layout: page
title: "Q71829: WD97: Using MergeRec to Number Mail Merge Records"
permalink: kb/071/Q71829/
---

## Q71829: WD97: Using MergeRec to Number Mail Merge Records

	Article: Q71829
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbfield winword word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The MERGEREC field can be used to automatically number the records in a
	Microsoft Word print merge document.
	
	MORE INFORMATION
	================
	
	You can use the MERGEREC field in the main document of a mail merge in Word to
	automatically indicate which record is being merged. This field is updated
	during the mail merge and inserts the number of the current record into the
	merged document.
	
	To use the MERGEREC field:
	
	1. Press CTRL+F9 to insert field braces ({}) in the main document where the
	  merged record number is to be placed.
	
	2. Type the word MERGEREC. (This is not case sensitive.)
	
	3. Perform the mail merge as usual.
	
	NOTE: If you are merging multiple records into a table (for example, to print
	labels) you should place a MERGEREC field in each cell of the table following
	the NEXT or NEXTIF field. The NEXT or NEXTIF field will increment the result of
	the MERGEREC field and number each record in the table.
	
	REFERENCES
	==========
	
	"Microsoft Word for Windows User's Reference," page 102.
	
	"Microsoft Word for Windows Technical Reference," page 173.
	
	"Microsoft Word for Windows and OS/2 Technical Reference," page 364.
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbualink97 kbdta kbfield winword word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
