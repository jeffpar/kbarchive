---
layout: page
title: "Q138792: TCARC.SYS Causes Trap 0xA or Hangs Windows NT"
permalink: /kb/138/Q138792/
---

## Q138792: TCARC.SYS Causes Trap 0xA or Hangs Windows NT

	Article: Q138792
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On symmetric multiprocessor (SMP) configurations using the Thomas Conrad Arcnet
	driver included with Windows NT a STOP message appears with a Trap 0x0000000A,
	or your system appears to hang. The following is a stack trace for one of the
	processors:
	
	ChildEBP RetAddr Args to Child
	fe36fef4 fbd703a8 00000000 fe4e11e8 00000001 NT!_KiTrap0E+0x25a
	fe36ff90 fbd5101c fe4e11e8 fe4cf3dc fe58cfe3
	NDIS!_ArcFilterDprIndicateReceive+0x253
	fe36ffac fbd50d59 fbd50cd6 fe4cd024 fe4d34f8
	tcarc!TcarcDpcProcessEnqueuedReceive+0x2e
	fe36ffc0 fbd60805 fe4cd000 fe561420 fe561468 tcarc!_TcarcDpc+0x83
	fe36ffd8 8013906a fe4cd038 fe4cd024 00000000 NDIS!_NdisMDpc+0x39
	
	CAUSE
	=====
	
	Both processors have code paths that try to modify the list of received packets
	at the same time causing the list to get corrupted.
	
	The TCARC.SYS driver contains a list of received packets that is modified by the
	TcarcEnqueueReceives routine. When a packet is received in an SMP computer, the
	TcarcEnqueueReceives routine gets called by the TcarcIsr routine on one
	processor and the TcarcDpc routine on a second processor at the same time.
	
	If the list corruption results in a non-NULL-terminated list the server does not
	trap but appears to hang. However, technically the server is not hung but is
	caught in a loop because the TcarcDpc routine continues to indicate packets in
	the corrupted, non-NULL-terminated, received-packets list because it never
	encounters a NULL.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt blue screen crash wedges wedge tight loop
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
