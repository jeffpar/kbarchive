---
layout: page
title: "Q137152: Canon BubbleJet on ECP Port Prints Partial Page"
permalink: /kb/137/Q137152/
---

## Q137152: Canon BubbleJet on ECP Port Prints Partial Page

	Article: Q137152
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbhw kbprint win95 kbPrinting kbHardware
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document to a Canon BubbleJet printer connected to an ECP port,
	the document may not be printed completely.
	
	This problem is known to occur with the following printers, and may occur with
	other printers as well:
	
	- Canon BJC-4000
	
	- Canon BJC-70
	
	- Canon BJ-30
	
	- Canon BJ-200
	
	- Canon BJ 600e
	
	CAUSE
	=====
	
	Windows 95 is sending data through the ECP port too fast for the printer to
	handle.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps. Note that you must follow these
	steps in the order they are listed:
	
	1. Configure the port not to be ECP in the computer's CMOS settings. For
	  information about changing CMOS settings, please consult the computer's
	  documentation or manufacturer.
	
	
	1. Delete the port in Device Manager. To do so, follow these steps:
	
	  a. In Control Panel, double-click the System icon.
	
	  b. On the Device Manager tab, double-click the Ports (COM & LPT) branch.
	
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
	  Drivers\Printer\LPT folder on the Windows 95 CD-ROM to the Windows\System
	  folder.
	
	  NOTE: The Lpt.vxd file is also available from the Printer Driver section on
	  the Microsoft Windows World Wide Web page at:
	
	  http://www.microsoft.com/windows
	
	MORE INFORMATION
	================
	
	For additional information about the Lpt.vxd file, please see the Readme.txt
	file in the Drivers\Printer\LPT folder on the Windows 95 CD-ROM.
	
	The Lpt.vxd file from the Windows 95 CD-ROM is version 4.00.503.
	
	To check the version number of your Lpt.vxd file in Windows Explorer, click the
	file, click Properties on the File menu, and in the File Properties dialog box
	click the Version tab.
	
	Additional query words: bubblejet
	
	======================================================================
	Keywords          : kbhw kbprint win95 kbPrinting kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
