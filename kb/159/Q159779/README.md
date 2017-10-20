---
layout: page
title: "Q159779: WD97: Invalid Page Fault Opening File with Long Path, File Name"
permalink: /kb/159/Q159779/
---

## Q159779: WD97: Invalid Page Fault Opening File with Long Path, File Name

{% raw %}

	Article: Q159779
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbualink97 kbusage
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Case 1
	------
	
	When you attempt to open a document by double-clicking the file in Windows
	Explorer, the following error message appears:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click Details, one of the following error messages appears:
	
	- 
	
	  Winword caused an invalid page fault in module <unknown> at
	  0000:<address>.
	
	  -or-
	
	- 
	
	  Winword caused an invalid page fault in module Mso97.dll at
	  0137:<address>.
	
	Case 2
	------
	
	When you attempt to open a document by double-clicking the file in the Open
	dialog box in Word, the file does not open, and no error messages are given.
	
	CAUSE
	=====
	
	This problem occurs when the document file name or the path and file name exceed
	223 characters.
	
	WORKAROUND
	==========
	
	Work around the problems in the cases above by using the appropriate method:
	
	- Start Word and then open the document.
	
	  -or-
	
	- Shorten the file name.
	
	  -or-
	
	- Shorten the path to the document or move the document to a higher-level
	  folder.
	
	
	Additional query words: ipf
	
	======================================================================
	Keywords          : kbenv kberrmsg kbualink97 kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
