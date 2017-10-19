---
layout: page
title: "Q136553: Troubleshooting PCMCIA Cards in Windows 95"
permalink: /kb/136/Q136553/
---

## Q136553: Troubleshooting PCMCIA Cards in Windows 95

	Article: Q136553
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtshoot win95kbfaq
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article lists troubleshooting tips you can use to solve PCMCIA card (PC
	card) problems in Windows 95. This article contains the following topics:
	
	- Using Both Real- and Protected-Mode Drivers
	
	- Troubleshooting PCMCIA Cards
	
	MORE INFORMATION
	================
	
	Using Both Real- and Protected-Mode Drivers
	-------------------------------------------
	
	If you use a real-mode driver for a PCMCIA (PC Card) device such as a CD-ROM
	drive, your PCMCIA card socket and any other PCMCIA card devices must also use
	real-mode drivers in Windows 95. Windows 95 does not support the use of real-
	and protected-mode PCMCIA card devices or socket drivers simultaneously. This
	combination may cause unpredictable results.
	
	Troubleshooting PCMCIA Cards
	----------------------------
	
	Real Mode
	---------
	
	Before you install Windows 95, make certain your PCMCIA card device works in real
	mode. If you have already installed Windows 95, but you have not run the 32-bit
	PCMCIA Card Socket Wizard, restart Windows 95 at a command prompt. To do so,
	press the F8 key when you see the "Starting Windows 95" message, and then choose
	Command Prompt Only from the Startup menu. If your PCMCIA card works in real
	mode, follow these steps:
	
	1. Restart Windows 95 normally.
	
	2. Use the right mouse button to click My Computer, and then click Properties on
	  the menu that appears.
	
	3. On the Device Manager tab, double-click the device icon, click the PCMCIA
	  device, and then click Remove.
	
	4. Restart your computer.
	
	5. Click the Start button, point to Settings, click Control Panel, and then
	  double-click the Add New Hardware icon.
	
	6. Follow the Add New Hardware Wizard instructions to re-detect your hardware
	  device.
	
	NOTE: Some devices do not appear in Device Manager if real-mode socket services
	are running (for example, CD-ROM drives). If your device does not appear in
	Device Manager, please contact your hardware manufacturer for further
	information.
	
	If you use real-mode drivers for your PCMCIA card and you change its resources in
	Device Manager, the change does not take effect. These resources must be changed
	with the real-mode drivers and utilities. If you have any questions about these
	drivers and utilities, please contact your hardware manufacturer.
	
	If your PCMCIA card device does not work in real mode, follow these steps:
	
	1. Restart your computer with your earlier version of MS-DOS. For information
	  about this process, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  Q121963 Requirements to Boot Previous Operating System
	
	  Q118579 Contents of the Windows Msdos.sys File
	
	2. Test your PCMCIA card.
	
	If your PCMCIA card does not work in this configuration, please contact your
	hardware manufacturer for further information.
	
	If your PCMCIA card does work, follow these steps:
	
	1. Start your computer by stepping through the startup files. To do this, press
	  the F8 key when you see the "Starting Windows 95" message, and then choose
	  Step-By-Step Confirmation from the Startup menu.
	
	2. Answer "Yes" to all prompts except:
	
	   - Choose "No" when you are prompted "Process the system registry?"
	
	   - Choose "No" when you are prompted "Load the Windows graphical user
	     interface?"
	
	If your PCMCIA card still does not work, try the device on another computer if
	possible, and contact your hardware manufacturer.
	
	
	Protected-Mode
	--------------
	
	To use a PCMCIA card device in protected mode, the device must be supported by
	Windows 95 or the vendor must supply a Windows 95 driver.
	
	Before you attempt to use your PCMCIA card device in protected mode, you must
	first enable the protected-mode socket services. To enable these services,
	follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, make sure that the PCMCIA Card Socket device is
	  listed and that it is disabled. Disabled devices are indicated with a red
	  "X."
	
	3. In Control Panel, double-click the PCMCIA Card icon.
	
	4. Follow the PCMCIA Card Socket Wizard instructions.
	
	5. When you are prompted to turn your computer off, do so. Make sure to leave
	  your computer off for a few seconds, and then turn it back on. Do not press
	  CTRL+ALT+DEL or use your computer's reset button to restart your computer.
	
	After the Windows 95 protected-mode drivers for socket services are enabled, you
	can install your PCMCIA card device. To do so, follow these steps:
	
	1. Insert the device in the PCMCIA card socket.
	
	  NOTE: You can insert the device before you turn the computer on, or after
	  Windows 95 has started.
	
	2. If the device is supported by Windows 95, Windows 95 automatically installs
	  the appropriate drivers and, if necessary, requests that you restart your
	  computer. (Most PCMCIA cards do not require a restart.)
	
	3. If the device is not supported by Windows 95, Windows 95 displays a dialog
	  box with these prompts:
	
	  Select which driver you want to install for your new hardware:
	
	   - Windows default driver (NOTE: this option is unavailable)
	
	   - Driver from disk provided by hardware manufacturer
	
	   - Do not install a driver (Windows will not prompt you again)
	
	   - Select from a list of alternate drivers
	
	  If you have a disk from the manufacturer that contains Windows 95 drivers for
	  your device, click option 2.
	
	  If you have information from the manufacturer that this device emulates
	  another device Windows 95 supports, click option 4 and select the appropriate
	  device from the list.
	
	If your PCMCIA card device does not work in protected-mode, perform the following
	steps:
	
	1. Use Device Manager to remove the device, restart your computer, then let
	  Windows 95 re-detect your hardware.
	
	2. If your PCMCIA card is not detected and Windows 95 has a protected-mode
	  driver for it, remove any "EMMExclude=" lines from the System.ini file or any
	  exclusions on the Emm386.exe line in the Config.sys file, reboot your
	  computer, and let Windows 95 redetect your hardware. Note that if the
	  "EMMExclude=" line is the problem, you may hear one beep instead of the
	  standard dual-tone beep when Windows 95 starts.
	
	3. Perform this step only if you have a program that looks for a certain
	  resource setting. Microsoft suggests that you upgrade the program in this
	  case to conform to Windows 95 Plug and Play specifications.
	
	  Force the PCMCIA card device to a specific configuration using the following
	  steps:
	
	   - In Control Panel, double-click the System icon.
	
	   - Click the Device Manager tab, double-click the device icon, click the
	     device in question, and then click Properties.
	
	   - Click the Resources tab.
	
	   - Click the Use Automatic Settings check box to clear it.
	
	   - Click Change Setting and set the resources to the settings you want.
	
	If some of your PCMCIA card devices work while another does not, it is possible
	that the device is a different revision of a supported card and that it will not
	work even though the driver is listed.
	
	Additional query words: modem network tshoot
	
	======================================================================
	Keywords          : kbtshoot win95 kbfaq
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	
