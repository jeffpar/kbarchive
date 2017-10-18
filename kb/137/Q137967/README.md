---
layout: page
title: "Q137967: STOP 0x00000077 with Two MYLEX DAC 960 in the Same Computer"
permalink: kb/137/Q137967/
---

## Q137967: STOP 0x00000077 with Two MYLEX DAC 960 in the Same Computer

	Article: Q137967
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer that has two MYLEX DAC 960 controllers, Windows NT hangs or traps
	randomly with the following stop error:
	
	  STOP 0x00000077 (0x00000103, 0xc0000185, 0x00000001, 0x00005000)
	
	The STOP error and the second parameter (0xc0000185) are always the same, the
	other parameters may or may not vary.
	
	
	CAUSE
	=====
	
	The MYLEX controllers go off-line randomly. Although the MYLEX controller is on
	the Hardware Compatibility List (HCL) for Windows NT 3.5 and 3.51, a
	multiple-controller configuration was not tested.
	
	RESOLUTION
	==========
	
	Upgrade the firmware of the MYLEX controllers to version 2.16. This firmware
	revision can be obtained from MYLEX Corporation.
	
	These controllers can handle multiple devices and several levels of RAID.
	Therefore, you may be able to meet your configuration needs with only one MYLEX
	DAC 960 controller installed in your computer.
	
	MYLEX DAC 960 controllers are manufactured by MYLEX Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
