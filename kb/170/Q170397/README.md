---
layout: page
title: "Q170397: STOP: 0XC0000143 Missing System File. Display_Driver.dll Is..."
permalink: kb/170/Q170397/
---

## Q170397: STOP: 0XC0000143 Missing System File. Display_Driver.dll Is...

	Article: Q170397
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows NT, the following error message may appear:
	
	  STOP: 0xC0000143 [Missing System File] The required system file
	  Display_driver.dll is bad or missing.
	
	This error message appears on the blue initialization screen before the Windows
	NT logon screen appears. The computer stops responding, and you cannot continue
	starting Windows NT.
	
	CAUSE
	=====
	
	This error occurs when the Device0 Registry entry for the installed video
	driver, as well as one of the fallback VGA drivers, is corrupted. For example,
	you will receive this error message if you delete the following key:
	
	(NOTE: Substitute your video driver name in place of MGA_MIL.)
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlset\Services\mga_mil\Device0
	
	as well as one of the following keys
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlset\Services\VgaSave\Device0
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlset\Services\VgaStart\Device0
	
	RESOLUTION
	==========
	
	Boot to VGA mode and re-install your video controller. Perform the following
	steps to install a driver for your video adapter:
	
	1. In Control Panel, double-click Display.
	
	2. Click the Settings tab, click Display Type, and then click Change.
	
	3. Choose your adapter manufacturer from the drop-down list. Under Display,
	  choose the specific model of your adapter. After you locate the appropriate
	  video driver, click OK.
	
	  -or-
	
	  If you are using a third-party driver:
	
	  Click Have Disk and then click Browse to browse the path to the location for
	  the appropriate video driver for your display adapter. After you locate the
	  appropriate video driver, click OK, read the message about third-party
	  hardware vendors, and then click Yes.
	
	4. Click Reboot when you are prompted.
	
	NOTE: The above procedure will not work in situations involving PC Anywhere 7.5
	or Remotely Possible. These applications replace Vga.dll and Msgina.dll with
	their own versions. If those files are not copied properly (or if you attempt to
	upgrade from Windows NT 3.51 to 4.0 with these services enabled), you will get
	the 0xC0000143 blue screen STOP message.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q162577 STOP: C0000143 MISSING DISPLAY_DRIVER.DLL
	
	If reinstalling your video adapter does not work, you can try one of the
	following:
	
	- Select Last Known Good by pressing the spacebar after you select the
	  appropriate Windows NT selection in the Boot.ini file.
	
	  -or-
	
	- Use an emergency repair disk to replace the System configuration hive of the
	  registry.
	
	  -or-
	
	- Restore your entire registry from tape backup.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
