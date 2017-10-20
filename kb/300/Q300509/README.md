---
layout: page
title: "Q300509: IIS5: Hardware Load Balance Does Not Detect a Stopped Web Site"
permalink: /kb/300/Q300509/
---

## Q300509: IIS5: Hardware Load Balance Does Not Detect a Stopped Web Site

{% raw %}

	Article: Q300509
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have multiple Microsoft Windows 2000 servers with Internet Information
	Services (IIS) 5.0 working in conjunction with a hardware load balance solution,
	and each server is running multiple Web sites that are bound to their own IP
	address, the hardware load balance may not detect a stopped or down Web site.
	This may be true if the load balance polls the Web sites to verify that they are
	running. Even though a Web site is stopped or down, IIS still listens and
	responds to the IP address and returns the following error message:
	
	  No web site is configured at this address.
	
	This behavior is contrary to the behavior that is found in IIS 4.0.
	
	CAUSE
	=====
	
	IIS 5.0 implements socket pooling to increase performance. Socket pooling causes
	IIS 5.0 to listen and respond to all IP addresses, even though a Web site is
	stopped or down.
	
	RESOLUTION
	==========
	
	Socket pooling can be disabled in IIS 5.0. For additional information on how to
	disable socket pooling, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q238131 How to Disable Socket Pooling
	
	Additional query words: iis 5 cisco lb w2k
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
