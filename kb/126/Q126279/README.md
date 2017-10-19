---
layout: page
title: "Q126279: Dual PCI IDE Controllers Use IRQs 14 and 15"
permalink: /kb/126/Q126279/
---

## Q126279: Dual PCI IDE Controllers Use IRQs 14 and 15

	Article: Q126279
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
	
	IRQs 14 and 15 are enabled even if there is nothing attached to the IDE
	controllers.
	
	CAUSE
	=====
	
	Some computers come with dual IDE controllers on the PCI bus. When Windows 95
	detects the dual IDE controllers it reserves IRQs 14 and 15 for them even if
	there are no devices attached to the controllers.
	
	WORKAROUND
	==========
	
	To free one of the IRQs, follow these steps:
	
	1. Disable the appropriate IDE controller in the computer's BIOS.
	
	2. Click the Start button, point to Settings, and then click Control Panel.
	
	3. Double-click the System icon.
	
	4. Click the Device Manager tab.
	
	5. Double-click Hard Disk Controllers.
	
	6. Under Hard Disk Controllers, click the controller you want to disable and
	  then click the Properties button.
	
	7. In the Device Usage box, click the check box for the configuration in which
	  you want to disable the controller, and then click the OK button.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
