---
layout: page
title: "Q186340: NAT Routers Disallow Setup of One-way Trusts Between Domains"
permalink: /kb/186/Q186340/
---

## Q186340: NAT Routers Disallow Setup of One-way Trusts Between Domains

	Article: Q186340
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to establish a two one-way trust between separate domains where
	IP communication passes through a router that has Network Address Translation
	(NAT) enabled.
	
	CAUSE
	=====
	
	A Windows NT Trust relationship uses NetBIOS Datagram Services. Network devices
	implementing NAT do not translate addresses in the NetBIOS header. Some Routers
	enable Fast Packet Switching to increase performance by just analyzing the IP
	Header and not the NetBIOS Datagram header, which is where the Source IP Address
	is located.
	
	A Windows NT Trust relationship uses NetBIOS Datagrams. To successfully negotiate
	a trust relationship, the source IP address in the NetBIOS header must be
	correct. Most network devices implementing NAT do not translate the IP addresses
	in the NetBIOS header.
	
	RESOLUTION
	==========
	
	To resolve this problem, disable 'Fast Packet Switching' on your Router.
	
	MORE INFORMATION
	================
	
	In order for packets to pass between two domains separated by a router running
	NAT, you should ensure that the Fast Page Switching function of the router/NAT
	software combination is disabled. Fast Page Switching is sometimes shipped with
	a default of ENABLED when installed. This provides for faster throughput of
	packets but prevents the NAT device from performing proper address translation
	on a per-packet basis.
	
	
	Additional query words: nat fast page switching spoofing
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
