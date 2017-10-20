---
layout: page
title: "Q245117: Administrative Shares Do Not Appear on Server."
permalink: /kb/245/Q245117/
---

## Q245117: Administrative Shares Do Not Appear on Server.

{% raw %}

	Article: Q245117
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view the administrative shares (for example, c$, d$, admin$,
	and IPC$) from a computer running Microsoft Windows NT Server 4.0, the shares
	may not be displayed. When you restart the computer, you may still not be able
	to view the shares.
	
	CAUSE
	=====
	
	This behavior can occur if the AutoShareServer and AutoShareWks values in the
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanmanServer\Parameters key
	are set to 0 (zero).
	
	RESOLUTION
	==========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, configure the AutoShareServer and AutoShareWks registry
	values to use the value data 1 (one):
	
	1. Start Registry Editor (Regedt32), and then locate the following registry key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanmanServer\Parameters
	
	2. Configure the AutoShareServer and AutoShareWks values to 1 (one).
	
	3. Quit Registry Editor.
	
	4. Restart the computer to make the shares active.
	
	Additional query words: share admin
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
