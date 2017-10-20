---
layout: page
title: "Q124552: User Account Limitation"
permalink: /kb/124/Q124552/
---

## Q124552: User Account Limitation

{% raw %}

	Article: Q124552
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The recommended user account limitation in Windows NT version 3.5 is 15,000
	users in any one domain, and only on "large" hardware.
	
	MORE INFORMATION
	================
	
	As a guideline for "large" hardware, a uniprocessor Pentium system with 32
	megabytes (MB) of RAM can be configured to comfortably handle 10,000 users.
	
	To accommodate this number of users on such a system, the Registry size limit
	(RSL) must be set to 80 percent. For more information on the Registry size limit
	query on the following keyword in the Microsoft Knowledge Base:
	
	  RSL
	
	
	The Pentium product discussed here is manufactured by Intel Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt registry SAM
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
