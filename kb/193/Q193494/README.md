---
layout: page
title: "Q193494: Fatal Exception Error Message in VXD VMCPD(01)"
permalink: kb/193/Q193494/
---

## Q193494: Fatal Exception Error Message in VXD VMCPD(01)

	Article: Q193494
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg osr2
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart your computer after enabling the "Never use the numeric data
	processor" option in the Numeric Data Processor Properties dialog box in Device
	Manager, you may receive the following error message:
	
	  A fatal exception 0D has occurred at <address> in VXD
	  VMCPD(01)+000002DB. The current application will be terminated.
	
	  Press any key to terminate the current application. Press CTRL+ALT+DEL again
	  to restart your computer.
	
	RESOLUTION
	==========
	
	To resolve this behavior, re-enable the "Always use the numeric data processor"
	option. To do so, follow these steps:
	
	1. Press a key to continue loading Windows 95.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click System, and then click the Device Manager tab.
	
	4. Double-click the System Devices branch to expand it.
	
	5. Click Numeric Data Processor, and then click Properties.
	
	6. On the Settings tab, click "Always use the numeric data processor," and then
	  click OK.
	
	7. Click OK, and then click Yes when you are prompted to restart your computer.
	
	MORE INFORMATION
	================
	
	This behavior does not occur with the retail version of Microsoft Windows 95 or
	Microsoft Windows 98.
	
	======================================================================
	Keywords          : kbenv kberrmsg osr2 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
