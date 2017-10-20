---
layout: page
title: "Q253358: XWEB: OWA Issue Generates Stack That Contains CDO!FEqBin+0xa"
permalink: /kb/253/Q253358/
---

## Q253358: XWEB: OWA Issue Generates Stack That Contains CDO!FEqBin+0xa

{% raw %}

	Article: Q253358
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If there are a large number of Outlook Web Access (OWA) users, an Internet
	Information Server (IIS) computer may crash and generate the following stack:
	
	  
	
	  > kv
	  0000000001b0f8e0  000000006f078019  CDO!FEqBin+0xa (FPO: [2,0,2])
	  0000000001b0f95c  000000006f077b3b  CDO!CMessage__V_ScRespond+0x4c9 (FPO: [ebp 0162ee48] [2,24,4])
	  0000000001b0f968  000000006f075f6f  CDO!CMessage__M_ScDo_ReplyAll+0xb (FPO: [0,0,0])
	  0000000001b0f96c  000000006f06ca90  CDO!CMessage__V_HrInvoke+0x68f (FPO: [0,0,0])
	  0000000001b0f97c  0000000070bbd1e1  CDO!CDispatchObj__Invoke+0xa0 (FPO: [9,1,2])
	  000000000162ee68  0000000070bb23bb  0x0000000070BBD1E1 (No FPO)
	  00000000680b0009  ffffffffb80000ff  0x0000000070BB23BB (No FPO)
	  ffffffffff000000  0000000000000000  0xFFFFFFFFB80000FF (No FPO)
	  > r
	  EAX=00000008  EBX=00000000  ECX=02dda650  EDX=00000008  ESI=02dda650  EDI=01befe88
	  EIP=6f08acda  ESP=01b0f8dc  EBP=0000000b  EFL=00000202
	  CS=001b  DS=0023  ES=0023  SS=0023  FS=003b  GS=0000
	  > ln eip
	  CDO!FEqBin+0xa
	  CDO!HrFindDataRows-0x26
	  > u eip
	  CDO!FEqBin+0xa:
	  6F08ACDA  8B0A             mov         ecx,dword ptr [edx]
	  6F08ACDC  33C0             xor         eax,eax   
	  6F08ACDE  3B0E             cmp         ecx,dword ptr [esi]
	  6F08ACE0  7511             jne         FEqBin+23h         
	  6F08ACE2  8B7E04           mov         edi,dword ptr [esi+4]
	  6F08ACE5  8B7204           mov         esi,dword ptr [edx+4]
	  6F08ACE8  33D2             xor         edx,edx
	  6F08ACEA  F3A6             repe cmps   byte ptr [esi],byte ptr [edi]
	
	CAUSE
	=====
	
	This issue can occur because there is a issue in the Cdo.dll file.
	
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
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
