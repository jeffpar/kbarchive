---
layout: page
title: "Q166943: Golf: Unable to Select COM Port in Multiplayer Game"
permalink: /kb/166/Q166943/
---

## Q166943: Golf: Unable to Select COM Port in Multiplayer Game

	Article: Q166943
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbui kbusage kbimu kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play a multiplayer game in Microsoft Golf, you may not be
	able to select the COM port for your modem.
	
	CAUSE
	=====
	
	This behavior can occur your modem uses a virtual COM port.
	
	Microsoft Windows 95/98 does not automatically recognize the virtual COM ports
	used by some Plug-and-Play modems.
	
	RESOLUTION
	==========
	
	To resolve this issue, manually add a COM port that matches the resource
	settings for your modem. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, double-click the Modem branch to expand it.
	
	4. Under the Modem branch, double-click your modem.
	
	5. On the Modem tab, note the COM port selected in the Port box. If there is no
	  Modem tab, then on the Resources tab, note the Interrupt Request and the
	  Input/Output Range settings. If there is no Resources tab, see the
	  documentation for your modem for information about how to view the modem's
	  port settings.
	
	6. Click OK until you return to Control Panel.
	
	7. In Control Panel, double-click Add New Hardware.
	
	8. Click Next. If you are using Windows 98, click Next again.
	
	9. When you are prompted to let Windows to search for your new hardware, click
	  No, and then click Next.
	
	10. In the Hardware Types box, click Ports (COM & LPT), and then click Next.
	
	11. In the Manufacturers box, click (Standard Port Types).
	
	12. In the Models box, click Communications Port, and then click Next.
	
	13. Click Next, and then click Finish.
	
	14. When you are prompted to restart the computer, click Yes.
	
	15. After the computer restarts, repeat Steps 1 - 5.
	
	16. Verify that the Interrup Request and Input/Output range settings match the
	  settings you noted in step 5, and then click OK. If the settings do not
	  match, follow these steps to change them back to their original values, and
	  then click OK:
	
	  NOTE: Ignore any messages you see in the Conflicting Device List box.
	
	  a. Click to clear the Use Automatic Settings check box.
	
	  b. Under Resource Type, double-click Interrupt Request.
	
	  c. In the Value box, type the value for the Interrupt Request setting you
	     noted in step 5, and then click OK.
	
	  d. Under Resource Type, double-click Input/Output Range.
	
	  e. In the Value box, type the value for the Input/Output Range setting you
	     noted in step 5, and then click OK.
	
	17. Double-click the Ports (COM & LPT) branch to expand it.
	
	18. Double-click the COM port you added in steps 7 - 14.
	
	19. On the Resources tab, verify that the Interrup Request and Input/Output
	  range settings match the settings you noted in step 5, and then click OK.
	
	20. Click OK, and then restart the computer.
	
	When you start a multiplayer game in Golf, select the new COM port.
	
	Additional query words: 1.00 2.00 3.00 golf comm missing listed unavailable
	
	======================================================================
	Keywords          : kbenv kbhw kbui kbusage kbimu kbHardware 
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf300 kbGolf100 kbGolf200
	Version           : WINDOWS:1.0,2.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	
