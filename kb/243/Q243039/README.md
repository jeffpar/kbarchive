---
layout: page
title: "Q243039: How to Perform a Clean Boot in Windows 95"
permalink: kb/243/Q243039/
---

## Q243039: How to Perform a Clean Boot in Windows 95

	Article: Q243039
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbtshoot win95
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to perform a clean boot in Windows 95.
	
	MORE INFORMATION
	================
	
	The following steps can help you to determine if the problem that you are
	experiencing is due to the real-mode configuration of your computer. This could
	include drivers that are loaded from your Config.sys and Autoexec.bat files.
	
	1. Restart your computer. When the Starting Windows 95 dialog box is displayed,
	  press F8, and then choose Step-By-Step Confirmation from the Startup menu.
	
	2. When you are prompted, load the following items (if you are prompted to load
	  any other items, press N):
	
	   - Dblspace driver.
	
	   - Himem.sys.
	
	   - Ifshlp.sys.
	
	   - Dblbuff.sys.
	
	   - Load the Windows 95 graphical user interface (GUI), choosing to load all
	     Windows drivers.
	
	NOTE: Windows 95 does not require the Config.sys and Autoexec.bat files, but some
	tools installed on the computer may require them. You should never rename the
	Config.sys and Autoexec.bat files until you perform a successful interactive
	boot to verify that they are not needed.
	
	If the clean boot of your real-mode configuration eliminates the issue, isolate
	the conflict with a terminate-and-stay-resident (TSR) or real-mode device driver
	using the Step-By-Step Confirmation function.
	
	Load Windows 95 by booting to a command prompt and starting Windows 95 by typing
	"win" (without the quotation marks), holding down the SHIFT key for the duration
	of the boot. This prevents any programs from loading automatically at startup.
	
	If the issue is resolved by preventing programs from loading at startup,
	investigate the following possible sources.
	
	The Winstart.bat File
	---------------------
	
	The Winstart.bat file is used to load TSRs that are required for Windows-based
	programs and are not needed in MS-DOS sessions.
	
	For additional information the Winstart.bat file, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q134402 Some TSRs Moved from Autoexec.bat to Winstart.bat During Setup
	
	The Startup Group
	-----------------
	
	If the issue is resolved by bypassing the Startup group, remove each of the
	programs from the Startup group individually to isolate the program that is
	causing the problem.
	
	The Run Key in the Registry
	---------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can prevent programs from loading by removing the program's string from the
	following registry keys:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunOnce
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunServices
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\ RunServicesOnce
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\ RunOnce\Setup
	
	Programs may also be loading from the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run
	
	The Win.ini File
	----------------
	
	The "load=" and "run=" lines in the [Windows] section of the file can start
	programs automatically. See the following section for more information.
	
	Test Windows Configuration Files
	--------------------------------
	
	To test the Windows configuration files, use the following steps:
	
	1. Boot to a command prompt.
	
	2. Rename the Win.ini file by typing the following command:
	
	  ren c:\windows\win.ini *.bak
	
	3. Start Windows 95 by typing "win" (without the quotation marks). If this
	  procedure corrects the problem, ensure that the "load=" and "run=" lines in
	  the [Windows] section of the Win.ini file are either blank or preceded with a
	  semicolon (;) to prevent the items from loading.
	
	4. Rename the System.ini file by typing the following command:
	
	  ren c:\windows\system.ini *.bak
	
	5. Windows 95 requires a System.ini file to load the GUI. Replace the original
	  file by typing the following command:
	
	  copy c:\windows\system.cb c:\windows\system.ini
	
	NOTE: Starting Windows 95 with the System.cb file does not load a driver for the
	mouse. Edit the new System.ini file, adding the following lines:
	
	  [386Enh]
	  mouse=*vmouse, msmouse.vxd
	
	  [boot]
	  drivers=mmsystem.dll
	  mouse.drv=mouse.drv
	
	6. Start Windows 95 by typing "win" (without the quotation marks) at the command
	  prompt. If replacing the original System.ini file with the System.cb file
	  corrects the issue, the problem most likely resides with either the [boot] or
	  [386Enh] sections of the original System.ini file. Restore the original file
	  to troubleshoot it.
	
	7. To isolate the cause of the problem, place a semicolon (;) at the beginning
	  of a line to prevent the item from loading.
	
	For additional information about the System.ini file and its default entries,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q140441 Creating a New System.ini File Without Third-Party Drivers
	
	Protected-Mode Device Drivers
	-----------------------------
	
	Safe mode disables all protected-mode device drivers for Windows 95. You can
	conduct testing for incompatible components and resource conflicts by disabling
	the protected-mode device drivers in Device Manager.
	
	Removing Protected-Mode Device Drivers to Isolate Conflicts:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  System.
	
	2. On the Device Manager tab, click View Devices By Type.
	
	3. Disable each of the protected-mode device drivers. For example:
	
	  a. Double-click the Floppy Disk Controllers branch to expand it.
	
	  b. Click Standard Floppy Disk Controller, and then click Properties.
	
	  c. On the General tab, click to clear the Original Configuration (Current)
	     check box, and then click OK.
	
	NOTE: If you have enabled hardware profiles, there is a check box for each of the
	configurations. Clear the check box for the hardware profile you are
	troubleshooting.
	
	  d. Repeat steps A-C for each device in Device Manager.
	
	4. Click Close, and then restart the computer.
	
	If you resolve the issue by disabling the protected-mode drivers in Device
	Manager, you may have a hardware conflict or a driver may be incompatible with
	your hardware. For additional information about troubleshooting resource
	conflicts in Windows 95, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q133240 Troubleshooting Device Conflicts with Device Manager
	
	If you determine that a Windows 95 protected-mode device driver is incompatible
	with your hardware, contact the hardware manufacturer to determine the
	availability of new drivers.
	
	Changing the Video Driver to a Standard VGA Display Driver
	----------------------------------------------------------
	
	NOTE: If you followed the directions in the "Removing Protected-Mode Drivers to
	Isolate Conflicts" section of this article, you changed the display driver to
	VGA and you can skip to the next section. Disabling the display adapter sets
	your video to the VGA driver.
	
	Safe mode starts Windows 95 with the VGA display driver. To determine if the
	issue you are experiencing is related to your video driver, change to the VGA
	driver for testing purposes.
	
	NOTE: To ensure a safe return to your previous configuration, use the following
	steps:
	
	1. Back up the System.ini file.
	
	2. Note the current desktop area (resolution) and color palette.
	
	3. Record the name of your current video adapter.
	
	To change to the VGA display driver, follow these steps:
	
	1. Start Windows 95 in Safe mode.
	
	2. Click Start, point to Settings, click Control Panel, and then double-click
	  Display.
	
	3. On the Settings tab, click Change Display Type.
	
	4. In the Adapter Type area, click Change.
	
	5. Click Show All Devices.
	
	6. In the Manufacturers box, click (Standard Display Types). In the Models box,
	  click Standard Display Adapter (VGA), and then click OK.
	
	7. Click OK or Close until you return to Control Panel.
	
	8. Restart your computer.
	
	If you determine that your video driver is incompatible with Windows 95, contact
	the hardware manufacturer to determine the availability of new drivers.
	
	Registry Damage
	---------------
	
	When you start Windows 95 in Safe mode the registry is read minimally. Damage to
	the registry may not be evident when running in Safe mode; you may need to
	replace the existing registry (System.dat) with a backup to determine if the
	issue is caused by a damaged registry. To troubleshoot a damaged registry, use
	the following steps:
	
	1. Boot to a command prompt.
	
	2. Remove the file attributes from the backup of the registry by typing the
	  following command:
	
	  c:\windows\command\attrib -h -s -r c:\system.1st
	
	3. Remove the file attributes from the current registry by typing the following
	  command:
	
	  c:\windows\command\attrib -h -s -r c:\windows\system.dat
	
	4. Rename the registry by typing the following command:
	
	  ren c:\windows\system.dat *.dax
	
	5. Copy the backup file to the current registry by typing the following command:
	
	  copy c:\system.1st c:\windows\system.dat
	
	6. Restart your computer.
	
	NOTE: The System.1st file is a backup of the registry created during the final
	stage of Windows 95 Setup. Therefore, the "Running Windows 95 for the first
	time" banner is displayed and Windows 95 finalizes settings as if it is being
	installed.
	
	If replacing the System.dat file with the System.1st file resolves the issue, the
	problem may be related to registry damage. Programs and device drivers added
	after you installed Windows 95 may require reinstallation to update the new
	registry.
	
	If the issue is not resolved, restore the original registry using the following
	steps:
	
	1. Restart the computer to a command prompt.
	
	2. Type the following commands, pressing ENTER after each command:
	
	  c:\windows\command\attrib -s -h -r c:\windows\system.dat
	  copy c:\windows\system.dax c:\windows\system.dat
	
	NOTE: Overwrite the existing System.dat file if you are prompted to do so.
	
	3. Restart the computer.
	
	The Windows 95 CD-ROM includes tools for backing up your system files as well as
	the registry. For additional information about these tools, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q139437 Windows 95 Emergency Recovery Utility
	
	  Q135120 Configuration Backup Tool for Backing Up the Registry
	
	What to Do if the Problem Persists
	----------------------------------
	
	If the troubleshooting steps outlined in this article do not resolve the issue,
	the issue may be related to one or more of the following items:
	
	- Faulty hardware.
	
	- The computer needs a special machine switch for Himem.sys.
	
	- The CMOS settings may need to be changed (such as disabling shadow RAM).
	
	- The system BIOS may require an upgrade to be compatible with Windows 95.
	
	- A virus may be present.
	
	- An upgrade of a previous Windows installation may have been unsuccessful.
	
	To determine if Windows 95 is compatible with your current system configuration,
	you may need to install Windows 95 to a clean directory.
	
	If you have enough free disk space, install Windows 95 to an empty folder (such
	as a Win95 folder). For information about how to do so, see the following
	article in the Microsoft Knowledge Base:
	
	  Q142096 How to Reinstall Windows 95 to a New Folder
	
	For additional information about troubleshooting Windows 95 startup problems and
	error messages, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q136337 Troubleshooting Windows 95 Startup Problems and Error Messages in
	  this KB article.
	
	If this resolves the issue, your previous installation may have included
	components incompatible with Windows 95.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtshoot win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
