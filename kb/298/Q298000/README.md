---
layout: page
title: "Q298000: XADM: Reports Don't Return Content, Have Content Type of MDBEF"
permalink: /kb/298/Q298000/
---

## Q298000: XADM: Reports Don't Return Content, Have Content Type of MDBEF

	Article: Q298000
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix kbExchange2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server message transfer agent (MTA) may generate a delivery report
	(DR) or non-delivery report (NDR) with a content type that is set to an external
	value (2A 86 48 86 F7 14 05 01), which is MDBEF. This can cause problems for
	non-Exchange Server MTAs that do not recognize the value.
	
	CAUSE
	=====
	
	This problem can occur if an MTA does not set the Return-of-Content-Requested
	bit on the original message. Exchange Server receives the message over the X.400
	Connector, converts the P22 content to MDBEF, and delivers the content (or does
	not deliver it). The Exchange Server MTA then generates the report and does not
	add the content, but does set the content type to MDBEF. This problem does not
	normally occur between Exchange Server MTAs because Exchange Server MTAs always
	set the Return-of-Content-Requested bit on messages.
	
	RESOLUTION
	==========
	
	Exchange 2000 Server
	--------------------
	
	To resolve this problem, obtain the latest service pack for Microsoft Exchange
	2000 Server. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q301378 XGEN: How to Obtain the Latest Exchange 2000 Server Service Pack
	
	Exchange Server 5.5
	-------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MTA
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2655.1 | 
	+---------------------------+
	| X400om.dll   | 5.5.2655.1 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2655.1 | 
	+---------------------------+
	| Mtaperf.dll  | 5.5.2655.1 | 
	+---------------------------+
	| Ems_rid.dll  | 5.5.2655.1 | 
	+---------------------------+
	| Mtacheck.exe | 5.5.2655.1 | 
	+---------------------------+
	| Dbserver.sch | N/A        | 
	+---------------------------+
	| Dcprods.cat  | N/A        | 
	+---------------------------+
	| Infoplog.cfg | N/A        | 
	+---------------------------+
	| p42.tpl      | N/A        | 
	+---------------------------+
	| p772.tpl     | N/A        | 
	+---------------------------+
	| p2.xv2       | N/A        | 
	+---------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Exchange 2000 Server
	--------------------
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange 2000 Server.
	This problem was first corrected in Microsoft Exchange 2000 Server Service Pack
	2.
	
	Exchange Server 5.5
	-------------------
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5.
	
	
	Additional query words: ndr report contenttype mdbef
	
	======================================================================
	Keywords          : kbExchange550preSP5fix kbExchange2000SP2Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
