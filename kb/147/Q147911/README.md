---
layout: page
title: "Q147911: Bluescreen When Building to Novell Server on MIPS Computer"
permalink: /kb/147/Q147911/
---

## Q147911: Bluescreen When Building to Novell Server on MIPS Computer

	Article: Q147911
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Bluescreen problem occurs while doing a build to a Novell server using either
	a single- or dual-processor Mips computer. The Bluescreen will happen using
	either CSNW or GWSN.
	
	CAUSE
	=====
	
	The problem case reports that the Novell server the user is trying to build to
	has 70 to 80 NLMs on it. When they build to a plain Novell server, it works
	fine. The problem happens on Windows NT Service Packs 1, 2 and 3.
	
	The paramaters to the bugcheck are:
	
	Bugcheck 00000055 : fbd6f00b 806e9e08 00000000 00000000
	
	stack is:
	
	Callee-SP   Arguments to Callee                 Call Site
	
	809fba50 : 00000055 fbd6f00b 806e9e08 00000000 NT!KeBugCheckEx+0x2c
	809fbc38 : 00000001 809ab3f8 809ab3f8 80928c8c NT!KiPanicException+0x18
	809fbd58 : 00000001 809ab3f8 809ab3f8 80928c8c NT!RtlMoveMemory+0x1e0
	809fbd58 : 2000fc01 80928c8c 809e1f28 809a7756 sonic!ConstrainPacket+0x1d4
	809fbdd8 : 00010000 fc6b0d5c fc784668 00000002 sonic!SonicSend+0x9c
	809fbe10 : 00000000 00000001 2000f001 00000001 NDIS!MiniportStartSends+0xa4
	809fbeb8 : 809f7040 fc6a0a40 809a9008 026a0a40 NDIS!MiniportProcessDeferred+0x424
	809fbf08 : 2000fc03 809a901c 80825208 fc7b7702 NDIS!NdisMDpc+0x168
	809fbf40 : 00000002 80729638 809fbfd8 2000fc01 NT!KiRetireDpcList+0x58
	809fbf58 : 00000002 80729638 809fbfd8 2000fc01 NT!KiIdleLoop+0x54
	
	WORKAROUND
	==========
	
	Compile locally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: novell netware
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
