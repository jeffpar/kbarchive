---
layout: page
title: "Q303856: CFS2: Err Msg: K Mode Exception ....Physical Memory Stack Dump"
permalink: /kb/303/Q303856/
---

## Q303856: CFS2: Err Msg: K Mode Exception ....Physical Memory Stack Dump

	Article: Q303856
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	WARNING:This information is preliminary and has not been confirmed or tested by Microsoft. Use only with discretion.
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Combat Flight Simulator 2, you may receive
	an error message similar to the following:
	
	  KMODE Exception Not Handled.
	  Physical memory stack dump.
	
	CAUSE
	=====
	
	This issue can occur when your display adapter drivers are missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall the drivers for your display adapter. To
	reinstall your display adapter drivers, follow these steps.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. On the taskbar, click Start, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click System.
	
	3. In the System Properties dialog box, on the Device Manager tab, click "View
	  devices by type".
	
	4. Expand "Display adapters", and then double-click your display driver.
	
	5. In the <driver name> Properties dialog box, click Update Driver on the
	  Driver tab.
	
	6. Follow the steps of the Update Device Driver Wizard to install the latest
	  drivers for your display adapter.
	
	Contact the manufacturer of the display adapter for possible driver updates.
	
	For information about how to contact display adapter manufacturers, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	Additional information about your display adapter settings can be obtained by
	using the DirectX Diagnostic Tool.
	To view your display adapter information with the DirectX Diagnostic Tool, follow
	these steps:
	
	NOTE: DirectX must be installed on the computer.
	
	1. On the taskbar, click Start, and then click Run.
	
	2. In the Open box, type "Dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. In the DirectX Diagnostic Tool dialog box, click the Display tab.
	
	4. Under Device, note the device information. Under Drivers, note the driver
	  information.
	
	5. Click the DirectX Drivers tab. Note the DirectX driver version and date
	  information.
	
	The latest version of DirectX is available from Microsoft at the following
	Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
