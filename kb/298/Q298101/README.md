---
layout: page
title: "Q298101: World Atlas 2001: Internet Explorer Error When You Start Atlas"
permalink: kb/298/Q298101/
---

## Q298101: World Atlas 2001: Internet Explorer Error When You Start Atlas

	Article: Q298101
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Interactive World Atlas 2001, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Encarta Interactive World Atlas, you may receive the
	following error message:
	
	  Internet Explorer Script Error
	
	  Line: 144
	  Char: 5
	  Error: Class not registered
	  Code: 0
	  URL: MsRef://pid=vg=00/cmd=Article/id=631502735
	
	CAUSE
	=====
	
	This behavior can occur when the following conditions are true:
	
	1. The computer has Microsoft Internet Explorer version 5.5.
	
	2. DirectX version 8a has been installed.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, follow the steps below in the order given.
	
	Step 1: Uninstall Internet Explorer 5.5
	---------------------------------------
	
	You can uninstall Internet Explorer 5.5 from the following Windows operating
	systems:
	
	- Microsoft Windows 95
	
	- Microsoft Windows 98
	
	- Microsoft Windows 98 Second Edition
	
	- Microsoft Windows NT 4.0
	
	- Microsoft Windows 2000
	
	NOTE: You cannot uninstall Internet Explorer 5.5 from Microsoft Windows
	Millennium Edition (Windows Me).
	
	NOTE: You must have administrative privileges to install or uninstall Internet
	Explorer 5.5 in Windows NT 4.0 and Windows 2000.
	
	To uninstall Internet Explorer, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Programs.
	
	2. On the Install/Uninstall tab, click "Microsoft Internet Explorer 5 and
	  Internet Tools" in the list of installed programs, and then click Add/Remove.
	
	NOTE: If "Microsoft Internet Explorer 5 and Internet Tools" is not included in
	the list of installed programs, run Setup.exe from the "Internet Explorer\Setup"
	folder. If you use Windows 2000, run the "w2kexcp.exe /u" (without the quotation
	marks) command from the "Internet Explorer\IE Uninstall" folder.
	
	3. Click "Restore the previous Windows configuration" or click Advanced to
	  specify any additional components that you want to remove, and then click OK.
	
	4. In the "Internet Explorer 5 and Internet Tools Setup" dialog box or
	  Maintenance mode, click OK to restore the previous version of Internet
	  Explorer and shared components.
	
	5. When you are prompted to verify that you want to restore the previous
	  version, click Yes.
	
	6. When you are prompted to restart Windows, click Restart Windows.
	
	If you have installed DirectX 8a before Internet Explorer 5.5, then you will need
	to follow the steps below. You can then remove and reinstall Internet Explorer
	5.5.
	
	Rename DXTRANS.DLL and DXTMSFT.DLL:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "dxtrans.dll" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. In the list of found files, right-click the dxtrans.dll file, and then click
	  Rename.
	
	5. Type "dxtrans.old" (without the quotation marks), and then press ENTER.
	
	6. Repeat the steps for dxtmsft.dll
	
	7. Close all open windows on the desktop, and then restart the computer.
	
	
	Step 2: Clean Boot Your System
	------------------------------
	
	To clean boot your computer, use the appropriate method for your version of
	Windows.
	
	Windows ME
	
	For additional information about how to perform a clean boot, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	Windows 98
	
	Run the System Configuration Utility (Msconfig.exe) to perform a clean boot. To
	do this, follow these steps:
	
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
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	For additional information about how to clean boot Windows 98, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	
	NOTE: To restore your original startup configuration, rerun the System
	Configuration Utility (Msconfig.exe), click the General tab, and then click
	Normal Startup.
	
	Windows 95
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key. From the Startup menu, select Command Prompt Only.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is completed.
	
	3. Turn off any anti-virus or disk tool programs that are installed on the
	  computer.
	
	  For information about how to turn off these programs, see the printed or
	  online documentation for the program.
	
	4. Quit all running programs except Explorer and Systray. To do this, press
	  CTRL+ALT+DELETE, click the program that you want to quit, and then click End
	  Task.
	
	  If you receive a message stating that the program is busy or not responding,
	  click End Task again.
	
	5. Repeat step 4 to quit all programs except Explorer and Systray.
	
	For additional information about how to clean boot Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	NOTE: To restore your original Startup options, restart the computer normally,
	and then enable any anti-virus or disk tool programs installed on the computer.
	For information about how to enable these programs, see the printed or online
	documentation for the program.
	
	Step 3: Install Internet Explorer 5.5
	-------------------------------------
	
	1. Insert the Installations & Resources disc into the CD-ROM drive. Press
	  and hold down the SHIFT key as you insert the compact disc to prevent the
	  Setup program from starting automatically.
	
	2. Click Start, point to Find, and then click "Files or Folders".
	
	3. In the Named box, type "ie5setup.exe" (without the quotation marks)
	
	4. In the "Look in" box, select the CD-ROM drive.
	
	5. Click Find Now.
	
	6. In the search results window, double-click "ie5setup.exe", and follow the
	  prompts to install it.
	
	
	Additional query words: multi multi-media media mm
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldAtlas2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
