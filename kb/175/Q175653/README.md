---
layout: page
title: "Q175653: Err Msg: At Least One Service or Driver Failed..."
permalink: kb/175/Q175653/
---

## Q175653: Err Msg: At Least One Service or Driver Failed...

	Article: Q175653
	Product(s): Microsoft Windows NT
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the
	"Restoring the Registry" online Help topic in Regedit.exe or the
	"Restoring a Registry Key" online Help topic in Regedt32.exe.
	
	SYMPTOM
	
	When you start Windows NT, you may receive the following error message:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	When this occurs, you may see the following error message in the system
	log in Event Viewer
	
	  Could not start <service name> service on \\<computer name>
	  Error 0005: Access is Denied
	
	where <service name> is the name of the service you are
	attempting to start, and <computer name> is the name of your
	computer.
	
	The following error message may also appear in system log:
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Description: <service name> service failed to start due to the
	  following error: The system cannot find the file specified.
	
	CAUSE
	=====
	
	These error messages can occur if the ImagePath string value has a data value
	that contains a long file name with spaces in the following registry key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\<service name>
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT. Microsoft cannot
	guarantee that problems resulting from the incorrect use of Registry Editor can
	be solved. Use Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this error message, change the ImagePath string value by typing
	quotation marks (") around the data value in the following registry key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\<service name>
	
	MORE INFORMATION
	================
	
	For additional information about this issue, please see the following article in
	the Microsoft Knowledge Base:
	
	ARTICLE-ID: Q179147
	TITLE : Access Denied Starting Program
	
	Additional query words: prodnt kb3rdparty third party service
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 1.00
	Hardware          : x86
	
	=============================================================================
	
