---
layout: page
title: "Q236426: XADM: Information Store or Directory Service Appear Hung"
permalink: /kb/236/Q236426/
---

## Q236426: XADM: Information Store or Directory Service Appear Hung

{% raw %}

	Article: Q236426
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	- The information store service becomes unresponsive. Users are unable to log
	  onto mailboxes, and Performance Monitor may show %Processor Utilization for
	  Store.exe at 0 percent.
	
	- The directory service becomes unresponsive. Various operations, such as
	  resolving a name to a mailbox in the global address list, or checking a name
	  during creation of a mailbox profile stop responding (hang) when users
	  attempt to perform them. In addition, Performance Monitor may show %Processor
	  Utilization for Dsamain.exe at 0 percent.
	
	CAUSE
	=====
	
	ESE (Jet) hangs because all threads are waiting to acquire a resource that is
	owned by another thread. The decision used by threads as to which resources to
	acquire is based in part on a timestamp, and the timestamp comparison is being
	performed incorrectly. This incorrect comparison can cause the owning thread not
	to release the lock on the resource and leave all threads waiting.
	
	The symptoms noted above are usually dependent on system uptime. Although this
	problem is not reproducible, documented cases encountered this problem on
	Exchange Server computers running for 30 days or more.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this feature should have the following file attributes or
	later:
	
	Component: ESE
	
	+----------------------+
	| File name | Version  | 
	+----------------------+
	| Ese.dll   | 5.5.2608 | 
	+----------------------+
	
	
	This hotfix has been posted to the following Internet location as Psp2esei.exe:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostSP2/ESE-fix/Psp2esei.zip
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Microsoft Exchange Server
	version 5.5 Service Pack 3.
	
	Additional query words: freeze frozen hanging ESE98 ESE97 100% spike
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
