---
layout: page
title: "Q92771: 3Com EtherLink II Card Not Detected During Setup of WFWG"
permalink: /kb/092/Q92771/
---

## Q92771: 3Com EtherLink II Card Not Detected During Setup of WFWG

	Article: Q92771
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	3.10 3.11
	WINDOWS
	kbnetwork kb3rdparty kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Windows for Workgroups (WFWG) Setup program, the 3Com EtherLink
	II network card may not be detected if the card is not initialized or if it is
	using an input/output (I/O) address of 0300h.
	
	NOTE: The network card will be initialized if you load a network software driver,
	such as IPX.COM, to your system.
	
	If the card is not detected, you must set it up up manually when you run the
	Setup program or you must use the Network option in the Windows Control Panel
	after the setup is complete.
	
	MORE INFORMATION
	================
	
	The Windows for Workgroups Setup program sets the transceiver type to external,
	regardless of the actual transceiver setting. The transceiver location is
	determined by the type of network cabling you are using:
	
	- Thin Ethernet networks and twisted-pair networks (in the case of the
	  EtherLink II TP card) use the transceiver located on the EtherLink II card.
	
	- Thick Ethernet networks use an external transceiver with the 3Com Etherlink
	  II cards.
	
	To change the transceiver location for a 3Com card:
	
	1. In the Windows Control Panel, choose the Network icon.
	
	2. Select the Adapters option and select Advanced.
	
	The default setting for the 3Com Etherlink II cards is External. If you are using
	thin Ethernet or twisted pair, change this setting to Onboard.
	
	NOTE: If you run Windows for Workgroups with Novell NetWare connectivity on a
	network that has thick EtherNet cabling, you may receive the following error
	message:
	
	  A File Server Could Not Be Found
	
	This type of cable, also known as thicknet or 10Base5, uses external
	transceivers. Many network adapter cards need to be properly configured to use
	this cable. To configure your network properly:
	
	1. Run Control Panel.
	
	2. Select the Networks option.
	
	3. Choose Adapters, and select External transceiver.
	
	For example, a 3COM Etherlink II netcard must have the transceiver set to
	External to attach to a Netware server, otherwise the error message appears.
	
	Additional query words: 1.0 1.00 3.1 3.10 LAN Manager LANman elink 3.11 elinkii elinkii.DOS
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
