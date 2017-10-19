---
layout: page
title: "Q187425: TCP/IP Device Driver Does Not Remember Share Flags"
permalink: /kb/187/Q187425/
---

## Q187425: TCP/IP Device Driver Does Not Remember Share Flags

	Article: Q187425
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	TCP/IP device driver does not remember share flags of previous opened endpoints.
	Even if the previous endpoint is opened exclusively, another application can
	open the same endpoint with share flags and capture all network traffic.
	
	CAUSE
	=====
	
	When a port is opened for listening and share flags are specified, the driver
	grants access, even if the previous port was opened with exclusive rights (with
	share flags set to zero). The driver does not remember the shared flags of the
	previous call, and only checks the flags of the new one. The problem is in
	TCP/IP, and is applicable to all versions of Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows NT Server 4.0, Terminal
	Server Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
