---
layout: page
title: "Q154964: Error Reading Directory with Gateway Services for NetWare"
permalink: /kb/154/Q154964/
---

## Q154964: Error Reading Directory with Gateway Services for NetWare

	Article: Q154964
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you set up Gateway Services for NetWare (GSNW) for shares with multiple
	GSNW account IDs, the user connecting to the first GSNW share will receive the
	following error message:
	
	  Error Reading Directory - The specified user does not exist.
	
	CAUSE
	=====
	
	This is by design. Only one account for Gateway Services for NetWare is
	allowed.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
