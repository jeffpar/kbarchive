---
layout: page
title: "Q216471: NetBT Improvements for Connections Between Multihomed Computers"
permalink: /kb/216/Q216471/
---

## Q216471: NetBT Improvements for Connections Between Multihomed Computers

{% raw %}

	Article: Q216471
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting from a multihomed computer to another multihomed computer, where
	both computers have two separate networks in common, the optimal route may not
	be chosen. Additionally, the outbound path may differ from the inbound path.
	
	CAUSE
	=====
	
	When a call is placed using NetBIOS over TCP/IP (NetBT), for example, "net use
	\\mycomputer\myshare" on a multihomed computer, the outbound calls are placed on
	both interfaces. Each interface should query WINS and then choose the best
	target IP address for the called computer. Two improvements are now available in
	this algorithm.
	
	RESOLUTION
	==========
	
	The algorithm used in determining the best target IP address has been changed to
	include two improvements, available in this new version of Netbt.sys.
	
	Previously, a match was chosen in the order below. For additional information,
	please see the following article(s) in the Microsoft Knowledge Base:
	
	  Q161425 WinNT 4.0 SP2 Multihomed Computer Connection Enhancement
	
	1. Check for a matching subnet address for the calling interface.
	
	2. Check for a matching subnet address for any interface in the computer.
	
	3. Pick a target address randomly.
	
	The new version adds one more check, as shown here:
	
	1. Check for a matching subnet address for the calling interface.
	
	2. Check for a matching network address for the calling interface.
	
	3. Check for a matching subnet address for any interface in the computer.
	
	4. Pick a target address randomly.
	
	Also added is support for a "per-interface" NetBIOS name cache. The per-interface
	cache allows each adapter to choose target IP addresses for multihomed computers
	independently, instead of picking up an IP address from the cache that was
	chosen in the context of another adapter.
	
	To illustrate:
	
	                             ---------
	          ------------------| Router1 |----------------
	         | Net1SubnetA       ---------     Net1SubnetB |
	         | NIC1                                   NIC1 |
	   -----------                                     -----------
	  | Computer1 |                                   | Computer2 |
	   -----------                                     -----------
	         | NIC2                                   NIC2 |
	         | Net2SubnetA       ---------     Net2SubnetB |
	          ------------------| Router2 |----------------
	                             ---------
	
	In the scenario shown above, if a NetBT call is placed from Computer1 to
	Computer2, a call will go out each interface (NIC1 and NIC2). NIC1 will query
	WINS, and, assuming that WINS returns an IP address for each interface on
	Computer2, it will choose the IP address associated with Computer2NIC1 as the
	best IP address to connect to, because both share the same network ID (even
	though the subnet ID is different). This IP address will be cached for NIC1 in
	the per-interface name cache. NIC2 will also query WINS, and assuming that WINS
	returns an IP address for each interface on Computer2, it will choose the IP
	address associated with NIC2, and this IP address will be cached in the
	per-interface name cache for NIC2.
	
	Calls are placed on both interfaces (and the WINS server for each interface is
	queried separately) because the computer cannot assume that the target computer
	is reachable on both networks in all cases.
	
	This enhancement can improve the path used for connections from a multihomed
	computer to another multihomed computer, when both have two networks in common.
	It does not offer any changes for other scenarios.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00 multi-homed multi homed
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
