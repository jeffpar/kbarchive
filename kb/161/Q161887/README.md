---
layout: page
title: "Q161887: XFOR: Starting Internet Mail Service, Store Causes Stack Fault"
permalink: /kb/161/Q161887/
---

## Q161887: XFOR: Starting Internet Mail Service, Store Causes Stack Fault

	Article: Q161887
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Server Internet Mail Service, Store.exe
	causes a stack fault, halting store-related activities.
	
	CAUSE
	=====
	
	Multiple cascading embedded messages processed through a recursion routine is
	not limiting the number of recursions, which causes a stack overflow.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When this problem occurs, the DrWtsn32.Log may look something like this:
	
	  Microsoft (R) Windows NT (TM) Version 4.0 DrWtsn32
	  Copyright (C) 1985-1995 Microsoft Corp. All rights reserved.
	
	  Application exception occurred:
	
	     App: Store.DBG (pid=159)
	     When: 1/2/1997 @ 7:30:30.452
	     Exception number: c00000fd (stack overflow)
	
	  State Dump for Thread Id 0xd0
	
	  EAX=0000000c EBX=011ab1cc ECX=011a2f04 EDX=000004b0 ESI=00949314
	  EDI=0213b061
	  EIP=0205febc ESP=011aaefc EBP=011aaf04 EFL=00000206
	  CS=001b DS=0023 ES=0023 SS=0023 FS=0038 GS=0000
	
	  function: chkstk
	
	  FAULT -->   0x0205fea5 51 push ecx
	  0x0205fea6 3d00100000 cmp eax,00001000
	  0x0205feab 8d4c2408 lea ecx,dword ptr [esp+08]
	  0x0205feaf 7214 jb lastpage (0205fec5)
	  0x0205feb1 81e900100000 sub ecx,00001000
	  0x0205feb7 2d00100000 sub eax,00001000
	  0x0205febc 8501 test dword ptr [ecx],eax
	  0x0205febe 3d00100000 cmp eax,00001000
	..
	
	  Stack Back Trace:
	
	  FramePtr RetAddr Param1 Param2 Param3 Function Name
	  011aaf04 02004c4d 011ab178 000004b0 000004b0 STORE!$$$00001+0x17(...)
	  011ab158 02004e97 011ab178 011ab1c4 000004b0
	  STORE!JTAB_BASE::EcGetPropByPtagid+0xcb
	  011ab184 02010a7a 001a84b0 011ab1c4 000004b0
	  STORE!JTAB_BASE::EcGetProp+0x2b
	  011ab1f0 020ca807 0823c2e4 08231018 00000021 STORE!OMSG::EcConfig+0xb2f
	  011ab21c 020d4d20 08230fc4 00000021 011ab41c STORE!OMSG::EcConfig+0xa7
	  011ab254 0207bea9 00000021 00000001 011ab434
	  STORE!ATTACH::EcOpenPropertyMessage+0x142
	  011ab43c 02035225 00943e24 0129fac4 08230a1c
	  STORE!EcAttachFromMDBEF+0x2c516
	  011ab664 0207bf27 00943e24 0129fac4 08230a1c
	  STORE!EcMessageFromMDBEF+0x54d
	  011ab84c 02035225 00943e24 0129fac4 08235c84
	  STORE!EcAttachFromMDBEF+0x2c594
	  011aba74 0207bf27 00943e24 0129fac4 08235c84
	  STORE!EcMessageFromMDBEF+0x54d
	
	
	Additional query words: stack fault overflow
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
