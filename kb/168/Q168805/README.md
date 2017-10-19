---
layout: page
title: "Q168805: WD97: Creating Large Numbers of Styles Creates Huge Scratch File"
permalink: /kb/168/Q168805/
---

## Q168805: WD97: Creating Large Numbers of Styles Creates Huge Scratch File

	Article: Q168805
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenv kberrmsg word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive one of the following error messages when trying to save, open,
	or close a document in Word, or while performing other Windows functions while
	Word is running:
	
	  The disk is full trying to write to <drive>. Free some space on this
	  drive, or save the document on another disk.
	
	  -or-
	
	  The disk is full or too many files are open.
	
	  -or-
	
	  Saving the AutoRecovery file is postponed for <file name>.
	
	CAUSE
	=====
	
	When you add a large number of styles to a document (or to several documents),
	the Word temporary scratch file, ~Wrs0001.tmp may become extremely large.
	Closing the original document has no effect on the scratch file.
	
	These error messages may occur if the ~Wrs0001.tmp file becomes too large,
	causing your computer to run out of disk space.
	
	WORKAROUND
	==========
	
	To work around this problem, quit and restart Microsoft Word. Quitting Word will
	remove the scratch file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
