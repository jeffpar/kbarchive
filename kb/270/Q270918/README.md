---
layout: page
title: "Q270918: XADM: Event Service Delay in Processing Scripts"
permalink: /kb/270/Q270918/
---

## Q270918: XADM: Event Service Delay in Processing Scripts

{% raw %}

	Article: Q270918
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When event server scripts are bound to folders that have a replica on other
	servers, there may be a delay in the processing of these scripts. Scripts that
	are installed in folders that have no replicas are processed instantaneously.
	
	CAUSE
	=====
	
	This issue can occur because the Event service uses Incremental Change
	Synchronization (ICS) notifications from the information store to process
	scripts in folders. The information store provider currently obtains a list of
	servers, and the ICS notification is registered against the first server in the
	list. In most cases the first server in the list is not the local computer to
	which the event server is connected.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, make sure that no replicas exist for the folder in
	which the script is installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words: Scripts Event Service
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
