---
layout: page
title: "Q167881: WD97: IPF Clicking Next Section in Binder Print Preview"
permalink: /kb/167/Q167881/
---

## Q167881: WD97: IPF Clicking Next Section in Binder Print Preview

	Article: Q167881
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print preview a file in the Microsoft Office Binder that contains a
	Word document section, you receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you will receive the following error message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at <address>
	
	CAUSE
	=====
	
	This problem occurs when the following are true:
	
	- you click the Next Section button on the Binder Print Preview toolbar
	
	  -and-
	
	- you are viewing the section immediately preceding the Word document section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: 8.0 gpf general protection
	
	======================================================================
	Keywords          : kberrmsg kbinterop word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
