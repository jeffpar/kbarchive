---
layout: page
title: "Q231974: XFOR: Notes Connector Doesn't Restart"
permalink: /kb/231/Q231974/
---

## Q231974: XFOR: Notes Connector Doesn't Restart

{% raw %}

	Article: Q231974
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
	
	The Exchange Notes Connector might shut down itself properly and can't be
	restarted, with the following events in the log file from the Connectivity
	Controller:
	
	  1999/03/23 15:16:08- LME-NOTES-MEXNTS(0136) 3 54002:MSExchange-Notes
	  Transform terminated successfully
	  >> mex2nts(859)
	  1999/03/23 15:16:09- LME-NOTES(0158) 3 00505:LME-NOTES is ending, last return
	  code was {Successful}
	  >> stdserv(1249)
	  1999/03/23 15:16:09- LME-NOTES(0158) 1 08230:The Microsoft Exchange Connector
	  for Lotus Notes service has stopped
	
	CAUSE
	=====
	
	This behavior is because of a malformed message coming from Lotus Notes to
	Exchange Server and not being moved to the Bad directory. This message was a
	non-delivery report (NDR) with four recipients.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange Notes Connector
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Lsntsmex.exe | 5.5.2616.0 | 
	+---------------------------+
	
	
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
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
