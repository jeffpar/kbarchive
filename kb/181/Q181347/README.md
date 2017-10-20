---
layout: page
title: "Q181347: Configuring RRAS Filters to Permit a One-Way Ping"
permalink: /kb/181/Q181347/
---

## Q181347: Configuring RRAS Filters to Permit a One-Way Ping

{% raw %}

	Article: Q181347
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With filters on your Routing and Remote Access Service (RRAS) server configured
	to allow your network to ping remote hosts and to disallow the remote hosts from
	pinging your RRAS server or internal network hosts, you may notice that ping
	does not work in either direction.
	
	CAUSE
	=====
	
	When setting the input ICMP filter, the ICMP type and ICMP code fields are
	blank. This causes the default type and code value of 255 to be used. When 255
	is used, all ICMP packets will be blocked (not received), including type 0,
	which is Echo Reply. When your computer tries to ping a host, the host replies
	with an Echo Reply ICMP packet, but because of the filter, the packet is
	discarded.
	
	RESOLUTION
	==========
	
	To resolve this issue set up the filters using the following steps:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Routing and RAS Admin.
	
	2. Double-click IP Routing, click Summary, and then right-click the interface on
	  which you want to configure filters.
	
	3. Click Configure Interface, click Input Filters, and then click Add.
	
	4. In the Protocol drop-down list, select ICMP and type 8 in the ICMP type
	  field.
	
	  NOTE: Type 8 denotes an Echo Request.
	
	5. Click OK and click Receive all except listed below.
	
	6. Click OK in the IP Packet Filters Configuration dialog box.
	
	7. Click OK in the IP Configuration dialog box for the specific interface.
	
	For more information, please see the following article in the Microsoft Knowledge
	base:
	
	  ARTICLE-ID: Q170292
	  TITLE : Internet Control Message Protocol (ICMP) Basics
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
