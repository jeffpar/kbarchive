---
layout: page
title: "Q222161: Program File with Duplicate Name Prevents Service from Starting"
permalink: /kb/222/Q222161/
---

## Q222161: Program File with Duplicate Name Prevents Service from Starting

{% raw %}

	Article: Q222161
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your Windows NT-based computer, a service may not start.
	
	CAUSE
	=====
	
	This behavior can occur if a program file in the %SystemRoot% folder has the
	same name as a Windows NT service that is located in the %SystemRoot%\System32
	folder. When this occurs, the program in the %SystemRoot% folder is started
	instead of the service with the same name.
	
	RESOLUTION
	==========
	
	To resolve this behavior, move the file whose name is the same as the service
	that should start to another folder.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	All users who are authorized to log on locally to a Windows NT-based computer
	have write access to the %SystemRoot% folder and can cause this issue to occur
	by placing a file in the %SystemRoot folder. To minimize the risk of this issue,
	you may want to implement stringent security guidelines on your computers
	running Windows NT. For additional information about Windows NT security, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/default.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
