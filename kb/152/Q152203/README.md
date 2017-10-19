---
layout: page
title: "Q152203: SNA Server Access Violation (0xC0000005) in s1pupcds()"
permalink: /kb/152/Q152203/
---

## Q152203: SNA Server Access Violation (0xC0000005) in s1pupcds()

	Article: Q152203
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server versions 2.11 and 2.11 Service Pack 1 (SNASERVR.EXE) encounter an
	access violation (0xC0000005) when started. Therefore, an Event 624 is logged in
	the Windows NT application event log.
	
	The stack trace of the failing thread is as follows:
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	002cff10  003c2436  000011f9 00000004 0043e798 SNASERVR!s1pupcds+0xc8
	002cff38  003f956d  00000000 00000000 00000004 SNASERVR!s1pucsc+0x56
	002cff60  003d41f4  00403fe3 0000000b 002cffec SNASERVR!s1pusvc+0x4d
	002cff64  00403fe3  0000000b 002cffec 000528d8 SNASERVR!s1pgdisp+0x64
	002cff80  00404785  00cb11cc 00000001 000528d8 SNASERVR!sbpsched+0xe3
	002cff84  00cb11cc  00000001 000528d8 00000000 SNASERVR!sbpgmain+0x25
	002cffa8  77e31461  00000001 000528d8 00000000
	SNASVC!ServiceMainFunction+0x12c
	002cffb8  77f26c2a  000528d0 00000000 00000000
	ADVAPI32!ScSvcctrlThreadA+0xe
	002cffec  00000000  77e31453 000528d0 00000000
	KERNEL32!BaseThreadStart+0x61
	
	This server was configured with multiple 802.2 connections to the same host
	system, and at least one of the connections may have been trying to activate
	when the problem occurred. The customer reported that they needed to reboot
	their Compaq Proliant dual-processor machine in order to get their IBM 16/4 II
	adapter to initialize properly, possibly due to transient media problems on
	their Token Ring LAN.
	
	CAUSE
	=====
	
	The SNA Server dump file indicated that the SNA Server service tried to free a
	session control block which had already been freed.
	
	RESOLUTION
	==========
	
	An SNA Server 2.11 hotfix to this problem is available through Microsoft product
	support. The problem has also been fixed in SNA Server 3.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 2.11 and
	2.11 Service Pack 1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
