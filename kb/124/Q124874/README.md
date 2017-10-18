---
layout: page
title: "Q124874: STOP Message 0x0A Running Performance Monitor on NEC 3360"
permalink: kb/124/Q124874/
---

## Q124874: STOP Message 0x0A Running Performance Monitor on NEC 3360

	Article: Q124874
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Performance Monitor remotely on an NCR 3360 two-processor computer
	with a 3Com 3C529 network interface card (NIC), and Performance Monitor is using
	default counters for all instances of NBF Bindings, Logical Disks, Physical
	Disks, Network Segments, and Processors, the following STOP message appears on
	the NEC 3360:
	
	  STOP 0x0000000A (0x00000006, 0x00000002, 0x00000000, 0xfa0e08f4)
	  Memory at 0x06 was referenced at IRQL2 for 0 access from 0xfa0e08f4 Address
	  0xfa0e08f4 has base at 0xfa0e0000 - ndis.sys
	
	Offset = 0x08f4
	
	IRQL_NOT_LESS_OR_EQUAL           (0xA)
	1 - memory referenced
	2 - IRQL
	3 - value 0 = read operation, 1 = write operation
	4 - address which referenced memory
	
	An attempt was made to touch pagable memory at a process internal
	request level (IRQL) too high. This is usually caused by drivers
	using improper addresses.
	
	If kernel debugger is available get stack backtrace.
	
	0: kd> dd kibugcheckdata
	
	80195070  0000000a 00000006 00000002 00000000
	80195080  fa0e08f4 e1004000 fcd61ab0 00000000
	80195090  00100001 00000000 80195098 80195098
	801950a0  00008000 00001000 fcd689a8 fcd68000
	801950b0  00000160 00000f28 0000000b 0000017c
	801950c0  00000070 00000071 00000069 000001d5
	801950d0  00000000 00000000 00000000 00000000
	801950e0  00000000 00000000 80131f20 00000000
	0: kd> k
	
	KD: Unable to load debug information for 0x18246c8b
	KD: unloading "0x18246c8b" (deferred)
	ChildEBP RetAddr
	8019efec 8012af5b NT!_DbgBreakPoint
	8019f158 8013d516 NT!_KeBugCheckEx+0x1a5
	8019f158 fa0e08f4 NT!_KiTrap0E+0x25e
	8019f218 fa0e0840 NDIS!MiniportSendLoopback+0x6e
	8019f244 fa0e068d NDIS!MiniportStartSends+0x51
	8019f260 fa0e7bcd NDIS!MiniportProcessDeferred+0x4f
	8019f264 fa0d11b8 NDIS!_NdisMSendResourcesAvailable+0x19
	8019f27c fa0e0799 elnk3!_Elnk3IsrDpc+0xd0
	8019f294 8013958a NDIS!_NdisMDpc+0x39
	fa0e0760 18246c8b NT!_KiIdleLoop+0x8e
	0: kd> !trap 8019f174       \\ From kv
	eax=00000000 ebx=fcd405b8 ecx=00000000 edx=00000000 esi=fcd33450
	edi=fcd33450
	eip=fa0e08f4 esp=8019f1e8 ebp=8019f218 iopl=0 nv up ei pl zr na po nc
	cs=0008  ss=0010  ds=0023  es=0023  fs=0030  gs=0000 efl=00010246
	ErrCode = 00000000
	fa0e08f4 f6400605         test    byte ptr [eax+0x6],0x5
	
	0: kd> u NDIS!MiniportSendLoopback+0x6e
	
	NDIS!MiniportSendLoopback+0x6e:
	fa0e08f4 f6400605         test    byte ptr [eax+0x6],0x5
	fa0e08f8 0f84be0a0000     je      NDIS!_NdisMDpc_0020+0x254 (fa0e13bc)
	fa0e08fe 8b780c           mov     edi,[eax+0xc]
	fa0e0901 8b83e8000000     mov     eax,[ebx+0xe8]
	fa0e0907 85c0             test    eax,eax
	fa0e0909 0f85c10a0000     jne     NDIS!_NdisMDpc_0020+0x268 (fa0e13d0)
	fa0e090f f683bc01000008   test    byte ptr [ebx+0x1bc],0x8
	fa0e0916 0f857c0b0000     jne     NDIS!_NdisMDpc_0020+0x330 (fa0e1498)
	
	CAUSE
	=====
	
	NDIS.SYS is dequeuing NDIS send packets out of order.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	The 3C529 NIC is manufactured by 3Com, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: adapter 3.50 prodnt blue screen trap 0x0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
