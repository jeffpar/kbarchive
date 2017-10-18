---
layout: page
title: "Q284254: XCON: Address Space Not in GWART w/Multiple X.400 Connectors"
permalink: kb/284/Q284254/
---

## Q284254: XCON: Address Space Not in GWART w/Multiple X.400 Connectors

	Article: Q284254
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the following configuration, when you recalculate routing, the c=* address
	space does not appear in the Gateway Address Resolution Table (GWART), and
	messages to the outside world are not delivered.
	
	Two Exchange Server sites, SiteA and SiteB, are connected by four X.400
	Connectors (each site has two bridgehead servers, and each bridgehead has an
	X.400 Connector to each of the opposing bridgehead servers). The Connected Sites
	tabs are completed, and directory replication is set up between the sites.
	
	SiteA is responsible for the c=* address space (it has another connector to the
	outside world), so both of the connectors in SiteB are configured with the c=*
	address space.
	
	CAUSE
	=====
	
	A code regression was introduced in build 2654.21 of the Ems_rid.dll file.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
	this fix.
	
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
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Emsmta.exe   | 5.5.2654.58 | 
	+----------------------------+
	| X400om.dll   | 5.5.2654.58 | 
	+----------------------------+
	| Mtamsg.dll   | 5.5.2654.58 | 
	+----------------------------+
	| Mtaperf.dll  | 5.5.2654.58 | 
	+----------------------------+
	| Ems_rid.dll  | 5.5.2654.58 | 
	+----------------------------+
	| Mtacheck.exe | 5.5.2654.58 | 
	+----------------------------+
	| Dbserver.sch |             | 
	+----------------------------+
	| Dcprods.cat  |             | 
	+----------------------------+
	| Infoplog.cfg |             | 
	+----------------------------+
	| P42.tpl      |             | 
	+----------------------------+
	| P772.tpl     |             | 
	+----------------------------+
	| P2.xv2       |             | 
	+----------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	Additional query words: gwart addressspace
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
