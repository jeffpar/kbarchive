---
layout: page
title: "Q239067: XADM: SP3 Update Doesn't Work If MBClean v1.93 Is Running"
permalink: /kb/239/Q239067/
---

## Q239067: XADM: SP3 Update Doesn't Work If MBClean v1.93 Is Running

{% raw %}

	Article: Q239067
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Exchange Server 5.5 Service Pack 3 (SP3) Update.exe file on a
	computer that has MBClean v1.93 installed and running, the update may fail with
	the following error message:
	
	  \Winnt\system32\emsmdb32.dll is in use by another process ... [Ignore}
	  [Retry] [exit]
	
	CAUSE
	=====
	
	The Mailbox Cleanup Agent service is not stopped when the Information Store
	service is stopped.
	
	WORKAROUND
	==========
	
	Stop the Mailbox Cleanup Agent Service before running Update.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: MCA
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
