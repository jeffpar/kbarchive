---
layout: page
title: "Q176109: Fatal Exception Error When You Press the CAPS LOCK Key"
permalink: /kb/176/Q176109/
---

## Q176109: Fatal Exception Error When You Press the CAPS LOCK Key

	Article: Q176109
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbhw kbmsn kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you press the CAPS LOCK key while you are connected to MSN, The Microsoft
	Network, you may receive the following error message on a blue screen:
	
	  A Fatal Exception 0D has occurred at F000:000000FC. The current application
	  will be terminated.
	
	If you receive this error message, the computer stops responding (hangs), and you
	must restart the computer.
	
	CAUSE
	=====
	
	This problem may occur if you have one of the following computers:
	
	- Gateway 2000 Pentium 90
	
	- Packard Bell D135
	
	- Packard Bell F170
	
	- Packard Bell Platinum Pro 750
	
	
	RESOLUTION
	==========
	
	To resolve this problem, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, double-click the Sound, Video And Game Controllers
	  branch to expand it.
	
	4. Click Audio Device, and then click Properties.
	
	5. Click the Settings tab.
	
	6. Click the Wave Table Enabled check box to clear it.
	
	7. Click the Fast DMA check box to clear it.
	
	8. Click OK until you return to Control Panel.
	
	9. Close Control Panel, and then restart the computer.
	
	MORE INFORMATION
	================
	
	If these steps do not resolve the problem, contact your computer manufacturer
	for further assistance.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbhw kbmsn kbHardware 
	Technology        : kbMSNSearch kbMSN250
	Version           : WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	
