---
layout: page
title: "Q152945: XCON: Microsoft Exchange Server MTA Not Responding"
permalink: kb/152/Q152945/
---

## Q152945: XCON: Microsoft Exchange Server MTA Not Responding

	Article: Q152945
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbnetwork exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange message transfer agent (MTA) service may terminate
	unexpectedly, causing message delivery to fail.
	
	When you view the Windows NT Application Event Log, it may show an entry similar
	to the following:
	
	  Source: MSExchangeMTA
	  Type: Error
	  Category: Field Engineering
	  EventID: 9405
	
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Exception c0000005 occurred at Address 20b1ec1. [BASE POP4 DOWN 4] (16)
	
	Viewing the Drwtsn32.log may show a failure of Emsmta.exe with an entry similar
	to the following:
	
	  App: emsmta.DBG (pid=373)
	  When: 8/5/1996 @ 9:18:54.343
	  Exception number: c0000005 (access violation)
	
	Viewing the thread that shows the FAULT will yield something like:
	
	State Dump for Thread Id 0x148
	
	eax=00edd9cc ebx=000001a4 ecx=00000000 edx=00000001 esi=00edd9cc
	edi=022f002a
	eip=020b1ec1 esp=0189ff20 ebp=0189ff30 iopl=0 nv up ei pl nz na po nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000     efl=00000206
	
	function: o4pgcb
	       020b1e94 668b4638         mov     ax,[esi+0x38]
	       020b1e98 663d6500         cmp     ax,0x65
	       020b1e9c 0f85b2000000     jne     sgplthrd+0x54 (020b1f54)
	       020b1ea2 8b4645           mov     eax,[esi+0x45]
	       020b1ea5 50               push    eax
	       020b1ea6 e88d010000       call    sgplimin+0xb8 (020b2038)
	       020b1eab 66833d089c1c0200 cmp     word ptr [oivpmnod+0x9b8
	(021c9c08)],0x0
	       020b1eb3 8b8366941c02     mov     eax,[ebx+0x21c9466]
	ds:021c960a=00edd9cc
	       020b1eb9 7e0a             jle     sgpgsyst+0x31 (020b1ec5)
	       020b1ebb 8b0d049c1c02     mov     ecx,[oivpmnod+0x9b4 (021c9c04)]
	FAULT ->020b1ec1 8901             mov     [ecx],eax ds:00000000=????????
	
	
	CAUSE
	=====
	
	The MTA stops responding when two threads of the MTA attempt to release the same
	connection block structure, simultaneously. One thread has grabbed a system
	semaphore, and the other thread did not. The reason why this happens is still
	uncertain. It may correspond to a severe network problem between two stations
	(for instance, a complete router failure for a time, or a bridge problem). It is
	recommended that network problems be corrected (if they exist) as they appear to
	be the underlying cause of this failure event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Access Violation GP Fault
	
	======================================================================
	Keywords          : kbnetwork exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
