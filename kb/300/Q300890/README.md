---
layout: page
title: "Q300890: Windows May Not Show Files on Dfs Share With 2nd-Level Servers"
permalink: /kb/300/Q300890/
---

## Q300890: Windows May Not Show Files on Dfs Share With 2nd-Level Servers

	Article: Q300890
	Product(s): Microsoft Windows NT
	Version(s): 1,2,2.1,2.5,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows Millennium Edition 
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1, 2.5 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Advanced Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create two different Microsoft Distributed file system (Dfs) shares
	(named \Good and \Bad in this example) on a Microsoft Windows NT 4.0-based root
	Dfs server (\\Dfs1) that point to two different second-level Dfs server shares
	(\\Dfs21\Test and \\Dfs22\Test, respectfully) that both point to the same
	network share (\\Server\Test), you may not be able to view files on this network
	share, depending on the second-level server that you use.
	
	In this example, if you connect to \Bad from a Windows 95, Windows 98, or Windows
	Me-based Dfs client, the \\Server\Test share may be empty. When you connect to
	\Good, you can correctly view the files in the share.
	
	When you use a Windows NT or Windows 2000-based Dfs client, you can view the
	files from both shares.
	
	CAUSE
	=====
	
	This problem occurs because the Windows 95, Windows 98, and Windows Me clients
	use the Dfs server function field from the Dfs Get Deferral answer from the
	server, and other Microsoft clients do not. In some cases, this field is invalid
	and causes the Windows 95, Windows 98, or Windows Me client to incorrectly
	interpret the server share.
	
	WORKAROUND
	==========
	
	This problem is occurs only occasionally and may not occur if you create new
	share names on the secondary level of the Domain Name System (DNS) servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ400 kbWinMEsearch kbWin95search kbWin98search kbWin98SEsearch kbOPKSearch kbZNotKeyword3 kbWin98 kbWinME kbWin98SE kbWin95OPKOSR2 kbWin95OPKOSR25 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1,2.5,4.0
	Issue type        : kbprb
	
	=============================================================================
	
