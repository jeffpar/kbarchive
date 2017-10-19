---
layout: page
title: "Q197621: IP Restrictions Using Web Admin May Not Work as Expected"
permalink: /kb/197/Q197621/
---

## Q197621: IP Restrictions Using Web Admin May Not Work as Expected

	Article: Q197621
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add an IP restriction for a single computer using the Web Admin
	interface in Microsoft Internet Information Server (IIS) 4.0, you may notice
	that the IP address does not always appear in the list after clicking the Add
	button. This is not a problem when you use the Internet Information Server
	snap-in in the MMC.
	
	WORKAROUND
	==========
	
	When you add a single computer to deny access to the Web server, add the IP
	address, and then either click or tab to the next box (the subnet mask area). Be
	sure that you do not add anything into the subnet mask area. Click the Add
	button and the IP will be added to the list.
	
	
	Additional query words: ISM-HTML Admin Restriction Single Computer
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
