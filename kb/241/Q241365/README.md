---
layout: page
title: "Q241365: XCON: PAB Address Parenthesis in DDA Converted to 040 &amp; 041"
permalink: /kb/241/Q241365/
---

## Q241365: XCON: PAB Address Parenthesis in DDA Converted to 040 &amp; 041

	Article: Q241365
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages meeting the following criteria are undeliverable:
	
	- They contain an X.400 address that is generated in a personal address book
	  (PAB).
	
	-and-
	
	- The X4.000 address contains a domain-defined attribute (DDA) value that
	  requires unescaping--for example, an at symbol (@), or an exclamation point
	  (!), or an underscore (_), which are entered as (a), (b), or (u)
	  respectively.
	
	CAUSE
	=====
	
	The message transfer agent (MTA) will unescape the address but will also
	unescape the parenthesis if it passes through an X.400 Connector to another
	system that has the same address space (such as c=US;a= ;p=*;). The address 040
	and 041 should be converted by the sending MTA before transmission.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MTA
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Address.dll  | 5.5.23.2650 | 
	+----------------------------+
	| Emsmta.exe   | 5.5.23.2650 | 
	+----------------------------+
	| Ems_rid.dll  | 5.5.23.2650 | 
	+----------------------------+
	| Mtamsg.dll   | 5.5.23.2650 | 
	+----------------------------+
	| Infoblog.cfg | 5.5.23.2650 | 
	+----------------------------+
	| Infodlog.cfg | 5.5.23.2650 | 
	+----------------------------+
	| Infollog.cfg | 5.5.23.2650 | 
	+----------------------------+
	| Infoplog.cfg | 5.5.23.2650 | 
	+----------------------------+
	| Infotlog.cfg | 5.5.23.2650 | 
	+----------------------------+
	| Info4log.cfg | 5.5.23.2650 | 
	+----------------------------+
	| Dbserver.sch | 5.5.23.2650 | 
	+----------------------------+
	| Dcprods.cat  | 5.5.23.2650 | 
	+----------------------------+
	| X400omv1.dll | 5.5.23.2650 | 
	+----------------------------+
	| X400om.dll   | 5.5.23.2650 | 
	+----------------------------+
	| Mtacheck.exe | 5.5.23.2650 | 
	+----------------------------+
	| P2.xv2       | 5.5.23.2650 | 
	+----------------------------+
	| P1.tpl       | 5.5.23.2650 | 
	+----------------------------+
	
	
	WORKAROUND
	==========
	
	The user can create a one-off address of
	
	  X400:c=US;a= ;p=<organization>;o=<site>;s=Test with
	  (a);dda\:EMS=TEST\@
	
	or create a custom recipient in the global address list on the sending server.
	The Address Book Provider (ABP) that processes the address in the message can
	submit a Distinguished Name (DN) to the server in the P1 content and the
	parenthesis are not converted.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
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
	
