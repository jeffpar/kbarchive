---
layout: page
title: "Q244998: Port Number Not Return with Content Location when URL Specified"
permalink: /kb/244/Q244998/
---

## Q244998: Port Number Not Return with Content Location when URL Specified

{% raw %}

	Article: Q244998
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbiis400
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a client makes a request to a Microsoft Internet Information Server (IIS)
	and the port is specified on the URL line of the clients request when the
	"content-location" header is returned, the port number is not reflected in the
	"content-location" header returned to the client.
	
	RESOLUTION
	==========
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 1.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	4.0.Microsoft is researching this problem and will post more information here in
	the Microsoft Knowledge Base when it becomes available.
	
	Additional query words: Q218180 Q245099
	
	======================================================================
	Keywords          : kbiis400 
	Technology        : kbiisSearch kbExchange400 kbGraph500
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
