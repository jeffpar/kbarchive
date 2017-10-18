---
layout: page
title: "Q142363: Xircom PE3 Network Adapter Not Loaded on Compaq Contura"
permalink: kb/142/Q142363/
---

## Q142363: Xircom PE3 Network Adapter Not Loaded on Compaq Contura

	Article: Q142363
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
	
	When you install Windows 95 on a Compaq Contura computer with a Xircom PE3
	network adapter connected to the LPT1 port, the Xircom network adapter may not
	be loaded.
	
	CAUSE
	=====
	
	Windows 95 does not detect the I/O address correctly for LPT1 on a Compaq
	Contura computer.
	
	RESOLUTION
	==========
	
	Use the following steps to change the I/O address for LPT1 to 378:
	
	1. In Control Panel, double-click System.
	
	2. On the Device Manager tab, double-click "Ports (COM & LPT)."
	
	3. Double-click "Printer Port (LPT1)."
	
	4. On the Resources tab, click the Use Automatic Settings check box to clear it.
	
	5. Click Change Setting.
	
	6. In the Value box, click 0378-037A.
	
	7. Click OK until you return to Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
