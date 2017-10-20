---
layout: page
title: "Q64039: Refresh NIF Menus When ADMIN Account Is Downgraded"
permalink: /kb/064/Q64039/
---

## Q64039: Refresh NIF Menus When ADMIN Account Is Downgraded

{% raw %}

	Article: Q64039
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	BUG: 8029
	
	SYMPTOMS
	========
	
	When an ADMIN account is downgraded (under NIF) to a USER or GUEST account, NIF
	detects the change correctly (the user no longer has the access permissions he
	or she had while his or her account was an ADMIN account). However, the menus
	still allow the user to access most of the screen groups he or she could access
	before. NIF should update the menus to reflect the change in the user's
	privileges.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in OS/2 LAN Manager versions 2.x.
	We are researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 2.00 2.10 2.10a 2.20 keep net
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
