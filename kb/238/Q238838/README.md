---
layout: page
title: "Q238838: XCON: No Longer Get Delivery Reports After Upgrade to 5.5 SP2"
permalink: /kb/238/Q238838/
---

## Q238838: XCON: No Longer Get Delivery Reports After Upgrade to 5.5 SP2

{% raw %}

	Article: Q238838
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade a Microsoft Exchange Server computer to version 5.5 Service
	Pack 2 (SP2), you no longer receive delivery reports from certain 1988 X.400
	providers (such as COCONET).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Message Transfer Agent
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2646.0 | 
	+---------------------------+
	| Ems_rid.dll  | 5.5.2646.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2646.0 | 
	+---------------------------+
	| Infoblog.cfg | N/A        | 
	+---------------------------+
	| Infodlog.cfg | N/A        | 
	+---------------------------+
	| Infollog.cfg | N/A        | 
	+---------------------------+
	| Infoplog.cfg | N/A        | 
	+---------------------------+
	| Infotlog.cfg | N/A        | 
	+---------------------------+
	| Info4log.cfg | N/A        | 
	+---------------------------+
	| Dcprods.cat  | N/A        | 
	+---------------------------+
	| X400om.dll   | 5.5.2646.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2646.0 | 
	+---------------------------+
	| Mtacheck.exe | 5.5.2646.0 | 
	+---------------------------+
	| Dbserver.sch | N/A        | 
	+---------------------------+
	| P2.xv2       | N/A        | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
