---
layout: page
title: "Q173235: Troubleshooting: Check Windows 95 System Performance"
permalink: kb/173/Q173235/
---

## Q173235: Troubleshooting: Check Windows 95 System Performance

	Article: Q173235
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbtshoot kbusage
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	- Microsoft Best of Windows Entertainment Pack, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are having problems when you try to run a particular game, check the
	system performance of your Windows 95 installation. This is a good
	troubleshooting step if you are receive system error messages, your computer
	hangs or freezes, or other unusual problems occur.
	
	MORE INFORMATION
	================
	
	Use the following steps to check the system performance:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click System.
	
	3. On the Performance tab, note the information in the Performance Status area.
	
	   - Near the bottom of the Performance area, it should read "Your system is
	     configured for optimal performance."
	
	   - Virtual Memory should report 32-Bit, or serious problems can occur.
	
	   - File System should report 32-Bit. If it does not, this is a potential
	     problem.
	
	   - CD-ROM drives are reported if they are using real mode MS-DOS drivers. If
	     the CD-ROM drive is reported, it is not using 32-bit protected-mode
	     drivers. If this is the case, you may have problems copying or accessing
	     some "Designed for Windows 95" programs on compact disc.
	
	   - If the hard disk is reported as not using 32-bit protected-mode drivers,
	     it generally indicates a problem. However, this may be normal in some
	     cases, so check with your hardware manufacturer to see if this is a
	     problem or not.
	
	4. Click Virtual Memory.
	
	5. Make sure "Let Windows manage my virtual memory settings (recommended)" is
	  selected.
	
	6. On the Hard Disk line (which should be shaded), it should read at least 30MB
	  Free. If it does not, free up more space on the hard disk.
	
	
	Additional query words: 1.00 imuwr
	
	======================================================================
	Keywords          : kbtshoot kbusage 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbFlightSimSearch kbZNotKeyword kbWinEntPkSearch kbWinEntPkBest kbFlightSim95 kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
