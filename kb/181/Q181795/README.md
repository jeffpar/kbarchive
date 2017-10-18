---
layout: page
title: "Q181795: XADM: Directory Service Does Not Start with Event ID 1196"
permalink: kb/181/Q181795/
---

## Q181795: XADM: Directory Service Does Not Start with Event ID 1196

	Article: Q181795
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Directory service after halting
	the restore process or a failed restore process, the following event ID may
	appear in the Event Viewer Application log:
	
	  Event ID: 1196
	  Source: MSExchangeDS
	  Type: Information
	  Category: Internal Processing
	
	  Couldn't recover the restored Microsoft Exchange database (EDB). Cannot
	  continue. Error c7ff0007.
	
	CAUSE
	=====
	
	The Restore In Progress registry subkey exists. This is by design. The Restore
	In Progress registry subkey exists to stop the Microsoft Exchange Directory
	service from starting.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To work around this problem, remove the registry key and restart the Microsoft
	Exchange Directory service and all dependent services. The Restore In Progress
	registry subkey is located at:
	
	  HKEY_LOCAL_MACHINE/System/Current_Control_Set/Services/MSExchangeDS/ 
	  Restore In Progress
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
