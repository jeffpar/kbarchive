---
layout: page
title: "Q196398: XADM: Cannot Open Directory Object on Remote Server"
permalink: kb/196/Q196398/
---

## Q196398: XADM: Cannot Open Directory Object on Remote Server

	Article: Q196398
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
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
	
	When you attempt to open remote directory objects using the Exchange Server
	Administrator program, the following pop-up error message is displayed
	
	  Access Denied. The data to be configured could not be loaded.
	
	The additional message syntax will vary according to the object that is being
	opened.
	
	This does not occur opening local directory objects.
	
	CAUSE
	=====
	
	Microsoft Windows NT Service Pack 3 includes a new feature that can deny remote
	anonymous access to the registry. If this has been enabled, opening any
	directory object that attempts to access the remote registry will fail (for
	example, Diagnostic Logging).
	
	WORKAROUND
	==========
	
	To work around this problem, remove this feature from the remote registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the RestrictAnonymous value under the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\LSA
	
	3. Delete the following object:
	
	     Value Name: RestrictAnonymous
	     Data Type:  REG_DWORD
	     Value:      1
	
	4. Quit Registry Editor and restart the computer for the change to take effect.
	
	MORE INFORMATION
	================
	
	Additional details on this feature can be found in Q143474.
	
	Additional query words: SP3 security diagnostic logging
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
