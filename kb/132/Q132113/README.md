---
layout: page
title: "Q132113: Cannot Use APM 1.1 on AST Ascentia 900N Computer"
permalink: /kb/132/Q132113/
---

## Q132113: Cannot Use APM 1.1 on AST Ascentia 900N Computer

	Article: Q132113
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot use the advanced power management (APM) features of your AST Ascentia
	900N laptop computer with Windows 95.
	
	CAUSE
	=====
	
	The Ascentia 900N computer supports APM version 1.1, but the BIOS installed in
	this computer returns an unexpected value when Windows 95 makes certain function
	calls. Therefore, the Windows 95 protected-mode APM driver (VPOWERD.VXD) is
	unable to load and APM support is not provided.
	
	RESOLUTION
	==========
	
	To work around this problem, you can configure Windows 95 to use APM version 1.0
	instead of version 1.1. To do so, follow these steps:
	
	1. Use the right mouse button to click My Computer, then click Properties on the
	  menu that appears.
	
	2. Click the Device Manager tab.
	
	3. Click Advanced Power Management Support, then click Properties. Note that you
	  may need to expand the System Devices branch of the hardware tree by
	  double-clicking the branch, or by clicking the plus sign (+) to the left of
	  the branch, before you can click Advanced Power Management Support.
	
	4. Click the Settings tab.
	
	5. Click the Force APM 1.0 Mode check box to select it.
	
	6. Click OK.
	
	For information about additional resolutions that will allow you to use APM
	version 1.1, please contact AST.
	
	MORE INFORMATION
	================
	
	For information about the differences between APM version 1.0 and 1.1, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q119599 Differences Between Using APM 1.0 and APM 1.1
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	
	=============================================================================
	
