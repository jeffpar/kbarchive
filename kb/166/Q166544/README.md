---
layout: page
title: "Q166544: XADM: DS Terminates Unexpectedly w/ Event IDs 1186, 1229, 1171"
permalink: /kb/166/Q166544/
---

## Q166544: XADM: DS Terminates Unexpectedly w/ Event IDs 1186, 1229, 1171

{% raw %}

	Article: Q166544
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Directory (DS) may terminate unexpectedly with the
	following sequence of events in the Windows NT Event Viewer:
	
	  Event ID: 1186
	  Source: MSExchangeDS
	  Type: Error
	  Category: Replication
	  Description: The internal directory replication agent (DRA) Dispatcher
	  thread is waiting in a remote procedure call (RPC) to directory
	  XXXX. The directory has attempted to cancel the call and
	  recover the thread, with status 0x0.  If this condition
	  persists, stop and restart that Microsoft Exchange Server
	  computer.
	
	NOTE: XXXX is the server name.
	
	  Event ID:1229
	  Source: MSExchangeDS
	  Type: Warning
	  Category: Replication
	  Description: The remote procedure call (RPC) which was being executed by
	  the internal directory replication agent (DRA) Dispatcher thread has
	  been canceled.
	
	  Event ID:1171
	  Source: MSExchangeDS
	  Type: Error
	  Category: Internal Processing
	  Description: Exception c0000005 has occurred with parameters 603049ac
	  and 0(Internal ID 10c009b). Please contact Microsoft Product Support
	  Services for assistance.
	
	CAUSE
	=====
	
	The event is logged because a thread is stuck (hung) in RPC. The DS uses a
	global pointer for the name of the server last replicated to. But the pointer we
	are looking at does not match the current global.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Drwtsn32.log file may show a failure like following (pay particular
	attention to the function names listed on the stack back trace).
	
	NOTE: This log was created on a DEC Alpha computer.
	
	Application exception occurred:
	When: 8/1/1997 @ 8:35:36.492
	App: dsamain.DBG (pid=294)
	Exception number: c0000005 (access violation)
	
	State Dump Of Thread ID 0xf3
	
	v0=0016a7a8     t0=00000000     t1=00160000     t2=00390995
	t3=0016a7a0     t4=00000000     t5=0016a7a0     t6=00000008
	t7=00000008     s0=0582fb50     s1=0582f920     s2=603023e8
	s3=0582fc78     s4=00000001     s5=00000005     fp=00000002
	a0=0016a7a8     a1=00390994     a2=00000000     a3=00000000
	a4=0016a7a5     a5=0016a7a7     t8=0016a7a4     t9=00080100*
	t10=00000003    t11=00000001    ra=603055a8     t12=67b05990
	at=00000000     gp=00000000     sp=0582fba0     zero=00000000
	fpcr=0800000000000000SoftFpcr=0000000000000000 fir=603049ac
	psr=00000003
	mode=1 ie=1 irql=0
	Function: !<No Symbol>
	        60304984: a75e0008 ldq     ra,8(sp)
	        60304988: 23de0010 lda     sp,10(sp)
	        6030498c: 6bfa8001 ret     zero,(ra),1  603055a8
	        60304990: a0500000 ldl     t1,0(a0)
	        60304994: 47ff0401 bis     zero,zero,t0
	        60304998: 20710001 lda     t2,1(a1)
	        6030499c: 485f9622 zapnot  t1,#fc,t1
	        603049a0: b0500000 stl     t1,0(a0)
	        603049a4: b2300004 stl     a1,4(a0)
	        603049a8: e6200019 beq     a1,60304a10  60304a10
	Fault  ->603049ac: 2c510000 ldq_u   t1,0(a1)
	        603049b0: 485100c2 extbl   t1,a1,t1
	        603049b4: e4400005 beq     t1,603049cc  603049cc
	        603049b8: 2e230000 ldq_u   a1,0(t2)
	        603049bc: 40203001 addl    t0,#1,t0
	        603049c0: 4a2300d1 extbl   a1,t2,a1
	        603049c4: 20630001 lda     t2,1(t2)
	        603049c8: f63ffffb bne     a1,603049b8  603049b8
	        603049cc: 249f0001 ldah    t3,1(zero)
	        603049d0: 40210002 addl    t0,t0,t1
	        603049d4: 2084ffff lda     t3,-1(t3)
	        603049d8: 408203a2 cmpult  t3,t1,t1
	
	*----> Stack Back Trace <----*
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4 Function Name
	0582fba0 603055a8 0016a7a8 00390994 00000000 00000000 advapi32!<No Symbol>
	0582fba0 0042ac1c 0582fb50 00000001 00000005 00000000 advapi32!<No Symbol>
	0582fc30 0043da48 0582fb50 00000001 00000000 00000000 dsamain!<No Symbol>
	0582fca0 0016a854 0582fb50 00000001 00000000 00000000 dsamain!<No Symbol>
	0016aa20 0016a858 0582fb50 00000001 00000000 00000000 !<No Symbol>
	0016aa20 00000000 0582fb50 00000001 00000000 00000000 !<No Symbol>
	
	-or-
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	0582fba0  603055a8  0016a7a8 00390994 00000000 ADVAPI32!InitAnsiString+0x1c
	0582fba0  0042ac1c  0016a7a8 00390994 00000000 ADVAPI32!ReportEventA+0xc8
	0582fc30  0043da48  0016a7a8 00390994 00000000 DSAMAIN!DoLogEvent+0x1bc
	0582fca0  0040ae30  0016a7a8 00390994 00000000
	DSAMAIN!CheckAsyncThread+0x2f8
	0582ff20  1021c7b0  0016a7a8 00390994 00000000 DSAMAIN!TaskScheduler+0x118
	0582ffb0  1021c7b4  0016a7a8 00390994 00000000 0x1021c7b0
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
