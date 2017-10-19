---
layout: page
title: "Q114872: Restoring Disk Configuration Information"
permalink: /kb/114/Q114872/
---

## Q114872: Restoring Disk Configuration Information

	Article: Q114872
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
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
	
	SUMMARY
	=======
	
	Typically, only the Windows NT installation that created a volume set, stripe
	set without parity, mirror set or stripe set with parity recognizes and is able
	to use that set. However, another installation of Windows NT or Windows NT
	Advanced Server can be enabled to recognize and use the set by using Disk
	Administrator to save the disk configuration information in the Windows NT
	installation that created the volume and then restoring the information under
	the other Windows NT installation.
	
	MORE INFORMATION
	================
	
	See pages 528 and 529 of the Windows NT Advanced Server "System Guide" for the
	specific steps to saving and restoring disk configuration information.
	
	Once the disk configuration information from another installation of Windows NT
	is restored, the current installation will recognize and be able to use the
	volume sets, stripe sets with and without parity, and mirror sets created by
	another installation of Windows NT. After disk configuration information is
	restored:
	
	- Installations of Windows NT Advanced Server can perform any function on a
	  volume created by another installation of Windows NT that they could perform
	  on volumes they created. This includes breaking mirrors and regenerating
	  stripe sets with parity.
	
	  -AND-
	
	- Installations of Windows NT can perform any function on a volume set or
	  stripe without parity created by another installation of Windows NT that they
	  could perform on volumes sets or stripes without parity that they created.
	  They can also recognize, read from and write to mirror sets and stripe sets
	  with parity created by Windows NT Advanced Server. However, Windows NT cannot
	  break a mirror set or regenerate a stripe set with parity. In the event a
	  partition is lost in a mirror set or stripe set with parity, recovery of the
	  lost partition must be performed by Windows NT Advanced Server.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
