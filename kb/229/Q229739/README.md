---
layout: page
title: "Q229739: Dllhost.exe Shutdown Causes SQL Server to Hang"
permalink: kb/229/Q229739/
---

## Q229739: Dllhost.exe Shutdown Causes SQL Server to Hang

	Article: Q229739
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft SQL Server 7.0 to gain access to data from an OLE DB
	provider, if the provider is configured to run out-of-process (that is, in a
	separate process than the SQL Server process), running successive distributed
	queries against the provider may cause your computer to stop responding (hang).
	
	CAUSE
	=====
	
	This behavior occurs because Dllhost.exe shutdown may prematurely stop the
	thread running the OLE DB provider, which never returns a call from SQL Server.
	This causes SQL Server to wait indefinitely.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
