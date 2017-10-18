---
layout: page
title: "Q245087: Err Msg: STOP C0000221 - Bad Image Checksum in Ntvdm.exe"
permalink: kb/245/Q245087/
---

## Q245087: Err Msg: STOP C0000221 - Bad Image Checksum in Ntvdm.exe

	Article: Q245087
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a computer that is running Microsoft Windows NT Server 4.0 or
	Microsoft Windows NT Workstation 4.0, the computer may stop responding (hang)
	and you may receive the following error message:
	
	  STOP C0000221 - Bad Image Checksum
	  The image ntvdm.exe is possibly corrupt, the header checksum does not match
	  the computed checksum.
	
	CAUSE
	=====
	
	This behavior may occur if the Ntvdm.exe file is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	NOTE: You can use this procedure to fix any damaged file that is referred to in a
	STOP C0000221 error message.
	
	File Allocation Table (FAT) Partition
	-------------------------------------
	
	If Windows NT 4.0 resides on a FAT partition, follow these steps:
	
	1. Start the computer in MS-DOS.
	
	2. Replace the Ntvdm.exe file in the %SystemRoot%\System32 folder with the
	  Ntvdm.exe file that is included in Microsoft Windows NT 4.0 Service Pack 3 or
	  later.
	
	3. Restart the computer.
	
	NTFS Partition
	--------------
	
	If Windows NT 4.0 resides on an NTFS file system partition, follow these steps:
	
	1. Install a parallel installation of Windows NT 4.0, and then install the
	  latest service pack for Windows NT 4.0 on the parallel installation.
	
	2. Start the computer using the parallel installation.
	
	3. Copy the Ntvdm.exe file from the parallel installation to the
	  %SystemRoot%\System32 folder of the original installation.
	
	4. Restart the computer in the original installation, and then remove the
	  parallel installation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
