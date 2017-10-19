---
layout: page
title: "Q107358: ICL ErgoPRO DXG/66 &quot;Non-Accessible Boot Device&quot;"
permalink: /kb/107/Q107358/
---

## Q107358: ICL ErgoPRO DXG/66 &quot;Non-Accessible Boot Device&quot;

	Article: Q107358
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT does not install properly on ICL ErgoPRO DXG/66 computers. Please
	note that this computer is not supported by Windows NT at this time.
	
	After the first reboot during Windows NT setup [after Disk 9], the following
	message is displayed:
	
	  Non-accessible boot device.
	
	The same problem exists with CD-ROM installs.
	
	CAUSE
	=====
	
	The ICL ErgoPRO DXG/66 computer is not supported by Windows NT at this time. In
	addition, problems have been encountered with its NCR53C94 SCSI controller.
	
	RESOLUTION
	==========
	
	The following procedure has been found to resolve this problem. However, it is
	not confirmed. Microsoft does not warranty this procedure and does not
	officially support the ICL ErgoPRO DXG/66 in any manner.
	
	1. Acquire ICL System BIOS version (1.13) or later from ICL (British
	  manufacturer).
	
	2. Disable the on-board SCSI controller.
	
	3. Replace the default NCR53C94 SCSI controller with one supported by Windows NT
	  such as an Adaptec 1540b.
	
	Additional query words: prodnt Ergo Pro error
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	Issue type        : kbprb
	
	=============================================================================
	
