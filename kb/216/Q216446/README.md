---
layout: page
title: "Q216446: Damaged Paging File Results in Stop Error Message"
permalink: /kb/216/Q216446/
---

## Q216446: Damaged Paging File Results in Stop Error Message

	Article: Q216446
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the normal operation of your computer running Microsoft Windows NT, the
	computer may stop responding (hang) and display one of the following error
	messages:
	
	  STOP 0x0000000A: IRQL_NOT_LESS_OR_EQUAL
	
	  STOP 0x0000001E: K_MODE_EXCEPTION_NOT_HANDLED
	
	When you run the Dumpchk.exe utility, the utility may report that the dump file
	is invalid.
	
	CAUSE
	=====
	
	The Pagefile.sys file may be damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Click Start, click Run, type "CHKDSK <drive:> /F /R" (without the
	  quotation marks) where <drive:> is the partition containing the
	  Pagefile.sys file, and then click OK.
	
	2. When the Chkdsk.exe utility has completed, set the paging file size to 0.
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     System. Click the Performance tab, click Change, and then point to the
	     partition containing the Pagefile.sys file.
	
	  b. In the Initial Size (MB): box, type "0" (without the quotation marks).
	
	  c. In the Maximum Size (MB): box, type "0" (without the quotation marks).
	
	  d. Click Set, click OK, click Close, and then click Yes when you are prompted
	     to restart the computer.
	
	3. After the computer has restarted, reset the Pagefile.sys file to the correct
	  size.
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     System. Click the Performance tab, click Change, and then point to the
	     partition containing the Pagefile.sys file.
	
	  b. In the Initial Size (MB): box, type a value equal to the amount of random
	     access memory (in megabytes) in your computer plus 11.
	
	  c. In the Maximum Size (MB): box, type a value equal to or less than the
	     amount of disk space available (in megabytes) on the specified partition
	     minus 1.
	
	  d. Click Set, click OK, click Close, and then click Yes when you are prompted
	     to restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
