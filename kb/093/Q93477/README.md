---
layout: page
title: "Q93477: Default Entries in WFWG SCHDPLUS.INI File"
permalink: /kb/093/Q93477/
---

## Q93477: Default Entries in WFWG SCHDPLUS.INI File

	Article: Q93477
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the default entries and their descriptions for the
	SCHDPLUS.INI file, which is the initialization file for the Schedule+ accessory
	included in Windows for Workgroups. The SCHDPLUS.INI file is created the first
	time Schedule+ is loaded and is modified when any options for Schedule+ are
	changed.
	
	MORE INFORMATION
	================
	
	[Microsoft Schedule+]            Description
	---------------------            -----------
	
	TaskSortSecond=                  Specifies the secondary sort order
	                                for tasks: 0=priority, 1=due date,
	                                2=description
	LocalUser=                       Name of the mailbox for the user
	LocalPath=                       Name and location of the .CAL file
	AppPath=                         Location of Schedule+ program files
	WindowOrder=                     Display order: Schedule=0 Message=1
	MainWindow=                      Main window's position on screen
	AppointmentView=                 Appointment Book's position on screen
	RequestSummary=                  Messages window's position on screen
	
	[Microsoft Schedule+ Appt Books]  Description
	--------------------------------  -----------
	
	Count=0                           Number and list of other's Appointment
	                                 Books open when exiting Schedule+
	
	[Microsoft Schedule+ Archives]   Description
	------------------------------   -----------
	
	Count=0                          Number and list of archive files open
	                                when exiting Schedule+
	
	REFERENCES
	==========
	
	A complete listing of all the SCHDPLUS.INI options is available in the Windows
	for Workgroups Resource Kit for version 3.1.
	
	Additional query words: 3.10 plus
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
