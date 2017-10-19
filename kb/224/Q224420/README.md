---
layout: page
title: "Q224420: Description of the Windows Critical Update Notification Utility"
permalink: /kb/224/Q224420/
---

## Q224420: Description of the Windows Critical Update Notification Utility

	Article: Q224420
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbenv kbtool win98 win98se
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows 98 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Microsoft Windows Critical Update Notification
	utility that is included with Windows 98, Windows 98 Second Edition, and Windows
	2000.
	
	MORE INFORMATION
	================
	
	After you install the Windows Critical Update Notification utility on a computer
	that is running Windows 98, Windows 98 Second Edition or Windows 2000, by
	default, this tool checks for an Internet connection every 5 minutes. Note that
	no connection is made to the Windows Update Web site during this time. Windows
	Critical Update Notification is checking for the existence of a connection to
	the Internet. If a connection to the Internet exists, Windows Critical Update
	Notification connects to the Windows Update Web site, and if updates are found,
	you receive the following message:
	
	  Microsoft Critical Update Notification
	
	  New critical updates are available for your computer. Microsoft strongly
	  recommends that you install these updates now.
	
	  To read about and install these updates, click "View Critical Updates." The
	  Windows Update site will guide you through the installation process.
	
	  If you would like to postpone installation for 24 hours, click "Notify Me
	  Later." This message will appear tomorrow when you connect to the Internet.
	  Postponing installation of critical updates is not recommended.
	
	If a connection to the Internet is not found after the first hour of checking,
	Windows Critical Update Notification only checks for an Internet connection once
	every 60 minutes.
	
	If the check for Critical Updates is successful, Windows Critical Update
	Notification does not check for an Internet connection for the next 24 hours.
	For example, if Windows Critical Update Notification checks for critical updates
	but there are none available (a "silent check") or it checks and you view
	critical updates, Windows Critical Update Notification does not check for an
	Internet connection for the next 24 hours. If an error occurs during the "Check
	for updates" procedure, Windows Critical Update Notification follows the same
	pattern of checking for an Internet connection again every 5 minutes for the
	first hour, and so on until it is successful.
	
	NOTE: A problem in the preceding situation may not be obvious. For example, a
	problem during this procedure can occur because of line noise that may be
	encountered during the connection or something else that may be beyond your
	control. Also, if you choose the "Notify me later" option or click the X to
	close the dialog box, Windows Critical Update Notification does not check for an
	Internet connection for 24 hours.
	
	If the Windows Critical Update Notification dialog box is displayed but is left
	open and you do not take any action, a connection is not made to the Windows
	Update Web site and checks for an Internet connection are not made until you
	choose one of the following actions in the dialog box:
	
	- You choose to check for critical updates.
	
	- You choose to be notified at a later time.
	
	- You choose to close the dialog box.
	
	How to Install or Uninstall Windows Critical Update Notification
	----------------------------------------------------------------
	
	You can install Windows Critical Update Notification by using the following
	method:
	
	Windows Update Web Site:
	
	1. View the following Microsoft Web site:
	
	  http://windowsupdate.microsoft.com
	
	2. Click "Product Updates".
	
	3. To install Windows Critical Update Notification, click to select the "Windows
	  Critical Update Notification" check box, click Download, and then follow the
	  instructions on the screen to complete the installation. To remove Windows
	  Critical Update Notification, click Uninstall on the right side of the
	  Windows Critical Update Notification description, and then follow the
	  instructions on the screen to complete the uninstallation.
	
	You can uninstall Windows Critical Update Notification by using the following
	method:
	
	Add/Remove Programs:
	
	1. Click Start, point to Settings, and then click "Control Panel".
	
	2. Double-click "Add/Remove Programs".
	
	3. Click "Microsoft Windows Critical Update Notification".
	
	4. Click "Add/Remove".
	
	Windows Critical Update Notification Frequently Asked Questions
	---------------------------------------------------------------
	
	Question: Is Windows Critical Update Notification reset if I restart my
	computer?
	Answer: No, if the Windows Critical Update Notification utility is on a 24 hour
	timeout, it is not reset when you shut down or restart your computer. This is
	because the Windows Critical Update Notification utility maintains a time record
	in the registry that you cannot change without modifying your Basic Input/Output
	System (BIOS) system clock. Unless you alter the time in the BIOS, the 24 hour
	timestamp remains in effect until it expires.
	
	Question: Can I change the scheduled behavior of Windows Critical Update
	Notification?
	Answer: No, if the scheduled task is modified, the tool reverts to the default
	settings the next time Windows Critical Update Notification runs. Note that this
	behavior is by design to ensure that you are notified of updates in a timely
	manner.
	
	Additional query words: cun notify system tray task scheduler manager
	
	======================================================================
	Keywords          : kbenv kbtool win98 win98se 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin98search kbWin98SEsearch kbWinAdvServSearch kbWinDataServSearch kbWin98 kbWin98SE
	Version           : :2000
	Issue type        : kbinfo
	
	=============================================================================
	
