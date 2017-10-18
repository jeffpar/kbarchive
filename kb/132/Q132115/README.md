---
layout: page
title: "Q132115: Setup May Detect Already Installed Hardware on MCA Computer"
permalink: kb/132/Q132115/
---

## Q132115: Setup May Detect Already Installed Hardware on MCA Computer

	Article: Q132115
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
	
	When you re-install or upgrade the copy of Windows 95 on a Micro Channel
	Architecture (MCA) computer, one or more installed devices may be listed twice
	in Device Manager.
	
	CAUSE
	=====
	
	This problem can occur if you install a device manually using the Add New
	Hardware Wizard before you re-install or upgrade Windows 95. During Setup, a
	hardware detection routine runs to determine what devices are installed in the
	computer. On MCA computers, the hardware detection routine cannot determine
	which devices were already installed in Device Manager if the devices were
	installed manually.
	
	
	RESOLUTION
	==========
	
	To remove a duplicate device in Device Manager, follow these steps:
	
	1. Use the right mouse button to click My Computer, then click Properties on the
	  menu that appears.
	
	2. Click the Device Manager tab.
	
	3. Click the device, then click Remove. Note that you may need to expand a
	  branch of the hardware tree by double-clicking the branch, or by clicking the
	  plus sign (+) to the left of the branch, before you can click the device.
	
	4. Click OK.
	
	To prevent this problem from occurring, install a new device manually only if it
	is not automatically detected by the Add New Hardware Wizard. To use the Add New
	Hardware Wizard to automatically detect and install all new devices, follow
	these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Add New Hardware icon.
	
	3. Click Next.
	
	4. Verify that the Yes (Recommended) option button is selected, then click Next.
	
	5. Click Next.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
