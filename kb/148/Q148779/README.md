---
layout: page
title: "Q148779: Dropped Connections Using Boca Research FDV Modems"
permalink: /kb/148/Q148779/
---

## Q148779: Dropped Connections Using Boca Research FDV Modems

	Article: Q148779
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbenv kbhw kbmsn kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Boca Research FDV modem to connect to MSN, The Microsoft
	Network, you may experience dropped connections.
	
	CAUSE
	=====
	
	The driver used for this modem may be a Windows 3.1 driver.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the Boca Research FDV modem, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. Click the User Error Control and Use Flow Control check boxes to clear them.
	
	6. Click OK or Close until you return to Control Panel.
	
	7. Double-click System.
	
	8. Click the Device Manager tab.
	
	9. Double-click "Ports (COM & LPT)" to expand the branch, and then
	  double-click the port to which the modem is connected.
	
	10. Click the Port Settings tab.
	
	11. In the Flow Control box, click None.
	
	12. Click OK or Close until you return to Windows.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbenv kbhw kbmsn kbHardware 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
