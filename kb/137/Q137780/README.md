---
layout: page
title: "Q137780: Change in WINS Search Order from Windows NT 3.5 to 3.51"
permalink: kb/137/Q137780/
---

## Q137780: Change in WINS Search Order from Windows NT 3.5 to 3.51

	Article: Q137780
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
	
	A Windows NT 3.5 computer only uses the Secondary Windows Internet Name
	Service (WINS) server for NetBIOS name resolution when it does not receive
	a response from the Primary WINS Server. If a NetBIOS name is not found in
	the primary WINS database, Windows NT 3.5 does not search the secondary
	WINS server.
	
	The search order in Windows NT 3.51 and above now uses the Secondary WINS
	server when the Primary does not respond or when the requested name is
	not found in the Primary WINS Server database.
	
	NOTE: This new search order also applies to Windows 95 and Windows for
	Workgroups 3.11 (using TCP/IP-32 for Windows for Workgroups version 3.11b
	and the updated redirector files).
	
	Additional query words: prodnt tcp/ip win95 client
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
