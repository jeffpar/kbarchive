---
layout: page
title: "Q179009: SMS: DATALOADER Is Unable to Process MIFs"
permalink: /kb/179/Q179009/
---

## Q179009: SMS: DATALOADER Is Unable to Process MIFs

	Article: Q179009
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDataLoader smsdataloader
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Site updates and MIF files fail to process and there may be a problem with
	options set on the tempdb database.
	
	The following error may be included in the Dataloader log file if you have SQL
	tracing enabled:
	
	  SQL>>>>> You cannot run SELECT INTO in this database. The DBO
	  would have to run sp_dboption to enable this option.
	
	CAUSE
	=====
	
	The problem can occur when the Select Into/Bulk Copy option on the tempdb
	database is not selected. Systems Management Server requires that the Select
	Into/Bulk Copy option be selected for it to function.
	
	Please note that the Select Into/Bulk Copy option is a default selection for the
	tempdb database.
	
	RESOLUTION
	==========
	
	you can correct the problem by performing the following steps:
	
	1. Start SQL Enterprise Manager.
	
	2. Click Databases on the Manage menu.
	
	3. Double-click tempdb.
	
	4. Click the Options tab.
	
	5. Click Select Into/Bulk Copy and click OK.
	
	6. Stop and restart the MSSQLServer service.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To verify whether you have the problem, perform the following steps:
	
	1. On the site server, enable SQL Tracing by modifying the registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Tracing\Sql
	
	  Change the value from 0 to 1.
	
	2. Stop and restart the Systems Management Server Executive service by
	  double-clicking the Services icon in Control Panel.
	
	3. Open the Dataloader log file in Systems Management Server Trace utility.
	
	4. Process a MIF file and verify whether you see the error message:
	
	  You cannot run SELECT INTO in this database. The DBO would have to run
	  sp_dboption to enable this option.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDataLoader smsdataloader 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
