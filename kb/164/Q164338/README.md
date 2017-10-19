---
layout: page
title: "Q164338: WD97: Invalid Page Fault Printing Current Page"
permalink: /kb/164/Q164338/
---

## Q164338: WD97: Invalid Page Fault Printing Current Page

	Article: Q164338
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbusage word97
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print the current page of your document, you may receive the following
	error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	If you click Details, you receive the following error message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at
	  0137:<address>.
	
	CAUSE
	=====
	
	This problem occurs when the following conditions are true:
	
	- You are printing the document from page layout view.
	
	  -and-
	
	- Paragraph marks are visible in the document. (To show paragraph marks, click
	  the Show/Hide button on the Standard toolbar).
	
	
	
	NOTE: This problem occurs mainly with converted Word 7.0 or Word 2.x documents.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	
	To work around this problem, use the appropriate method for your situation.
	
	Method 1: Turn Off Non-Printing Characters
	------------------------------------------
	
	1. On the Tools menu, click Options.
	
	2. Click the View tab.
	
	3. Under Non-printing characters, click to clear all of the check boxes, and
	  then click OK.
	
	Try printing the current page again.
	
	Method 2: Switch to Another View Before Printing
	------------------------------------------------
	
	Change the view of the document before printing the current page. To do this,
	click Normal on the View menu.
	
	Try printing the current page again.
	
	Method 3: Do Not Print the Current Page
	---------------------------------------
	
	Try printing the entire document, or print just a range of pages.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	
	Additional query words: SR1 release1 8.0 8.00 hplj lj ipf dr. Watson drwatson dr
	
	======================================================================
	Keywords          : kbprint kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
