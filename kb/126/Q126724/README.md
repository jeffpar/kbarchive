---
layout: page
title: "Q126724: NPMCA.SYS Causes STOP 0x0A in TCPIP.SYS"
permalink: /kb/126/Q126724/
---

## Q126724: NPMCA.SYS Causes STOP 0x0A in TCPIP.SYS

{% raw %}

	Article: Q126724
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when you use TCP/IP:
	
	  STOP 0x0A (Ox14,0x2,0x0,0xf1583318)
	
	IRQL_NOT_LESS_OR_EQUAL           (0xA)
	1 - memory referenced = 0x14
	2 - IRQL = 0x2
	3 - value 0 = read operation, 1 = write operation
	4 - addr. which ref'ed memory = 0xf1583318
	
	An attempt was made to touch pagable memory at a process
	internal request level (IRQL) too high.  This is usually
	caused by drivers using improper addresses.
	
	If kernel debugger is available get stack backtrace.
	
	0: kD>  4kv
	KD: Unable to load debug information for 0xf4b374e8
	ChildEBP RetAddr  Args to Child
	f3bcdedc f1583318 18384620 6668f54d 00000000
	NT!_KiTrap0E+0x25e
	f3bcdf50 f4b374e8 f4aef330 00000000 f1583515
	tcpip!_FreeARPBuffer+0x10
	0: kd>  !trap f3bcdedc
	eax=0x18 ebx=0x00 ecx=f3bcdf7c edx=f4aef330 esi=f4b374e8 edi=0x00
	eip=f1583318 esp=f3bcdf50 ebp=f4aef360 iopl=0 nv up ei pl zrnaponc
	cs=0008  ss=0010  ds=0023  es=0023  fs=0030  gs=0000 efl=00010246
	ErrCode = 00000000
	f1583318 3b4714           cmp     eax,[edi+0x14]
	Fault 0x00+0x14  -----------------------^
	
	0: kd>  !kv
	KD: Unable to load debug information for 0x748b1824
	ChildEBP RetAddr  Args to Child
	f3bcdf5c f1583515 f4b374e8 00000000 f3bcdfa8
	tcpip!_FreeARPBuffer+0x10
	f3bcdf7c f151092d f4b374e8 f4aef330 00000000
	tcpip!_ARPSendComplete+0x39
	f3bcdfa8 f15105a7 f4b043e8 00000001 f4b04664
	npmca!_ProcessDMAInterrupt+0x1d9
	f3bcdfc8 f153efc4 f4b04674 f4b043e8 00000000
	npmca!_NPIDeferredProcessing+0x78
	f3bcdfe4 8013958a f4b04674 f4b04664 00000000
	NDIS!_NdisDpc+0x18
	f153efac 748b1824 74ff1424 76ff1824 2474ff30
	NT!_KiIdleLoop+0x8e
	
	Addr = 0xf1583318
	
	Tcp/IP Base = 0xf1580000
	------------------------
	
	Offset = 0x3318
	
	CAUSE
	-----
	
	NDIS set up a send request and handed the Network Peripherals FDDI network
	interface card (NIC) driver the packet descriptor with a Callback Completion
	routine. The NIC completed the send and called NDIS but returned a NULL pointer
	to the descriptor (that ARP tries to free).
	
	RESOLUTION
	----------
	
	To correct this problem, obtain an updated NPMCA.SYS FDDI NIC driver from Network
	Peripherals Inc. at (408) 321-7300).
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: prodnt 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
