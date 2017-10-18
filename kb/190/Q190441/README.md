---
layout: page
title: "Q190441: XADM: Access Violation Deleting NT Accounts Using DAPI"
permalink: kb/190/Q190441/
---

## Q190441: XADM: Access Violation Deleting NT Accounts Using DAPI

	Article: Q190441
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Exchange Directory Application Program Interface (DAPI) to delete
	Windows NT user accounts, an access violation occurs. The failing application
	may cause a Drwtsn32.log file to be generated with an entry similar to the
	following:
	
	  Application exception occurred:
	     App: LSDXAMEX.DBG (pid=107)
	     When: 07/27/1998 @ 15:44:40.623
	     Exception number: c0000005 (access violation)
	
	If you look at the thread ID that shows a FAULT, you will see something similar
	to the following:
	
	  State Dump for Thread Id 0x120
	
	  eax=00d30d0c ebx=011902dc ecx=00000000 edx=00000003 esi=00000000
	  edi=011902dc
	  eip=77f7b6f4 esp=00f9fbe0 ebp=00f9fc30 iopl=0 nv up ei pl zr na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000     efl=00000212
	
	  function: RtlEqualPrefixSid
	          77F7B6EA  56               push        esi
	          77F7B6EB  57               push        edi
	          77F7B6EC  8B74240C         mov         esi,dword ptr [esp+0Ch]
	          77F7B6F0  8B7C2410         mov         edi,dword ptr [esp+10h]
	  FAULT ->77F7B6F4  8A06             mov         al,byte ptr [esi]
	          77F7B6F6  3807             cmp         byte ptr [edi],al
	          77F7B6F8  7565             jne         _RtlEqualPrefixSid@8+75h
	          77F7B6FA  8A4602           mov         al,byte ptr [esi+2]
	          77F7B6FD  384702           cmp         byte ptr [edi+2],al
	
	  *----> Stack Back Trace <----*
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Function Name
	  0319f3c8 77dc2751 00000000 0cda3fb8 00cf04de ntdll!RtlEqualPrefixSid+0xb
	  0319f3d4 00cf04de 00000000 0cda3fb8 6724bd78 ADVAPI32!EqualPrefixSid+0xe
	  0319fc18 00cf109c 0012ec90 0cda3fb8 00000001 DAPI!GetDomainDescrBySid
	  0319fc5c 00cf1b46 00000000 0cda3fb8 00000001 DAPI!GetDomainInfoBySid
	  0319fee0 00cf3031 0cda3fb8 6724bd78 67201590 DAPI!SidToFullAccount
	  0319ff28 00cf56e2 0319ff50 0319ff54 0012ec08 DAPI!GetAssociatedNTAccount
	  0319ff7c 00cf59bb 0cda1fe0 6724bd78 67201590 DAPI!ProcessSecurityRequest
	  0319ffb8 77f04f2c 01fd4fa8 6724bd78 67201590 DAPI!SecurityThread
	  0319ffec 00000000 00cf5970 01fd4fa8 00000000 KERNEL32!BaseThreadStart
	
	
	CAUSE
	=====
	
	DAPI was attempting to compare two Security Identifier (SID) structures for
	equality, however, one of these was NULL. When RtlEqualPrefixSid() attempted to
	access the memory pointed to by the NULL pointer, it resulted in an access
	violation.
	
	
	WORKAROUND
	==========
	
	None.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: Lotus Notesc DirSync Crash Av Failure
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
