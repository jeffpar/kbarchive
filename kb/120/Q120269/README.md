---
layout: page
title: "Q120269: WFWG NetBEUI Differences Running on Token Ring Network"
permalink: /kb/120/Q120269/
---

## Q120269: WFWG NetBEUI Differences Running on Token Ring Network

{% raw %}

	Article: Q120269
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Windows for Workgroups connects to a share over a token ring network, it
	sends out a Name Query with different token ring information over NetBEUI,
	depending on whether the protected mode version or real mode version was
	started.
	
	MORE INFORMATION
	================
	
	When Windows for Workgroups connects to a file/print share or runs a named pipe
	application, a Name Query is sent out multiple times on the network to find the
	server it is being connected to. Under Windows for Workgroups version 3.11, the
	protected mode version of NetBEUI first sends out three Name Queries without the
	routing information field (RIF), and if no response is received, it sends out
	three more Name Queries with the RIF. This allows the workstation to work in
	token ring networks that include transparent bridges or source route bridges.
	
	The real mode version of NetBEUI sends out up to six Name Queries, all with the
	RIF. This allows the workstation to work properly in a network with source route
	bridges, but does not allow it to connect to servers on different rings when
	only transparent bridges are installed.
	
	A transparent bridge, by definition, copies all frames without an RIF from one
	ring to another without any additional filtering. Most transparent bridges in
	use today "learn" which network stations are on each ring attached to it and do
	not copy a frame onto its other rings if the location of the receiving station
	is known.
	
	A source route bridge only copies frames containing an RIF. If the packet is a
	discovery packet such as a NetBIOS Name Query, the "all routes" broadcast
	indicator is turned on and each bridge copies the frame to all rings it is
	connected to. Once the ring/bridge information has been filled in, source route
	bridges only consider forwarding packets that contain its bridge number. In
	addition, these packets will only be forwarded on to rings designated in the
	RIF. This filtering works to cut down the amount of unnecessary network traffic
	on each ring.
	
	There is a third bridge type called a source route transparent (SRT) bridge,
	which is a combination of the two types defined above. SRT bridges copy all
	frames without an RIF, with an RIF and the "all routes" broadcast indicator on,
	or if the RIF of the frame contains the number of the bridge examining the
	frame.
	
	There was a problem with Windows for Workgroups workstations running the
	protected mode version of NetBEUI connecting to Windows NT or Windows NT
	Advanced Server systems in a network containing SRT bridges. The problem was
	with NetBEUI on Windows NT and Windows NT Advanced Server and has been resolved
	in Windows NT Service Pack 2. The problem occurs when a Windows for Workgroups
	workstation using protected mode NetBEUI is connecting to a server across an SRT
	bridge and sends the Name Query without the RIF. The Windows NT server responds
	to the client with the RIF included in the frame. From then on, the Windows for
	Workgroups workstation continues to use the RIF, and the server, incorrectly,
	does not.
	
	Additional query words: wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : 3.11
	
	=============================================================================
	

{% endraw %}
