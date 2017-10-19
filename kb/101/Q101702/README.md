---
layout: page
title: "Q101702: Problems Booting from Shadow Set Secondary Member"
permalink: /kb/101/Q101702/
---

## Q101702: Problems Booting from Shadow Set Secondary Member

	Article: Q101702
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Under normal circumstances, if the primary member of a mirror set
	fails, the Windows NT filesystem (NTFS) marks the member as bad and
	does not attempt to use it. However, if you power down the primary
	member and boot the system from the shadow (secondary) member of the
	mirror set, NTFS does not mark the primary member as bad and the data
	on the primary member does not include any changes made to data on the
	shadow member.
	
	If this occurs and you restore power to the primary member and reboot
	the system, inconsistent data and other problems may occur.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
