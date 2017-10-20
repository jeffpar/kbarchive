---
layout: page
title: "Q225345: XCON: MTA Mishandles Deferred Delivery Messages After DST"
permalink: /kb/225/Q225345/
---

## Q225345: XCON: MTA Mishandles Deferred Delivery Messages After DST

{% raw %}

	Article: Q225345
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) mishandles deferred delivery
	messages after the daylight savings time adjustments occur. The MTA will attempt
	to deliver deferred messages either an hour earlier or later than expected until
	all of the MTAs in the organization have been cycled. This problem is more
	prevalent with messages that have been deferred in Outlook using the Options
	button deferral method. Messages deferred through the Properties option on the
	File menu do not experience this problem.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MTA
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2580.0 | 
	+---------------------------+
	| Ems_rid.dll  | 5.5.2580.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2580.0 | 
	+---------------------------+
	| X400om.dll   | 5.5.2580.0 | 
	+---------------------------+
	| Mtacheck.exe | 5.5.2580.0 | 
	+---------------------------+
	| Dbserver.sch | NA         | 
	+---------------------------+
	| P2.xv2       | NA         | 
	+---------------------------+
	| Infoblog.cfg | NA         | 
	+---------------------------+
	| Infodlog.cfg | NA         | 
	+---------------------------+
	| Infollog.cfg | NA         | 
	+---------------------------+
	| Infotlog.cfg | NA         | 
	+---------------------------+
	| Dcprods.cat  | NA         | 
	+---------------------------+
	
	
	WORKAROUND
	==========
	
	All MTAs in the organization can be cycled, which will resolve this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0, 5.0, and 5.5. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
