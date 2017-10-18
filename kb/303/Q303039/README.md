---
layout: page
title: "Q303039: Links 2001: Error Message: Access Violation; D3Dim700! (+0xE386)"
permalink: kb/303/Q303039/
---

## Q303039: Links 2001: Error Message: Access Violation; D3Dim700! (+0xE386)

	Article: Q303039
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Links 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Links 2001, after the Links 2001 title
	screen appears, you may receive an error message similar to the following:
	
	  EXCEPTION: Access violation in D3Dim700! (+0xE386)
	
	If you click More Details, information similar to the following is displayed:
	
	  EXCEPTION: Access violation in D3Dim700! (+0xE386)
	  Address: 0x56675386
	  Location: D3Dim700! (+0xE386)
	
	When you click Exit, you receive the following message:
	
	  Links has detected that you may be having trouble running with 3D
	  acceleration. Would you like to switch to Software Rendering?
	
	When you click Yes or No, the error message reappears, and you are unable to
	start Links 2001.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- Your DirectX 7a installation is corrupted.
	
	  -or-
	
	- Your display adapter is using incompatible or outdated drivers.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods.
	
	Method 1: Reinstall DirectX
	---------------------------
	
	Obtain and install the latest version of DirectX. To do this, browse to the
	following Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads
	
	Method 2: Obtain Updated Display Drivers
	----------------------------------------
	
	Contact the manufacturer of your computer's display adapter for possible driver
	updates.
	
	For information about how to contact your display adapter manufacturer, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To update your display adapter drivers, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click System.
	
	3. In the System Properties dialog box, click "View devices by type" on the
	  Device Manager tab.
	
	4. Expand "Display adapters", and then double-click your display driver.
	
	5. In the "<driver name> Properties" dialog box, click Update Driver on
	  the Driver tab.
	
	6. Follow the steps in the Update Device Driver Wizard to install the latest
	  drivers for your display adapter.
	
	MORE INFORMATION
	================
	
	Additional information about your display adapter settings can be obtained by
	using the DirectX Diagnostic Tool.
	
	To view your display adapter information by using the DirectX Diagnostic Tool,
	follow these steps:
	
	NOTE: DirectX must be installed on your computer.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "Dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. In the DirectX Diagnostic Tool dialog box, click the Display tab.
	
	4. Under Device, note the device information. Under Drivers, note the driver
	  information.
	
	5. Click the DirectX Drivers tab.
	
	  Note the DirectX driver Version and Date information.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbLinkGolfSearch kbGamesSearch kbGolfSearch kbLinks2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
