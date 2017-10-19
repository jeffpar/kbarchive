---
layout: page
title: "Q170265: WD97: Error Opening Korean Document with Numbering in U.S. Word"
permalink: /kb/170/Q170265/
---

## Q170265: WD97: Error Opening Korean Document with Numbering in U.S. Word

	Article: Q170265
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbusage word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Word 97 (the U.S. version), when you open a document created in the Korean
	version of Word 97, and you then save the document in Rich Text Format (RTF) or
	HTML format, you may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click Details, you receive the following message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE.
	
	CAUSE
	=====
	
	This error message occurs when you create a document in the Korean version of
	Word 97 that contains heading levels with no numbering, numbering with symbol
	characters, or numbering with other double-byte characters.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	REFERENCES
	==========
	
	For more information about international features, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q163813 WD97: International Characters Incorrectly Mapped
	
	  Q159950 WD97: General Information About International Functionality
	
	  Q159471 WD97: How to Install the Far East Support Files
	
	For more information about exchanging documents with international versions of
	Word, click the Office Assistant, type "international" (without the quotation
	marks), click Search, and then click the "International features in Word"
	topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: SR1 release1 8.0 8.00 ipf gpf
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
