---
layout: page
title: "Q142005: Setting the Correct ICM Profile"
permalink: /kb/142/Q142005/
---

## Q142005: Setting the Correct ICM Profile

	Article: Q142005
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you enable Image Color Matching (ICM) in the properties for your printer,
	ICM may not be properly configured.
	
	CAUSE
	=====
	
	Even if you select a supported ICM monitor, ICM may not use the proper monitor
	profile.
	
	RESOLUTION
	==========
	
	Follow these steps to set the proper ICM profile:
	
	1. Determine the proper profile to use for the monitor from one of the following
	  sources:
	
	   - The monitor manufacturer.
	
	   - The following article in the Microsoft Knowledge Base:
	
	  Q140902 ICM Profile Settings for Supported Monitors
	
	2. In the Windows\System\Color folder, use the right mouse button to click the
	  proper ICM profile, and then click Set As Default on the menu that appears.
	
	Note that your monitor must use the factory default color and gamma settings.
	
	MORE INFORMATION
	================
	
	ICM-capable printers have property settings that you must enable. The following
	article in the Microsoft Knowledge Base lists the ICM-capable printers supported
	in Windows 95:
	
	  Q122050 ICM Printers Supported in Windows 95
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
