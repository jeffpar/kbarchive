---
layout: page
title: "Q242251: XWEB: First Chance Exception in Mapi32.dll"
permalink: kb/242/Q242251/
---

## Q242251: XWEB: First Chance Exception in Mapi32.dll

	Article: Q242251
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may see the following first chance exception with the following call stack
	when you debug a Microsoft Exchange Server Outlook Web Access (OWA) component:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  02a4f158  6fb43b9c  00000004 781fd460 00000004 MAPI32!ScSizePropVals+0x2a8
	  02a4f188  6fb43c89  3034c140 00000010 00000009 MAPI32!ScUpdateProfileSection+0x8c
	  02a4f1a4  6fb3b824  3034c140 00000010 00000009 MAPI32!ScWriteProfileSection+0x29
	  34d7b718  00000021  0e1d0000 00000000 00040004 MAPI32!MFISA_CreateMsgService+0xa14
	  EAX=30303030 EBX=781fd4a0 ECX=00000000 EDX=ffffffff ESI=3030302f EDI=c0c0c140
	  EIP=6fb39f48 ESP=02a4f11c EBP=02a4f158 EFL=00010212
	  CS=001b DS=0023 ES=0023 SS=0023 FS=003b GS=0000
	
	NOTE: This first chance exception is handled by the exception handler and is only
	seen in a debugger.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 SP2. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : :5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
