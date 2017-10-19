---
layout: page
title: "Q196491: XADM: Attributes Not Available to LDAP Users with Admin Rights"
permalink: /kb/196/Q196491/
---

## Q196491: XADM: Attributes Not Available to LDAP Users with Admin Rights

	Article: Q196491
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you configure the Attributes tab in the properties for the DS Site
	Configuration object so that some attributes are not available to authenticated
	Lightweight Directory Access Protocol (LDAP) requests, you are not able to
	access those attributes even if you log on with a user account that has Admin or
	View Only Admin rights. If you attempt to perform an LDAP operation (such as a
	search or compare operation) that uses these attributes, the operation fails.
	Note that this also applies to LDAP programs with permissions that are
	equivalent to Admin or View Only Admin rights.
	
	CAUSE
	=====
	
	When processing LDAP requests, the directory service does not distinguish
	between authenticated users that have Admin or View Only Admin rights and
	authenticated users that do not have these rights. If the DS Site Configuration
	object is configured so that some attributes are not available to authenticated
	LDAP requests, no authenticated users are able to access those attributes.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Directory Service
	
	  File Name     Version
	  ------------------------
	  Dsamain.exe   5.5.2419.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
