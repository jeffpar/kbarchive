---
layout: page
title: "Q241352: How to Prevent DNS Cache Pollution"
permalink: /kb/241/Q241352/
---

## Q241352: How to Prevent DNS Cache Pollution

{% raw %}

	Article: Q241352
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	DNS cache pollution can occur if Domain Name System (DNS) "spoofing" has been
	encountered. The term "spoofing" describes the sending of non-secure data in
	response to a DNS query. It can be used to redirect queries to a rogue DNS
	server and can be malicious in nature.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Windows NT 4.0
	--------------
	
	With Windows NT 4.0 Service Pack 4 (SP4) or later, a Windows NT-based DNS server
	can filter out the responses for these non-secure records.
	
	To enable this feature:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DNS\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: SecureResponses
	  Data Type: REG_DWORD
	  Value: 1 (To eliminate non-secure data)
	
	4. Quit Registry Editor.
	
	By default, this key does not exist and non-secure data is not eliminated from
	responses.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q198409 Microsoft DNS Server Registry Parameters, Part 2 of 3
	
	Windows 2000
	------------
	
	A Windows 2000-based DNS server can filter out the responses for these non-secure
	records.
	
	To enable this feature:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DNS\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: SecureResponses
	  Data Type: REG_DWORD
	  Value: 1 (To eliminate non-secure data)
	
	4. Quit Registry Editor.
	
	By default, this key does not exist and non-secure data is not eliminated from
	responses.
	
	NOTE: On Windows 2000, you can perform the same entry in the GUI. Use the
	following steps to do this:
	
	1. Open DNS Management Console by clicking Start, Programs, Adminstrative Tools,
	  DNS.
	
	2. Right click on the server name in the left window pane.
	
	3. Choose Properties.
	
	4. Choose the Advanced tab.
	
	5. Place a check in the box "Secure cache against pollution".
	
	Additional query words: spoof corruption
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
