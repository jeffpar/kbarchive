---
layout: page
title: "Q302480: Train Simulator: Err Msg: Train World Initialization Failed"
permalink: kb/302/Q302480/
---

## Q302480: Train Simulator: Err Msg: Train World Initialization Failed

	Article: Q302480
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Train Simulator, you may receive one of the
	following error messages
	
	  Train world initialization failed.
	
	  -or-
	
	  Cannot add car <number> to world.
	
	where <number> is the number of the car.
	
	CAUSE
	=====
	
	This behavior can occur if your display adapter (video card) is using an
	outdated video driver.
	
	This behavior is known to occur with the following display adapters:
	
	   - NVIDIA Riva 128-based chipset (which includes the STB Velocity 128).
	
	- ATI Rage Pro.
	
	- ATI RAGE IIC
	
	- STB Velocity 128
	
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain and install updated drivers for your display
	adapter.
	
	For information about how to contact display adapter manufacturers, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To obtain updated drivers for NVIDIA Riva 128-based display adapters, browse to
	the following NVIDIA Web site:
	
	  http://www.nvidia.com
	
	To resolve the issue with STB Velocity 128, download reference drivers from
	
	  http://www.nvidia.com
	
	To obtain updated drivers for ATI display adapters, browse to the following ATI
	Technologies Web site:
	
	  http://www.ati.com
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	An update has been created to resolve some compatibility problems with several
	video cards. To download and install the update, browse to the following
	Microsoft Web site:
	
	  http://www.microsoft.com/games/trainsim
	
	MORE INFORMATION
	================
	
	Additional information about your display adapter can be obtained by using the
	DirectX Diagnostic Tool.
	
	To view your display adapter information by using the DirectX Diagnostic Tool,
	follow these steps:
	
	NOTE: DirectX must be installed on your computer.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. In the DirectX Diagnostic Tool dialog box, click the Display tab.
	
	4. Under Device, note the device information. Under Drivers, note the driver
	  information.
	
	5. Click the DirectX Drivers tab. Note the DirectX driver Version, and Date
	  information.
	
	To obtain the latest version of DirectX, browse to the following Microsoft Web
	site:
	
	  http://www.microsoft.com/directx/homeuser/downloads
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbTrainSim kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
