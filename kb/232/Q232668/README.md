---
layout: page
title: "Q232668: SNA Clients Experience Slow Response Time with Terminal Server"
permalink: /kb/232/Q232668/
---

## Q232668: SNA Clients Experience Slow Response Time with Terminal Server

{% raw %}

	Article: Q232668
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Clients connecting to SNA Server through a computer running Windows NT Server
	4.0, Terminal Server Edition may experience slow response time.
	
	MORE INFORMATION
	================
	
	If SNA client software is installed on a Terminal Server computer, response time
	may slow down when more than a certain number of concurrent clients are
	connected. The slowdown only occurs when clients are using emulation software
	installed on the Terminal Server computer. There is a registry entry which
	controls how many threads can be open, thus controlling the number of operations
	that can be outstanding at any given time.
	
	For example, if the MaxThreads entry is set to decimal value 17, the slow
	response time occurs when the eighteenth user tries to connect.
	
	To allow more threads to be open, increase the value of the MaxThreads parameter
	in the registry. This registry entry should be added on the Terminal Server
	computer, not on the SNA Server.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Lanmanworkstation\parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: MaxThreads
	  Data Type: REG_DWORD
	  Value: 0x11 (range is 0-FF hex, but the default is 0x11)
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1,4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
