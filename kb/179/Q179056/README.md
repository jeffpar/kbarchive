---
layout: page
title: "Q179056: XADM: Store Stops While Processing Rule for Client"
permalink: /kb/179/Q179056/
---

## Q179056: XADM: Store Stops While Processing Rule for Client

	Article: Q179056
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store crashes and produces a
	DrWtsn32.log that may look similar to the following:
	
	  Microsoft (R) Windows NT (TM) Version 3.51 DrWtsn32
	  Copyright (C) 1985-1995 Microsoft Corp. All rights reserved.
	
	  Application exception occurred:
	          App: Store.DBG (pid=159)
	          When: 1/2/1997 @ 7:30:30.452
	          Exception number: c0000005 (Access Violation)
	
	The thread where the stack overflow occurred may look similar to the following:
	
	  State Dump for Thread Id 0xd0
	
	  eax=0000000c ebx=00dab1cc ecx=00da2f04 edx=000004b0 esi=0052d58c
	edi=0213b061
	  eip=02061abc esp=00daaefc ebp=00daaf04 iopl=0         nv up ei pl nz na
	po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000 efl=00000206
	
	  function: DLIST::EcAddId
	  ...
	  FAULT ->020041E1  8B5804           mov         ebx,dword ptr [eax+4]
	  ...
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Function Name
	  154cf8bc 020ce683 00000006 00000000 15791c42 STORE!IDLIST::EcAddId+0x6b
	  154cf914 020e2ac5 054cf96c 154cf964 054cf989
	STORE!OMSG::EcAddRowToNeedRNTable+0x145
	  154cf9c0  020e881c  00f075ac 15744fcc 15791ae4
	STORE!EcDoPostDeliveryRuleWork+0x6b9
	  154cf9f8  02068553  00f075ac 15744fcc 15791ae4
	STORE!EcCompletePrivateRulesWork+0x43
	  154cfa30  02005b25  00f00f04 154cfa94 0201579f STORE!OMSG::~OMSG+0x55294
	  154cfa3c  0201579f  000000e9 00f75cec 000000e9 STORE!UNK::Delete+0x41
	  154cfa5c  0205e77a  00f75cec 000000e9 154cfa94 STORE!EcReleaseOp+0x4a
	  154cfa70  02002df8  00f75cec 154cfab0 000000e9 STORE!EcRelease+0x18
	  154cfae4  02003ddc  0017c978 15743fd4 154cfb08 STORE!EcRpc+0x245
	  154cfb0c  77e11841  0017c978 15743fd4 0017f02c STORE!EcDoRpc+0x3d
	
	
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
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: crash hang fail
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
