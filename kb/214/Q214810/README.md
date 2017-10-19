---
layout: page
title: "Q214810: STOP 0x0000007B INACCESSIBLE_BOOT_DEVICE After Applying SP4"
permalink: /kb/214/Q214810/
---

## Q214810: STOP 0x0000007B INACCESSIBLE_BOOT_DEVICE After Applying SP4

	Article: Q214810
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some instances, after the application of Service Pack 4, when the computer is
	restarted, it will do either of the following:
	
	- The system will fail to boot and will display the following error:
	
	  Stop 0x0000007B INACCESSIBLE_BOOT_DEVICE
	
	- The system will boot, but some devices will not be recognized on the SCSI
	  bus.
	
	CAUSE
	=====
	
	This problem occurs because the Aic78xx.sys driver chosen during the application
	of Service Pack 4 is not compatible with the computer's Adaptec SCSI controller.
	
	RESOLUTION
	==========
	
	This problem can be corrected by replacing the existing Aic78xx.sys driver,
	located in the <%systemroot%>\Winnt\System32\Drivers folder, with the
	Aic78xx.sys driver from the i386 directory within Service Pack 4.
	
	Windows NT 4.0 Service Pack 4 contains the following Aic78xx drivers:
	
	  Aic78xx.sys 26,704 bytes
	  Aic78xx.001 56,272 bytes
	
	To determine which Aic78xx.sys driver is in use, and to copy the correct driver,
	depends upon the file system on the Windows NT boot partition (where
	%SystemRoot%\Winnt resides).
	
	If Windows NT resides on a FAT formatted partition, perform the following steps:
	
	1. Boot to MS-DOS by using an MS-DOS 6.x boot floppy disk.
	
	2. Change to the <%systemroot%>\Winnt\System32\Drivers folder.
	
	3. Compare the size of AIC78xx.sys with the table above.
	
	4. Replace the existing AIC78xx.sys file in
	  <%systemroot%>\Winnt\System32\Drivers with the other AIC78xx file in
	  the i386 directory within Serivce Pack 4.
	
	5. If AIC78xx.001 is copied, be sure to rename it AIC78xx.sys.
	
	If Windows NT resides on an NTFS formatted partition, perform the following
	steps:
	
	1. Either boot to a parallel installation of Windows NT or create a parallel
	  installation of Windows NT. To create a parallel copy of Windows NT, perform
	  a fresh installation of Windows NT to a different folder.
	
	2. From the parallel installation, look in the
	  <%systemroot%>\Winnt\System32\Drivers of the failing copy of Windows
	  NT.
	
	3. Compare the size of AIC78xx.sys with the table above.
	
	4. Replace the existing AIC78xx.sys file in
	  <%systemroot%>\Winnt\System32\Drivers with the other AIC78xx file in
	  the i386 directory within Serivce Pack 4.
	
	5. If AIC78xx.001 is copied, be sure to rename it AIC78xx.sys.
	
	MORE INFORMATION
	================
	
	There are two different versions of the AIC78XX driver for the Adaptec 2940 and
	7800 family of SCSI controllers included in Service Pack 4. The Aic78xx.sys file
	in Service Pack 4 is the same file that is in Service Pack 3. The Aic78xx.001
	file of Service Pack 4 is only placed on the computer if
	<%systemroot%>\Winnt\System32\Drivers\AIC78xx.sys has a revision between
	x.x.1382.x and x.x.1420.x.
	
	Additional query words: Stop 0x0000007B AHA-2940 nt 4.00 sp4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
