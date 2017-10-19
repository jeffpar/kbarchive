---
layout: page
title: "Q245462: Inserting an Excel Worksheet Object May Not Work"
permalink: /kb/245/Q245462/
---

## Q245462: Inserting an Excel Worksheet Object May Not Work

	Article: Q245462
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The insert object function of a container program may not work if the server
	program takes a long time to load. For example, if the automatic save feature in
	Microsoft Excel is turned on and you attempt to insert an Excel spreadsheet into
	a Microsoft PowerPoint document, any of the following error messages may occur:
	
	  Sorry, the source application is busy and cannot respond immediately. You can
	  switch to the other application and try to resolve the problem.
	
	  -or-
	
	  The Server application, source file, or item cannot be found. You should
	  reinstall the server application.
	
	  -or-
	
	  The Server Application, source file, or item cannot be found. Make sure the
	  Application is properly installed and that it has not been deleted, moved, or
	  renamed.
	
	CAUSE
	=====
	
	Excel takes more time to load when the automatic save add-in is enabled. The
	load delay in Excel results in RPC_E_SERVERCALL_RETRYLATER being returned.
	Windows NT is not properly handling the retry mechanism for OLE and therefore
	RPC_E_CALL_REJECTED is returned. This causes the operation to not succeed.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
