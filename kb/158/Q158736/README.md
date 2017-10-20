---
layout: page
title: "Q158736: Creating Devices in SQL is Slow with Removable Media Installed"
permalink: /kb/158/Q158736/
---

## Q158736: Creating Devices in SQL is Slow with Removable Media Installed

{% raw %}

	Article: Q158736
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5,3.51,4.0,6.0,6.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server versions 6.0, 6.5 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a new device in an application, such as SQL Enterprise Manager
	(SEM), it may take several minutes to display the dialog box with the current
	available devices and/or may possibly time out.
	
	CAUSE
	=====
	
	If the computer has removable media, such as a removable floppy disk drive, and
	it is not connected at the time the new device is being created, the system
	times out when polling for available devices.
	
	SQL Server makes a Win32 API call to GetDiskFreeSpace, which can take an extended
	period of time to determine if the media is currently loaded. Any other
	application that makes a call to GetDiskFreeSpace may experience the same
	behavior.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one of the following:
	
	- Before creating the device, re-connect the removable media, such as a
	  removable floppy disk drive or a zip drive.
	
	-or-
	
	- If you are running SEM, you can increase the Query Timeout value by clicking
	  the Tools Menu, then clicking Preferences, and then configure then the
	  Connection tab.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbSQLServSearch kbAudDeveloper kbSQLServ600 kbSQLServ650
	Version           : winnt:3.5,3.51,4.0,6.0,6.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
