---
layout: page
title: "Q231818: XCON: P1 Headers with Very Long Object IDs Cause MTA to Crash"
permalink: kb/231/Q231818/
---

## Q231818: XCON: P1 Headers with Very Long Object IDs Cause MTA to Crash

	Article: Q231818
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
	
	When an X.400 message is received by the Message Transfer Agent (MTA) where the
	P1 header contains very long object IDs (OIDs) (greater than 32 bytes), the MTA
	will crash.
	
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
	| Address.dll  | 5.5.2596.0 | 
	+---------------------------+
	| Dbserver.sch | N/A        | 
	+---------------------------+
	| Dcprods.cat  | N/A        | 
	+---------------------------+
	| Ems_rid.dll  | 5.5.2596.0 | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2596.0 | 
	+---------------------------+
	| Info4log.cfg | N/A        | 
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
	| Mmiext.dll   | 5.5.2596.0 | 
	+---------------------------+
	| Mtacheck.exe | 5.5.2596.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2596.0 | 
	+---------------------------+
	| P2.xv2       | N/A        | 
	+---------------------------+
	| X400om.dll   | 5.5.2596.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2596.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: OID
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
