---
layout: page
title: "Q248819: IIS 4.0 Logs Incorrect Values for Bytes Sent Field in W3C"
permalink: /kb/248/Q248819/
---

## Q248819: IIS 4.0 Logs Incorrect Values for Bytes Sent Field in W3C

{% raw %}

	Article: Q248819
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbiis400
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the W3C Extended Log Format, Microsoft Internet Information Server
	(IIS) 4.0 logs the number of bytes sent by the server to the client in the
	sc-bytes field. However, if an HTTP request is cancelled when you are
	downloading a file, the log file reflects the size of the file being transferred
	and not the number of bytes that are actually sent to the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	4.0.Microsoft is researching this problem and will post more information here in
	the Microsoft Knowledge Base when it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information on the IIS 5.0 version of this fix, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q258189 IIS Log Contains Wrong Data When ISAPI Uses Default for File Size
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
