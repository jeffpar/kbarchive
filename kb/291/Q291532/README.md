---
layout: page
title: "Q291532: XFOR: Calendar Connector Only Looks in Cache"
permalink: /kb/291/Q291532/
---

## Q291532: XFOR: Calendar Connector Only Looks in Cache

{% raw %}

	Article: Q291532
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix kbExchange2000SP1Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Calendar Connector may not refresh the data from a foreign system, even
	after the time-out period has expired, if you previously installed the fix that
	is described in the following Microsoft Knowledge Base article:
	
	  Q285809 XFOR: Calendar Connector Does Not Honor the Freshness Time-Out of the
	  Free and Busy Data That Was Previously Retrieved
	
	CAUSE
	=====
	
	This issue can occur if the time-out period that is created is too large and
	almost never expires.
	
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
	
	Component: Calendar Connector
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Mapical.dll | 5.5.2654.71 | 
	+---------------------------+
	
	NOTE: Due to file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix kbExchange2000SP1Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
