---
layout: page
title: "Q198524: Large Ntbootdd.sys File May Cause Problems"
permalink: /kb/198/Q198524/
---

## Q198524: Large Ntbootdd.sys File May Cause Problems

	Article: Q198524
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the SCSI() syntax in the Boot.ini file to boot a computer using a
	SCSI adapter that does not have INT 13h BIOS support, the computer may stop
	responding (hang). In Windows NT 4.0, you may receive a "Trap E" message.
	
	
	Some SCSI adapters have partial INT 13h BIOS support, in that the BIOS supports
	only two disk drives. The problem can occur when you try to boot from a drive
	not supported by the BIOS.
	
	CAUSE
	=====
	
	The SCSI() syntax requires the Ntbootdd.sys file. If the size of the
	Ntbootdd.sys file exceeds approximately 64 kilobytes (KB), the problem may
	occur.
	
	RESOLUTION
	==========
	
	To work around this issue, try any of the following methods:
	
	- Verify that the size of the Ntbootdd.sys file is less than 64 KB.
	
	- Use a SCSI adapter with full INT 13h BIOS support.
	
	- Boot using a disk supported by the BIOS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Ntbootdd.sys file is not required if the SCSI adapter has INT 13h BIOS
	support. The Ntbootdd.sys file is a renamed copy of the SCSI device driver
	located in the root folder. This file is also used with Windows NT Startup
	floppy disks.
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
