---
layout: page
title: "Q92772: No Files Found with SMC 90C65 Based Arcnet Cards in WFWG"
permalink: kb/092/Q92772/
---

## Q92772: No Files Found with SMC 90C65 Based Arcnet Cards in WFWG

	Article: Q92772
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Arcnet network interface cards based on the Standard Microsystems Corporation
	(SMC) 90C65 controller chip may generate the
	
	  No Files Found
	
	error when you attempt to view a directory of a network drive in File Manager
	with Microsoft Windows for Workgroups (WFWG).
	
	RESOLUTION
	==========
	
	There is no work around for this problem. The only correction is a hardware
	modification to the card. Contact the manufacturer of the network card for
	specific information on upgrading the affected chip.
	
	MORE INFORMATION
	================
	
	If a network card with this chip is used on a Windows for Workgroups server with
	the NetBEUI protocol, a Windows for Workgroups workstation can browse and
	successfully connect to the server, but the "No Files Found" error is generated
	even though there are files in the shared directory. Other symptoms of this
	problem are the inability to run:
	
	- Novell's TurboKit drivers
	
	- Artisoft's Lantastic SMCARC drivers
	
	- Possibly other NetBEUI protocol networking software products
	
	The SMC120 Arcnet card uses their top-of-the-line ASL30519 Arcnet controller
	chip. The SMC 90C65 Arcnet Controller Chip contains a subset of the instructions
	in SMC's ASL30519 Arcnet Controller Chip. The 90C65 chip is used in several OEM
	Arcnet network interface cards, but is not used in any SMC Arcnet boards.
	
	The products included here (other than Windows) are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.10 3.1 err msg 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
