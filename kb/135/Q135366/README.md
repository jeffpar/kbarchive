---
layout: page
title: "Q135366: Garbled Output from HP DeskJet Printer Connected to ECP Port"
permalink: kb/135/Q135366/
---

## Q135366: Garbled Output from HP DeskJet Printer Connected to ECP Port

	Article: Q135366
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive garbled output when you print from a Hewlett-Packard DeskJet
	540, 600, 660C, or 850 printer.
	
	CAUSE
	=====
	
	These printers may not work correctly when they are connected to an extended
	capabilities port (ECP) with the port in ECP mode.
	
	RESOLUTION
	==========
	
	Change the ECP port to standard mode by following these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click the "Ports (COM & LPT)" branch to
	  expand it, click the appropriate printer port, and then click the Properties
	  button.
	
	3. On the Driver tab, click the Change Driver button.
	
	4. Click the Show All Devices option button.
	
	5. In the Manufacturers box, click "(Standard port types)," and in the Models
	  box, click Printer Port.
	
	6. Click OK.
	
	7. Shut down and restart your computer.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
