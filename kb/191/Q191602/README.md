---
layout: page
title: "Q191602: INFO: Bypassing Display Adapter Autodetect during Unattended Set"
permalink: /kb/191/Q191602/
---

## Q191602: INFO: Bypassing Display Adapter Autodetect during Unattended Set

	Article: Q191602
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to disable the detection of the display adapter during
	an unattended setup, to install the default VGA driver.
	
	When a system is installed in unattended mode, the [Display] section of the
	unattended text file provides the screen resolution. In some cases, you may want
	to use the default VGA driver (because of monitor limitations, for example) and
	not the graphics adapter's driver, which is automatically detected by the
	system.
	
	MORE INFORMATION
	================
	
	To bypass the detection of the display adapter, and to install the default VGA
	driver, modify your answer file as follows:
	
	1. Set the OEM flag:
	
	     [Unattend]
	     OemPreinstall = Yes
	
	2. Modify the display section as follows
	
	     [Display]
	     InstallDriver = 1
	     ConfigureAtLogon = 0
	     BitsPerPel = 4
	     XResolution = 640
	     YResolution = 480
	     VRefresh = 60
	     AutoConfirm = 1
	
	     [DisplayDrivers]
	     "Standard VGA (640x480, 16 colors)" = "RETAIL"
	
	The string above identifies the driver to be installed. RETAIL means that the
	driver is provided by default. OEM means that the driver comes from a third
	party manufacturer.
	
	WARNING: For localized versions of Windows NT, you can find the identification
	string for VGA mode in Txtsetup.sif. Search for the following line in
	Txtsetup.sif:
	
	     forcevga = "Standard VGA (640x480, 16 colors)",files.none
	
	Use the identification string above in the [DisplayDrivers] section.
	
	For more information about unattended setup, please refer to the following
	article in the Microsoft Knowledge Base:
	
	  Q155197 Unattended Setup Parameters for Unattend.txt
	
	Additional query words: Unattended Setup
	
	======================================================================
	Keywords          : kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
