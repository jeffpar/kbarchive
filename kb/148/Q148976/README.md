---
layout: page
title: "Q148976: Err Msg: STOP 0x0000000A - SPP.SYS"
permalink: /kb/148/Q148976/
---

## Q148976: Err Msg: STOP 0x0000000A - SPP.SYS

	Article: Q148976
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following STOP error message appears in Windows NT:
	
	  STOP: 0x0000000A (0x00000000, 0x00000002, 0x0000001, 0xFB8F1549)
	  IRQL_NOT_LESS_OR_EQUAL ***Address FB8F1549 has base at FB8F0000 - SPP.SYS
	
	The driver dump reveals several instances of the Spp.sys driver dated in 1993.
	
	CAUSE
	=====
	
	Spp.sys is the Compaq printer driver(cpqprint) used for the Netlinq Support
	software. This software has an associated icon in the Control Panel labeled
	"NetLinq." The 1993 version of the driver is used in Windows NT 3.1 and causes
	the above STOP under Windows NT 3.5 and 3.51.
	
	
	RESOLUTION
	==========
	
	To correct the problem, remove the Netlinq Support Software from the Installed
	Network Software list in Control Panel Network.
	
	For more information, contact Compaq Technical Support at (800) 652-6672.
	
	The Compaq products discussed here are manufactured by Compaq Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt 0xa
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
