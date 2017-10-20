---
layout: page
title: "Q160492: Administrator Privilege Required to Administer DNS"
permalink: /kb/160/Q160492/
---

## Q160492: Administrator Privilege Required to Administer DNS

{% raw %}

	Article: Q160492
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Only users who have Administrator privileges can administer the Windows NT 4.0
	Domain Name System (DNS) Server.
	
	CAUSE
	=====
	
	The initial release of Microsoft DNS only allows Administrators to administer
	DNS.
	
	RESOLUTION
	==========
	
	Apply Windows NT Service Pack 2 or higher. This allows server operators to
	administer your DNS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
