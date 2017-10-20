---
layout: page
title: "Q122317: TCP/IP-32 May Fail on Token Ring Network with Source Routing"
permalink: /kb/122/Q122317/
---

## Q122317: TCP/IP-32 May Fail on Token Ring Network with Source Routing

{% raw %}

	Article: Q122317
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If Microsoft TCP/IP-32 and IPXODI are loaded on a token ring network with source
	routing enabled, the TCP/IP-32 utilities, such as PING, may fail to locate hosts
	on the network.
	
	CAUSE
	=====
	
	This problem occurs due to incorrect configuration of ROUTE.COM (Novell's
	IBM-Token-Ring Source Routing Driver with DOS ODI) and incorrectly configured
	NET.CFG file.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Copy the ROUTE.COM file to a boot disk from the Novell DOS ODI Workstation
	  Services disk.
	
	2. Add the following two lines in the AUTOEXEC.BAT after LANSUP.COM or TOKEN.COM
	  and before the protocol stack:
	
	  " ROUTE BOARD = 01
	  ROUTE BOARD = 02
	  " (without the quotation marks)
	
	  NOTE: The BOARD parameter does not refer to the physical NIC. Instead, it
	  refers to the Frame specified in the NET.CFG file.
	
	3. Add the following two lines in the NET.CFG file (if it is not already
	  present):
	
	  " Frame Token-Ring
	  Frame Token-Ring_SNAP
	  " (without the quotation marks)
	
	The Novell products discussed here are manufactured by Novell, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: wfw wfwg adapter prodtcp32 3.11 netware
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
