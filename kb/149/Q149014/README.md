---
layout: page
title: "Q149014: Unable to Run NETADMIN.EXE or NWADMIN.EXE"
permalink: kb/149/Q149014/
---

## Q149014: Unable to Run NETADMIN.EXE or NWADMIN.EXE

	Article: Q149014
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
	
	If you run NETADMIN on a Novell NetWare 4.x server from a Windows NT computer,
	the following error messsage appears:
	
	  You are not logged into Directory Services.
	  You must be logged into Directory Services before you can run NETADMIN.
	  The current operation cannot be completed.
	
	If you run NWADMIN on a Novell NetWare 4.x server from a Windows NT computer, one
	of the following error messages appear:
	
	  Cannot find NWLOCALE.DLL
	  Cannot find NWNET.DLL
	  Cannot find NWPSRV.DLL
	  Cannot find file %PATH%\NWADMIN.EXE (or one of its components).
	  Check to ensure the path and filename are correct and that all required
	  libraries are available.
	
	CAUSE
	=====
	
	The above programs require an NDS-aware client running the proper NetWare VLM in
	order to function properly. The list is not exhaustive and does not include all
	of the utilities available with NetWare 4.x. If a utility did not exist prior to
	the release of NetWare 4.x it may be assumed that it requires VLM support and
	will not work with NT.
	
	STATUS
	======
	
	NETADMIN and NWADMIN are currently not supported by Windows NT versions 3.5,
	3.51, and 4.0.
	
	Additional query words: prodnt csnw
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
