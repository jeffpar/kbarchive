---
layout: page
title: "Q168578: Autostatic Route Updates Fail Over IPX"
permalink: /kb/168/Q168578/
---

## Q168578: Autostatic Route Updates Fail Over IPX

{% raw %}

	Article: Q168578
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you issue several Update Routes commands from the Routing and Remote
	Access Service server, the IPX network number of the WAN link gets changed from
	all zeros to a number other than zero. This causes the Routing and Remote Access
	Service server to drop all Routing Information Protocol (RIP) & Service
	Advertising Protocol (SAP) packets coming from the remote router. You then lose
	all connectivity to the other router and the networks it is connected to.
	
	CAUSE
	=====
	
	The router defaults to unnumbered WAN links with Routing and Remote Access
	Service for Windows NT Server 4.0. If the Network number for the remote router
	changes to anything other than all zeros the local router will drop all RIP and
	SAP packets from the remote router.
	
	For example:
	
	  From the local router, right-click Summary under IPX Routing. Then select
	  Update Routes. After doing this several times, the Network number for the
	  remote router may become something other than all zeros. The local router
	  will then drop any RIP & SAP packets received from the remote router.
	  Update Routes will no longer work.
	
	To verify you are seeing this problem, do the following. Go to a command prompt
	on each router and type:
	
	  C:\ipxroute config
	
	You should see something similar to this depending on how many network cards are
	installed, and so on.
	
	  NWLink IPX Routing and Source Routing Control Program v2.00
	
	  net 1: network number 00002602, frame type 802.2, device El59x1
	  (00c04fc29c12)
	  net 2: network number 00002602, frame type ethernet ii, device NdisWan10
	  (f4aa8a000000)+ active wan line
	
	If the NdisWan device's network number is something other than all zeros, then
	you are experiencing this problem.
	
	This is how it should look:
	
	  NWLink IPX Routing and Source Routing Control Program v2.00
	
	  net 1: network number 00002602, frame type 802.2, device El59x1
	  (00c04fc29c12)
	  net 2: network number 00000000, frame type ethernet ii, device NdisWan10
	  (f4aa8a000000)+ active wan line
	
	RESOLUTION
	==========
	
	This problem will only happen if it is an unnumbered WAN Link. For additional
	information about how to work around this problem by disabling unmumbered WAN
	links, please see the following article(s) in the Microsoft Knowledge Base:
	
	  Q197205 RRAS IPX VPNs Generate Event ID 20124
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
