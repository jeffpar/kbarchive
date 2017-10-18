---
layout: page
title: "Q136781: STOP 0x0000005c on Multi-Processor Computer During Setup"
permalink: kb/136/Q136781/
---

## Q136781: STOP 0x0000005c on Multi-Processor Computer During Setup

	Article: Q136781
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	During the installation of Windows NT 3.51 on a multi-processor computer with a
	single processor, the following STOP Message appears:
	
	  STOP: 0x0000005c
	  HAL NO RTC DEVICE INTERRUPT
	
	CAUSE
	=====
	
	This problem occurs when the Windows NT version Setup program calls the computer
	BIOS to obtain computer configuration information. On several computers, the
	BIOS returns invalid information for the number of processors installed on the
	computer. Therefore the multi-processor Hardware Abstraction Layer (HAL) is
	installed instead of required uni- processor HAL.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Contact your computer manufacturer and request an updated BIOS
	
	  -or-
	
	- Press F5 during the portion of Windows NT 3.51 Setup that displays the
	  following text:
	
	  Setup is inspecting your computer hardware
	
	  This forces Windows NT Setup to use the uni-processor Hardware Abstraction
	  Layer (HAL).
	
	NOTE: Selecting "Standard PC" (without quotes) for the computer type in
	
	  Custom Setup does not correct the problem.
	
	
	Additional query words: prodnt trap 0x5c
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
