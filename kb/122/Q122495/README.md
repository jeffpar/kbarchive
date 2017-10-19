---
layout: page
title: "Q122495: How to Set Up an Extended Capabilities Port in Windows 95"
permalink: /kb/122/Q122495/
---

## Q122495: How to Set Up an Extended Capabilities Port in Windows 95

	Article: Q122495
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the steps necessary to enable extended capabilities port
	(ECP) support in Microsoft Windows 95.
	
	MORE INFORMATION
	================
	
	1. Consult your hardware manual to determine the IRQ and DMA settings for the
	  ECP port(s) you want to use. (This information is required to enable ECP
	  support.)
	
	2. Click the Start button, point to Settings, and then click Control Panel.
	
	3. Double-click the System icon.
	
	  NOTE: You can skip steps 2 and 3 if you click the My Computer icon on the
	  desktop with the right (secondary) mouse button and then click Properties.
	
	4. Click the Device Manager tab, then double-click Ports (COM & LPT).
	
	5. Double-click the Extended Capabilities Port (ECP).
	
	  NOTE: This port appears only if Windows 95 detected it.
	
	6. Click the Resources tab, then click Basic Configuration 2 in the Setting
	  Based On field.
	
	  NOTE: See below for a description of the basic configuration settings for
	  extended capabilities ports.
	
	7. Change the IRQ and DMA values to whatever you have the ECP set to, and make
	  sure that the "No devices are conflicting" message appears in the Conflicting
	  Devices List.
	
	  NOTE: If you have multiple ECP ports, you must repeat the above steps to
	  configure the DMA and IRQ values of each port.
	
	8. Click OK until you are prompted to shut down your computer.
	
	9. Shut down your computer and then restart it.
	
	An extended capabilities port has five possible configurations (0 through 4):
	
	- Basic Configuration 0 Standard I/O ranges for LPT ports only
	
	- Basic Configuration 1 Standard I/O ranges for LPT ports and any IRQ setting
	
	- Basic Configuration 2 Standard I/O ranges for LPT ports, any IRQ setting, and
	  any DMA setting
	
	- Basic Configuration 3 Any I/O ranges for LPT ports only
	
	- Basic Configuration 4 Any I/O ranges for LPT ports and any IRQ setting
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
