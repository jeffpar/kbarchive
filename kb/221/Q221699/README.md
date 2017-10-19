---
layout: page
title: "Q221699: XFOR: MTA Includes Else Doorways into Previous Route Siblings"
permalink: /kb/221/Q221699/
---

## Q221699: XFOR: MTA Includes Else Doorways into Previous Route Siblings

	Article: Q221699
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
	
	The Microsoft Exchange Server Message Transfer Agent (MTA) can incorrectly route
	a message in an enterprise in which a large number of address spaces are used
	and several "else" branches exist.
	
	CAUSE
	=====
	
	The MTA will attempt to provide "else" doorway refinements in order to ensure
	that all possible routes are included in the GWART. If enough refinements exist,
	some "else" doorways may be unnecessary and cause a generic match to be found
	before all exact matches have been checked.
	
	For example, if you have several available routes with multiple C=, A=, P=, and
	O= values in the GWART for routes to many connectors. One route might be set to
	indicate a generic route. That route should be added at the end under an "else"
	statement indicating that if all previous possible routes do not match, use this
	route by default. In this case (under certain circumstances), the route used
	under the "else" could also appear under previous values in the GWART.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Message Transfer Agent (MTA)
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Dbserver.sch | N/A        | 
	+---------------------------+
	| Dcprods.cat  | N/A        | 
	+---------------------------+
	| Ems_rid.dll  | 5.5.2562.0 | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2562.0 | 
	+---------------------------+
	| Info4log.cfg | N/A        | 
	+---------------------------+
	| Infoblog.cfg | N/A        | 
	+---------------------------+
	| Infodlog.cfg | N/A        | 
	+---------------------------+
	| Infollog.cfg | N/A        | 
	+---------------------------+
	| Infotlog.cfg | N/A        | 
	+---------------------------+
	| Mtacheck.exe | 5.5.2562.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2562.0 | 
	+---------------------------+
	| P2.xv2       | N/A        | 
	+---------------------------+
	| X400om.dll   | 5.5.2562.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2562.0 | 
	+---------------------------+
	
	The fix can be applied to Exchange Server computers with Service Pack 2
	installed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
