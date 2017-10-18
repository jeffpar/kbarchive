---
layout: page
title: "Q130587: Setup Incorrectly Detects Network Card Transceiver Type"
permalink: kb/130/Q130587/
---

## Q130587: Setup Incorrectly Detects Network Card Transceiver Type

	Article: Q130587
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Windows 95, Setup may incorrectly detect the network adapter
	transceiver type.
	
	CAUSE
	=====
	
	This error can occur if you install Windows 95 to a new directory or over an
	existing Windows for Workgroups 3.11 installation running ODI drivers.
	
	Setup does not detect the transceiver type directly by querying the network card,
	but rather searches for an existing PROTOCOL.INI file in the Windows directory.
	If this file is found, Setup imports the settings from this file into the
	registry, including the TRANSCEIVER= line. If no PROTOCOL.INI file is found, or
	if Windows for Workgroups is using an ODI MLID as the network adapter driver,
	the transceiver type value may be incorrect.
	
	RESOLUTION
	==========
	
	If the transceiver type is not detected correctly, you must set it manually. To
	do so, open the Network tool in Control Panel and change the network card's
	settings on the Advanced properties tab.
	
	MORE INFORMATION
	================
	
	There are three transceiver types that can be set in Windows 95:
	
	- Thinnet (BNC/COAX). This type often uses RG-58 coaxial cabling. A BNC
	  connector and an internal transceiver are built into the network card.
	
	- Thicknet (AUI/DIX). This type often uses RG-8 or RG-11 coaxial cabling.
	  Computers are attached to a thicknet cable using a transceiver (drop) cable.
	  The cable runs from the transceiver on the thicknet cable to the computer's
	  network adapter and is attached using a DIX connector on both ends.
	  Typically, thicknet is used as a backbone to connect smaller existing thinnet
	  networks.
	
	- Twisted-Pair (TPE). This type often uses twisted-pair cable with RJ-45 or
	  RJ-11 telephone connectors. Each computer on a network using twisted-pair
	  cabling is typically attached to a central hub.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
