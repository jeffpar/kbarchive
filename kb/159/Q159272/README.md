---
layout: page
title: "Q159272: RESKIT: RConsole Leaks Process Handles"
permalink: /kb/159/Q159272/
---

## Q159272: RESKIT: RConsole Leaks Process Handles

{% raw %}

	Article: Q159272
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Remote Console Server service from the Windows NT Resource Kit,
	you may notice that Windows NT is unable to start any new process after you run
	the service for a period of time. For example, Windows NT is unable to launch
	any new applications or the command shell from the server console.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, stop the Remote Console Server service to free all used
	handles and allow new processes to start.
	
	Note: The Remote Console Server has been updated to version 1.0b. This version
	resolves the memory leak issue. The file is available on our FTP server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: RConsole RClient leak handle
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
