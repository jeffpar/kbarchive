---
layout: page
title: "Q165813: 16-bit Applications Cause Access Violation in NTDLL.DLL"
permalink: /kb/165/Q165813/
---

## Q165813: 16-bit Applications Cause Access Violation in NTDLL.DLL

	Article: Q165813
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	16-bit applications that ran without errors in Windows NT 3.51 may cause an
	access violation when they are run in Windows NT 4.0 similar to the following:
	
	  <Application> caused an access violation in NTDLL.DLL at 0x77f645bf.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt User32.dll WOW ntvdm.exe c0000005 drwatson
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	
