---
layout: page
title: "Q225548: IP Restrictions in HTMLA Web Admin Forms May Cause Problems"
permalink: /kb/225/Q225548/
---

## Q225548: IP Restrictions in HTMLA Web Admin Forms May Cause Problems

{% raw %}

	Article: Q225548
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using the HTMLA Web Administration forms to remotely administer an
	Internet Information Services 5.0 computer, the following problem may occur.
	
	When you set IP restrictions, you cannot grant or deny access to localhost or the
	IP address 127.0.0.1. This can cause a problem if you want to deny access to
	everyone except the local computer.
	
	If you do set up an IP restriction using the HTMLA Web Administration forms, be
	sure that the IP address of the computer you are currently working on is
	included in the list before you save the changes. The changes will take effect
	immediately and may block your IP address from administering that site.
	
	WORKAROUND
	==========
	
	If you set an IP restriction using this method and you block your own IP
	address, you can still use the Internet Services Manager to correct the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
