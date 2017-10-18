---
layout: page
title: "Q225355: Err Msg: Unable to Find the Magic School Bus Animals Files..."
permalink: kb/225/Q225355/
---

## Q225355: Err Msg: Unable to Find the Magic School Bus Animals Files...

	Article: Q225355
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsound mskids kbimu
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the World of Animals for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Magic School Bus Explores the World of
	Animals, you may receive the following error message:
	
	  Unable to find Scholastic's the Magic School Bus - Animals files. Please
	  reinstall MSB Animals by double-clicking on the Setup.exe file found on the
	  CD's install folder.
	
	When you click OK, the program does not start and you are returned to the Windows
	desktop.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- The Magic School Bus Explores the World of Animals CD-ROM is not inserted in
	  your CD-ROM drive.
	
	- The PowerToys FlexiCD tool or another program that plays CD audio is
	  currently running on your computer.
	
	- The CD Audio driver on your computer is damaged or not configured correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented. If the issue continues to occur, proceed to the next method.
	
	Insert the Program CD-ROM into Your CD-ROM Drive
	------------------------------------------------
	
	Insert the Magic School Bus Explores the World of Animals CD-ROM into your CD-ROM
	drive, and then attempt to restart the program.
	
	Clean Boot Your Computer
	------------------------
	
	To clean boot your computer, use the appropriate steps for your version of
	Microsoft Windows.
	
	Microsoft Windows 98:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click System Information.
	
	2. On the Tools menu, click System Configuration Utility.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in the System Configuration Utility tool.
	
	For additional information about how to clean boot Windows 98, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	Microsoft Windows 95:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is complete. This prevents any programs from being loaded
	  automatically when Windows starts.
	
	3. Quit all running programs except Explorer and Systray. To do this, follow
	  these steps:
	
	  a. Press CTRL+ALT+DELETE.
	
	  b. Click the program you want to quit, and then click End Task.
	
	  c. If you receive a message stating that the program is busy or not
	     responding, click End Task again.
	
	  Repeat this step until you have quit all programs except Explorer and Systray.
	
	4. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	For additional information about how to clean boot Windows 95, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	Remove and Reinstall the CD Audio Driver
	----------------------------------------
	
	For information about how to remove and reinstall the CD Audio Driver, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q142731 How to Install and Remove Codecs and MCI Devices in Windows
	
	Additional query words: 1.00 mskids schoolbus msb cannot find cdrom
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsound mskids kbimu 
	Technology        : kbHomeProdSearch kbKidsSearch kbScholasticAnimals kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
