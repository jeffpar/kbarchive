---
layout: page
title: "Q156362: Floppy Controller Requirements for QIC-117"
permalink: kb/156/Q156362/
---

## Q156362: Floppy Controller Requirements for QIC-117

	Article: Q156362
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Floppy disk drive controllers used by QIC series tape backup units operate at
	two different speeds. The speed at which the controller operates determines
	drive compatibility and what types of tapes can be read from or written to.
	Older style floppy disk drive controllers operate at a speed of 500 Kbps while
	newer style floppy disk drive controllers operate at 1 Mbps.
	
	MORE INFORMATION
	================
	
	The floppy disk drive controller type can be determined from Registry Editor by
	performing the following steps:
	
	1. Load the QIC117 driver.
	
	2. From a command prompt, run "Ntbackup.exe" (without the quotation marks).
	
	3. WARNING: Using Registry Editor incorrectly can cause serious problems that
	  may require you to reinstall your operating system. Microsoft cannot
	  guarantee that problems resulting from the incorrect use of Registry Editor
	  can be solved. Use Registry Editor at your own risk.
	
	  Start Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\Hardware\Devicemap\Tape\Unit 0
	
	  Compare the FDCType entry with the table below:
	
	Registry Value     Floppy Controller Type         Controller Throughput
	--------------     ----------------------         ---------------------
	FDC_NORMAL         Any NEC 768 compatible         250 KB/sec 500 KB/sec
	FDC_ENHANCED       Supports the version command   250 KB/sec 500 KB/sec
	FDC_NATIONAL       National 8477                  250 KB/sec 500 KB/sec
	                                                 1 MB/sec
	FDC_82077          Intel 82077                    250 KB/sec 500 KB/sec
	                                                 1Mb/sec
	FDC_82077AA        Intel 82077AA                  250Kb/sec 500 KB/sec
	                                                 1 MB/sec
	FDC_82078_44       Intel 82078 44 Pin Version     250 KB/sec 500 KB/sec
	                                                 1 MB/sec
	FDC_82078_64       Intel 82078 64 Pin Version     250 KB/sec 500 KB/sec
	                                                 1 MB/sec(2 MB/sec
	                                                 capable)
	FDC_UNKNOWN        Type unknown                   250 KB/sec 500 KB/sec
	
	The floppy controller requirements for QIC standard drives are as follows:
	
	QIC117 Standard            Floppy Drive Controller Requirements
	---------------            ------------------------------------
	QIC-40                     500 Kbs or higher
	QIC-80                     500 Kbs or higher
	QIC-3010                   500 Kbps or 1Mbps Floppy controller
	QIC-3020                   1 Mbps Controller
	
	
	Additional query words: floppy qic117 travan
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
