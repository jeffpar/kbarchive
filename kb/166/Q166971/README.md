---
layout: page
title: "Q166971: WD97: Invalid Page Fault When Normal.dot Is a Document"
permalink: /kb/166/Q166971/
---

## Q166971: WD97: Invalid Page Fault When Normal.dot Is a Document

	Article: Q166971
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbtshoot kbtemplate word97
	Last Modified: 08-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to start Word 97 for Windows, the following error message appears:
	
	  This program has performed an illegal operation and will be shut down.
	
	If you select the Details button, the following message appears:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at 0137:301e403c.
	
	CAUSE
	=====
	
	This error occur because the Normal.dot template, the default template in Word
	for Windows, is actually a document named Normal.dot and has been placed in the
	templates folder that Word has been configured to look in for its default
	template.
	
	RESOLUTION
	==========
	
	Use one of the following methods to resolve this issue.
	
	Method 1: Rename or Delete the Document
	---------------------------------------
	
	1. In Windows Explorer, find and select the Normal.dot document.
	
	2. On the Edit menu, click Rename to rename the document. For example, you can
	  rename the document to Normal.doc.
	
	NOTE: If a Normal.dot file does not exist, a new Normal.dot will be automatically
	created the next time you start and then close Word.
	
	Method 2: Open and Save the Document as a Template
	--------------------------------------------------
	
	After using Method 1 to rename the document, do the following:
	
	1. Start Word for Windows.
	
	2. On the File menu, click Open.
	
	3. Locate the folder and select the document you renamed in Method 1.
	
	4. Click OK.
	
	5. On the File menu, click Save As.
	
	6. In the Save As Type box, click Document Template(*.dot).
	
	7. In the File Name box, rename the file.
	
	  If you want to use the document as your default template, rename the file to
	  "Normal" (Word will automatically apply the .dot extension).
	
	8. Click OK.
	
	REFERENCES
	==========
	
	For more information about the Normal template, click the Office Assistant, type
	"Normal.dot", click Search, and then click to view "The Normal Template."
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtshoot kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
