---
layout: page
title: "Q199119: XFOR: SSL Connection to NNTP May Result in Unstable Store"
permalink: kb/199/Q199119/
---

## Q199119: XFOR: SSL Connection to NNTP May Result in Unstable Store

	Article: Q199119
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbExchange500preSP3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Information Store service may not shut down gracefully if the Internet News
	Service has been configured for Secure Socket Layer (SSL) security.
	
	CAUSE
	=====
	
	When users attempt to connect to the Exchange news server through SSL, they may
	timeout during a connection. Afterwards, any attempts to stop and restart the
	Information Store service will result in continuous attempts by the service to
	shut down without any success.
	
	RESOLUTION
	==========
	
	This is an information store bug specific to Exchange Server 5.0 only. This will
	not affect the Exchange Server 5.5 Information Store service.
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Exchange Server 5.0 service pack that contains this fix.
	
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
	later.
	
	  Component: Information Store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Netif.dll | 5.0.1461.70 | 
	+-------------------------+
	
	
	
	
	STATUS
	======
	
	Microsoft acknowledges this to be a problem, and it has been addressed in the
	next service pack of Exchange Server 5.0.
	
	Additional query words: hang, nntp, store
	
	======================================================================
	Keywords          : kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
