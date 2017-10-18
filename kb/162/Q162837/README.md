---
layout: page
title: "Q162837: Replacing TCP/IP After SP2 Causes STOP 0x00000050"
permalink: kb/162/Q162837/
---

## Q162837: Replacing TCP/IP After SP2 Causes STOP 0x00000050

	Article: Q162837
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows NT 4.0 computer that previously had Service Pack 2 (SP2) installed,
	if you remove the TCP/IP protocol, and then later add TCP/IP to the system, when
	you boot the computer, you receive the following STOP error:
	
	  STOP 0x00000050 (0xFF10c004, 0x0, 0x0, 0x0) PAGE_FAULT_IN_NONPAGED_AREA
	
	-or-
	
	  STOP 0x00000050 (0xFF404004, 0x0, 0x0, 0x0) PAGE_FAULT_IN_NONPAGED_AREA
	
	-or-
	
	  STOP 0x00000050 (0xA0133004, 0x0, 0x0, 0x0) PAGE_FAULT_IN_NONPAGED_AREA
	
	NOTE: The first argument may change but the STOP code (0x00000050) is the same in
	all error messages.
	
	CAUSE
	=====
	
	This error only occurs if Remote Access Service is installed and is configured
	to use the TCP/IP protocol as either a dial-in or a dial-out protocol.
	
	WORKAROUND
	==========
	
	To work around this problem, after adding the TCP/IP protocol back to the
	system, do one of the following:
	
	- Reapply SP2 after adding the TCP/IP protocol back to the system, but before
	  rebooting the computer. Click No when you are prompted to reboot, after
	  adding TCP/IP.
	
	  -or-
	
	- After adding the TCP/IP protocol, disable TCP/IP from your RAS configuration
	  and allow the Windows NT computer to reboot. After the computer reboots,
	  reapply SP2 and enable TCP/IP through RAS.
	
	To recover from this error, use the method appropriate to your situation.
	
	Method 1: Windows NT Is on a FAT Partition
	------------------------------------------
	
	If Windows NT is installed on a FAT partition, boot the computer to another
	operating system (such as MS-DOS, Microsoft Windows 95, or Microsoft Windows
	3.x). Replace the Tcpip.sys file in the \Winnt\System32\Drivers folder with the
	one from Service Pack 2.
	
	Method 2: Windows NT Is on an NTFS Partition
	--------------------------------------------
	
	If Windows NT is installed on an NTFS partition, install a parallel copy of
	Windows NT 4.0 in a new directory. Replace the Tcpip.sys file in the
	\Winnt\System32\Drivers folder with the one from Service Pack 2. Reboot to the
	original Windows NT installation, and then reapply Service Pack 2. When you are
	done, delete the parallel installation of Windows NT 4.0.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: crash hang blue screen bluescreen 0X50
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
