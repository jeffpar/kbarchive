---
layout: page
title: "Q130152: Windows Applications Fail When Using LMHosts File with NetBIOS"
permalink: /kb/130/Q130152/
---

## Q130152: Windows Applications Fail When Using LMHosts File with NetBIOS

	Article: Q130152
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Client Windows-based applications may be unable to connect to server
	applications over routers using TCP/IP, even though LMHOSTS entries exist for
	the servers. For example, you may be able to use the NET USE command to connect
	to a remote machine from the MS-DOS Command Prompt, but cannot connect from file
	manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for
	Workgroups, version 3.11a. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To work around this problem, use the #PRE flag for each entry in LMHOSTS to
	ensure they are preloaded into the NetBIOS name cache.
	
	Additional query words: 3.11 prodtcp32 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311
	Version           : WINDOWS:
	
	=============================================================================
	
