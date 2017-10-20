---
layout: page
title: "Q314254: Flight Simulator 2002: Game Starts Only in Safe Mode"
permalink: /kb/314/Q314254/
---

## Q314254: Flight Simulator 2002: Game Starts Only in Safe Mode

{% raw %}

	Article: Q314254
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Flight Simulator 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Flight Simulator 2002, it may start only in
	Safe mode. You may receive the following error message:
	
	  Safe mode has been enabled because your system is currently unable to use
	  hardware acceleration.
	  While in Safe mode, you will be able to run Flight Simulator and troubleshoot
	  hardware issues, but performance and display quality will be affected.
	  Product Support Services does not support Safe mode. For more information, see
	  the Readme file, which is available from the Flight Simulator link on your
	  Windows Start menu.
	
	RESOLUTION
	==========
	
	To troubleshoot this issue, use the following methods in the order in which they
	are presented.
	
	Disable NetMeeting If Running
	-----------------------------
	
	If you are running NetMeeting on your system, quit NetMeeting before you attempt
	to start Flight Simulator 2002.
	
	Update Display Drivers
	----------------------
	
	Obtain and install the latest drivers for your display adapter. For information
	about how to contact computer hardware manufacturers, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Update Via 4 and 1 Driver
	-------------------------
	
	If your computer's motherboard is based on the VIA Technologies chip set, install
	the VIA 4-in-1 driver from the following VIA Technologies Web site:
	
	  http://www.viatech.com/drivers/index.htm
	
	IMPORTANT: Contact your hardware manufacturer before you install the latest VIA
	4-in-1 driver on your computer or make any modifications to your computer's BIOS
	settings.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Set DirectX Acceleration to Full
	--------------------------------
	
	Use the DirextX Diagnostic Tool to ensure that Microsoft DirectX acceleration
	features are enabled. To do this, follow these steps:
	
	1. Quit all programs that are running.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	4. Click the Display tab.
	
	5. If the following DirectX features are not enabled, click the corresponding
	  Enable button, and then click OK on the confirmation message that appears:
	
	  DirectDraw Acceleration
	  Direct3D Acceleration
	  AGP Texture Acceleration
	
	6. Click the Sound tab.
	
	7. Drag the "Hardware Sound Acceleration Level" slider to the "Full
	  acceleration" position, if it is not already there.
	
	8. Click Exit.
	
	Configure Flight Simulator 2002 to use Hardware Acceleration
	------------------------------------------------------------
	
	Verify that hardware acceleration is enabled in Flight Simulator 2002. To do
	this, follow these steps:
	
	1. Start Flight Simulator 2002, and then click OK on the Safe mode message that
	  appears.
	
	2. In the left pane, click SETTINGS.
	
	3. Under System, click Display.
	
	4. Click the HARDWARE tab.
	
	5. Click to select the "Enable hardware acceleration" check box, and then click
	  OK.
	
	If the problem continues to occur, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q191660 Err Msg: Could Not Find Any 3D Acceleration Hardware...
	
	MORE INFORMATION
	================
	
	For additional information about issues related to display adapters, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q309638 Flight Simulator 2002: Known Video-Related Issues
	
	  Q309673 Flight Simulator 2002: Minimum System Requirements
	
	  Q249867 Loss of Direct3D Support After Improperly Quitting NetMeeting 3.01
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msgame FS2002, flight sim safemode fltsim startup vidio disabled
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2002 kbFlightSim2002Pro kbSimSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
