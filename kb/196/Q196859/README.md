---
layout: page
title: "Q196859: WD97: Cannot Rename Normal.dot If Word Mail Is Running"
permalink: /kb/196/Q196859/
---

## Q196859: WD97: Cannot Rename Normal.dot If Word Mail Is Running

	Article: Q196859
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to rename the Normal template while Word Mail is running, you
	receive the following error message:
	
	  Cannot rename Normal: Access is denied.
	
	  Make sure the disk is not full or write-protected and that the file is not
	  currently in use.
	
	CAUSE
	=====
	
	When you compose a mail message, a session of Microsoft Word is opened in the
	background. When Word is active, it uses the Normal template and creates a
	temporary file for Normal.dot; therefore, you cannot rename the file.
	
	This behavior is by design of Microsoft Word.
	
	WORKAROUND
	==========
	
	To work around this problem, send your mail message and close Word before you
	rename the Normal template.
	
	NOTE: You may also have to close Outlook or Exchange so that the Normal.dot
	temporary file is closed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
