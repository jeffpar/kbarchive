---
layout: page
title: "Q258080: Digital Drives and Drive Letters Disappear with Clustered Server"
permalink: kb/258/Q258080/
---

## Q258080: Digital Drives and Drive Letters Disappear with Clustered Server

	Article: Q258080
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart your server, some Digital Array controllers may randomly lose
	the shared drive in a cluster.
	
	CAUSE
	=====
	
	This behavior can occur if the /pcilock switch is enabled on one computer but
	not on the other.
	
	RESOLUTION
	==========
	
	To resolve this behavior, enable the /pcilock switch in the Boot.ini file. Then,
	shut down and then restart the computer.
	
	MORE INFORMATION
	================
	
	The /pcilock switch prevents the hardware abstraction layer (HAL) from moving
	anything on the PCI bus. The I/O and memory resources are left exactly as they
	were set by the BIOS.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q170756 Available Switch Options for Windows NT Boot.ini File
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
