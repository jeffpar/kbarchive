---
layout: page
title: "Q169770: XADM: How To Move Tracking Logs and Directory"
permalink: /kb/169/Q169770/
---

## Q169770: XADM: How To Move Tracking Logs and Directory

{% raw %}

	Article: Q169770
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	You can move the Tracking.log directory from one drive to another, for example,
	<Drive>:\Exchsrvr\Tracking.log to <Newdrive>:\Exchsrvr\Tracking.log.
	Moving the tracking logs to another drive may be required for backup purposes
	and for access by other applications.
	
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
	
	To move the Tracking.log directory, perform the following steps:
	
	1. In Control Panel Services, stop the Exchange System Attendant service.
	
	2. Copy the <drive>:\Exchsrvr\Tracking.log directory to another drive.
	
	3. Change the following registry setting to point to the new location that in
	  step #2:
	
	  Hkey_local_machine\system\current control set\services\MS
	  ExchangeSA\Parameters\Log Directory
	
	  = <Newdrive>:\Exchsrvr\Tracking.log
	
	4. Restart the System Attendant service.
	
	5. Remove the Tracking.log share currently on the Exchange Server and re-share
	  the new Exchsrvr\Tracking.log directory with the name:
	
	  tracking.log
	
	  If you receive an error when deleting the share, check to see if another
	  Administrator is currently trying to track messages on the Exchange Server.
	
	Additional query words: Tracking log move
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
