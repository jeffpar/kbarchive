---
layout: page
title: "Q227943: How IIS Handles Reverse Lookup Failures"
permalink: /kb/227/Q227943/
---

## Q227943: How IIS Handles Reverse Lookup Failures

{% raw %}

	Article: Q227943
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IIS can perform access restrictions based on IP address, IP range, and DNS name.
	If you are performing IP restrictions based on the DNS name, it requires that
	IIS perform a reverse DNS lookup. If reverse DNS lookup fails (for example
	failure to access the DNS server) then the request is refused.
	
	MORE INFORMATION
	================
	
	Note: You may need to restart IIS in some instances if the reason for the lookup
	failure is corrupted DNS entries.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
