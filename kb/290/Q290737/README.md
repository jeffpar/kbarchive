---
layout: page
title: "Q290737: Delay Connecting to a Printer Added in a Terminal Server Session"
permalink: /kb/290/Q290737/
---

## Q290737: Delay Connecting to a Printer Added in a Terminal Server Session

{% raw %}

	Article: Q290737
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Terminal Server users who use a printer on a print server may occasionally
	experience a long delay (from two minutes to hours) while adding a printer
	through a Terminal Server session. Users who view the printer queue status
	(which is already connected at this time) may receive a "Failed to connect,
	retrying" error message when the problem starts to occur. While the delay
	occurs, running the "net view" command for the print server may return error
	code 1727 ("The remote procedure call failed and did not execute"). During the
	delay, Terminal Server users who receive the error message may be able to
	connect to other print servers. Also, the print server that is involved may
	still allow new sessions from other computers and from other Terminal
	Server-based servers.
	
	CAUSE
	=====
	
	This behavior may occur if the the maximum open file handle limit (2048) is
	reached for the virtual circuit between the Terminal Server-based server and the
	print server. Typically, all Terminal Server sessions multiplex file handle
	operations over a single virtual circuit; it is possible to reach this limit.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, set the MultipleUsersOnConnection redirector parameter to
	0 on the Terminal Server-based server. Making this change forces each client to
	negotiate its own virtual circuit when connecting with a remote server. To set
	the MultipleUsersOnConnection redirector parameter to 0:
	
	1. Verify that the Terminal Server-based server is running Windows NT 4.0,
	  Terminal Server Edition, Service Pack 4 or later.
	
	2. On the server, start Registry Editor (Regedt32.exe).
	
	3. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Rdr\Parameters
	
	4. On the Edit menu, click Add Value.
	
	5. Add the following value:
	
	  Value name: MultipleUsersOnConnection
	  Data type: REG_DWORD
	  Data value: 0
	
	6. After you make this registry change, quit Registry Editor, and then restart
	  the server.
	
	MORE INFORMATION
	================
	
	The MultipleUsersOnConnection registry value was introduced in Service Pack 4 to
	overcome the 2,048 open-file limit. In Microsoft Windows 2000, this limit is
	changed to 8,192 and the MultipleUsersOnConnection registry value is not
	available.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q190162 Terminal Server and the 2048 Open File Limitation
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0 SP5,4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
