---
layout: page
title: "Q186787: XADM: The Extension 'SMTP' Could Not Be Loaded"
permalink: /kb/186/Q186787/
---

## Q186787: XADM: The Extension 'SMTP' Could Not Be Loaded

	Article: Q186787
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view the Exchange Server Internet Mail Service properties in
	the Exchange Server Administrator program, one of the following error messages
	may be displayed:
	
	  Extension 'SMTP' could not be loaded.
	  The error 87 occurred while formatting windows NT error 182.
	  Microsoft Windows NT ID No 0xc00200b6
	
	  -or-
	
	  Extension 'SMTP' could not be loaded.
	  The specified module could not be found.
	  Microsoft Windows NT
	  ID no: 0xc002007e
	
	CAUSE
	=====
	
	The error messages in the "Symptoms" section of this article occur if the
	Mfc42.dll file is missing or corrupted.
	
	WORKAROUND
	==========
	
	To work around this problem, copy the Mfc42.dll file from the Exchange Server CD
	to the <SystemRoot>\System32 subfolder of the computer running the
	Exchange Server Administrator program.
	
	Additional Workaround
	---------------------
	
	Make sure that the Add-ins subfolder is shared.
	
	NOTE: You may need to check all of the drives for the drive that contains the
	shared folders under this subfolder. The standard shared subfolders in the
	Exchsrvr folder are: Add-ins, Address, Connect, RES, and Tracking.log.
	
	If the Add-ins subfolder is not shared, share it as follows:
	
	1. In Windows Explorer, click the Exchsrvr\Add-ins subfolder.
	
	2. Right-click the subfolder, and then click Sharing.
	
	3. In the Add-ins Properties dialog box, click Share As. Make sure that the
	  Share name and Comment boxes contain the following information:
	
	  Share name: Add-ins
	
	  Comment: "Access to EDK objects" (with the quotation marks)
	
	4. Click Permissions. Make sure that the "Access through share permissions"
	  dialog box has the following permissions set:
	
	  Everyone (which is a global group - with the globe icon) as Read
	  <Exchange Server service account name> (individual icon) as Full
	  Control
	  <Local administrators> (local group icon) as Full Control
	
	5. Click OK.
	
	6. Click Apply, and then click OK.
	
	This permission may be turned off during a service pack update or a
	reinstallation, which can cause this problem.
	
	MORE INFORMATION
	================
	
	This file can be found in three different locations on the Exchange Server CD:
	
	  E:\Server\Setup\Alpha\Mfc42.dll         1,997 KB
	  E:\Server\Setup\I386\Mfc42.dll          920 KB
	  E:\Server\Support\Autorun\Reskit\Migrat 988 KB
	
	Make sure that you copy this file from the folder that corresponds to your
	operating system. Do not use the file that is located in the Migrat folder.
	
	Additional query words: DLL SMTP
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
