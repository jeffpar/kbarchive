---
layout: page
title: "Q170472: XADM: Access Denied Error When Starting Exchange Administrator"
permalink: /kb/170/Q170472/
---

## Q170472: XADM: Access Denied Error When Starting Exchange Administrator

{% raw %}

	Article: Q170472
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Administrator program you may receive the
	following error message:
	
	  Window Title: Microsoft Exchange Administrator Access denied.
	  Microsoft Windows NT ID no: 0xc0020005
	
	You also receive this error when you try to run Microsoft Exchange Server Setup.
	
	CAUSE
	=====
	
	The error occurs when the Administrator program cannot access the application
	event log because the data type is incorrect.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this issue verify that the entries in the registry key exist and the
	values are correct. If not, modify the registry key.
	
	1. Start Registry Editor (Regedt32.exe), and go to the following registry key:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog
	     \Application\File:REG_EXPAND_SZ:
	
	2. Verify that the registry value exists. Create it if necessary.
	
	3. Verify that it is assigned the REG_EXPAND_SZ data type. Change the data type
	  if needed.
	
	4. Verify that the string assigned is the full path to the Appevent.evt file.
	  The default value is "%SystemRoot%\System32\Config\AppEvent.Evt" (without the
	  quotation marks). Edit the string if necessary.
	
	5. Quit Registry Editor.
	
	Additional query words: XADM Admin
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
