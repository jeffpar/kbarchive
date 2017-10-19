---
layout: page
title: "Q154854: Trap 0xA in AtalkBPFreeBlock"
permalink: /kb/154/Q154854/
---

## Q154854: Trap 0xA in AtalkBPFreeBlock

	Article: Q154854
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 3.51 systems running Services for Macintosh may experience Trap 0xA's
	in AtalkBPFreeBlock with the following stack trace:
	
	Callee-SP Return-RA  Call Site
	
	807b2580 8071e500 : ntkrnlmp!DbgBreakPoint
	807b2580 806ddccc : ntkrnlmp!KeBugCheckEx+0x2bc
	807b2870 fb35c918 : ntkrnlmp!KiModifyException+0xe4
	807b2ac8 fb35c864 : sfmatalk!AtalkBPFreeBlock+0x30
	807b2b10 fb35e58c : sfmatalk!AtalkBPAllocBlock+0x388
	807b2bb0 fb35de70 : sfmatalk!AtalkDdpTransmit+0x354
	807b2c60 fb380118 : sfmatalk!AtalkDdpSend+0x20c
	807b2cd0 fb37e474 : sfmatalk!atalkAtpTransmitReq+0x164
	807b2d40 fb35b860 : sfmatalk!atalkAtpReqTimer+0x1f4
	807b2d88 80712ec4 : sfmatalk!atalkTimerDpcRoutine+0xf0
	807b2db0 80703df4 : ntkrnlmp!KiTimerListExpire+0x158
	807b2f00 806f61a8 : ntkrnlmp!KiTimerExpiration+0xe4
	807b2f68 806dc2c8 : ntkrnlmp!KiRetireDpcList+0x94
	807b2f80 00000000 : ntkrnlmp!KiDispatchInterrupt+0x6c
	0: kd> dd kibugcheckdata l5
	8073b340  0000000a 00000010 00000002 00000000
	8073b350  fb35c918
	
	CAUSE
	=====
	
	A null pointer was being "freed."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
