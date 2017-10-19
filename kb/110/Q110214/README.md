---
layout: page
title: "Q110214: Repair Utility Tries to Copy Files if Changed"
permalink: /kb/110/Q110214/
---

## Q110214: Repair Utility Tries to Copy Files if Changed

	Article: Q110214
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	- the operating system: Microsoft Windows NT 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the REPAIR.EXE program that ships with the Windows NT Resource Kit
	after installing a U.S. Service Pack, REPAIR.EXE detects that the files have
	changed and tries to create an Emergency Repair Disk. When REPAIR.EXE attempts
	to create the Emergency Repair Disk, an "out of disk space" error message
	appears. The following command line generates this error message:
	
	  Repair /s /x /pA:
	
	WORKAROUND
	==========
	
	You can work around this problem by having REPAIR.EXE write information to
	multiple disks by specifying the /c parameter in the command line. For example:
	
	  Repair /s /x /c /pA:
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch kbOSWinSearch kbOSWinNT310 kbZNotKeyword6 kbZNotKeyword2 kbOSWinNTSearch
	Version           : :3.1
	Issue type        : kbprb
	
	=============================================================================
	
