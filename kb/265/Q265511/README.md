---
layout: page
title: "Q265511: XCLN: Paged Pool Memory Leak Caused by Attachment Processing"
permalink: /kb/265/Q265511/
---

## Q265511: XCLN: Paged Pool Memory Leak Caused by Attachment Processing

{% raw %}

	Article: Q265511
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	- MAPI 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a Collaboration Data Objects (CDO) application that processes
	attachments, paged pool memory may increase over time without decreasing. There
	may be visible issues in which the desktop user interface does not process as it
	ordinarily does (the screen is not repainted properly, and images are missing).
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	
	Additional query words: memory leak bytes
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Component         : MAPI
	Technology        : kbAudDeveloper kbCDOsearch kbMAPISearch kbExchangeSearch kbZNotKeyword2 kbExchange550SP3 kbMAPIExt
	Version           : WINDOWS:; winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
