---
layout: page
title: "Q145702: PC Card Services Unavailable on Dell Latitude XP Notebook"
permalink: kb/145/Q145702/
---

## Q145702: PC Card Services Unavailable on Dell Latitude XP Notebook

	Article: Q145702
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
	
	When you run Windows 95 on a Dell Latitude XP Notebook computer with a port
	replicator, PC Card (PCMCIA) services may not be available, there may be no
	listing for the PC Card socket in Device Manager, and the PC Card icon may be
	missing in Control Panel.
	
	CAUSE
	=====
	
	The PC Card socket may have an IRQ conflict with the SCSI adapter on the port
	replicator. By default, both of these devices use IRQ 11.
	
	RESOLUTION
	==========
	
	Change the IRQ setting for the PC Card socket. To do so, follow these steps:
	
	1. Detach the port replicator from the computer, and then use the Add New
	  Hardware tool in Control Panel to search for new hardware.
	
	2. After the PC Card socket is detected and installed, restart the computer when
	  you are prompted to do so.
	
	3. In Control Panel, double-click System, and then click the Device Manager tab.
	
	4. Double-click PCMCIA Socket, double-click the PCMCIA controller, and then
	  click the Resources tab.
	
	5. Click the Use Automatic Settings check box to clear it, click Interrupt
	  Request, and then click Change Settings.
	
	6. In the Value box, click an available IRQ setting.
	
	7. Click OK, and then click OK.
	
	8. Shut down Windows 95 and then turn your computer off and back on.
	
	9. Reattach the port replicator.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
