---
layout: page
title: "Q157775: WD97: Can't Save Version for Read-Only Document"
permalink: /kb/157/Q157775/
---

## Q157775: WD97: Can't Save Version for Read-Only Document

	Article: Q157775
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to save a version of a read-only document, the following error
	message appears:
	
	  This file is read-only.
	  filename
	
	CAUSE
	=====
	
	This functionality is by design. When you open a document that was saved with
	the Read-only recommended option selected, the following message appears:
	
	  <filename> should be opened as read-only unless changes to it need to
	  be saved. Open as read-only?
	
	If you click Yes, the document is opened as read-only. Changes you make to this
	file cannot be saved back to the original file.
	
	If you click No, the document is opened normally. Changes you make to this file
	can be saved back to the original file.
	
	WORKAROUND
	==========
	
	If you want to make changes to a read-only document (for example, you want to
	save a version of the file), do not open it as read-only. Instead, when Word
	asks you how to open the file with the message listed in the "Cause" section of
	this article, click No. Word will open the file as a normal Word document. Then
	you can save a version of the document, make changes to it, and save the current
	version of the file.
	
	Additional query words: versioning
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
