---
layout: page
title: "Q184835: Explorer on Windows 95 DFS Client May Hang"
permalink: kb/184/Q184835/
---

## Q184835: Explorer on Windows 95 DFS Client May Hang

	Article: Q184835
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:4.0, Windows:95
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows 95 Explorer may stop responding (hang) when copying files or displaying
	properties of a folder or files that reside on distributed file system (Dfs)
	shares.
	
	CAUSE
	=====
	
	The client is sending a FindFirst SMB to \\DfsServer\RootShare with a path of
	\\DfsServer\RootShare. The server incorrectly responds with DFS_PATH_NOT_FOUND
	error.
	
	This response causes a loop to occur between the DFS driver and the vredir on the
	Windows 95 client.
	
	
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
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WinNT:4.0, Windows:95
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
