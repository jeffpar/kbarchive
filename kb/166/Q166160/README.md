---
layout: page
title: "Q166160: Stop C000021a after Applying Windows NT 4.0 Service Pack"
permalink: /kb/166/Q166160/
---

## Q166160: Stop C000021a after Applying Windows NT 4.0 Service Pack

	Article: Q166160
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply a service pack for Windows NT 4.0, the computer may stop with
	the following error message on the subsequent restart:
	
	  Stop: c000021a {Fatal System Error}
	  The session manager initialization system process terminated
	  unexpectedly with a status of 0xc0000005 (0x00000000, 0x0000000)
	
	NOTE: The parameters in parenthesis are specific to your system configuration and
	may differ each time.
	
	-or-
	
	After you install a Windows NT 4.0 service pack, the system restarts at the blue
	kernel screen without an error message and continues in a restart loop.
	
	CAUSE
	=====
	
	This can be caused by a corrupt Windows NT system file, or where one or more
	Windows NT system files, which are in use, may not be copied properly while
	applying a service pack.
	
	On Compaq servers that are running Compaq's Insight Manager, the service pack
	update program would display a message that the file Ntdll.dll was busy. If you
	skipped the copy of this file and continued the installation, the system will
	exhibit one of the above symptoms on start up.
	
	RESOLUTION
	==========
	
	You resolve this problem by performing one of the following:
	
	- If the system files are on a FAT partition, boot to an MS-DOS bootable floppy
	  disk and replace Ntdll.dll with the updated version from Windows NT 4.0
	  Service Pack 2.
	
	- Replace Ntdll.dll with the updated version from Service Pack 2 by modifying
	  the Setup.log file on the Emergency Repair Disk (ERD). For more information,
	  please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q164471
	  TITLE : Replacing System Files Using a Modified Emergency Repair Disk
	
	- Copy the Setupdd.sys file from Service Pack 2 to the second Windows NT Setup
	  disk, run an Emergency Repair, select the option to "Verify Windows NT System
	  files", and then choose to replace the Ntdll.dll file.
	
	- If the system files are on an NTFS partition, install a parallel copy of
	  Windows NT and replace Ntdll.dll in the original folder with the updated
	  version from Service Pack 2.
	
	
	MORE INFORMATION
	================
	
	NOTE: There are other causes for Stop: 0xC000021a as listed below:
	
	For more information, please refer to the following Microsoft Knowledge Base
	articles:
	
	  
	
	
	  ARTICLE-ID: Q160658
	  TITLE : Stop C000021A Using MoveFileEx MOVEFILE_DELAY_UNTIL_REBOOT
	
	  ARTICLE-ID: Q139843
	  TITLE : Recovering from STOP 21a Caused by Disk Mirror Sets
	
	Additional query words: Stop 0xc000021a ntdll.dll
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
