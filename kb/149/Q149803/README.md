---
layout: page
title: "Q149803: Troubleshooting Error 242 When Use DLC 802.2 Link Services"
permalink: kb/149/Q149803/
---

## Q149803: Troubleshooting Error 242 When Use DLC 802.2 Link Services

	Article: Q149803
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the SNA Server service, you may get the following Error 242
	message:
	
	  DLC 802.2 Link Service is configured to use NDIS adapter that is not
	  installed.
	
	CAUSE
	=====
	
	The error is reporting that a link service that is configured to use a DLC 802.2
	Link Service could not find an adapter bound to the driver specified for the
	Link Service. This message indicates one of the following:
	
	- A connection or media problem inserting into the Token Ring network.
	
	- A configuration problem with the network adapter.
	
	- A hardware problem with the adapter.
	
	WORKAROUND
	==========
	
	Error 242 will generally appear when the DLC cannot bind to the adapter
	specified in the SNA Server DLC 802.2 Link Service Setup dialog. The main
	reasons for this failure arises out of adapter initialization problems. The
	following items should be checked to ensure that the network adapter is
	initializing properly:
	
	- The adapter can communicate to any other computer in the network.
	
	  The ability to contact another computer on the network clears suspicion from
	  any installation problems with the adapter. If another protocol is proven to
	  work on the card, the DLC should find no hardware problems in the card. If
	  only the DLC is being bound to the adapter (for SNA Server use only), then
	  the Microsoft Windows NT Workstation service and transport (NetBEUI, TCP/IP,
	  etc.) would need to be enabled over this adapter. Use the Bindings dialog box
	  in the Windows NT Network Control Panel to verify that the bindings are
	  enabled in order to test network connectivity. Otherwise, install a LAN
	  protocol and enable its bindings to the network card.
	
	  If this works properly, the adapter should not be suspect. Check the System
	  Event Log to verify other reasons why the card appears not to be correctly
	  binding. If the computer is multihomed, make sure that the connection to the
	  host can be made using the affected adapter by disconnecting the other
	  adapter from the network. If a Token Ring connection problem exists (due to a
	  bad cable, bad port on the MAU or hub, mismatched Token Ring link speed,
	  etc.), NetBEUI will report an error in the Windows NT system event log
	  indicating a problem with the adapter.
	
	- A duplicate Token Ring adapter address exists in the Token Ring network.
	
	  Therefore, the adapter cannot be inserted into the ring. Some Token Ring
	  adapter drivers will report specific errors referring to problems inserting
	  into the ring; unfortunately, some will not. The event log number will vary
	  on an adapter to adapter basis. For example, an Olicom Token Ring card will
	  return the following:
	
	  Event ID:5
	  Could not open adapter OcTk1601. Duplicate node address.
	  Source: "OcTk16" | "OcTk32" (depending on the adapter installed)
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q122933 Event Viewer Messages for the Olicom Network Card
	
	  Some adapters will return protocol related events that will reference the
	  adapter. IBM's 16/4 Token Ring Adapter, for example, returns a message
	  related to protocol failure.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q121070 Duplicate Locally Administered Address Can Cause Event 9006
	
	  The adapter's factory set address could be overridden by using a locally
	  administered address. Different adapters will have different ways of
	  providing a locally administered address. Some cards will use Registry
	  parameters, while some cards will have an option in the driver configuration
	  to provide a locally administered address. Reference your particular
	  adapter's documentation for details.
	
	- The driver may have failed to initialize for the adapter because of
	  configuration problems.
	
	  Problems with mismatched drivers or adapters that are not configured correctly
	  will prevent the adapter from initializing correctly. Most instances involve
	  a driver.
	
	  Three particular situations have been isolated by Microsoft. However, there
	  may be other reasons; this is just a partial list.
	
	  If you see messages regarding driver initialization problems not discussed,
	  check your adapter's documentation or the Microsoft Knowledge Base for the
	  most recent information on http://www.microsoft.com/kb.
	  a. An initialization problem occurs with the 3Com 3c59x.sys because the
	     driver does not reset the adapter on Windows NT shutdown. When Windows NT
	     restarts, the driver is not able to locate the NIC. A Service Control
	     Manager event will warn that it was unable to start the adapter.
	
	     For additional information, please see the following article in the
	     Microsoft Knowledge Base:
	
	  Q139179 3C0M 3C59X.SYS Driver Fails to Initialize in Windows NT 3.51
	
	  b. The Oemsetup.inf file for the IBM Auto 16/4 Token Ring adapter driver
	     (Ibmtok4.sys) does not add a required value in the Windows NT registry
	     properly, causing Service Control Manager to report event 7000s in the
	     event log.
	
	     For additional information, please see the following article in the
	     Microsoft Knowledge Base:
	
	  Q137505 IBM 16/4 Auto Token Ring Adapter Driver Causes Event ID 7000
	
	- A problem occurs when the Madge Smart 16/4 AT Plus Ringnode Token Ring
	  adapter is configured for Normal software operating mode. This token ring
	  adapter has two software operating modes: Normal mode and AT mode. By
	  default, the adapter is set to Normal mode, and if the adapter is used in
	  Normal mode, you can only use the drivers shipped with the Madge Token Ring
	  adapter. If the adapter is used in AT mode, you can use previous versions of
	  the drivers, and the Madge configuration software cannot override the I/O
	  base address, Ring Speed, and SmartROM switch settings. The Service Control
	  Manager will return errors related to not being able to stop the network
	  adapter.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q128801 Madge Smart 16/4 AT Plus Ringnode Token Ring Adapter Fails
	
	For additional information on problems activating the SNA Server service, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q110582 SNA Server Service Stays Inactive When Started
	
	
	Additional query words: prodsna 2.0 2.1 2.11 3.0 3.5 3.51
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
