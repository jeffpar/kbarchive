---
layout: page
title: "Q154415: Cannot Open Other's Calendar File with SP4 or Later"
permalink: kb/154/Q154415/
---

## Q154415: Cannot Open Other's Calendar File with SP4 or Later

	Article: Q154415
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP4,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51 SP4, 4.0 
	- Microsoft Windows NT Server versions 3.51 SP4, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade Windows NT 3.51 to Service Pack 4 or upgrade to Windows NT
	4.0, a Schedule+ 1.0a user on one Novell server who tries to open the
	appointment book of another Schedule+ 1.0a user on another Novell server will
	receive the following error:
	
	  The schedule file could not be opened. You may not have the necessary access
	  privileges or the file may be unavailable.
	
	CAUSE
	=====
	
	A fix in the Client Services for NetWare redirector, Nwrdr.sys, created this
	problem in Schedule+ 1.0a.
	
	NOTE: Schedule+ 1.0a is not the workgroup version of Schedule+ that ships with
	Windows NT. It is an enterprise version of Schedule+ that can communicate with
	multiple postoffices. The workgroup version of Schedule+ will return the same
	error, but this is by design because the workgroup version is not aware of
	multiple of postoffices.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351search kbWinNTS351sp4 kbWinNTW351SP4
	Version           : :3.51 SP4,4.0
	
	=============================================================================
	
