---
layout: page
title: "Q152946: XADM: Exchange Store Stops Due to Data Corruption"
permalink: /kb/152/Q152946/
---

## Q152946: XADM: Exchange Store Stops Due to Data Corruption

	Article: Q152946
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork exc4
	Last Modified: 21-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Information Store Service may terminate unexpectedly. The
	Drwtsn32.log may show a failure of Store.exe with an entry similar to the
	following:
	
	  App: store.DBG (pid=248)
	  When: 8/2/1996 @ 12:33:11.437
	  Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	Data corruption of the Information Store causes an inconsistency, which in turn
	causes a client request to make the server stop functioning.
	
	WORKAROUND
	==========
	
	Run Isinteg.exe. This should fix the Information Store corruption, preventing
	the failure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Service Pack 3 of Microsoft Exchange
	4.0. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Viewing the thread that shows the FAULT will yield something like the
	following:
	
	State Dump for Thread Id 0x50
	
	eax=0a19f9dc ebx=00000000 ecx=00000000 edx=0015bbb8 esi=0053b2c4
	edi=fffff9bf
	eip=0200f02d esp=0a19f8f8 ebp=0a19f908 iopl=0  nv up ei pl nz na pe nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000  efl=00000202
	
	function: JTAB_BASE::EcSetPositionToMid
	       0200f022 55               push    ebp
	       0200f023 8bec             mov     ebp,esp
	       0200f025 83ec04           sub     esp,0x4
	       0200f028 53               push    ebx
	       0200f029 56               push    esi
	       0200f02a 57               push    edi
	       0200f02b 8bd9             mov     ebx,ecx
	FAULT ->0200f02d f6412804         test    byte ptr [ecx+0x28],0x4
	ds:0055e922=f4
	       0200f031 0f85d2ea0400     jne     JTAB_BASE::EcSetPositionToMid
	(0205db09)
	       0200f037 6a00             push    0x0
	       0200f039 8bcb             mov     ecx,ebx
	       0200f03b 68c8a41302       push    0x213a4c8
	       0200f040 e88328ffff       call    JTAB_BASE::EcSetCurrentIndex
	(020018c8)
	       0200f045 85c0             test    eax,eax
	       0200f047 7540             jnz JTAB_BASE::EcSetPositionToMid+0x67
	(0200f089)
	       0200f049 6a01             push    0x1
	       0200f04b 8d45ff           lea     eax,[ebp-0x1]
	ss:0a6fe22a=????????
	       0200f04e 6a01             push    0x1
	       0200f050 8bcb             mov     ecx,ebx
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0a19f908 020e1421 0a19fa70 00000006 0053b2c4 00000000
	store!JTAB_BASE::EcSetPositionToMid
	[omap]
	0a19f9b4 020e39b9 0053d034 00000000 0a19f9dc 0a19fa70
	store!CAT::EcPositionToId [omap]
	0a19fa24 020d6bac 0a19fa70 00000000 0a19fa80 0a19fa84
	store!CAT::EcGetCollapseState [omap]
	0a19fa44 020d2075 0813411c 0000006c 0a19fa70 00000000
	store!EcGetCollapseStateOp [omap]
	0a19fa88 02003581 0813411c 0a19fac8 00000001 0000006c
	store!EcGetCollapseState [omap]
	0a19faf8 020029be 001cacb8 0053b2c4 0a19fb1c 00000818 store!EcRpc [omap]
	0a19fb20 77e8fbad 001cacb8 0053b2c4 0020eafc 00000818 store!EcDoRpc [omap]
	0a19fe28 77e8f88e 00000000 00000000 0a19ff10 0a19fe40 rpcrt4!<nosymbols>
	0a19fe7c 77e61306 02003c3d 0a19ff10 0a19ff3c 0018a168 rpcrt4!<nosymbols>
	0a19fed0 77e61527 0a19ff10 00000000 0a19ff3c 0a19ff40 rpcrt4!<nosymbols>
	0018a1d8 00000009 00100004 00080100 00184d90 00830015 rpcrt4!<nosymbols>
	
	
	Additional query words: access violation gp fault
	
	======================================================================
	Keywords          : kbnetwork exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
