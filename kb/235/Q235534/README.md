---
layout: page
title: "Q235534: XCON: MTA Logs Errors 2124, 2175 on Invalid X.400 Message"
permalink: /kb/235/Q235534/
---

## Q235534: XCON: MTA Logs Errors 2124, 2175 on Invalid X.400 Message

{% raw %}

	Article: Q235534
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
	
	In some cases, a third-party X.400 message transfer agent (MTA) may send an
	invalid message to Exchange Server. Depending on the amount of corruption, the
	following events may be written to the Windows NT Server application event log:
	
	  Event ID: 200
	  Description:
	  X.400 Service Event, severity 14
	  (MTA XFER-IN(12) Proc 102)
	  Transfer-In failure, error in received APDU
	  Syntax server error code 0
	  Error detected at offset 0
	  Internal qualifier 0
	  Node label
	  PDU dump reference 14
	
	NOTE: Event ID 200 indicates a corrupted field in the X.400 P1 message header.
	You can use the PDU dump reference given in this event to identify the corrupted
	message in the Bf0.log log file.
	
	  Event ID: 2124
	  Description:
	  Internal Operating System Error, severity 14
	  (DB Server XFER-IN(12) Proc 98)
	  Object Data file causing I/O error
	  Object id 06000091
	  Operating system error 131
	  File operation READ
	  File offset -2133778432
	  Filename
	  Referenced object 00000000 (00000000 => N/A)
	  Referenced object error 0
	
	  Event ID: 2175
	  Description:
	  Internal Processing Error, severity 14
	  (DB Server XFER-IN(12) Proc 72)
	  Error getting length of attribute
	  Called from MTA Proc 28492
	  Database error code ODXOBJEC - I/O Error on object file
	  Object at fault 06000091
	  Attribute identifier 71
	  Value number 2
	  Referenced object 00000000 (00000000 => N/A)
	  Referenced object error 0
	
	After this, the Exchange Server MTA may run at a very high CPU time for a long
	time and occasionally it may not be possible to stop the Exchange Server MTA.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
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
	| Ems_rid.dll  | 5.5.2641.0 | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2641.0 | 
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
	| Mtacheck.exe | 5.5.2641.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2641.0 | 
	+---------------------------+
	| P2.xv2       | N/A        | 
	+---------------------------+
	| X400om.dll   | 5.5.2641.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2641.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	Additional query words: hang stop kill
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
