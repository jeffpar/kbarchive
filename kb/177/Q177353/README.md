---
layout: page
title: "Q177353: Qic117.sys Driver May Make Drive A Inaccessible"
permalink: /kb/177/Q177353/
---

## Q177353: Qic117.sys Driver May Make Drive A Inaccessible

	Article: Q177353
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a floppy disk drive to read the contents of a disk, the
	following error message is displayed:
	
	  A:\ is not accessible. The requested resource is in use.
	
	NOTE: Substitute "B:\" if you are using a second floppy drive.
	
	When you click the floppy disk drive, the light does not come on. Other operating
	systems such as MS-DOS or Windows 95 can access the drive with no errors.
	
	CAUSE
	=====
	
	The Qic117.sys driver can be used on the following tape devices; each of these
	devices runs off the floppy controller:
	
	- HP Colorado T3000
	
	- HP Colorado T1000
	
	- Wangtek QIC-3010 floppy
	
	
	Qic117.sys will load if the driver startup type is set to SYSTEM, or a Tape
	Devices/Detect is performed. When the driver loads, it makes the following
	calls:
	
	kdi_GetFloppyController() - acquires resources
	kdi_ReleaseFloppyController() - releases resources
	kdi_GetFloppyController() - acquires resources
	
	At this point, the driver stops and waits until it is needed again.
	
	After the calls are made, the user cannot use the floppy disk drive because the
	tape device is using all the resources.
	
	When using a tape device that runs off the floppy controller, the floppy disk
	drive and tape device cannot be used simultaneously. This will ensure maximum
	performance for the tape drive and prevent changes to the hard disk drive caused
	by someone using the floppy disk drive while the backup or restore is in
	progress.
	
	WORKAROUND
	==========
	
	To work around this issue, perform the following steps:
	
	1. In Control Panel, double-click Devices.
	
	2. From the list of devices, select the corresponding tape device.
	
	3. Click Startup.
	
	4. Select Automatic from the Startup Type list.
	
	5. Click OK.
	
	6. Click the Close button for the Devices tool.
	
	This procedure should effectively set the startup type for the Qic117.sys driver
	so that it does not load until a backup is started.
	
	MORE INFORMATION
	================
	
	The floppy disk drive will now work until a backup starts, but, after the backup
	completes, the error message listed above will appear when you try to access the
	floppy drive. The only way to again gain access to the floppy disk drive is to
	restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.5 5.25 diskette
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
