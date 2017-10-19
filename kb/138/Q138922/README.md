---
layout: page
title: "Q138922: Disk Activity Light Stops on Compaq DeskPro XLS"
permalink: /kb/138/Q138922/
---

## Q138922: Disk Activity Light Stops on Compaq DeskPro XLS

	Article: Q138922
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Compaq DeskPro XLs, at the first blue screen during a boot, the disk
	activity light stops working for the XL's internal SCSI disks. This problem does
	not occur with Windows NT 3.5.
	
	CAUSE
	=====
	
	The AMSINT.SYS (AMD PCI SCSI) driver causes this problem.
	
	WORKAROUND
	==========
	
	To work around this problem, replace the Windows NT 3.51 AMSINT.SYS driver with
	the Windows NT 3.5 AMSINT.SYS driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt led
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
