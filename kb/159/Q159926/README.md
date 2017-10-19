---
layout: page
title: "Q159926: Event ID 3216 - System Error 53 Occurred"
permalink: /kb/159/Q159926/
---

## Q159926: Event ID 3216 - System Error 53 Occurred

	Article: Q159926
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use TCP/IP on the network, directory replication fails with the
	following error in Event Viewer:
	
	  Event ID 3216
	  Source: Replicator
	  Description: System error 53 occurred.
	
	CAUSE
	=====
	
	The WINS database has an incorrect or missing entry for the import or export
	server.
	
	RESOLUTION
	==========
	
	Ensure that WINS and/or LMHOSTS file contains proper entries for both the import
	and export servers.
	
	Additional query words: path found tcp/ip scripts
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
