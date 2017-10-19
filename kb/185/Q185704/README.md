---
layout: page
title: "Q185704: How to Restrict Floppy Disk Drive Access Using Floplock Service"
permalink: /kb/185/Q185704/
---

## Q185704: How to Restrict Floppy Disk Drive Access Using Floplock Service

	Article: Q185704
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Floplock service to restrict access to
	floppy disk drives on a computer running Windows NT.
	
	MORE INFORMATION
	================
	
	The Floplock service can be used to limit floppy disk drive access to only
	Administrator Group accounts (Windows NT Server) or Administrator and Power User
	Group accounts (Windows NT Workstation). When the Floplock service is installed
	and set to start automatically, only users in the appropriate groups have access
	to the computer's floppy disk drives.
	
	Installing the Floplock Service
	-------------------------------
	
	To use the Floplock service, you must install the service using the Service
	Installer (Instsrv.exe) tool included with the Microsoft Windows NT Resource Kit
	or Microsoft Windows NT Zero Administration Kit (ZAK). You must have
	Administrator privileges for the computer on which you are installing the
	Floplock service. To install the Floplock service, follow these steps:
	
	1. Install Instsrv.exe and Floplock.exe from the Windows NT Resource Kit or ZAK.
	  To do so, refer to the documentation included with the Windows NT Resource
	  Kit or ZAK.
	
	2. At a command prompt, type the following commands, pressing ENTER after each
	  command
	
	  cd\<folder name>
	  instsrv <service name> <drive>:\<folder name>\floplock.exe
	
	  where <service name> is the name you specify for the Floplock service,
	  <drive> is the drive letter on which the Windows NT Resource Kit or ZAK
	  is installed, and <folder name> is the folder in which the Windows NT
	  Resource Kit or ZAK is installed.
	
	  NOTE: <service name> is any name you choose for the Floplock service.
	  For more information, please see the Floploc.txt file or the "Instsrv" Help
	  topic. The Floplock service must be located on a local hard disk and not on a
	  mapped network drive.
	
	Setting the Service Startup Type
	--------------------------------
	
	To configure the Floplock service to start automatically when you log on to
	Windows NT, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Services.
	
	3. In the list of services, double-click the service name you specified in step
	  2, and then click Startup.
	
	4. Click Automatic, click OK, and then click Close.
	
	5. Restart your computer.
	
	Removing the Floplock Service
	-----------------------------
	
	To remove the Floplock service, type the following line at a command prompt, and
	then press ENTER
	
	instsrv <service name> remove
	
	where <service name> is the name you specify for the Floplock service.
	
	NOTE: You must have Administrator privileges on the computer on which the
	Floplock service is installed.
	
	Stopping the Floplock Service
	-----------------------------
	
	To temporarily stop the Floplock service, follow these steps:
	
	NOTE: You must have Administrator privileges on the computer on which the
	Floplock service is installed.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Services.
	
	3. In the list of services, click <service name>, where <service
	  name> is the name you specify for the Floplock service, and then click
	  Stop.
	
	4. When you are prompted to stop the service, click Yes, and then click Close.
	
	If you restart the computer without Administrator privileges and the Floplock
	service is set to start automatically, the service is restarted.
	
	The Floplock service is included with the Windows NT Resource Kit and ZAK. For
	more information about the Floplock service and the Instsrv tool, please see the
	following articles in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q170355
	  TITLE : New Tools Included with Zero Administration Kit
	
	  ARTICLE-ID: Q158457
	  TITLE : Defining Local and Remote Drive Visibility Under WinNT 4.0
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
