---
layout: page
title: "Q163726: STOP 0x0000001E with DPT PM2124 SCSI Adapter and Volume Set"
permalink: /kb/163/Q163726/
---

## Q163726: STOP 0x0000001E with DPT PM2124 SCSI Adapter and Volume Set

	Article: Q163726
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a volume set, the following error message is displayed on the
	subsequent restart of the computer:
	
	  STOP 0x0000001E (0xC0000005, 0x80115B60, 0x0000001, 0x0000004)
	  KMODE_EXCEPTION_NOT_HANDLED *** address 80115B60 has base at 80100000 -
	  NTOSKRNL.EXE
	
	CAUSE
	=====
	
	If a volume set spanning 2 or more volumes is created when a DPT PM2124 no cache
	PCI SCSI controller, this error may occur.
	
	WORKAROUND
	==========
	
	Obtain the latest Windows NT 3.51 driver for this card from DPT. At the time of
	this article, the file NTMGR1J.ZIP can be obtained at DPT's Web site:
	
	  http://www.dpt.com/drivers.html#NT)
	
	The driver in this file, DPT_SCSI.SYS is version 1.Ka dated 7-20-96.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The products mentioned here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbbug
	
	=============================================================================
	
