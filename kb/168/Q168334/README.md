---
layout: page
title: "Q168334: WD97: Read-Only Recommended Option Lost When Saving"
permalink: kb/168/Q168334/
---

## Q168334: WD97: Read-Only Recommended Option Lost When Saving

	Article: Q168334
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a document in a format other than "Word Document (*.doc)," and the
	Read-only Recommended option is selected, Word does not save the Read-only
	Recommended option with the document.
	
	NOTE: You do not receive a warning alerting you that the option will be lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	In Word 97, when you save a document with a password in a different format, such
	as "Rich Text Format (*.rtf)," the following message is displayed:
	
	  This document is password protected. Saving this document in a format other
	  than the current version of Word will result in the loss of this protection.
	
	When you save a document in a format other than "Word Document (*.doc)" with the
	Read-only Recommended option selected, Word does not display a similar message,
	and the Read-only Recommended option is not saved.
	
	
	When you use the Read-only Recommended option with Word documents, you are
	prompted to open the document as read-only the next time you open it. If you
	open it as read-only and make changes, you are prompted to save the document
	under a new file name.
	
	To set the Read-only Recommended option:
	
	1. On the File menu, click Save (if the file has not previously been saved).
	
	  -or-
	
	  On the File menu, click Save As.
	
	2. Click Options.
	
	3. On the Save tab, select the Read-only Recommended check box, and then click
	  OK.
	
	Additional query words: word97 8.0 saving protection lost missing changes modify safe lock
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
