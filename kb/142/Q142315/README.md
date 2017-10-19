---
layout: page
title: "Q142315: Printout Incomplete When Using Canon Printers on ECP Port"
permalink: /kb/142/Q142315/
---

## Q142315: Printout Incomplete When Using Canon Printers on ECP Port

	Article: Q142315
	Product(s): Microsoft Automap
	Version(s): 1.0,2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Road Atlas for Windows, version 4.0 
	- Microsoft Automap Streets for Windows, version 4.0 
	- Microsoft Greetings Workshop, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a map or a table to a Canon Bubblejet printer connected to an
	Enhanced Capability Port (ECP), the document may not print completely.
	
	If you change the Canon printer to a different emulation mode, you receive the
	same results. This problem is known to occur with the following printers:
	
	- Canon BJC-4000
	
	- Canon BJC-70
	
	- Canon BJ-30
	
	- Canon BJ-200
	
	NOTE: This problem may occur with other printers as well.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q137152 Canon Bubble-Jet on ECP Port Prints Partial Page
	
	CAUSE
	=====
	
	Windows sends data through to the ECP port too quickly for the printer to
	handle.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Configure the port so it is not bidirectional in the computer's CMOS
	  settings. For information about changing CMOS settings, please consult the
	  computer's documentation or manufacturer.
	
	
	1. Delete the port in Device Manager. To do so, follow these steps:
	  a. In Control Panel, double-click the System icon.
	
	  b. On the Device Manager tab, double-click Ports (COM & LPT).
	
	  c. Click ECP Print Port (LPTx), and then click Remove.
	
	  d. Click OK.
	
	2. Use the Add New Hardware Wizard to redetect the port. To do so, follow these
	  steps:
	  a. In Control Panel, double-click the Add New Hardware icon.
	
	  b. Click Next, click Yes (Recommended), and then click Next.
	
	  c. Follow the instructions on the screen.
	
	  Note that the Add New Hardware Wizard may detect only ECP ports (not standard
	  LPT ports). If this occurs, follow these steps:
	  a. Install the ECP port.
	
	  b. In Control Panel, double-click System.
	
	  c. On the Device Manager tab, double-click Ports (COM & LPT), and then
	     double-click the ECP port.
	
	  d. On the Driver tab, click Change Driver.
	
	  e. Click the Show All Devices option.
	
	  f. In the Manufacturers box, click Standard Port Types. In the Models box,
	     click Printer Port, and then click OK.
	
	  g. Click OK.
	
	3. When the Add New Hardware Wizard is finished, copy the Lpt.vxd file from the
	  Drivers\Printer\LPT folder on the Windows 95 compact disc to the
	  Windows\System folder. NOTE: The Lpt.vxd file is also available from the
	  Printer Driver section on the Microsoft Windows World Wide Web page at:
	
	  http://www.windows.microsoft.com
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q141919 Printing Problems with ECP Port
	
	For additional information about the Lpt.vxd file, please see the Readme.txt file
	in the Drivers\Printer\LPT folder on the Windows 95 compact disc.
	
	The Lpt.vxd file from the Windows 95 compact disc is version 4.00.503.
	
	To check the version number of your Lpt.vxd file in Windows Explorer, click the
	file, click Properties on the File menu, and in the File Properties dialog box
	click the Version tab.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 1.0a auto auto-map automap reference kbmm multimedia multi-media multi media map cd-rom compact disk work shop
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbAutomapSearch kbGreetingsWork100 kbGreetingsWorkSearch kbAutomapRoadAtlas400 kbAutomapStreets400 kbGreetingsWork200
	Version           : :1.0,2.0,4.0
	
	=============================================================================
	
