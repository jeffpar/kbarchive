---
layout: page
title: "Q142903: Windows NT Ndis.sys and Netflx3.sys Performance Improvement"
permalink: kb/142/Q142903/
---

## Q142903: Windows NT Ndis.sys and Netflx3.sys Performance Improvement

	Article: Q142903
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1 
	- Microsoft Windows NT Server version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft has developed an enhancement to Windows NT that allows a computer with
	at least two CPUs and at least two Compaq NetFlex network cards to significantly
	improve network performance.
	
	Previously, the network driver interrupt moderation on Symmetric Multi- Processor
	(SMP) computers did not receive adequate information regarding CPU utilization.
	
	To improve the network performance, obtain the enhancement mentioned below or
	wait for the next Windows NT Service Pack.
	
	
	MORE INFORMATION
	================
	
	Ndis.sys and Netflx3.sys have been modified to enhance performance. The new
	Netflex3 driver has an improved interrupt moderation algorithm based on the
	server CPU utilization in addition to the frame rate. The improved interrupt
	moderation helps reduce the amount of server CPU usage for processing
	interrupts, especially on a busy server.
	
	The new Netflx3 driver is only available for the Intel platform whereas Ndis.sys
	is available for Intel and Risc platforms.
	
	This enhancement is currently only available as a "hotfix" and has been posted to
	the following Internet location:
	
	ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-
	postSP1/ndis-fix
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0, Service
	Pack 1. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp1 kbWinNTS400search
	Version           : :4.0,4.0 SP1
	
	=============================================================================
	
