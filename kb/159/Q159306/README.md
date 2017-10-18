---
layout: page
title: "Q159306: XADM: IS Maintenance Tasks Not on IS Schedule"
permalink: kb/159/Q159306/
---

## Q159306: XADM: IS Maintenance Tasks Not on IS Schedule

	Article: Q159306
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server Information Store (IS) has many tasks that run in
	the background and perform maintenance-type operations. This article outlines
	the maintenance tasks that are not controlled by the IS Maintenance schedule.
	For additional information on the tasks controlled by the IS Maintenance
	Schedule, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q159196 XADM: Tasks Controlled by the IS Maintenance Schedule
	
	MORE INFORMATION
	================
	
	The Information Store process performs the following maintenance tasks:
	
	Background Cleanup
	------------------
	
	Background cleanup is the process of reclaiming empty space used by deleted
	folders, messages, and attachments. There is a registry variable that controls
	the rate at which this task runs (not exposed in the Microsoft Administrator
	program):
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	  \ParametersPublic\Background Cleanup
	  (value in milliseconds)
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\
	  ParametersPrivate\Background Cleanup
	  (value in milliseconds)
	
	Event logging is controlled by the following registry settings (also exposed in
	the Microsoft Exchange Administrator Program on the Diagnostic Logging tab for
	the Private/Public Information Store):
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	  \Diagnostics\Private\General\Background Cleanup"
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	  \Diagnostics\Public\General\Background Cleanup"
	
	Database Compaction
	-------------------
	
	Database compaction is a function of the JET database engine, and is not under
	the stores control. There is some amount of online compaction that goes on in
	the background, as needed. This process cleans up the space made available by
	background cleanup. There are times that compaction will not be able to
	efficiently keep up and it will log the following Event ID in the application
	log:
	
	  Event ID = 63
	  Source = EDB
	  Category = General
	  Description = MSExchangeIS ((44)) Background Cleanup skipped pages. Database
	  may benefit from defragmentation
	
	This Event ID means that an offline defragmentation of the Information Store
	database should be scheduled and performed. Offline defragmentation is performed
	by using the Edbutil.exe utility with the "/d" option. This process is performed
	against each database separately (Priv.edb for the private store, Pub.edb for
	the public store). For more information on performing offline defragmentation,
	see the Microsoft Exchange Server Administrator's Guide, Chapter 17.
	
	NOTE: In Microsoft Exchange Server, versions 5.5 and 2000, Eseutil.exe replaces
	Edbutil.exe. For additional information on using Eseutil, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q182903 XADM: ESEUTIL Command Line Parameters
	
	For more information , see the following Knowledge Base Article:
	
	Storage Warnings
	----------------
	
	There is a schedule page for checking user's storage limits, this is located in
	the Site's Configuration Container in the properties of the Information Store
	Site Configuration object under the Storage Warnings tab. A separate background
	thread that is launched according to the schedule page and runs until completion
	performs this check.
	
	Periodic Background Activities
	------------------------------
	
	This task runs at 10-minute intervals, and has a thread allocated to it for the
	duration. It performs a sequential list of tasks much like IS maintenance.
	
	- Re-read Information Store storage quota values from the Microsoft Exchange
	  Directory.
	
	- Flush table row counts to the database.
	
	- Flush cached Exchange Server Directory information.
	
	- Re-read per-user Mailbox storage quota values from the Exchange Server
	  Directory.
	
	- Perform other miscellaneous store functions.
	
	These tasks, like IS maintenance, do not all run at 10-minute intervals; each
	task has its own minimum frequency value, which is usually between 1 and 24
	hours, depending on the task.
	
	A number of other background activities happen at scheduled or regular intervals,
	such as public folder replication, flushing of cached per user read/unread info,
	expiration of unread messages, and so on. In general, these functions allocate a
	thread when the task starts and free it when it completes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
