---
layout: page
title: "Q239594: IIS FTP Logs Write SIZE Requests as GET Requests with Zero Bytes"
permalink: /kb/239/Q239594/
---

## Q239594: IIS FTP Logs Write SIZE Requests as GET Requests with Zero Bytes

{% raw %}

	Article: Q239594
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
	
	A SIZE command (a query command) issued by an FTP client is logged by Internet
	Information Services (IIS) as a file GET request with zero bytes transmitted.
	Tools that examine logs may find these zero-byte entries as failed file
	transmissions.
	
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
