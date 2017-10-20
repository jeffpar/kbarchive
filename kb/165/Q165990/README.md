---
layout: page
title: "Q165990: Windows 95 Policies Do Not Work Without User Profiles"
permalink: /kb/165/Q165990/
---

## Q165990: Windows 95 Policies Do Not Work Without User Profiles

{% raw %}

	Article: Q165990
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a system policy for Windows 95-based client computers, you may
	find that the policy is not implemented even though the Config.pol file is
	placed in %systemroot%\system32\repl\import\scripts (the Netlogon share) on
	every domain controller and users have adequate permissions to access the
	policy. A protocol analysis trace taken with Network Monitor shows the policy
	file being opened and read without an error, however, no element of the policy
	will take effect on the Windows 95 client computer.
	
	CAUSE
	=====
	
	This behavior can occur if User Profiles are not enabled.
	
	RESOLUTION
	==========
	
	To resolve this issue, enable User Profiles. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Passwords, and then click the User Profiles tab.
	
	3. Click "Users can customize their preferences and desktop settings. Windows
	  switches to your personal settings whenever you log in," and then click OK.
	
	4. Click Yes when you are prompted to restart your computer.
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 1.00
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
