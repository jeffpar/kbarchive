---
layout: page
title: "Q241046: Cannot Create a Memory.dmp File on Computers with over 4 GB RAM"
permalink: /kb/241/Q241046/
---

## Q241046: Cannot Create a Memory.dmp File on Computers with over 4 GB RAM

{% raw %}

	Article: Q241046
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv diskmem kbDiskMemorykbfaq
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your computer contains more than 4 gigabytes (GB) of Random Access Memory
	(RAM), you may not be able to get a complete memory dump in a Memory.dmp file.
	
	CAUSE
	=====
	
	This issue can occur if your computer contains 4096 megabytes (MB) of RAM. The
	paging file size is limited to 4095 MB.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	Windows NT 4.0
	--------------
	
	In Windows NT 4.0, use the /maxmem switch in the Boot.ini file to limit the
	amount of memory Windows NT uses or remove RAM so that the system has less than
	4095 MB of RAM. For additional information about the proper use of the /maxmem
	switch, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q108393 MAXMEM Option in Windows NT BOOT.INI File
	
	Windows 2000
	------------
	
	For additional information about how to resolve this issue when using Windows
	2000, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q274598 Windows 2000 Does Not Enable Complete Memory Dumps Between 2 and 4
	  Gigabytes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv diskmem kbDiskMemory kbfaq
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
