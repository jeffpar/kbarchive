---
layout: page
title: "Q121726: STOP Message Caused by NTFS with Long Filenames"
permalink: kb/121/Q121726/
---

## Q121726: STOP Message Caused by NTFS with Long Filenames

	Article: Q121726
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Bugcheck 00000024 : 00190146 fc99fc64 fc99faa0 80139150 Stopped at an unexpected
	exception: code=80000003 addr=fa0eb606 Hard coded breakpoint hit
	
	Stack Trace (using kernel debugger):
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	fc99f9a8  fa10a65f  fcd250e8 fc99f9d4 fa0e71e0
	  NTFS!NtfsExceptionFilter+0x46e1
	fc99f9b4  fa0e71e0  fc99f9dc 00000000 fc99f9dc
	  NTFS!NtfsFspClose+0x10fcc
	fc99ff34  801198b6  00000000 fc99ff7c 00000000
	  NTFS!_except_handler3+0x47
	fc99ff4c  80134936  00000000 00000000 00000000 NT!ExpWorkerThread+0x6a
	fc99ff7c  8013e7fa  8011984c 00000000 00000000
	  NT!PspSystemThreadStartup+0x40
	00000000  00000000  00000000 00000000 00000000 NT!KiThreadStartup+0xe
	
	
	CAUSE
	=====
	
	An NTFS structure was corrupted.
	
	Two fields which should be NULL have been initialized to look like empty list
	head.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	S E R V P A C K
	
	Additional query words: prodnt 3.50 blue
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
