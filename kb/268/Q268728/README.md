---
layout: page
title: "Q268728: XADM: Active Directory Connector Setup Fails with Error C10361ca"
permalink: kb/268/Q268728/
---

## Q268728: XADM: Active Directory Connector Setup Fails with Error C10361ca

	Article: Q268728
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 10-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Active Directory Connector (ADC), the
	installation may stop while Setup is installing services and modifying the
	registry. You may receive the following error message:
	
	  Setup was unable to find the Microsoft Exchange Specific Security Groups in
	  the active directory.
	  ID. No. C103161ca
	  Microsoft Active Directory Setup.
	
	CAUSE
	=====
	
	This issue can occur if you are logged on to a domain other than the domain that
	the server is in.
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that you are logged on to the correct domain, and
	then install the ADC.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
