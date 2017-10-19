---
layout: page
title: "Q186490: Terminal Server's Use of &quot;Access This Computer From Network&quot;"
permalink: /kb/186/Q186490/
---

## Q186490: Terminal Server's Use of &quot;Access This Computer From Network&quot;

	Article: Q186490
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	In order for a client to log on to a Terminal Server computer, the user
	must belong to a group that has the right to log on locally to the server.
	The right to access the computer from the network is not required to log on
	to a Terminal Server computer across the network from a client. For greater
	security, an administrator can use User Manager to remove the group
	Everyone from the right "Access this computer from the network" for
	Terminal Server computers installed as stand-alone or member servers. Doing
	so allows only those with administrative accounts and administrative rights
	to connect to a Terminal Server computer using shares or administrative
	tools.
	
	Note that you should not make this change if a Terminal Server computer is
	installed as a domain controller because rights set on any domain
	controller apply to every domain controller. Removing the right to access
	this computer from the network would prevent all network users from
	accessing network resources.
	
	SUMMARY
	=======
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
