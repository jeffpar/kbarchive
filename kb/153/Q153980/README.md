---
layout: page
title: "Q153980: Madge Smart Ringnode 16/4 Does Not Work on Shared Installation"
permalink: kb/153/Q153980/
---

## Q153980: Madge Smart Ringnode 16/4 Does Not Work on Shared Installation

	Article: Q153980
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Madge Smart Ringnode 16/4 Token Ring network adapter with a
	server-based installation of Windows 95, Windows 95 may not load the graphical
	user interface (GUI). This does not affect stand-alone installations of Windows
	95 installed from the server-based installation share; it affects only shared
	installations.
	
	CAUSE
	=====
	
	Windows 95 initially connects to the network server using NDIS 2 network
	drivers. Windows 95 then unloads the NDIS 2 drivers and attempts to switch to an
	NDIS 3.1 driver. The transition fails because the NDIS 3.1 driver does not
	contain the Fast Mac Plus code, which sends commands to the network adapter to
	reattach itself to the ring. The Fast Mac Plus Code is located in a file called
	Mdgmport.bin, which is not included with the Windows 95 NDIS 3.1 driver.
	
	RESOLUTION
	==========
	
	Obtain a new monolithic driver developed by Madge that contains both the NDIS
	3.1 driver and the Fast Mac Plus code.
	
	To obtain the updated driver, contact Madge Technical Support and request the new
	monolithic Windows 95 driver for server-based installations of Windows 95.
	
	For information about how to contact Madge Networks, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
