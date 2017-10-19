---
layout: page
title: "Q159196: XADM: Tasks Controlled by the IS Maintenance Schedule"
permalink: /kb/159/Q159196/
---

## Q159196: XADM: Tasks Controlled by the IS Maintenance Schedule

	Article: Q159196
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange information store maintenance schedule is a configurable
	block of time in which common tasks are launched for maintaining the information
	store database. This articles describes the tasks directly controlled by the
	information store maintenance schedule and the order in which they start.
	
	MORE INFORMATION
	================
	
	The information store maintenance schedule is set through the IS Maintenance tab
	within the properties of the Server object in the Microsoft Exchange Server
	site. The information store maintenance schedule is divided into 15-minute
	intervals, as are all schedule pages.
	
	NOTE: If you click "Always," this means every 15-minutes.
	
	At the start of each 15-minute interval the maintenance thread checks to see if
	the interval is selected. If the interval is selected, maintenance is performed.
	In the start of each task, the minimum time between cleanup is checked (these
	values are listed below and controlled by the registry settings documented only
	unless otherwise noted) and if the task was last completed within the minimum
	time, the task cannot be performed in this maintenance window (the minimum time
	interval overrides the information store maintenance schedule). After
	information store maintenance starts, it runs to completion.
	
	The following tasks are performed at IS Maintenance time:
	
	- Index Aging
	
	- Tombstone Maintenance
	
	- Message Expiration (Public Store Only)
	
	- Age Folder Tombstones (Public Store Only)
	
	- Update Server Versions (Public Store Only)
	
	These tasks are described below.
	
	Index Aging
	-----------
	
	Indexes created in database tables by the client (used for views) that have not
	been used for a given time are cleaned up at this time. The following registry
	entries are used to control index aging:
	
	Aging Keep Time:
	The minimum index age (milliseconds for Exchange 4.0 and 5.0, seconds for
	Exchange 5.5) before it is deleted, the default is 8 days.
	
	Aging Clean Interval:
	The minimum time interval (milliseconds) between index age task runs, the default
	is 24 hours.
	
	Reset Views:
	If this setting exists and it is non-zero, this forces all cached indexes to be
	deleted during the next index aging task run. When the index aging is complete,
	the Reset Views value sets to 0.
	
	For additional information on Index Aging, please see the following Microsoft
	Knowledge Base article:
	
	  Q159197 XADM: Controlling Folder Index Aging
	
	Event logging for index aging is controlled by the following registry settings:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ 
	  Diagnostics\Private\General\Views
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ 
	  Diagnostics\Public\General\Views
	
	NOTE: The above registry keys are one path, and has been wrapped for
	readability.
	
	The standard event log levels of 0 to 5 apply (5 is most verbose.)
	
	
	Tombstone Maintenance
	---------------------
	
	This is the process of compacting deleted message information used for local and
	Public Folder replication. The minimum time between tombstone maintenance task
	execution is 24 hours (not controllable through the registry).
	
	There is currently no event logging available for tombstone maintenance.
	
	Message Expiration (Public Store Only)
	--------------------------------------
	
	This is the process of expiring messages in Public Folders that are older than a
	specified time value. The setup for message expiration is in the Microsoft
	Exchange Server Administrator program on the "Age Limits" tab in the public
	Information Store container.
	
	The default minimum time between expiration task execution is 24 hours with the
	following registry setting override (in milliseconds).
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ 
	  ParametersPublic\Replication Expiry
	
	NOTE: The above registry key is one path, and has been wrapped for readability.
	
	Event logging is controlled by the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ 
	  Diagnostics\Public\Replication\Expiry
	
	NOTE: The above registry key is one path, and has been wrapped for readability.
	
	The standard event log levels of 0 to 5 apply (5 is most verbose).
	
	Age Folder Tombstones (Public Store Only)
	-----------------------------------------
	
	This is the process of removing folder tombstone entries that are older than a
	given time (default is 180 days). Folder tombstone information is used by public
	folder replication. The aging is required to prevent the folder tombstone list
	from growing unbounded. The default value of 180 days can be overridden with a
	registry variable (value is in days):
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ 
	  ParametersPublic\Replication Folder Tombstone Age Limit
	
	NOTE: The above registry key is one path, and has been wrapped for readability.
	
	The default minimum time between folder tombstone aging task execution is 24
	hours with no registry override.
	
	There is currently no event logging available for age folders tombstones.
	
	Update Server Versions (Public Store Only)
	------------------------------------------
	
	The Directory Service stores the Microsoft Exchange Server version number for
	each server. At regular intervals, this information is read from the Directory
	Service and stored in memory for use by the public store. This information is
	used to control interoperability between current and older versions of Microsoft
	Exchange Server. As servers are upgraded, this info needs to be updated. Default
	minimum time between server version updates is 24 hours, with no registry
	override.
	
	There is currently no event logging available for updating server versions.
	
	Article Index Expiration (Public Store Only)
	--------------------------------------------
	
	Default minimum time between article index expiration task execution is 60
	minutes with a registry override:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \MSExchangeIS\ParametersPublic\NNTP Article Cleanup Interval" (value is
	  in milliseconds).
	
	NOTE: The above registry key is one path, and has been wrapped for readability.
	
	The default article age is 7 days before it is expired with a registry override:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \MSExchangeIS\ParametersPublic\NNTP Article Expiry" (value in
	  milliseconds)
	
	NOTE: The above registry key is one path, and has been wrapped for readability.
	
	NOTE: The information store maintenance tasks all run under the same thread at
	THREAD_PRIORITY_BELOW_NORMAL. Each task runs sequentially. The thread is
	allocated when information store maintenance is performed, and freed when it is
	complete.
	
	NOTE: There are other tasks that can be considered maintenance tasks, but they
	are not controlled by the information store maintenance schedule.
	
	For more information on these tasks, please see the following Microsoft Knowledge
	Base article:
	
	  Q159306 XADM: IS Maintenance Tasks Not on IS Schedule
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
