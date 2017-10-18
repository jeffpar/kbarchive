---
layout: page
title: "Q141919: Printing Problems with ECP Port"
permalink: kb/141/Q141919/
---

## Q141919: Printing Problems with ECP Port

	Article: Q141919
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbprint win95 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to an ECP (Enhanced Capability Port) port, you may experience any
	of the following symptoms:
	
	- You may receive an error message. The error messages can include:
	
	  The port is busy.
	
	  Error writing to LPT1.
	
	- The printout may be incorrect. Incorrect output can include incorrectly
	  printed graphics or incomplete pages.
	
	- The printer may go offline when you try to print.
	
	- You may receive no printout.
	
	- The print job may hang the print spooler. You must restart the computer to
	  clear the hung print job.
	
	CAUSE
	=====
	
	This behavior can occur when the ECP port sends information to the printer
	faster than the printer can process it.
	
	RESOLUTION
	==========
	
	Change the ECP port to a standard port. To do so, follow these steps:
	
	1. In Control Panel, double-click System.
	
	2. On the Device Manager tab, double-click the printer port.
	
	3. On the Driver tab, click Change Driver.
	
	4. Click Show All Devices.
	
	5. In the Manufacturers box, click Standard Port Types. In the Models box, click
	  Printer Port, and then click OK.
	
	6. When you are prompted for the Windows 95 CD-ROM, insert the CD-ROM in the
	  drive. Change the path to the Lpt.vxd file to the following path, and then
	  click OK:
	
	  <cd-rom drive>:\drivers\printer\lpt
	
	  If you are not prompted for the Windows 95 CD-ROM in step 6, you must
	  configure the ECP port as a standard port using the computer's CMOS settings
	  as well. For information about configuring the port in the computer's CMOS
	  settings, please consult the computer's documentation or manufacturer.
	
	  NOTE: If you do not have the CD-ROM version of Windows 95, you can obtain the
	  alternate Lpt.vxd file from Microsoft Windows 95 Service Pack 1. For
	  information about obtaining Microsoft Windows 95 Service Pack 1, please see
	  the following article in the Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	
	1. Verify that the version of the Lpt.vxd file in use is version 4.00.503. To
	  check this, double-click the port in Device Manager, and then click the
	  Driver tab.
	
	2. Check the Resources tab in Printer Port properties and verify that the
	  settings are correct. If the Direct Memory Access value is displayed for a
	  setting, click the Use Automatic Settings check box to clear it, and then
	  change the value in the Settings Based On box until the Direct Memory Access
	  value is no longer displayed.
	
	3. When you are prompted to confirm that you have modified the settings
	  manually, click Yes. When you are prompted to restart your computer, do so.
	
	If the version of the Lpt.vxd file is 4.00.950 after you follow the above steps,
	follow these steps to copy the Lpt.vxd file manually:
	
	1. In Windows Explorer, use the right mouse button to click the Lpt.vxd file in
	  the Windows\System folder, and then click Rename on the menu that appears.
	
	2. Rename the Lpt.vxd file to Lpt.xxx.
	
	3. Drag the Lpt.vxd file from the Drivers\Printer\Lpt folder on the Windows 95
	  CD-ROM to the Windows\System folder on the hard disk.
	
	4. Restart Windows 95.
	
	MORE INFORMATION
	================
	
	Note that if you add a printer port, Windows 95 copies the original Lpt.vxd file
	to the Windows\System folder. If this occurs, you must repeat the steps above.
	
	For additional information, view the Readme.txt file in the Drivers\ Printer\Lpt
	folder on the Windows 95 CD-ROM.
	
	
	======================================================================
	Keywords          : kbenv kberrmsg kbprint win95 kbPrinting 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
