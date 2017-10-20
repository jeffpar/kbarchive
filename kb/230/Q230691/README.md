---
layout: page
title: "Q230691: XADM: Space Tree Fragmentation Degrades Server Performance"
permalink: /kb/230/Q230691/
---

## Q230691: XADM: Space Tree Fragmentation Degrades Server Performance

{% raw %}

	Article: Q230691
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - the hardware: DEC Alpha 
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	- Messages begin backing up and/or moving out slowly in the private information
	  store queue in the Microsoft Exchange Message Transfer Agent (MTA).
	- The information store process CPU use (as seen by using Windows NT
	  Performance Monitor) begins to increase as the length of the MTA queue
	  increases.
	- A given number of threads belonging to the information store process
	  Store.exe, (as seen by using Windows NT Performance Monitor) seem to be
	  running at a high CPU percentage for a long period of time (that is, more
	  than 30 percent).
	
	
	CAUSE
	=====
	
	Available space in the Exchange Server information store database is in the form
	of a list of pages that can be used to store new data. The available space is
	called a space tree. The space tree is held as binary tree that is searched
	whenever a block of new data needs to be added to the database.
	
	The problems in the "Symptoms" section are caused when the space tree becomes
	very fragmented, causing the size of the binary tree to grow very large. This
	large space tree causes massive I/O when navigating through the binary tree
	looking for space. As a result, the performance of the server degrades as more
	and more information store threads navigate the space tree.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: JET
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Ese.dll   | 5.5.2650.16 | 
	+-------------------------+
	
	
	
	WORKAROUND
	==========
	
	An offline defragmentation (eseutil /d ispriv |ispub) of the database will
	shrink the size of the space tree, and provide relief until the time the
	fragmentation builds up once more in the space tree.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: JET slow hang perf
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
