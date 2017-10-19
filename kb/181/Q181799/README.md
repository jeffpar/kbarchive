---
layout: page
title: "Q181799: RPC/TCP Connection Attempt Made Only to First Address"
permalink: /kb/181/Q181799/
---

## Q181799: RPC/TCP Connection Attempt Made Only to First Address

	Article: Q181799
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbAPI kbRPC kbSDKPlatform kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Windows NT 4.0 and prior versions, when an RPC connection is attempted using
	protocol binding sequence ncacn_ip_tcp, if the DNS returns a list of IP
	addresses for the target computer, the connection attempt will only be made to
	the first IP address in the list. If that connection attempt fails, the RPC
	connect will fail.
	
	CAUSE
	=====
	
	RPC only attempts to connect to the first IP address in the list returned by the
	Windows Sockets gethostbyname() call.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: This hotfix supersedes the fixes referred to in the "Windows NT 4.0 RPC
	Binds Hang When the Server Is Restarted" section of the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q147222
	  TITLE : Group of Hotfixes for Exchange 5.5 and IIS 4.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: multihomed
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbAPI kbRPC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
