---
layout: page
title: "Q195244: Excel Files for Macintosh Locked by Index Server"
permalink: kb/195/Q195244/
---

## Q195244: Excel Files for Macintosh Locked by Index Server

	Article: Q195244
	Product(s): Internet Information Server
	Version(s): WINNT:2.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Index Server, any Microsoft Excel documents for Macintosh that are
	being indexed are locked by the index process. You cannot modify or delete the
	files.
	
	CAUSE
	=====
	
	The Microsoft Office filter in Index Server is unable to index Microsoft Excel
	documents formatted for Macintosh. Index Server opens the documents with the
	Office filter, but does not index them and never closes the document.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	Installing Excel 97 for Windows on the Index Server computer allows the
	documents to be filtered correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 Service Pack 4 updates the Office filter for Index Server so that
	the files will not be left open.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : WINNT:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
