---
layout: page
title: "Q179873: Files Open with UNC Path May Be Closed Prematurely"
permalink: /kb/179/Q179873/
---

## Q179873: Files Open with UNC Path May Be Closed Prematurely

{% raw %}

	Article: Q179873
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Files opened with a UNC name may be closed prematurely. This problem only occurs
	when a directory that is part of the UNC path is subsequently connected and then
	disconnected.
	
	
	CAUSE
	=====
	
	When the UNC file is opened, a tree ID is created by the server and is sent to
	the client Redirector. The tree ID represents the root or mount point on the
	server. In the above example, a tree ID will be returned for the directory dir.
	For file references, the Redirector includes the tree ID to tell the server
	where the path starts on the server. A tree ID has to be obtained before files
	can be accessed on the server. A tree ID is also needed to access a directory
	mapped to a drive letter. For optimization, the server will return the same tree
	ID for both accesses. The problem occurs on the net use /d. The Redirector will
	send a tree disconnect request to the server. This request closes all files in
	the tree, even files opened with UNC names.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
