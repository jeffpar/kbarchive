---
layout: page
title: "Q303448: XADM: Exchange Server 5.5 LDAP Service Denial of Service Occurs"
permalink: /kb/303/Q303448/
---

## Q303448: XADM: Exchange Server 5.5 LDAP Service Denial of Service Occurs

	Article: Q303448
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	For additional information about a similar problem that can occur in Microsoft Exchange 2000 Server, click the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q303450 XADM: Exchange 2000 Server LDAP Service Denial of Service Occurs When
	  LDAP Is Handling Code
	
	
	SYMPTOMS
	========
	
	If the Exchange Server Lightweight Directory Access Protocol (LDAP) service is
	processing unusually heavy LDAP request loads, the LDAP server may stop
	responding (hang). This problem does not occur with ordinary LDAP loads and only
	affects the LDAP service; all other Exchange Server services, including mail
	handling, continue normally.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
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
	
	Component: Directory
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Dsamain.exe | 5.5.2655.12 | 
	+---------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: dos
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
