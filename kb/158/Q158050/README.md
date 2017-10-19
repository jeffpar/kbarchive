---
layout: page
title: "Q158050: Windows NT Does Not Load AHA-3940W SCSI Driver"
permalink: /kb/158/Q158050/
---

## Q158050: Windows NT Does Not Load AHA-3940W SCSI Driver

	Article: Q158050
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your computer is configured with an Adaptec AHA-394x adapter on a secondary
	PCI bus, you may experience either of the following symptoms:
	
	- Windows NT version 4.0 does not detect the Adaptec AHA-3940W adapter.
	
	- If you attempt to add the driver using the SCSI Adapters tool in Control
	  Panel, the driver seems to be installed correctly, but is not loaded when you
	  restart the computer.
	
	Any SCSI devices connected to the adapter do not function.
	
	CAUSE
	=====
	
	The Adaptec AHA-3940 and AHA-3940W adapters require a motherboard that is PCI
	2.0 compliant and that supports PCI-to-PCI bridge chips. The AHA-394x adapters
	use bridge chips to function as multiple-channel adapters.
	
	RESOLUTION
	==========
	
	Install the AHA-394X adapter on the primary PCI bus and then install the driver.
	To install the driver, follow these steps:
	
	1. In Control Panel, double-click SCSI Adapters.
	
	2. Click the Drivers tab, and then click Add.
	
	3. In the Manufacturers box, click Adaptec.
	
	4. In the SCSI Adapter box, click "Adaptec AHA-294X/AHA-394X or AIC-78XX PCI
	  SCSI Controller," and then click OK.
	
	5. When you are prompted to restart your computer, click Yes.
	
	MORE INFORMATION
	================
	
	This behavior occurs only when the adapter is installed in a slot that is on a
	secondary PCI bus (or, in other words, when the SCSI chips are behind two
	PCI-to-PCI bridges, one on the motherboard and one on the adapter).
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
