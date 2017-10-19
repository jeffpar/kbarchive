---
layout: page
title: "Q91694: WFWG Err Msg: Protocol Manager Reported an Incomplete Binding"
permalink: /kb/091/Q91694/
---

## Q91694: WFWG Err Msg: Protocol Manager Reported an Incomplete Binding

	Article: Q91694
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-SEP-1999
	
	3.10
	
	WINDOWS
	
	kbnetwork kberrmsg kbprb kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when using Windows for Workgroups:
	
	  The protocol manager has reported an incomplete binding
	
	The message can be preceded by a number, such as 5733 or 5773. For example:
	
	  Error 5733: The protocol manager has reported an incomplete binding.
	
	In most cases, Windows still functions after this message; however, all network
	services are disabled.
	
	CAUSE
	=====
	
	This message occurs due to several conditions, including:
	
	- Incorrect NDIS Network Interface Card (NIC) driver loaded in the CONFIG.SYS
	  file
	
	- Incorrect network card configuration (PROTOCOL.INI)
	
	- Hardware problem(s)
	
	WORKAROUND
	==========
	
	Use the information in the following paragraphs to eliminate the conditions
	listed above.
	
	Incorrect NDIS NIC Driver Loaded in the CONFIG.SYS File
	-------------------------------------------------------
	
	This message may result if you have installed the wrong network card driver. To
	verify that the driver you selected matches the network card you are using,
	choose the Network icon from Control Panel. If the network card you are using is
	not listed during setup, check the manufacturer's suggested emulation.
	
	The network card supplier may need to provide an NDIS compatible driver. If the
	card you are trying to install is not listed in Control Panel, contact the
	network card manufacturer for a specific NDIS driver that works with Windows for
	Workgroups.
	
	The order of the network drivers in the CONFIG.SYS file is also important. For
	example, protocol manager (PROTMAN.DOS) must load before any other Windows for
	Workgroup network drivers. If PROTMAN.DOS does not load first, you may receive
	the following variation of the message above:
	
	  Error 5741: The protocol manager was unable to bind.
	
	Incorrect Network Card Configuration (PROTOCOL.INI)
	---------------------------------------------------
	
	The protocol manager error message can also occur if the network adapter is
	configured incorrectly. The configuration settings include IRQ, Base I/O port,
	and Base Memory Address. To verify these settings, choose the Network icon from
	Control Panel.
	
	Some network adapters do not have an on-board transceiver, and use an external
	transceiver to transmit data over the medium. If your network adapter works this
	way, add the following entry to the section of the PROTOCOL.INI file that refers
	to the specific net card using the external transceiver:
	
	  [MS$NIUPC]
	  TRANSCEIVER=EXTERNAL
	
	You can also correct your settings by deleting the PROTOCOL.INI, PROTMAN.DOS,
	WORKGRP.SYS, and other Workgroup network driver files. Then, from Control Panel,
	choose the Network icon, and indicate the correct network adapter and
	configuration settings.
	
	Note: Each time the PROTOCOL.INI file is updated, the old one is saved with a
	sequentially numbered extension (that is, PROTOCOL.000, PROTOCOL.001,
	PROTOCOL.002, and so forth). By referring this naming convention, you may be
	able to recover an earlier PROTOCOL.INI that was once configured correctly.
	
	Hardware Problem(s)
	-------------------
	
	This error message could also indicate problems with the network adapter. Check
	to make sure that the adapter is seated properly in the computer's expansion
	slot. If the error message continues, try inserting a different network adapter,
	then verify the correct setting for that card. Check for other potential
	problems including incorrect cabling, improper installation of T-connectors and
	terminators, and check other connections within the workgroup.
	
	Additional query words: 3.1 3.10 5733 5741 5773 bind binding
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	
