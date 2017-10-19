---
layout: page
title: "Q131496: DEC Etherworks Turbo /TP Not Detected During Setup"
permalink: /kb/131/Q131496/
---

## Q131496: DEC Etherworks Turbo /TP Not Detected During Setup

	Article: Q131496
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows 95, Setup may not detect the DEC Etherworks Turbo /TP
	network adapter in your computer.
	
	CAUSE
	=====
	
	DEC Etherworks Turbo /TP network adapters without the option ROM chip installed
	are not detected by Setup unless the adapter's driver is loaded in memory or a
	valid PROTOCOL.INI file for the adapter exists. This behavior is due to the safe
	detection methods used by Setup to detect installed network adapters.
	
	DEC Etherworks Turbo /TP network adapters with the option ROM chip installed are
	detected during Setup regardless of whether the adapter's driver is loaded in
	memory.
	
	RESOLUTION
	==========
	
	Setup detects the network adapter if the driver is loaded in memory during
	Setup. This occurs if the network is started prior to running Setup. To install
	support for the network adapter without starting the network, choose the Custom
	Setup option so that you can select which devices are installed during Setup.
	
	If support for the DEC Etherworks Turbo /TP network adapter is not installed
	during Setup, you can add the network adapter later using the Network tool in
	Control Panel, or by running the Add New Hardware Wizard in Control Panel.
	
	To add support for the DEC Etherworks Turbo /TP network adapter, follow these
	steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Network icon.
	
	3. Click Add.
	
	4. Click Adapter, then click Add.
	
	5. In the Manufacturers box, click Digital Equipment. In the Network Adapters
	  box, click DEC Etherworks Turbo /TP.
	
	6. Click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
