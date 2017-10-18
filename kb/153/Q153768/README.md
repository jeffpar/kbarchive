---
layout: page
title: "Q153768: INFO: Changing the Default Installation Drive Using Unattended S"
permalink: kb/153/Q153768/
---

## Q153768: INFO: Changing the Default Installation Drive Using Unattended S

	Article: Q153768
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBKkbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	By default, unattended setup installs Windows NT to drive C (the first partition
	on the first drive in the system). In some cases, you may want to separate the
	Windows NT boot partition (the partition where the operating system files are
	located) from the system partition (the partition where Boot.ini, Ntdetect.com,
	and NTLDR reside).
	
	MORE INFORMATION
	================
	
	You can use a Winnt.exe feature to separate the boot partition from system
	partition. This feature is unrelated to unattended setup. The /T: option is used
	to specify the location where the $Win_nt$.~ls directory will be placed during
	setup when Winnt.exe is used. The /T: option defaults to drive C.
	
	Example:
	
	On a single drive divided into two partitions, both partitions are formatted FAT
	to create a drive C and a drive D. The source for I386 is on a server and has a
	mapped driver letter of X:
	
	x:\winnt /b /t:d: /s:x:\ /u:x:\unattend.txt
	
	After the first reboot, if you stop the installation and go to MS-DOS, you will
	see that the $Win_nt$.~bt directory is on drive C and the $Win_nt$.~ls is on
	drive D. During the GUI portion of setup, you will notice that files are copied
	to their appropriate directories on drive D not drive C.
	
	Additional query words: 4.00 Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
