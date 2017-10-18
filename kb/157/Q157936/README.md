---
layout: page
title: "Q157936: SMC9232N Driver Causing Multiple STOP Messages"
permalink: kb/157/Q157936/
---

## Q157936: SMC9232N Driver Causing Multiple STOP Messages

	Article: Q157936
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the normal use of a computer system with the SMC9232 10/100 network
	interface card (NIC) installed running Windows NT, the computer fails with
	multiple STOP messages. The computer may fail with any or all of the following
	three STOP messages:
	
	- The following STOP errors message appears on your Windows NT Server:
	
	  STOP: 0x0000000A (0x00000034, 0x00000002, 0x00000001, 0x80402DA6)
	
	  NOTE: The first, second, and third parameters will be identical.
	
	- The following STOP errors message appears on your Windows NT Server:
	
	  STOP: 0x0000001E (0xC0000005, 0x8017A7E4, 0x00000000, 0x00100048)
	
	  NOTE: The first parameter will be identical; other parameters may vary
	  depending on your system configuration.
	
	- The following STOP errors message appears on your Windows NT Server:
	
	  STOP: 0x00000046 (0x00000000, 0x00000000, 0x00000000, 0x00000000)
	
	  NOTE: All of the parameters will be the same.
	
	CAUSE
	=====
	
	The version of the SMC driver that is failing is the version for Windows NT
	3.51, the Smc9232n.sys version 1.01 dated 3-6-96. Currently, SMC is aware that
	the Smc9232n.sys may be causing this problem, and SMC is working on a solution.
	
	WORKAROUND
	==========
	
	The SMC 9232 NIC is not on the current Hardware Compatibility List for Windows
	NT 3.51. Until this problem is resolved by SMC, replace the SMC 9232 with a
	network adapter that is listed on the HCL.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: prodnt 0xA 0x46 0x1E security
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
