---
layout: page
title: "Q138703: STOP 0x0000005c on IBM PC Server 320"
permalink: kb/138/Q138703/
---

## Q138703: STOP 0x0000005c on IBM PC Server 320

	Article: Q138703
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Windows NT 3.51 on an IBM PC Server 320 Server
	(multi-processor capable) with a single processor, the following STOP message
	appears:
	
	  STOP: 0x0000005c
	  HAL NO RTC DEVICE INTERRUPT
	
	CAUSE
	=====
	
	This problem occurs when the Windows NT Setup calls the computer BIOS to obtain
	computer configuration information. On several computers, the BIOS returns
	invalid information for the number of processors installed on the computer.
	Therefore the multi-processor Hardware Abstraction Layer (HAL) is installed
	instead of required uni-processor HAL.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Download the latest PC Server 320 BIOS or BIOS version M54PE_09N from the IBM
	  PC Company BBS. The phone number is (919)517-0001. The file name is
	  320BIOSE.EXE (for EISA 320 Servers) and 320BIOSM.EXE (for MCA 320 Servers).
	
	  -or-
	
	- See "Q136781: STOP 0x0000005c on Multi-Processor Computer During Setup" in
	  the Microsoft Knowledgebase for the manual workarounds.
	
	  -or-
	
	- Boot your computer with Windows NT 3.51 Setup Disk 1. During bootup, press F5
	  to manually choose the computer type. Use Standard PC with C-Step i486.
	
	For more information, contact IBM PC Company Technical Support at (800)772-2227.
	
	The IBM PC Server 320 is manufactured by IBM, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	
	Additional query words: prodnt trap 0x5c blue screen setup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
