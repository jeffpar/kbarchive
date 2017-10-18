---
layout: page
title: "Q156384: Control of Source Routing on Token Ring IP Broadcasts"
permalink: kb/156/Q156384/
---

## Q156384: Control of Source Routing on Token Ring IP Broadcasts

	Article: Q156384
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempts to pass IP broadcasts, such as DHCP traffic, over a Token Ring
	transparent bridge may fail. This failure results in various symptoms, such as
	the inability to obtain an IP address via DHCP, or the inability to resolve the
	names of computers on the other side of the bridge.
	
	CAUSE
	=====
	
	Computers running Microsoft Windows NT set the source routing bit in all IP
	broadcast traffic by default. Transparent bridges may discard frames with source
	routing information when passing them to different media types, such as
	Ethernet.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	In order to configure a computer running Microsoft Windows NT version 4.0 to send
	IP broadcasts without source routing, the following Registry parameter must be
	added and set to 0:
	
	ArpAlwaysSourceRoute
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	Tcpip\Parameters
	Value Type: REG_DWORD - Boolean
	Valid Range: 0,1 (False or True)
	Default: 0 (False)
	
	When you set this parameter to 1, you force TCP/IP to transmit ARP queries with
	source routing enabled on token ring networks. By default, the stack transmits
	ARP queries without source routing first, and retries with source routing
	enabled if no reply was received. After applying the hotfix referenced in this
	article, adding this parameter and setting it to 0 will cause all IP broadcasts
	to be sent without source routing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
