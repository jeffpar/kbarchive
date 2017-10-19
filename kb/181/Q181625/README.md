---
layout: page
title: "Q181625: Event ID 29 While Using Compaq Netelligent Token Ring Adapter"
permalink: /kb/181/Q181625/
---

## Q181625: Event ID 29 While Using Compaq Netelligent Token Ring Adapter

	Article: Q181625
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers using a Compaq Netelligent Token Ring 16/4 network interface card
	(NIC) may lose network connectivity and the following error message may appear
	in the event log:
	
	  Event ID: 29
	  Source: CPQTRPCI
	  Description: The description for Event ID 29 in source (cpqtrpci) could
	  not be found. It contains the following insertion strings:
	  \device\cpqtrpci1,cpqtrpci1
	
	CAUSE
	=====
	
	The Compaq driver, Cpqtrpci.sys, does not automatically reinsert the card on the
	ring. The card will drop off the ring after a token ring beacon event.
	
	RESOLUTION
	==========
	
	To work around this problem, shut down and restart your computer. For more
	information, please contact Compaq.
	
	Additional query words: netellegent
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
