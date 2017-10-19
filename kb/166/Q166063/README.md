---
layout: page
title: "Q166063: WV: Document Open in Word Viewer, Word Has Read-Only Access"
permalink: /kb/166/Q166063/
---

## Q166063: WV: Document Open in Word Viewer, Word Has Read-Only Access

	Article: Q166063
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbusage kbdta kbviewer word97
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word Viewer 97-2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you open a document in Microsoft Word Viewer 97-2000 and then open that same
	document in Microsoft Word (while it is still open in Word Viewer), Microsoft
	Word opens the document as read-only.
	
	Microsoft Word should open the document as read-write because Word Viewer cannot
	make changes to the document.
	
	WORKAROUND
	==========
	
	Close the document in Word Viewer. You can now open the document as read- write
	in Microsoft Word.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Microsoft Word opens a document as read-only if the document is already open
	somewhere else. The first program to open the document gets read-write
	privileges.
	
	REFERENCES
	==========
	
	For more information about Word Viewer 97-2000, please see the following
	Knowledge Base article:
	
	  
	
	  Q165908 WV: How to Obtain Microsoft Word Viewers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbdta kbviewer word97 
	Technology        : kbWordViewerSearch kbViewerSearch kbWordViewer97
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	
