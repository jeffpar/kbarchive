---
layout: page
title: "Q265152: BUG: RasDial() Function Gets Slower with Large Number of Redials"
permalink: /kb/265/Q265152/
---

## Q265152: BUG: RasDial() Function Gets Slower with Large Number of Redials

{% raw %}

	Article: Q265152
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,4.0
	Operating System(s): 
	Keyword(s): kbSDKWin32 kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows versions 2000, 2000 SP1 Professional 
	- Microsoft Windows versions 2000, 2000 SP1 Advanced Server 
	- Microsoft Windows versions 2000, 2000 SP1 Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If the RasDial function is used to make a large number of repetitive dials,
	performance begins to slow down after thousands of cycles. This problem occurs
	only when you are dialing numbers that do not use a phone-book entry.
	
	CAUSE
	=====
	
	Windows NT 4.0 and Windows 2000 use the registry to cache information for each
	successful RasDial attempt. After several thousand cycles, the registry grows
	very large and performance degrades as the operating system searches to the end
	of the registry hive.
	
	RESOLUTION
	==========
	
	You can work around this problem by disabling password caching.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To disable the password-caching feature for Remote Access Service (RAS), perform
	the following steps:
	
	1. Start Registry Editor (Regedt32.exe), and then select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RasMan\Parameters
	
	2. On the Edit menu, click Add Value, and then type the following information:
	
	  Value Name: DisableSavePassword
	  Value Type: REG_DWORD
	  Value Data: 1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this behavior, obtain the RasDial sample from the Microsoft Platform
	SDK and call it repetitively from a batch file, using command-line arguments for
	the user, password, domain, and telephone number. After several hours, notice
	that each connection takes longer and longer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSDKWin32 kbDSupport 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch kbWin2000AdvServSP1 kbWin2000ProSP1 kbwin2000ServSP1
	Version           : :2000,2000 SP1,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
