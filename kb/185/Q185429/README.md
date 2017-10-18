---
layout: page
title: "Q185429: WD97: Link to Excel Worksheet Object Not Updated Automatically"
permalink: kb/185/Q185429/
---

## Q185429: WD97: Link to Excel Worksheet Object Not Updated Automatically

	Article: Q185429
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbole kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you make changes to a Microsoft Excel worksheet that is linked to a
	Microsoft Word document, the changes may not be automatically updated in the
	document.
	
	CAUSE
	=====
	
	This problem may occur if either of the following is true:
	
	- Excel was not running when you opened the Word document containing the Excel
	  links.
	
	  -or-
	
	- While both Excel and Word were open, you closed and reopened the Excel
	  worksheet and then made a change to the worksheet.
	
	WORKAROUND
	==========
	
	To update the linked Excel object, use any of the following methods.
	
	Method 1: Update the Field in Word
	----------------------------------
	
	To update the linked field in Word, follow these steps:
	
	1. Click the object in the Word document.
	
	2. Press F9.
	
	NOTE: This method does not re-establish automatic updating. Each time you modify
	the Excel worksheet, you must update the Word field using these steps.
	
	Method 2: Close and Reopen the Word Document
	--------------------------------------------
	
	1. Start Excel and open the worksheet. Save it.
	
	2. Start Word and open the document that contains the link to the Excel
	  worksheet.
	
	Method 3: Close and Reopen Both Programs
	----------------------------------------
	
	To re-establish automatic updating of the linked fields, follow these steps:
	
	1. Close both Excel and Word.
	
	2. Open Excel and the worksheet that is linked in Word.
	
	3. Open Word and the document containing the Excel links.
	
	NOTE: If you close the Excel worksheet during this session of both Word and
	Excel, automatic updating will be lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: cut chart interoperability OLE table
	
	======================================================================
	Keywords          : kbole kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
