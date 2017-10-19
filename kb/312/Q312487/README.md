---
layout: page
title: "Q312487: Error Message: Cannot Read Port Name from Registry"
permalink: /kb/312/Q312487/
---

## Q312487: Error Message: Cannot Read Port Name from Registry

	Article: Q312487
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg win98 win98se
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Millennium Edition 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view the modem properties on the Device Manager tab in the
	System Properties dialog box, or when you double-click the Modems icon in
	Control Panel, you may receive the following error message:
	
	  Cannot read port name from registry.
	
	CAUSE
	=====
	
	This behavior can occur in the following situation:
	
	- You have a Windows only modem (Winmodem).
	
	  -and-
	
	- The drivers for that modem are damaged or of an incorrect version.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and then reinstall the modem. To do this, follow
	these steps.
	
	Step 1: Remove the Modem
	------------------------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  System.
	
	2. Click the Device Manager tab, and then expand Modem.
	
	3. Click the modem that you want, and then click Remove.
	
	4. On the Confirm Device Removal message that appears, click OK.
	
	5. Click Close.
	
	Step 2: Remove the Modem Registry Keys
	--------------------------------------
	
	Microsoft Windows 98 Second Edition or Windows 98:
	
	Run the Wmregdel.exe utility to completely remove the modem registry keys. To do
	this, follow these steps:
	
	1. Quit all running programs.
	
	2. Insert your Windows compact disc (CD) into the CD-ROM or DVD-ROM drive.
	
	3. Start Windows Explorer, and then navigate to the following folder, where
	  <drive> is the letter of the drive that contains the Windows CD:
	
	  <drive>:\drivers\modem\3com-usr\winmodem
	
	4. In the right pane of the Windows Explorer window, double-click Wmregdel.
	
	5. On the Winmodem Uninstaller 1.12 dialog box that appears, click Continue.
	
	6. Click OK, and then restart the computer.
	
	Microsoft Windows Millennium Edition:
	
	1. Quit all running programs.
	
	2. Insert your Windows compact disc (CD) into the CD-ROM or DVD-ROM drive.
	
	3. Start Windows Explorer, and then navigate to the following folder, where
	  <drive> is the letter of the drive that contains the Windows CD:
	
	  <drive>:\TOOLS\PSSUTIL
	
	4. In the right pane of the Windows Explorer window, right-click WMREMOVE, and
	  then click Install on the shortcut menu that appears.
	
	  The Winmodem registry keys are removed.
	
	5. Restart the computer.
	
	Step 3: Reinstall the Modem Drivers
	-----------------------------------
	
	When Windows restarts, the modem is detected and you are prompted to install the
	drivers. Direct Windows to the location of the drivers for the brand of modem
	that you have.
	
	If you do not have drivers for your modem, contact the manufacturer of the modem
	for the latest drivers. For information about how to contact computer hardware
	manufacturers, click the appropriate article number in the following list to
	view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If you are unable to determine the model or type of modem that is installed in
	your computer, view the modem information in the Windows registry to identify
	it. For additional information about identifying an unknown PCI device, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q298837 How to Use Registry Editor to Identify an Unknown PCI Device
	
	MORE INFORMATION
	================
	
	For additional information about troubleshooting modem issues, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q190554 How to Troubleshoot Modem Problems in Windows 98/98 Second Edition
	
	  Q190363 Additional Modem Drivers Included on the Windows 98 CD-ROM
	
	  Q188601 Err Msg: There Is No WinModem Found in Your Computer, But...
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg win98 win98se 
	Technology        : kbWinMEsearch kbWin98search kbWin98SEsearch kbWin98 kbWinME kbWin98SE
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
