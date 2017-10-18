---
layout: page
title: "Q138793: Multi-Protocol Router Installation and Configuration"
permalink: kb/138/Q138793/
---

## Q138793: Multi-Protocol Router Installation and Configuration

	Article: Q138793
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MPR (Multi-Protocol Router) consists of the following: RIP (Routing Information
	Protocol) for TCP/IP, BOOTP (Boot Protocol) relay agent for DHCP, and RIP for
	IPX. RIP is used by routers to dynamically exchange routing information. With
	RIP for IP and RIP for IPX installed, Windows NT will route these protocols and
	dynamically exchange routing information with other routers running the RIP
	protocol. The BOOTP relay agent will allow the Windows NT Router to forward DHCP
	requests to DHCP servers on other subnets. This allows one DHCP server to
	service multiple IP subnets. See Riproute.wri in the MPR directory for
	additional documentation on MPR.
	
	MORE INFORMATION
	================
	
	Installation
	------------
	
	MPR requires Windows NT Server 3.51 and Service Pack 2. In addition, two or more
	network cards are needed for full MPR functionality.
	
	To install MPR:
	
	1. Run UPDATE.EXE from the MPR\i386 directory (or the directory for the
	  appropriate hardware type) on the Windows NT 3.51 Service Pack 2 CD-ROM
	  disc.
	
	  Update.exe copies files to your Windows NT installation and make new software
	  choices available under Control Panel Network (Add Software).
	
	  NOTE: You need to run this UPDATE.EXE program in addition to the UPDATE.EXE
	  program used to install Service Pack 2.
	
	2. Run Control Panel, click Network, and click Add Software.
	
	3. Select RIP for Internet Protocol, Bootp Relay Agent, or RIP for NWlink
	  IPX/SPX compatible transport, and then click Continue.
	
	4. When prompted, provide the path for the MPR distribution files (for example,
	  D:\MPR\I386).
	
	WARNING: After you install RIP, Windows NT will start exchanging routing
	information with other RIP routers. If you have misconfigured the IP address of
	your network cards or used a fake IP address, this could have a severe impact on
	your network. Do not install RIP without fully understanding TCP/IP and the
	design of your network.
	
	
	RIP for IP, Configuration and Troubleshooting
	---------------------------------------------
	
	No manual configuration is needed. After installing RIP for IP, the Enable IP
	Routing box in Advanced TCP/IP configuration will automatically be selected. RIP
	for IP runs as a service and can be stopped and started using Control Panel
	Services.
	
	To see what routes your computer has, type ROUTE PRINT at the Windows NT Command
	Prompt. This will show the routes that Windows NT creates by default, and routes
	learned through RIP.
	
	If RIP for IP is installed on a computer that has only one network card, it is
	configured for Silent Mode. In Silent Mode, Windows NT listens to RIP broadcasts
	and updates its route table but does not advertise its own routes. If an
	additional network card is later installed in the computer, RIP will
	automatically turn off Silent Mode and enable IP routing.
	
	Bootp Relay Agent, Configuration and Troubleshooting
	----------------------------------------------------
	
	After you install the BOOTP Relay Agent you will be prompted with a configuration
	screen. You must enter the IP address of DHCP servers that you would like to
	send DHCP requests to. Maximum Hops and Seconds Threshold can be left at the
	defaults. If you later need to change the configuration, click the Config Relay
	Agent button under Advanced TCP/IP Configuration.
	
	RIP for NWlink IPX/SPX compatible Transport,
	Configuration and Troubleshooting
	------------------------------------------------------------------------------
	
	When installing RIP for NWlink, Setup displays a message that NetBIOS Broadcast
	Propagation (broadcast of type 20 packet) is currently disabled. If you are
	using NetBIOS over IPX or are unsure, choose Yes to enable broadcast of type 20
	packets. Reboot the computer as directed. Type 20 broadcast can be later
	configured by selecting RIP for NWlink IPX in Control Panel Network and clicking
	configure.
	
	Enable RIP Routing is automatically selected when you install RIP for NWlink IPX.
	RIP for NWlink IPX can be enabled or disabled by clicking Enable RIP Routing in
	NWlink IPX/SPX Protocol Configuration. The SAP agent is automatically installed
	with RIP for NWlink IPX. SAP is a service, and can be started and stopped from
	Control Panel Services. Microsoft recommends that you configure the Internal
	Network number through the NWLink configuration in Control Panel Network. If you
	do not, a random number will be generated for you.
	
	The command line utility Ipxroute.exe has been updated and can be used to get
	RIP, SAP, and source routing information and statistics.
	
	For more information on MPR, refer to Riproute.wri in the Windows NT 3.51 Service
	Pack 2 CD-ROM disc \MPR directory.
	
	Additional query words: prodnt multi protocol provider router internet trouble shoot shooting tshoot
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
