---
layout: page
title: "Q195328: WD97: Mail Merge Main Document Restored to Normal Word Document"
permalink: /kb/195/Q195328/
---

## Q195328: WD97: Mail Merge Main Document Restored to Normal Word Document

	Article: Q195328
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a mail merge main document, the file is no longer a mail merge
	main document.
	
	This problem occurs when the following are true:
	
	- Your mail merge main document is attached to a Microsoft Access data source.
	
	  -and-
	
	- You save your mail merge main document in Rich Text Format (*.rtf). (Note
	  that in Microsoft Word 97 [non SR-1 release], saving a file in the Word
	  6.0/95 format saves the file in Rich Text Format).
	
	NOTE: This problem occurs when you attach your data source by either DDE or ODBC.
	
	WORKAROUND
	==========
	
	Reset your document as a mail merge main document by clicking Mail Merge on the
	Tools Menu. Reset the type of document (Step #1 - Main Document) and reattach
	your Microsoft Access data source (Step #2 - Data Source) to your mail merge
	main document.
	
	NOTE: You may want to save your mail merge main document in Word format to
	prevent this problem from recurring.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q161978 WD97: RTF Format Given to File Send in Word 6.0/95
	
	  Q162602 WD97: Questions About Saving in the Word 6.0/95 File Format
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
