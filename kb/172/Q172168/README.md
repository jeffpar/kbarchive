---
layout: page
title: "Q172168: Run Programs Not Applied from Policy File"
permalink: /kb/172/Q172168/
---

## Q172168: Run Programs Not Applied from Policy File

{% raw %}

	Article: Q172168
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a policy file has User\Shell\Restrictions\Hide all items on desktop
	selected (enabled), programs specified by Computer\System\Run\Run do not run the
	first time a user logs in if a local profile does not exist. However, the
	programs will run at subsequent log on attempts or after a local profile has
	been created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: policy policies spe system editor startup registry ZAK ignored
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
