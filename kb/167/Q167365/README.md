---
layout: page
title: "Q167365: The Order That WINS Returns 1Ch Entries"
permalink: /kb/167/Q167365/
---

## Q167365: The Order That WINS Returns 1Ch Entries

	Article: Q167365
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how a Windows Internet Name Service (WINS) server returns
	1C entries to clients.
	
	MORE INFORMATION
	================
	
	When a query is made to a Windows NT WINS server for a domain controller (DC),
	that query is made as a request for a group 1Ch entry. The WINS server then
	replies with up to 25 IP addresses of domain controllers for the queried domain.
	In the reply, addresses owned by the queried WINS Server are returned first,
	sorted by registration date and time. The first entry in the list will be the
	one locally owned that matches the 1B entry. These are followed by addresses for
	the requested domain that are not owned by the queried server.
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
