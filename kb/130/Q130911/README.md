---
layout: page
title: "Q130911: 16-bit Applications Hang Using Sony CDU 3x CD-ROM"
permalink: /kb/130/Q130911/
---

## Q130911: 16-bit Applications Hang Using Sony CDU 3x CD-ROM

	Article: Q130911
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT version 3.5 Service Pack 2, the following
	problems occur with the Sony CDU 3X CD-ROM drive:
	
	- During Windows NT startup, the CD-ROM drive takes a long period of time to
	  initialize.
	
	- When you run a 16-bit application, the CD-ROM drive light is active and the
	  application stops responding (hangs).
	
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Place a CD-ROM disc in the drive before you start Windows NT.
	
	  -or-
	
	- Replace the SLCD32.SYS file in your %SystemRoot%\SYSTEM32\DRIVERS
	  subdirectory with the older file of the same name located in the I386
	  directory of the Windows NT Server or Workstation 3.5 CD-ROM disc.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt sp2
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
