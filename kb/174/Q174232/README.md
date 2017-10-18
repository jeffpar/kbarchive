---
layout: page
title: "Q174232: Stop 0x0000000A in Atapi.sys (Post SP2) with DMA Enabled"
permalink: kb/174/Q174232/
---

## Q174232: Stop 0x0000000A in Atapi.sys (Post SP2) with DMA Enabled

	Article: Q174232
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use DMA Bus-Mastering on a PCI IDE controller using Atapi.sys (Service
	Pack 2 or later) you may experience the following blue screen error message:
	
	  Stop 0x0000000A (0x00830830, 0x0000000d, 0x00000001 0x800059f0)
	  IRQL_NOT_LESS_OR_EQUAL
	  Address 800059f0 has base at 80005000 - ATAPI.SYS
	
	NOTE: The first parameter will vary and the fourth parameter will always fall in
	the range of Atapi.sys.
	
	CAUSE
	=====
	
	This is caused when the buffer provided to Atapi is in user-mode and the driver
	not running in the same context, accesses the buffer. This happens specifically
	with the inquiry command using pass-through-direct mode.
	
	WORKAROUND
	==========
	
	Disable DMA Bus-Mastering for Atapi or contact the manufacture of the
	application for an update or rewrite the application to use
	IOCTL_SCSI_PASS_THROUGH.
	
	For more information on DMA Bus-Mastering, please refer to the following
	Microsoft Knowledge Base article:
	
	ARTICLE-ID: Q158873
	TITLE : How to Enable IDE DMA Bus-Mastering using SP2 ATAPI.SYS
	
	
	
	MORE INFORMATION
	================
	
	This is a design problem that has been seen with applications that use the
	SCSIOP_INQUIRY commands to the miniport through the
	IOCTL_SCSI_PASS_THROUGH_DIRECT interface. In order to send
	IOCTL_SCSI_PASS_THROUGH_DIRECT you must be an administrator. This IOCTL should
	not be used to send a SCSIOP_INQUIRY.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
