---
layout: page
title: "Q170061: XCLN: Readme.txt for Msoutl32.dll"
permalink: /kb/170/Q170061/
---

## Q170061: XCLN: Readme.txt for Msoutl32.dll

{% raw %}

	Article: Q170061
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:7.0,7.5; :8.01,8.02
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.5 
	- Microsoft Outlook 97, versions 8.01, 8.02 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is taken from the Readme file included with the Outlook driver for
	Microsoft Schedule+ 7.x.
	
	
	MORE INFORMATION
	================
	
	Contents:
	
	- Overview
	
	- Supported Configurations/Platforms
	
	- Installing the Driver
	
	- Removing the Driver
	
	- Known Issues
	
	Overview
	--------
	
	This driver enables a Microsoft Schedule+ 7.x user to open a Microsoft Outlook
	user's calendar in Schedule+ ("Schedule+ 7.x" is a general term referring to
	Schedule+ 7.0, Schedule+ 7.5, and Schedule+ 95).
	
	After the driver is installed, the Schedule+ user can open an Outlook user's
	calendar (Open command, File menu, Open Other's Appointment Book submenu). The
	Schedule+ user must have Read permission for the Outlook user's calendar, and
	that calendar must be stored on the Exchange Server.
	
	NOTE: The Schedule+ user can only read the Outlook user's Calendar, not add to or
	edit it, regardless of the permissions granted by the Outlook user.
	
	Supported Configurations/Platforms
	----------------------------------
	
	This driver works only on 32-bit versions of Microsoft Schedule+ 7.x (for Windows
	95 and Windows NT 3.51 and 4.0). It does not work with the 16-bit version of
	Schedule+ 7.x (for Windows 3.1 and 3.11).
	
	Both the Schedule+ and Outlook users must be running Exchange Server.
	
	Installing the Driver
	---------------------
	
	Computer requirements: x86 architecture
	
	Operating system requirements: Windows 95, Windows NT 3.51, or 4.0 (32-bit)
	
	Dependent programs: Schedule+ 7.x (32 bit)
	
	To install the Microsoft Outlook 97 driver for Schedule+ 7.x:
	
	1. Make sure the computer has Schedule+ 7.x installed.
	
	2. If Schedule+ is running, click Exit and Log Off on the File menu.
	
	3. Double-click Msoutl.exe. (located in the same folder as Schedule+ 7.x)
	
	4. When asked if you want to continue, click Yes.
	
	5. When the installation is complete, restart Schedule+.
	
	Files installed:
	
	- Msoutl32.dll
	
	- Mssotubs.dll
	
	- Msoutl.inf
	
	- Unins351.reg
	
	- Readme.txt
	
	Removing the Driver
	-------------------
	
	To remove the Microsoft Outlook 97 driver for Schedule+ 7.x in Windows 95 or
	Windows NT 4.0:
	
	1. On the Windows Start menu, point to Settings and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Microsoft Outlook 97 Driver for Schedule+
	  7.x and then click Add/Remove.
	
	NOTE: Windows NT 3.51 users can remove the driver by running Unins351.reg and
	then deleting Msoutl32.dll and Msostubs.dll. These files are located in the same
	folder as Schedule+ 7.x.
	
	Known Issues
	------------
	
	- All-day events in Outlook appear as appointments when viewed in Schedule+ 7.x
	  using the Outlook Driver for Schedule+ 7.x.
	
	- If Schedule+ 7.x is re-installed, then the driver will also need to be
	  re-installed afterward.
	
	- An Outlook user might share his or her Outlook Calendar with other users,
	  then switch to using Schedule+ 7.x as the primary calendar. In this case,
	  Schedule+ 7.x users who are using the Outlook Driver for Schedule+ 7.x to
	  open that user's calendar will continue to open that user's Outlook calendar
	  instead of that user's Schedule+ 7.x calendar. To solve this, the Outlook
	  user needs to remove the permissions on his or her Outlook Calendar folder so
	  that the Outlook Driver for Schedule+ 7.x will not open it.
	
	- Outlook appointments with more than 32 KB of text in the Notes field will
	  appear to have a blank Notes field when viewed in Schedule+ 7.x using the
	  Outlook Driver for Schedule+ 7.x.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbSchedule750
	Version           : WINDOWS:7.0,7.5; :8.01,8.02
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
