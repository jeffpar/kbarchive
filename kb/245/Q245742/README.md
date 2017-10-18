---
layout: page
title: "Q245742: XCON: MTA Stops Responding--Access Violation e0020004"
permalink: kb/245/Q245742/
---

## Q245742: XCON: MTA Stops Responding--Access Violation e0020004

	Article: Q245742
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Message Transfer Agent (MTA) stops responding with
	a Dr. Watson error in the Emsmta.exe process. This usually happens during
	replication with other sites. Event ID 9405 is written to the event log. The
	following is a stack trace from the failure:
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	00  00defb08  004029bd  e0020004 00000000 00000000 KERNEL32!RaiseException+0x6a
	01  00defb2c  0047e7ee  000006c2 00000000 00000001 EMSMTA!sbpiwacs+0x85 [ sbnilnt.c @ 254 ]
	02  00defb4c  00578e88  77fa0011 00000000 00de0011 EMSMTA!oeprtidy+0xaf [ oentdmod.c @ 9100 ]
	03  00defd7c  0057994a  038080d0 00000000 ffffffff EMSMTA!oepnrasd+0x3aa [ sbndudyc.c @ 3281 ]
	04  00defdc4  00409c7b  038f7d00 00defe80 00defe68 EMSMTA!MtaToMtaRPC+0xf2 [ sbndudyc.c @ 3797 ]
	05  00defe14  00409665  00defe80 038f0013 00defe68 0x00409c7b
	06  00defe38  004b81c7  00defe80 038f0013 00600000 0x00409665
	07  00defe78  0046fcce  038f7d00 03808a90 00defea4 EMSMTA!sbpcdout+0x1e5 [ sbn1.c @ 1906 ]
	08  00defe88  004b91ca  00defe9c 03808c10 03808a90 EMSMTA!sbpcmtmg+0x79 [ sbnmruz.c @ 1245 ]
	09  00defea4  004b900b  038000ff 00000000 03808c1c EMSMTA!sbprwork+0xa3 [ sbnmruz.c @ 824 ]
	0a  00defed0  0046fcbe  03808c10 00000001 00deff24 EMSMTA!sbprrecv+0xf8 [ sbnmruz.c @ 616 ]
	0b  00defee4  004236df  00deff24 03808c1c 03800000 EMSMTA!sbpcmtmg+0x69 [ sbnmruz.c @ 1245 ]
	0c  00defefc  0049414e  00000000 00deff24 00000002 EMSMTA!sbpwsend+0x11c [ sbnw.c @ 1106 ]
	0d  00deff2c  00482aea  77f0178e 77f1c697 00144f70 0x0049414e
	0e  00deff94  00481fea  77f9b830 00144f70 00000155 EMSMTA!sbpwinit+0xaf8 [ sbnw.c @ 3810 ]
	0f  00deffa8  77dd8cee  00000001 00144f78 ffffffff EMSMTA!sbpisvep+0xcf [ sbnisvc.c @ 826 ]
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
