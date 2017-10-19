---
layout: page
title: "Q188652: Error Replicating Registry Keys"
permalink: /kb/188/Q188652/
---

## Q188652: Error Replicating Registry Keys

	Article: Q188652
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the length of the registry keys to replicate in Generic Application (or
	Service) is more than 128 characters, the cluster Administrator displays an
	error message when the resource is displayed:
	
	  Cluster Administrator Standard Extension
	
	  An error occurred reading the registry keys for the resource: !!!!
	
	The error message following the colon is unreadable.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Manual Installation Instructions
	--------------------------------
	
	Copy the hotfix files to your %Winnt%\Cluster folder and restart the Cluster
	service and Cluster administrator.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: 4.00 mscs
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
