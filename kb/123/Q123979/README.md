---
layout: page
title: "Q123979: 3C770 FDDI (FLNK.SYS) Problems Under Windows NT 3.5"
permalink: /kb/123/Q123979/
---

## Q123979: 3C770 FDDI (FLNK.SYS) Problems Under Windows NT 3.5

	Article: Q123979
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Several problems have been reported with the 3C770 FDDI (FLNK.SYS) driver that
	ships with Windows NT version 3.5:
	
	- During installation, the driver does not initialize. This prevents you from
	  joining a domain.
	
	- If you attempt to use Network Monitor or Performance Monitor to view network
	  activity, it causes your system to stop responding (hang).
	
	- STOP messages at bootup appear on systems with Pentium Write Back Cache
	  enabled.
	
	CAUSE
	=====
	
	The FLNK.SYS driver (version 1.16) has various problems. To determine the
	version number select the driver in File Manager and choose Properties from the
	File menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in Windows NT version
	3.51.
	
	NOTE: The Windows NT 3.5 US Service Pack 2 help file (NT35SP2.HLP), and the
	version of this article on the April 1995 TechNet CD, erroneously state that
	this problem was corrected in the latest U.S. Service Pack for Windows NT
	version 3.5.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt 3com 3 com
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
