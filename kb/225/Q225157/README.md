---
layout: page
title: "Q225157: XCON: MTA Stops Unexpectedly with Cirel Winsock X.400 Connection"
permalink: /kb/225/Q225157/
---

## Q225157: XCON: MTA Stops Unexpectedly with Cirel Winsock X.400 Connection

{% raw %}

	Article: Q225157
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
	
	If you configure an X.400 Connector to use a Cirel Winsock X.25 card installed
	in an Exchange Server computer, the Message Transfer Agent (MTA) may stop
	unexpectedly. This problem is most likely to occur during heavy message traffic.
	
	CAUSE
	=====
	
	This problem occurs when the Cirel Winsock transport sends a malformed buffer
	into the stack. If the data is invalid, it should not be passed up the stack to
	the MTA, but it is.
	
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
	| Dbserver.sch | N/A        | 
	+---------------------------+
	| Dcprods.cat  | N/A        | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2586.0 | 
	+---------------------------+
	| Ems_rid.dll  | 5.5.2586.0 | 
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
	| Mtacheck.exe | 5.5.2586.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2586.0 | 
	+---------------------------+
	| P2.xv2       | N/A        | 
	+---------------------------+
	| X400Om.dll   | 5.5.2586.0 | 
	+---------------------------+
	| X400Omv1.dll | 5.5.2586.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	The User.dmp file may contain a call stack similar to the following:
	
	FramePtr RetAddr Param1 Param2 Param3 Function Name
	04c2fed4 00552d7c 00000014 04c2fef8 0413d940 EMSMTA!oppsscnc+0x7c
	04c2ff08 0055a04f 00000014 0068cb4c 04005ec8 EMSMTA!oppsstdt+0x7d
	04c2ff30 0055b991 04006848 0413d940 04005ec8 EMSMTA!oppssprc+0x97
	04c2ff60 004aa742 00000014 00000320 00dcfd38 EMSMTA!oppsitps+0x13b
	04c2ff8c 00471f1c 00dcfd38 00c606b0 00000014 EMSMTA!oppsin+0x208
	04c2ffb8 77f04ee8 00000014 00dcfd38 00c606b0 EMSMTA!sbpiwbep+0x58
	04c2ffec 00000000 00000000 00000000 00000000
	KERNEL32!BaseThreadStart+0x51
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
