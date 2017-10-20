---
layout: page
title: "Q264559: When You Try to Change Settings, Error Message Reports That the"
permalink: /kb/264/Q264559/
---

## Q264559: When You Try to Change Settings, Error Message Reports That the

{% raw %}

	Article: Q264559
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to modify adapter or protocol settings under Network in Control
	Panel, or when you try to change the startup parameters of a service under
	Service in Control Panel, you may receive the following error message:
	
	  The Service Database is Currently Locked
	
	CAUSE
	=====
	
	This problem can be caused by a service that has failed to start properly,
	causing the Service Control Manager to maintain a lock on the service database
	on behalf of the service.
	
	RESOLUTION
	==========
	
	Use the Windows NT 4.0 Diagnostic utility (Winmsd.exe) program to try to
	identify the service that is having problems starting. Run Winmsd.exe and, in
	the Services report, look for a service that has the status of "Start Pending".
	After you locate the particular service that is not starting correctly, edit the
	registry to manually set that service's startup parameters to "disabled"
	(provided it is not a critical Windows NT 4.0 service).
	
	If you are unable to identify the particular problem service, you may have to
	disable all non-essential services one at a time to find out which service is
	responsible for locking the Service Database.
	
	MORE INFORMATION
	================
	
	To manually disable a service in the registry, follow these steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Run the Registry Editor program (Regedt32).
	
	2. Navigate to the following location in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\service name\Start
	
	3. In the right pane of the Registry Editor window, double-click the registry
	  value Start.
	
	4. To change the startup type to "disabled", type "0x4" (without the quotation
	  marks) in the Data box and then click OK.
	
	5. Quit Registry Editor, and then restart the computer.
	
	6. In Control Panel, reset the startup parameters of the service.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
