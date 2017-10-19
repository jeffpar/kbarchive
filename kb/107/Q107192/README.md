---
layout: page
title: "Q107192: Multiple Connections to the Same Host Over 802.2"
permalink: /kb/107/Q107192/
---

## Q107192: Multiple Connections to the Same Host Over 802.2

	Article: Q107192
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server for Windows NT supports up to 250 connections (PUs) over a single SNA
	Server 802.2 link service, where each connection is communicating to a different
	IBM host, peer system (such as AS/400) or downstream (DSPU) device. However, to
	communicate to the same SNA destination, two SNA Server 802.2 link services and
	connections must be configured when using SNA Server 3.0 SP1 and earlier.
	
	MORE INFORMATION
	================
	
	An SNA Server connection is equivalent to an IBM SNA Physical Unit Type 2.0 or
	2.1. When communicating to different destinations (such as multiple 3745 and
	AS/400 computers), SNA Server supports up to 250 simultaneous connections over
	one 802.2 link service.
	
	However, when communicating to the same destination (for example, to one 3745),
	two SNA Server 802.2 link services must be defined (each with it's own SAP
	address), and a separate 802.2 connection must be defined through the SNA Server
	Admin/Manager program to use each 802.2 link service. Note that multiple SNA
	Server 802.2 link services can operate over a single 802.2 adapter, though each
	link service must be configured with a unique SAP address.
	
	SNA Server 2.x
	--------------
	
	To define two SNA Server 802.2 link services in the SNA Server Setup program, do
	the following:
	
	1. From the Setup Option dialog box, Select Configure Link Services.
	
	2. Select Add, then highlight SNA DLC 802.2 Link Service and choose Install.
	
	3. Enter a title describing the link service (or leave the default title), then
	  select the adapter the link service will use.
	
	4. Leave the SAP default to 4
	
	5. Repeat the previous steps to add the second 802.2 Link Service, except in
	  step 4, set the SAP value to 8.
	
	To exit Setup, choose Continue repeatedly until Setup displays an option to exit
	or start SNA Admin.
	
	SNA Server 3.0 and 3.0 SP1
	--------------------------
	
	To define two SNA Server 802.2 link services in the SNA Server Manager, do the
	following:
	
	1. From the Manager Menu Bar, Select Insert -> Link Service.
	
	2. Highlight DLC 802.2 Link Service and choose Add.
	
	3. Enter a title describing the link service (or leave the default title), then
	  select the adapter the link service will use.
	
	4. Leave the SAP default to 4
	
	5. Repeat Steps 2 through 4 to add the second 802.2 Link Service, except in step
	  4, set the SAP value to 8.
	
	To exit the Insert Link Service dialog, choose Finish.
	
	SNA Server 3.0 SP2 and Later
	----------------------------
	
	SNA Server 3.0 SP2 added a Multi-SAP capability to the DLC 802.2 Link Service.
	This feature allows a single DLC 802.2 Link Service to use multiple Local SAP
	addresses. This allows the Local and Remote SAPs to be configured on a per
	connection basis. To add a DLC 802.2 Link Service using the Multi-SAP feature,
	do the following:
	
	1. From the Manager Menu Bar, Select Insert -> Link Service.
	
	2. Highlight DLC 802.2 Link Service and choose Add.
	
	3. Enter a title describing the link service (or leave the default title), then
	  select the adapter the link service will use.
	
	4. Uncheck the "Use Fixed SAP" option. Note that the "Local Service Access Point
	  (SAP)" option is now greyed out.
	
	To exit the Insert Link Service dialog, choose Finish. To define an SNA Server
	802.2 link service in the SNA Server Admin/Manager program, do the following:
	
	1. From the SNA Server Admin program, configure both connections with the
	  appropriate Remote Network Address (which may be the same for both
	  connections). Note that the Local Node ID will be unique for each connection,
	  since each connection must refer to a unique PU at the host (where the Local
	  Node ID must correspond with the IDBLK + IDNUM parameters on the PU
	  definition in VTAM).
	
	  NOTE: If you are using the Multi-SAP feature of SNA Server 3.0 SP2 and later,
	  the SAPs are configured on the same property page as the Remote Network
	  Address. Each connection should be configured with a unique "Local SAP
	  Address."
	
	  NOTE: VTAM also supports the configuration of a "CPNAME" (control point name)
	  parameter in the PU definition. This control point name must match the local
	  control point name in the "Server Properties" dialog in the SNA Admin
	  program. SNA Server sends the local network name and control point name to
	  the host in the XID Format 3 message during connection establishment.
	  However, SNA Server 2.x only supports the configuration of a single local
	  network name and control point name. If SNA Server is to support multiple
	  connections (or PUs) to the same host system, and VTAM is configured with
	  unique "CPNAME" parameters on each PU, the SNA Server local network name and
	  control point name values in the server properties dialog must be left blank,
	  and the Local Node ID configured on the connection dialog must be used to
	  distinguish the PU to be used. So, in this configuration, VTAM must be
	  configured with unique IDBLK and IDNUM parameters for each PU that SNA Server
	  is to use.
	
	2. Add the required LUs (and optionally, LU pools) and save the configuration
	  before restarting the SNA Server service.
	
	SNA Server user/group records can be added after the SNA Server service has been
	started, though the configuration must be saved before these additions are
	available to the SNA Server client machine(s).
	
	Additional query words: prodsna DLC 802.2 snafaq
	
	======================================================================
	Keywords          : kbnetwork sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
