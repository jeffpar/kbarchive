---
layout: page
title: "Q170875: WD97: IPF Printing Document with Large Merged Cells"
permalink: kb/170/Q170875/
---

## Q170875: WD97: IPF Printing Document with Large Merged Cells

	Article: Q170875
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbtable
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a document in Microsoft Word 97 containing page numbers and a
	merged table cell that spans several pages, you may get the following error
	message when you try to print a page other than page one:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	Clicking the Details button shows:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE.
	
	CAUSE
	=====
	
	This error only occurs if the repagination is not up to date.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR-1).
	
	To work around this problem and prevent the this error message from being
	displayed, follow these steps to update the repagination:
	
	1. On the File menu, click Print Preview.
	
	2. Print the document from this view or click the Close button to return to the
	  document in the view that you were in prior to changing to Print Preview and
	  then print the document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	Additional query words: sr1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kberrmsg kbprint kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
