---
layout: page
title: "Q199168: System Cannot Log You On - c0000017"
permalink: /kb/199/Q199168/
---

## Q199168: System Cannot Log You On - c0000017

{% raw %}

	Article: Q199168
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After a server has been running for a period of time, users who try to log on
	locally may receive the following error message:
	
	  System cannot log you on c0000017.
	
	
	Users connecting to the server over the network may receive the following or
	other related RPC errors:
	
	  RPC Server Busy
	
	CAUSE
	=====
	
	This can be caused by a memory leak on the server in question. In most cases,
	the cause is a third-party application, such as a backup solution, or
	administrative package running as a service that drains the system memory
	resources over time.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Restarting the computer usually alleviate the error messages and allows access
	beyond the logon screen. It may be necessary to run a Performance Monitor log to
	determine the memory allocation.
	
	In the event that restarting the server does not allow an interactive logon, you
	may find it necessary to connect remotely, if possible, and to change any
	third-party services Startup value to 0x3 (Manual Startup). You can find the
	keys in the following registry path:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<third-party service>
	
	Select the Start value for the service name and change the value to: 0x3 Hex. On
	the next restart of the server, these services will now be set to manual rather
	than automatic.
	
	Note: The above operation can be accomplished with Regedt32.exe by selecting
	Registry and then select Computer.
	
	MORE INFORMATION
	================
	
	To allow for an incident-free shutdown of the affected computer, use Shutgui.exe
	from a remote workstation.
	
	REFERENCES
	==========
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q150934 How to Create a Performance Monitor Log for NT Troubleshooting
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
