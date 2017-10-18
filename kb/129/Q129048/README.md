---
layout: page
title: "Q129048: Network Unable to Start with Compaq Netflex32 NIC"
permalink: kb/129/Q129048/
---

## Q129048: Network Unable to Start with Compaq Netflex32 NIC

	Article: Q129048
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT on a computer that has a NetFlex32 card and more
	than 16 MB of physically memory, Setup may not be able to start the network. At
	the network settings box during the graphical user interface (GUI) portion of
	Setup, the following error may appear:
	
	  Network could not start because dependency services failed to start.
	
	CAUSE
	=====
	
	This error is caused by a problem with the Netflex32 card and the Windows NT
	hardware abstraction layer (HAL) that loads during setup; the HAL to fails to
	allocate enough memory to start the services.
	
	If the computer is the first on the network, and going to be a primary domain
	controller (PDC), you can continue installing Windows NT; the card will work
	properly when machine is rebooted. If the computer is going to be a backup
	domain controller (BDC), and must talk to the PDC to finish installing, Setup
	will not complete successfully.
	
	This problem has been attributed to Compaq's NetFlex32 driver.
	
	RESOLUTION
	==========
	
	To work around this problem, either install Windows NT over the network, or
	bring the machine down to 16 MB of RAM. This will allow the services to install
	properly and finish installation. Once the machine is running Windows NT, the
	RAM can be re-installed.
	
	Compaq has verified this to be a problem with the Netflex32 driver and should
	have a fix in Compaq Support Software Diskette (SSD) version 1.14 or later.
	
	
	Additional query words: prodnt ram upgrade
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
