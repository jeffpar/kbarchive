---
layout: page
title: "Q185516: WD97: Crash IPF Reading an RTF File Converted from Mac Word 5.1"
permalink: /kb/185/Q185516/
---

## Q185516: WD97: Crash IPF Reading an RTF File Converted from Mac Word 5.1

	Article: Q185516
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
	
	When you open a Rich Text Format (RTF) file in Microsoft Word 97, you may
	receive the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	When you click Details the following message appears:
	
	  Winword caused an invalid page fault in module Winword.exe at
	  0137:<address>.
	
	CAUSE
	=====
	
	This problem occurs when the following conditions are true:
	
	- The file was created in Microsoft Word 5.1 for the Macintosh.
	
	  -and-
	
	- The file contains links and tables.
	
	  -and-
	
	- The file was opened in Microsoft Word 97 and then saved in Rich Text Format
	  (RTF).
	
	If there is a link before a table, and if the first cell of that table contains a
	link, the document becomes corrupted. This corruption causes the invalid page
	fault.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
