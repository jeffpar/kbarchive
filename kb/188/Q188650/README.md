---
layout: page
title: "Q188650: XADM: Restore of Private-Only Server Fails with Arcserve"
permalink: /kb/188/Q188650/
---

## Q188650: XADM: Restore of Private-Only Server Fails with Arcserve

{% raw %}

	Article: Q188650
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After restoring only the private information store database of Exchange Server
	to a recovery computer, the information store service will fail to start with
	server specific error 3355445011. This failure will occur using ARCServe version
	6.5, Build 620, with the Exchange Agent version 2.0, Build 53.
	
	CAUSE
	=====
	
	The cause of the failure is an incorrect setting in the Restore In Progress key
	in the registry during the restore process.
	
	WORKAROUND
	==========
	
	After restoring the information store with the ARCServe program, and before
	starting the information store service, the registry will need to be modified in
	two places.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys and
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your EmergencyRepair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	   HKEY_LOCAL_Machine\System\CurrentControlSet\Services\MSExchangeIS
	   \Restore in Progress
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Double-click on the EDB_RstMap entry, and delete the two lines that reference
	  the Pub.edb file, then click OK.
	
	4. Double-click on the EDB_RstMap Size entry, and change the value from 0x2 to
	  0x1, then click OK.
	
	5. Quit Registry Editor.
	
	NOTE: There is no need to restart the Exchange Server computer after this change
	has been made to the Registry.
	
	The information store service should now be able to start.
	
	MORE INFORMATION
	================
	
	Cheyenne is the manufacturer for the ARCServe backup software, and is aware of
	the problem.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
