---
layout: page
title: "Q174795: Cluster Configuration for BusLogic Controllers"
permalink: /kb/174/Q174795/
---

## Q174795: Cluster Configuration for BusLogic Controllers

	Article: Q174795
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some cluster configurations may use BusLogic SCSI host adapters. It is important
	with any cluster configuration to ensure proper settings on each adapter
	attached to the shared SCSI bus. Administrators may find the need to use the
	adapter's firmware setup utility to configure specific options.
	
	MORE INFORMATION
	================
	
	Some BusLogic controllers provide the ability to access the firmware setup by
	pressing the CTRL+B key sequence immediately following the adapter's
	initialization banner.
	
	After activating the firmware setup program, there are several different
	configuration menus to choose from. To configure the adapter for use with a
	shared SCSI bus, use the Advanced configuration menu to disable SCSI BUS RESETS.
	This prevents the adapter from issuing a reset command to the shared bus while
	the other controller on the shared bus may be working with devices.
	Additionally, because the shared SCSI bus is not used to start the operating
	system, consider setting the controller BIOS to disabled.
	
	Use the Adapter configuration menu to specify the SCSI ID for the host adapter.
	On the shared SCSI bus, one adapter will typically use ID 6 and the other ID 7.
	It is very important not to allow both adapters to use the same ID.
	Additionally, if your system provides termination through the cabling or
	external terminators, make sure to disable the termination feature on the
	adapter so as to avoid double termination.
	
	Additional information about these options and proper configuration for your
	hardware may be supplied by the vendor. For best results, consult with your
	hardware vendor for additional details pertaining to your hardware.
	
	Additional query words: bus logic MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
