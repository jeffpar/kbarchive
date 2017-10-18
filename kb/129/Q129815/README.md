---
layout: page
title: "Q129815: LSA Secret Limitation Increased to 4096 in WinNT 4.0 and Win2000"
permalink: kb/129/Q129815/
---

## Q129815: LSA Secret Limitation Increased to 4096 in WinNT 4.0 and Win2000

	Article: Q129815
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 30-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 3.1, 3.5, and 3.51 have a limit of 256 local security authority (LSA)
	secrets. This limit has been increased to 4096 in Windows NT version 4.0 and in
	Microsoft Windows 2000.
	
	The client side of a trust relationship consumes one LSA secret. LSA secrets are
	used for other purposes (most notably, trust relationships and for saving
	service passwords), so you should not use all of them for trusts. It is best not
	to consume more than half of the LSA secrets for domain trust.
	
	Additional query words: 3.10 status_too_many_secrets ntlsa.h
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServSearch kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search kbWinAdvServSearch
	Version           : :2000,3.1,3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
