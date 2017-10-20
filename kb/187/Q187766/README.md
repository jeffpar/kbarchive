---
layout: page
title: "Q187766: Slow Performance Saving Documents to FPNW Server"
permalink: /kb/187/Q187766/
---

## Q187766: Slow Performance Saving Documents to FPNW Server

{% raw %}

	Article: Q187766
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Saving documents may take a very long time when the destination is a File and
	Print Services for NetWare (FPNW) volume. Although this behavior may occur in
	other applications, it can easily be seen using Microsoft Word 6.0.
	
	CAUSE
	=====
	
	When File and Print Services for NetWare encounters a sharing violation, it will
	retry the file operation on the file multiple times, with a short delay between
	each retry, before returning an error to the application. The total delay per
	file operation before a sharing violation error is returned to a client is 3
	seconds. This is because of a server optimization used by both the Server
	service and the FPNW service in Windows NT Server.
	
	A lengthy delay is seen in Microsoft Word because of the fact that Word will also
	retry the file operation up to 12 times when encountering a sharing violation
	while saving a file. This causes up to a 36 second delay when saving a file with
	Word to an FPNW server.
	
	RESOLUTION
	==========
	
	Sometimes, it may be preferable to disable this optimization. To do this, it is
	necessary to make the following registry modification.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \FPNW\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Add the following:
	  Value Name: LockRetryCount
	  Data Type:  REG_DWORD
	  Data:       0 (Default: 5)
	
	4. Stop and restart the FPNW service.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
