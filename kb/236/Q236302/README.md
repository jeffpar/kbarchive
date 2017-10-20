---
layout: page
title: "Q236302: Err Msg: STOP: 0xC0000143 After Uninstalling Procomm Plus 32"
permalink: /kb/236/Q236302/
---

## Q236302: Err Msg: STOP: 0xC0000143 After Uninstalling Procomm Plus 32

{% raw %}

	Article: Q236302
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you uninstall Procomm Plus 32 and restart your computer, you may receive
	the following error message, and your computer is unable to complete the boot
	process:
	
	  STOP: 0xC0000143 Missing System File The required system file
	  Display_driver.dll is bad or missing.
	
	CAUSE
	=====
	
	This error message can occur if you installed Procomm Plus 4.7 with Remote Relay
	as an installed component. Remote Relay renames your original display adapter
	driver to Rrctrl<x>.dll, where <x> is a number from 1 to 6. The
	uninstall procedure may remove the Rrctrl<x.dll> files, but does not
	change the registry entry, resulting in the error message.
	
	RESOLUTION
	==========
	
	To resolve this problem, reinstall your video display adapter driver. To do so,
	first attempt to restart your computer in VGA mode.
	
	If You Can Restart into VGA Mode
	--------------------------------
	
	1. Place your Windows NT CD in your CD-ROM drive.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Click the Settings tab, click Display Type, and then click Change.
	
	4. If you installed a display drive that came with Windows NT, select the
	  Manufacturer and Model for your display adapter, and then click OK. If you
	  used a third-party display driver, click Have Disk, navigate to the location
	  for your Windows NT 4.0 drivers, and then click OK.
	  NOTE: Some third-party display drivers are designed to use their own Setup.exe
	  file to install their drivers. Check the documentation that came with the
	  display driver if using Have Disk does not allow you to install the driver
	  successfully.
	
	5. Restart your computer and adjust your display settings as necessary.
	
	6. Click Start, point to Find, and then click Files Or Folders.
	
	7. Type rrctrl , and then click Find Now. Note that you may not have any of
	  these files, or you may have several files.
	
	8. Rename each of these files.
	
	If You Cannot Restart into VGA Mode
	-----------------------------------
	
	1. Install Windows NT into another folder. It is preferred that you install
	  Windows NT into a different drive, if possible. This is known as a parallel
	  installation.
	
	2. Upgrade the parallel installation to the same Service Pack level as the
	  original installation of Windows NT.
	
	3. Install the same video driver in the parallel installation that you used to
	  install in the original Windows NT installation.
	
	4. Navigate to the the following folder in the parallel installation, and look
	  for the display driver system (.Sys) file:
	
	  <Winntpar>\System32\Drivers
	
	  where <winntpar> is the name of the Windows NT folder that contains the
	  parallel installation.
	
	5. Click Start, point to Programs, and then click Command Prompt.
	
	6. Type each of the following lines, pressing the ENTER key after each line:
	
	  cd <winntpar>\system32\drivers
	  copy <driver.sys><winnt>\system32\rrctrl1.dll
	  copy <driver.sys><winnt>\system32\rrctrl2.dll
	  copy <driver.sys><winnt>\system32\rrctrl3.dll
	  copy <driver.sys><winnt>\system32\rrctrl4.dll
	  copy <driver.sys><winnt>\system32\rrctrl5.dll
	  copy <driver.sys><winnt>\system32\rrctrl6.dll
	
	  where <winntpar> is the name of the Windows NT folder for the parallel
	  installation, <winnt> is the name of the original Windows NT folder,
	  and <driver.sys> is the name of the display driver .Sys file.
	
	  This step copies the display driver to the files that the entries for Remote
	  Relay have set in the registry for display.
	
	7. Restart your original installation of Windows NT in VGA mode, and then follow
	  the steps in the "Can Restart into VGA mode" section of this article.
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	REFERENCES
	==========
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : Video
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
