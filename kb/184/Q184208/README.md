---
layout: page
title: "Q184208: SMS: RCHELP Service Not Removed If Video Acceleration Disabled"
permalink: /kb/184/Q184208/
---

## Q184208: SMS: RCHELP Service Not Removed If Video Acceleration Disabled

{% raw %}

	Article: Q184208
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you install Microsoft Systems Management Server version 1.2 Service Pack 3
	(SP3), a new Remote Control Video Helper service, Rchelp.sys, is installed. This
	service assists with the Remote Control acceleration driver and is normally
	installed by default for all clients that are running Microsoft Windows NT
	regardless of whether their driver is actually accelerated.
	
	If the "Install Accelerated Screen Transfer on Windows NT Clients" option is not
	selected in Client Properties, Client Configuration Manager marks the Rchelp.sys
	file for deletion when the client restarts. The file is removed from the client,
	but the service entries in the client's registry are not removed and remain
	configured to start.
	
	When the Windows NT client restarts, the following message is displayed:
	
	  At least one service or driver failed during system startup.
	  Use Event Viewer to examine the event log for details.
	
	An Event 7026 is recorded in the client's Windows NT Event Viewer system log.
	
	CAUSE
	=====
	
	This occurs because the Client Configuration Manager service does not remove the
	RCHELP service from the client's registry, even though the file is removed.
	Running Upgrade.bat does not correct the problem.
	
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
	
	To work around this problem, leave the remote control video acceleration enabled,
	or manually change the registry key on the Windows NT client.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Find the following registry key:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\rchelp
	
	3. Change the Start value to 4. This disables the service, which prevents it
	  from loading during startup.
	
	4. Quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2 Service Pack 3.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120SP3
	Version           : :1.2 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
