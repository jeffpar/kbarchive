---
layout: page
title: "Q151349: FP: No Server on Port 80 After Laptop Computer Has Been Idle"
permalink: kb/151/Q151349/
---

## Q151349: FP: No Server on Port 80 After Laptop Computer Has Been Idle

	Article: Q151349
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kbenv kbhw kbdta kbHardware
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q193958.
	
	SYMPTOMS
	========
	
	When you use FrontPage on certain types of computers, you may receive the
	following error message:
	
	  There is no server on Port 80 at '<Server Name>'
	
	CAUSE
	=====
	
	This problem most typically occurs with laptop computers; it occurs because the
	Windows 95 power conservation option is enabled. Once the Power Manager is
	activated, it broadcasts a "shut down" message to all hardware devices. When the
	Network Device Interface Specification (NDIS) device receives the broadcast, it
	"shuts down" the network card, essentially indicating that the card has been
	removed. The TCP/IP is notified, and the TCP/IP stack is removed. Once the power
	conservation mode is done, the Personal Web Server, which was running normally,
	generates a bind to port error message.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- Run the computer from AC power rather than from batteries.
	
	  -or-
	
	- Do not allow the laptop to remain idle for long periods time.
	
	  -or-
	
	- Use the following steps to disable the Windows 95 power conservation option:
	
	  1. Right-click My Computer, and click Properties on the menu that appears.
	
	  2. Click the Device Manager tab.
	
	  3. Expand (click the plus sign next to) System Devices.
	
	  4. Double-click Advanced Power Management Support.
	
	     If you do not see an Advanced Power Management item, your computer does not
	     support this feature.
	
	  5. Click the Settings tab.
	
	  6. Click to clear the Enable Power Management Support check box.
	
	
	Additional query words: portable docking undocked
	
	======================================================================
	Keywords          : kbenv kbhw kbdta kbHardware 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
