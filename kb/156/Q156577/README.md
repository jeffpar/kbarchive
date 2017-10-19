---
layout: page
title: "Q156577: WD97: Why You Are Unable to Recover a Lost Document"
permalink: /kb/156/Q156577/
---

## Q156577: WD97: Why You Are Unable to Recover a Lost Document

	Article: Q156577
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Word may be unable to automatically recover your document after Word shut down
	unexpectedly.
	
	CAUSE
	=====
	
	This problem may occur when any of the following conditions are true:
	
	- An AutoRecover file has not been created yet.
	
	  By default, an AutoRecover file will not be saved until ten minutes after you
	  start work on it. After ten minutes, the AutoRecover file is created. If a
	  failure shuts down Word prematurely, Word will use the AutoRecover file to
	  recover the document.
	
	  -or-
	
	- An AutoRecover file is deleted after the document has been saved.
	
	  A new AutoRecover file is not created until after the next AutoRecover
	  duration (by default: ten minutes after you start working on the document).
	
	  -or-
	
	- The document was closed and changes were not saved.
	
	  Once a document has been closed, the AutoRecover file is deleted. There is no
	  way to recover the document once the file has been closed and changes were
	  not saved.
	
	WORKAROUND
	==========
	
	To change the AutoRecover Save duration, follow these steps:
	
	1. On the Tools menu, click Options, and then click the Save tab.
	
	2. In the "Save AutoRecover Info Every" box, change the number to the desired
	  time interval between AutoRecover saves, and click OK.
	
	NOTE: AutoRecover is not a substitute for saving your document. When you use
	AutoRecover, Word creates a temporary file to recover your document if Word
	shuts down unexpectedly. You must still save your document in order to retain
	your changes.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q156573 WD97: How to Recover Text from Any File
	
	Additional query words: crashed hung locked corrupt frozen tshoot
	
	======================================================================
	Keywords          : kbualink97 word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
