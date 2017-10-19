---
layout: page
title: "Q95120: Using the Intel EtherExpress 16 MCA with WFWG 3.1"
permalink: /kb/095/Q95120/
---

## Q95120: Using the Intel EtherExpress 16 MCA with WFWG 3.1

	Article: Q95120
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	The Intel EtherExpress 16 MCA is not directly supported or specifically listed
	in the Network Adapter options in Windows for Workgroups version 3.1. However,
	this network adapter should operate with Windows for Workgroups if it is set up
	correctly.
	
	NOTE: The Intel EtherExpress MCA IS supported in later versions of Windows for
	Workgroups.
	
	The Intel EtherExpress 16 MCA is the Microchannel version of the Intel
	EtherExpress 16 or 16 TP that Microsoft ships with the Windows for Workgroups
	Starter Kits and User Kits. Both network adapters use the same Media Access
	Control (MAC) driver. The Microchannel version of the Intel EtherExpress 16
	should not require any changes to the PROTOCOL.INI or any other configuration
	files in order to operate with Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	To install and configure the EtherExpress MCA LAN Adapter for use with Windows
	for Workgroups version 3.1, use the following steps:
	
	1. Install and set up the Intel EtherExpress MCA using the reference disk
	  provided with the adapter.
	
	2. Make note of the configuration, such as the IRQ, I/O Port address, and Base
	  Memory settings.
	
	3. During the installation of Windows for Workgroups, select the Intel
	  EtherExpress 16 or 16 TP when prompted for the network adapter card
	  information.
	
	4. The IRQ, I/O Port, and Base Memory settings must match those that were set up
	  using the reference disk.
	
	  NOTE: If the card settings are changed at any time in the future, make sure
	  those same changes are made in the Control Panel Network Adapters Settings
	  section. Conversely, if IRQ, I/O or Base Memory settings are ever changed
	  with the Control Panel or in the PROTOCOL.INI file, be sure to use the
	  reference diskette and make the corresponding changes.
	
	For additional information, contact Intel technical support.
	
	The EtherExpress 16 MCA is manufactured by Intel, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this products'
	performance or reliability.
	
	Additional query words: 3.10 netcard nic 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
