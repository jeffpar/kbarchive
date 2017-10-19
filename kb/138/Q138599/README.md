---
layout: page
title: "Q138599: Identical Resources Open for Two Accounts in Server Manager"
permalink: /kb/138/Q138599/
---

## Q138599: Identical Resources Open for Two Accounts in Server Manager

	Article: Q138599
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When two accounts (one as a service and another as a user) are locally logged on
	to a Windows NT computer and you use NET USE to connect to a local share, Server
	Manager displays identical connections (resources) for both accounts. For
	example, if REPL logs on as a service when an administrator logs on and issues
	the following command and then views Server Manager's User Sessions for the
	computer, both administrator and REPL are displayed with identical open
	resources:
	
	  NET USE * \\<server name>\<local share or C$>
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.51 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt srvmgr
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
