---
layout: page
title: "Q175353: XADM: System Attendant Says Started and Cannot be Stopped"
permalink: kb/175/Q175353/
---

## Q175353: XADM: System Attendant Says Started and Cannot be Stopped

	Article: Q175353
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Manually starting the Microsoft Exchange Server system attendant may return a
	pop-up dialog box with the following error:
	
	  Could not start the Microsoft Exchange System Attendant service on \\Server.
	  2186: The service is not responding to the control function.
	
	When you check Control Panel, Services, you may find the system attendant as
	started, but the Start and Stop buttons are unavailable. If you look in the
	Event Viewer application log, nothing is logged.
	
	CAUSE
	=====
	
	This will happen if the system attendant cannot access the application event log
	because the data type or log path is incorrect.
	
	RESOLUTION
	==========
	
	To resolve this issue, perform the following steps:
	
	1. Start the Windows NT Registry Editor, Regedt32.exe.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys and
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Verify that the following registry is correctly pointing to the event log
	  application:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog
	  \Application\File
	
	2. Verify that the data type is REG_EXPAND_SZ.
	
	3. Also verify that the path to the AppEvent.Evt file is correct. By default
	  this value is:
	
	  %SystemRoot%\System32\Config\AppEvent.Evt
	
	  If the value is incorrect, follow these steps to correct it:
	
	  a. On the Edit menu, click Add value.
	
	  b. In the Key name field, enter:
	
	     File
	
	     leave the class blank, and click OK.
	
	  c. In the Value field, enter the following:
	
	    %SystemRoot%\System32\Config\AppEvent.Evt
	
	  d. In the Data Type field, select REG_EXPAND_SZ.
	
	  e. Click OK.
	
	  f. Verify the correctness of the entered value.
	
	4. Select the incorrect value and on the Edit menu, click Delete.
	
	5. Close Regedt32.exe
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbprb
	
	=============================================================================
	
