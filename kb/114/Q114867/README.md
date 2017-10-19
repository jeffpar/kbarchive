---
layout: page
title: "Q114867: Net2Com and RAS Can Conflict on LANA Number"
permalink: /kb/114/Q114867/
---

## Q114867: Net2Com and RAS Can Conflict on LANA Number

	Article: Q114867
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Net2Com utility included with the Windows NT Resource Kit uses only LANA 0
	as its protocol path to the network. Other protocols such as Remote Access
	Service (RAS) may use the same LANA number.
	
	MORE INFORMATION
	================
	
	LANA is a number given to a specific path from the application layer through a
	protocol stack, to a specific network card.
	
	To check what LANA number a protocol is using:
	
	1. In the Control Panel window, choose the Network icon.
	
	2. From the Installed Network Software list box, choose NetBIOS Interface, and
	  then choose the Configure button.
	
	3. The NetBIOS Interface dialog box displays the Network Route and the LANA
	  Number. Please note:
	
	     NBF is NetBEUI
	     NBT is NetBIOS over TCP/IP
	     NWBLINK is NetBIOS over IPX
	     RASHub is a RAS link
	
	4. Make sure that the Network Route for RAS is not set to LANA 0. To ensure
	  connection between the workstation and the server, it is important that LANA
	  0 on both computers use the same networking protocol (NetBEUI, TCP/IP, IPX,
	  and so on).
	
	The products included here are manufactured by ESDL Incorporated, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt reskit
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : 3.1
	
	=============================================================================
	
