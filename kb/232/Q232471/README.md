---
layout: page
title: "Q232471: XFOR: Notes to Exchange Replication Displays Inconsistent Times"
permalink: /kb/232/Q232471/
---

## Q232471: XFOR: Notes to Exchange Replication Displays Inconsistent Times

{% raw %}

	Article: Q232471
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you replicate items from Exchange Server to Lotus Notes and vice versa, the
	dates and times of items being replicated may appear incorrect. They may appear
	with a time difference that depends on their local time zone relative to the
	Greenwich mean time.
	
	For example, the times are five hours apart if the server is located on the East
	Coast, but eight hours apart if the server is located in the Pacific time zone.
	
	CAUSE
	=====
	
	When you replicate from Exchange Server to Notes, the custom time and date
	properties undergo an erroneous Greenwich mean time translation. When you
	replicate from Notes to Exchange Server, Notes time and date stamps without
	specific date values (that is, editable Time field entry) do not go through a
	needed Greenwich mean time translation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	WORKAROUND
	==========
	
	By using the @Created formula in the SubDate field instead of a computed time
	entry within your form, you can resolve the time discrepancy error when
	replicating data from Notes to Exchange Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
