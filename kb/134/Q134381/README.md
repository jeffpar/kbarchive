---
layout: page
title: "Q134381: PC Gen: DIRSYNC.DOC from Mail 3.5 Does Not Print"
permalink: /kb/134/Q134381/
---

## Q134381: PC Gen: DIRSYNC.DOC from Mail 3.5 Does Not Print

	Article: Q134381
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print the DIRSYNC.DOC file, included on the Mail Utilities disk
	in version 3.5 of Microsoft Mail for PC Networks, the file may not print from
	Microsoft Word version 6.0 or later for Windows.
	
	CAUSE
	=====
	
	The DIRSYNC.DOC file, located in the DIRSYNC directory on the Mail Utilities
	disk, is formatted using the A4 page layout. When you try to print the document,
	the printer will prompt you to insert A4 paper, and it will not print until this
	is done. However, this paper size is currently not used by default in the United
	States.
	
	RESOLUTION
	==========
	
	To be able to print the DIRSYNC.DOC, open the document in Microsoft Word for
	Windows and position the cursor anywhere in the document body (not the header),
	from the File menu, choose Page Setup. Then select the Paper Size tab.
	
	In the Paper Size option, select Letter 8.5 x 11 inch. The DIRSYNC.DOC should now
	print using normal 8.5 x 11-inch paper.
	
	NOTE: According to the DIRSYNC.DOC, the total number of pages in the document is
	32. This is incorrect. The number of pages, when printed using the Normal 8.5 x
	11 Letter format, is 54 pages long.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	
	=============================================================================
	
