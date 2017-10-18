---
layout: page
title: "Q106713: Incorrect I/O Address Detected on SMC Elite+ Network Adapter"
permalink: kb/106/Q106713/
---

## Q106713: Incorrect I/O Address Detected on SMC Elite+ Network Adapter

	Article: Q106713
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are upgrading to Windows for Workgroups 3.11 on a system that is running
	Microsoft Workgroup Connections 1.0 and has an SMC Elite+ network adapter, the
	correct I/O address may not be detected for the SMC adapter.
	
	If the SMC Elite+ network adapter is not configured to use the default 0x280h I/O
	address, you must select the correct setting when Setup prompts you for
	confirmation.
	
	CAUSE
	=====
	
	To determine the I/O address for the network adapter, Windows for Workgroups
	3.11 Setup examines the existing PROTOCOL.INI file in use by Workgroup
	Connections 1.0. If the network adapter is an SMC Elite+, the I/O address is not
	found in the PROTOCOL.INI file. (The SMC Elite+ NDIS2 driver for use with
	Workgroup Connections 1.0 does not require that an I/O address be stored in the
	PROTOCOL.INI file.)
	
	Since an I/O address is not found in the PROTOCOL.INI file, the default I/O
	address of the SMC Elite+ network adapter is selected and you are given an
	opportunity to confirm this selection.
	
	Additional query words: WC 3rdparty 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
