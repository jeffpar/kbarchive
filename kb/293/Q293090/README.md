---
layout: page
title: "Q293090: MS Reader: Install Shield Error During Installation"
permalink: /kb/293/Q293090/
---

## Q293090: MS Reader: Install Shield Error During Installation

	Article: Q293090
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.5
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 01-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader, version 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Microsoft Reader, the following error message may appear:
	
	  Install Shield engine (ikernel.exe) could not be read from the installed
	  device.
	
	CAUSE
	=====
	
	This behavior may occur if either of the following are true:
	
	- The system Temp folder contains corrupted files.
	
	  -or-
	
	- Terminate and Stay Resident (TSR) programs are running on your system.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow the steps in the order they appear.
	
	Check and Clean Your Temp Folder
	--------------------------------
	
	Use the appropriate method for your operating system.
	
	Windows 98, Windows Millennium Edition (ME), Windows 2000:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  then click Disk Cleanup.
	
	2. Select the drive that you want to clean up and click OK.
	
	3. In the Files to delete dialog box, click to select Temporary files. Click to
	  clear any options that you don't want. Click OK.
	
	Windows 95:
	
	1. Click Start, click Shut Down, select Restart the Computer in MS-DOS mode, and
	  then click OK.
	
	2. At the MS-DOS prompt, type the following, and then press ENTER
	
	  CD\<temp folder>
	
	  where <temp folder> is the name of your temporary folder (for example,
	  type "CD\Windows\Temp" (without the quotation marks)
	
	3. At the MS-DOS prompt, type the following, and press ENTER.
	
	  Del *.tmp
	
	4. Type "EXIT" (without the quotation marks) and press ENTER to reboot into
	  Windows 95.
	
	Clean Boot Your System
	----------------------
	
	Use the appropriate method for your operating system.
	
	Microsoft Windows Millennium Edition:
	
	For additional information about how to perform a clean boot, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	Microsoft Windows 98:
	
	Run the System Configuration Utility (Msconfig.exe). To do this, follow these
	steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click the General tab. Click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart your computer, do so.
	
	For additional information about how to clean boot Windows 98, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	
	NOTE: To restore your original startup configuration, rerun the System
	Configuration Utility, click the General tab, and click Normal Startup.
	
	Microsoft Windows 95:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key. On the Startup menu, select Command Prompt Only.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Hold down the SHIFT key until the Windows startup sequence is
	  completed.
	
	3. Disable any anti-virus or disk tool programs that are installed on your
	  computer.
	
	  For information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	4. Quit all running programs except Explorer and Systray. To do this, press
	  CTRL+ALT+DELETE, click the program that you want to quit, and then click End
	  Task.
	
	  If you receive a message stating that the program is busy or not responding,
	  click End Task again.
	
	  Repeat this step to quit all programs except Explorer and Systray.
	
	For additional information about how to clean boot Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	NOTE: To restore your original Startup options, restart the computer normally,
	and then enable any anti-virus or disk tool programs installed on the computer.
	For information about how to enable these programs, see the printed or online
	documentation for the program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbReaderSearch kbReader150
	Version           : :1.5
	Issue type        : kbprb
	
	=============================================================================
	
