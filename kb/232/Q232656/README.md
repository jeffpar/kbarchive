---
layout: page
title: "Q232656: XCON: MTA X.400 1988 to 1984 Downgrade Failure Causes NDR"
permalink: /kb/232/Q232656/
---

## Q232656: XCON: MTA X.400 1988 to 1984 Downgrade Failure Causes NDR

{% raw %}

	Article: Q232656
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message is routed from a 1988 X.400 Connector over a 1984 X.400
	Connector, the message transfer agent (MTA) correctly downgrades Common Names in
	the message content (P2), but doesn't downgrade Common Names in the message
	envelope (P1). If the receiving MTA is an Exchange Server MTA, it tolerates this
	error, but if the MTA is a foreign MTA, it may generate a non-delivery report
	(NDR) for the original message, with a diagnostic of Recipient Unknown.
	
	If the recipient O/R Address on a message contains a Common Name, and the message
	is routed over a 1984 X.400 Connector (assuming the Allow MS Exchange Contents
	check box on the X.400 Connector Advanced property page is cleared), the Common
	Name should be downgraded. The downgrade consists of following the 1988 to 1984
	downgrade rules, and converting the Common Name to a Domain Defined Attribute
	(DDA), of Type=Common, Value=Common Name.
	
	CAUSE
	=====
	
	This problem is caused by the 1988 to 1984 downgrade rules being incorrectly
	applied to the message envelope.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MTA
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2621.0 | 
	+---------------------------+
	| Ems_rid.dll  | 5.5.2621.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2621.0 | 
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
	| X400om.dll   | 5.5.2621.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2621.0 | 
	+---------------------------+
	| Mtacheck.exe | 5.5.2621.0 | 
	+---------------------------+
	| Dbserver.sch | N/A        | 
	+---------------------------+
	| P2.xv2       | N/A        | 
	+---------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 SP1 and SP2. This problem was first corrected in Exchange Server 5.5
	Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbZNotKeyword8 kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
