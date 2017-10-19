---
layout: page
title: "Q124728: INF: Using an NDIS 2.0 Driver with Windows for Workgroups 3.11"
permalink: /kb/124/Q124728/
---

## Q124728: INF: Using an NDIS 2.0 Driver with Windows for Workgroups 3.11

	Article: Q124728
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NDIS 2.0 drivers are still used by some network vendors with Windows for
	Workgroups version 3.11. While the configuration for using these drivers with
	Windows for Workgroups 3.11 is different than with Windows for Workgroups 3.1
	due to the migration to the NDIS 3.0 standard in Windows for Workgroups 3.11, it
	is possible to use NDIS 2.0 drivers with Windows for Workgroups 3.11.
	
	MORE INFORMATION
	================
	
	You can install the real-mode NDIS 2.0 drivers automatically using the Network
	Setup icon, or you can install the drivers manually.
	
	To install a driver automatically, the network vendor must provide a disk with
	the driver and an OEMSETUP.INF file for the driver. For information about
	creating OEMSETUP.INF files, please see the "Microsoft Windows for Workgroups
	Resource Kit."
	
	To add an NDIS 2.0 driver manually, modify the [Network Drivers] section of the
	SYSTEM.INI file to contain the following entries:
	
	     transport=<NDIS 2.0 driver filename>
	     LoadRMDrivers=YES
	
	REFERENCES
	==========
	
	For additional information about using real-mode drivers with Windows for
	Workgroups 3.11, please see the "Microsoft Windows for Workgroups Resource Kit"
	Addendum, version 3.11.
	
	Additional query words: 3.11 ndis 2.0 wfw real mode drivers
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
