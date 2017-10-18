---
layout: page
title: "Q185751: Err: The System Has Not Enabled IO Address Mapping..."
permalink: kb/185/Q185751/
---

## Q185751: Err: The System Has Not Enabled IO Address Mapping...

	Article: Q185751
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	The following message may appear when installing an Intel EtherExpress Pro 100B
	Ethernet adapter (or other PCI cards) into a system running Microsoft Windows NT
	version 3.51 or 4.0:
	
	  The system has not enabled IO address mapping for the device you have
	  installed. Please try moving the adapter to another PCI slot or update
	  the system BIOS.
	
	CAUSE
	=====
	
	This problem has been shown to occur on computers with a Phoenix BIOS when the
	"Plug and Play OS" BIOS setting is set to Yes.
	
	
	If the BIOS setting is changed to Yes after the driver has been installed and was
	working correctly, the following error message will appear in the system log and
	functionality will cease:
	
	  Event 5003
	  E100B1: Could not find an adapter
	
	Many computers are loaded with Microsoft Windows 95 from the manufacturer and
	this setting of Yes is correct for that operating system. Users who subsequently
	want to load Windows NT but who fail to change the setting may encounter this
	error.
	
	RESOLUTION
	==========
	
	To resolve this problem, change the BIOS setting to No.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
