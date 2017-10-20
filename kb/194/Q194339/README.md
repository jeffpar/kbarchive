---
layout: page
title: "Q194339: WINS Event ID 4183"
permalink: /kb/194/Q194339/
---

## Q194339: WINS Event ID 4183

{% raw %}

	Article: Q194339
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
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
	
	When you configure a Pull relationship between two or more WINS servers, if an
	actual start time for the Pull parameter has not been configured using the
	hh:mm:ss format, WINS will generate Event ID 4183 in the Event Viewer. This
	Event ID will appear on any WINS server that has not been configured with a
	start time under the Pull configuration parameters.
	
	CAUSE
	=====
	
	The description of Event ID 4183 appears as follows:
	
	  The format of time should be hh:mm:ss. Check value of "SpTime" in the
	  Registry.
	
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
	
	If you look in the registry, you will find the following key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Wins\Partners
	\Pull\<Pull_Partner>\SpTime
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	This data value will be "--" if the start time has not been configured. The "--"
	is what is causing the event ID.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Run WINS Manager.
	
	2. Click Server and select Replication Partners from the drop down menu.
	
	3. Select the WINS server that you have configured as a Pull partner.
	
	4. In the lower left portion of the Replication Partners window, you will find
	  Replication Options. Click the Configure box.
	
	5. In Start Time, type in a start time in the hh:mm:ss format.
	
	6. Stop and restart the WINS Server service.
	
	The error message will no longer be reported.
	
	Additional query words: WINS Replication 4183 event
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
