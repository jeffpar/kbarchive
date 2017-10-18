---
layout: page
title: "Q322314: XADM: Information Store Does Not Start After Online Restore"
permalink: kb/322/Q322314/
---

## Q322314: XADM: Information Store Does Not Start After Online Restore

	Article: Q322314
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you finish an online restore of Microsoft Exchange Server 5.5, and you try
	to start the information store service, you may receive the following error
	message:
	
	  Windows could not start the Microsoft Exchange Information Store on the Local
	  Computer. For more information, review the System Event Log. If this is a
	  non-Microsoft Service, contact the service vendor, and refer to
	  service-specific error code -939523531
	
	NOTE: The service-specific error code may vary.
	
	The information store service does not start. The system attendant and directory
	service start without any problems.
	
	When you view the Application Log in Event Viewer, you may find events similar to
	the following:
	
	  Event Type:
	  Error Event Source: ESE97
	  Event Category: Logging/Recovery
	  Event ID: 199
	  Date: 4/11/2001
	  Time: 10:34:34 PM
	  User: N/A
	  Computer: servername
	  Description: (210) Transaction logfile gap in sequence detected. Log file
	  edb0019D.log and possibly subsequent log files are missing. Restore the
	  missing logfiles to recover from this condition.
	
	-or-
	
	  Event Type:
	  Error Event Source: MSExchangeIS
	  Event Category: Recovery
	  Event ID: 1081
	  Date: 4/11/2001
	  Time: 10:34:34 PM
	  User: N/A
	  Computer: servername
	  Description: Unable to recover the database because error 0xc8000235 occurred
	  after a restore operation.
	
	-or-
	
	  Event Type:
	  Error Event Source: MSExchangeIS
	  Event Category: General Event
	  ID: 5000
	  Date: 4/11/2001
	  Time: 10:34:34 PM
	  User: N/A
	  Computer: servername
	  Description: Unable to initialize the Microsoft Exchange Information Store
	  service. Error 0xc8000235.
	
	RESOLUTION
	==========
	
	To resolve this issue, you must first determine the information store log file
	location, determine which of the log are files the restoration requires, and
	then delete any unnecessary logs. To do this, follow these steps.
	
	Determine Information Store Log File Location
	---------------------------------------------
	
	1. Start the Microsoft Exchange Server Administrator program.
	
	2. Inside the Configuration, Servers container, click your server, and then
	  click Properties on the standard toolbar.
	
	3. In the Properties dialog box, click the Database Paths tab.
	
	4. Make a note the location of the information store transaction logs.
	
	5. Click Cancel.
	
	6. Quit the Administrator program.
	
	Determine Which Log Files the Restoration Requires
	--------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. In Registry Editor, locate the following subkey in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\RestoreInProgress
	
	  NOTE: The RestoreInProgress registry key maintains information about the
	  restore environment during the restore process. This information includes
	  tracking the Exchange Server transaction log files.
	
	4. Notice the list of log files in the right pane, and then make a note of the
	  first and last log files that appear in this list. This represents the range
	  of log files that you have to have to complete the restore. For example, if
	  the lowest log file listed is Edb00001.log and the highest log file listed is
	  Edb00005.log, the log files that you must have to finish the restoration are
	  Edb00001.log, Edb00002.log, Edb00003.log, Edb00004.log, and Edb00005.log.
	
	5. Quit Registry Editor.
	
	Remove Unnecessary Log Files
	----------------------------
	
	1. Start Windows Explorer.
	
	2. Locate the folder that you noted in step 4 of the "Determine Information
	  Store Log File Location" procedure.
	
	3. Select the Edb.chk file, and select all the log files in this folder that
	  have names that start with "Edb" except those you noted in step 4 of the
	  "Determine Which Log Files the Restoration Requires" procedure earlier.
	
	4. Right-click the selected files and then click Cut.
	
	5. On the File menu, point to New, and then click Folder.
	
	6. Type "Temp" (without the quotation marks), and then press ENTER.
	
	7. Right-click the Temp folder, and then click Paste.
	
	8. Quit Windows Explorer.
	
	9. Start the information store service.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q272234 Overview of Maintenance, Backup, and Disaster Recovery for Exchange
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
