---
layout: page
title: "Q244524: XADM: How to Configure the Exchange Online Defragmentation Time"
permalink: /kb/244/Q244524/
---

## Q244524: XADM: How to Configure the Exchange Online Defragmentation Time

{% raw %}

	Article: Q244524
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Exchange Server online defragmentation against the information store databases
	starts immediately after information store maintenance tasks have been
	completed. By default, the online defragmentation process runs for a minimum of
	fifteen minutes and it only runs for up to one hour after the information store
	maintenance scheduled window time. You can change these times by editing the
	registry.
	
	NOTE: If information store maintenance does not complete any tasks against the
	information store databases and a previous online defragmenation finished in
	full, online defragmenation does not run.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To configure the length of time that online defragmentation runs after the
	information store maintenance window:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: OLD Completion Time
	  Data Type: REG_DWORD
	  Value: Set the value to the number of seconds that you want to allow an
	  overrun of the information store maintenance window (0 for no overrun, and
	  the default is one hour: 1*60*60 seconds).
	
	4. Add this value to the public information store as well in the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	5. If you want to override the minimum length of time that online
	  defragmentation runs, add the following value:
	
	  Value Name: OLD Minimum RunTime
	  Data Type: REG_DWORD
	  Value: Set the value to the minimum number of seconds that you want to let the
	  old process run (the default is fifteen minutes: 15*60 seconds).
	
	6. Quit Registry Editor.
	
	NOTE: When the information store maintenance tasks and online defragmentation are
	complete, there is an opportunity for the cycle to begin again if there is time
	left in the information store maintenance window. A check is made every fifteen
	minutes to make sure that the server is in the information store maintenance
	time frame.
	
	Additional query words: OLD IS Maintenance
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
