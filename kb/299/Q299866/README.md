---
layout: page
title: "Q299866: Pages Always Show the Sign-out Logo After User Signs Out"
permalink: /kb/299/Q299866/
---

## Q299866: Pages Always Show the Sign-out Logo After User Signs Out

{% raw %}

	Article: Q299866
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	My pages always show the Sign-out logo (from LogoTag2) after a user attempts to
	sign out.
	
	CAUSE
	=====
	
	If the user browser is behind a proxy, bad proxy settings may be returning
	cached content when they should not.
	
	RESOLUTION
	==========
	
	Make sure that you are expiring pages and content on either a site-wide or a
	page-by-page basis.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q299353 Passport Cookies Are Not Deleted When a User Signs Out
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
