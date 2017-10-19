---
layout: page
title: "Q153689: NT 3.51 Setup Fails on IBM Power Series 850 w/IDE"
permalink: /kb/153/Q153689/
---

## Q153689: NT 3.51 Setup Fails on IBM Power Series 850 w/IDE

	Article: Q153689
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.00 
	- Microsoft Windows NT Server versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up Windows NT 3.51 on an IBM Personal Computer Power Series 850
	(Motorola PowerPC 604, 133Mhz) equipped with an IDE hard drive and CD-ROM drive,
	you receive the following stop error message during the initial kernel-load
	screen:
	
	  Stop 0x0000007b INACCESIBLE_BOOT_DEVICE
	
	CAUSE
	=====
	
	The IBM Power 850 systems have an IDE controller which is not compatible with
	the Microsoft release of Windows NT 3.51. The IBM OEM-version of Windows NT 3.51
	(called IBM PowerManage NT 3.51) has a fixed Atapi.sys that was not included in
	the Microsoft distribution of Windows NT 3.51
	
	RESOLUTION
	==========
	
	If you want to run Windows NT version 3.51, you must obtain IBM PowerManage NT
	3.51. The IBM Power 850 system IS NOT listed on the Windows NT 3.51 Hardware
	Compatibility List.
	
	If you want to run version Windows NT 4.00, the IBM Power 850 system computer IS
	listed on the Windows NT 4.00 Hardware Compatibility List. Windows NT 4.00 can
	be correctly set up on the IBM Power 850 system computer.
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: IBM PowerPC Power 850 PowerManage
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
