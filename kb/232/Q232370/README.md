---
layout: page
title: "Q232370: XCON: MTA Loses Attachment on FTBP Messages with No Subject"
permalink: /kb/232/Q232370/
---

## Q232370: XCON: MTA Loses Attachment on FTBP Messages with No Subject

{% raw %}

	Article: Q232370
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
	
	If the Exchange Server Message Transfer Agent (MTA) receives a native X.400
	message from a foreign MTA that was sent with a File Transfer Body Part (FTBP)
	and the originator did not add a subject to the message, depending upon whose
	foreign MTA sent the message, when the message is viewed by a client, the
	original attachment is lost, and a zero length attachment called Att.dat is
	present. If the originator did add a subject, the attachment will be viewed
	correctly.
	
	CAUSE
	=====
	
	The MTA did not correctly handle the different ASN.1 encoding used by the
	foreign MTA.
	
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
	| Emsmta.exe   | 5.5.2600.0 | 
	+---------------------------+
	| Ems_rid.dll  | 5.5.2600.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2600.0 | 
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
	| X400om.dll   | 5.5.2600.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2600.0 | 
	+---------------------------+
	| Mtacheck.exe | 5.5.2600.0 | 
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
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
