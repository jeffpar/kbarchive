---
layout: page
title: "Q248732: XCON: MTA Stops Processing While Handling Incoming Mail"
permalink: /kb/248/Q248732/
---

## Q248732: XCON: MTA Stops Processing While Handling Incoming Mail

{% raw %}

	Article: Q248732
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Although the EMSMTA process is still apparently running, no work is being done,
	and no events are logged. If you stop and restart the message transfer agent
	(MTA), you may receive the following error message:
	
	  Windows NT Error 1067
	
	CAUSE
	=====
	
	The MTA has received a message from a foreign MTA that contains a trace record
	with a zero-length Arrival Time attribute. Processing this illegally-formed
	attribute causes internal context information to be overwritten.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	There is no workaround for this issue. If you create a new MTA database
	(MTAWIPE), it allows the MTA to start again, but the foreign MTA resends the
	offending message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	
	With the application of the hotfix, the MTA rejects the invalid message, logs an
	event, and sends a non-delivery report (NDR) back with a diagnostic of Invalid
	Argument.
	
	Additional query words: hang
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
