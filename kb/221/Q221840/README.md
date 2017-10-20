---
layout: page
title: "Q221840: XFOR: Notes Connector Can't Handle Schedule+ 1.0 Meeting Request"
permalink: /kb/221/Q221840/
---

## Q221840: XFOR: Notes Connector Can't Handle Schedule+ 1.0 Meeting Request

{% raw %}

	Article: Q221840
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
	
	Users of Schedule+ 1.0 are unable to send meeting requests to a Lotus Notes user
	over the Exchange Notes Connector. The following error message may be found in
	the Exchange Notes Connector Administrator's log viewer:
	
	  1999/02/03 17:26:49- LME-NOTES-MEXNTS(01cf) 1 08217:Message is looping,
	  returning non-delivery report to sender. Message ID: c=US;a=
	
	The message is moved to the Bad Mail folder and stays there.
	
	CAUSE
	=====
	
	The Schedule+ 1.0 meeting requests do not have a Global Unique ID (GUID)
	associated with them and, therefore, the Exchange Notes Connector does not know
	how to handle them.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange Notes Connector
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Lsmexhc.dll | 5.5.2572.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	The exchange of meeting requests from Schedule+ 1.0 to Lotus Notes through the
	Exchange Notes Connector is not a supported feature of the product. However,
	these Schedule+ 1.0 meeting requests are converted to a text note and passed on
	to the designated Notes recipient, but the meeting information does not remain
	intact.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
