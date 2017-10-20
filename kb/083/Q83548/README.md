---
layout: page
title: "Q83548: Reasons for Windows 3.1 Setup to Fail While Upgrading"
permalink: /kb/083/Q83548/
---

## Q83548: Reasons for Windows 3.1 Setup to Fail While Upgrading

{% raw %}

	Article: Q83548
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Windows version 3.1 Setup program fails while upgrading from an
	earlier version of Windows, and one of the following messages may be displayed:
	
	  Error loading
	
	  -or-
	
	  Error loading <driver.drv>
	
	where <driver.drv> is the name of the system driver identified in the
	"SYSTEM.DRV=" line of the SYSTEM.INI file.
	
	CAUSE
	=====
	
	An invalid or missing (blank) driver setting in the [boot] section of the
	SYSTEM.INI file can cause the Setup program to fail during an upgrade.
	
	Setup attempts to load drivers that end with the extension "DRV" that are located
	in the [boot] section when Setup shifts to protected mode.
	
	For example "SYSTEM.DRV=SYSTEM.DRV" is a valid setting for a driver.
	
	Setup may also fail if the video driver settings are correct, but the video card
	is not compatible with Windows 3.1. In this case, a message similar to the
	following is displayed:
	
	  Error loading COMM.DRV
	
	WORKAROUND
	==========
	
	The specific driver mentioned in the error message will vary. To troubleshoot
	this problem, install Windows, selecting EGA for the video graphics adapter. If
	the installation succeeds, then you have a problem with your video card.
	
	Successfully Upgrading
	----------------------
	
	The following are steps to successfully upgrade an earlier version of Microsoft
	Windows if the above errors are encountered:
	
	1. Edit the SYSTEM.INI file in the Windows directory.
	
	2. Locate the [boot] section.
	
	3. Change the SYSTEM.DRV= line to read as follows:
	
	  SYSTEM.DRV=SYSTEM.DRV
	
	4. Restart the Setup program from the original Windows 3.1 system disks.
	
	MORE INFORMATION
	================
	
	In addition to the above error messages, the following information is recorded
	in the BOOTLOG.TXT file in the Windows directory:
	
	     [boot]
	     LoadStart = DRIVER.DRV
	     LoadFail = DRIVER.DRV Failure code is 02
	
	If the SYSTEM.DRV setting is blank, the following information is recorded in the
	BOOTLOG.TXT:
	
	     [boot]
	     LoadStart =
	     LoadFail =  Failure code is 02
	
	NOTE: The BOOTLOG.TXT file that records errors during setup is located in the
	failed WINDOWS directory. This file can be viewed with a text editor (such as
	the MS-DOS 5.0 Editor) or a word processor.
	
	Besides SYSTEM.DRV, the following invalid or blank settings may also cause an
	error during setup:
	
	     KEYBOARD.DRV=
	     MOUSE.DRV=
	     DISPLAY.DRV=
	     COMM.DRV=
	
	
	Additional query words: ATM 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
