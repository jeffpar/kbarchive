---
layout: page
title: "Q188594: XADM: Event ID 1023 Reports Logon Failure Audit"
permalink: /kb/188/Q188594/
---

## Q188594: XADM: Event ID 1023 Reports Logon Failure Audit

{% raw %}

	Article: Q188594
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Th Event Viewer application log displays several events similar to the
	following:
	
	  Event ID: 1023
	  Source:  MSExchangeIS Private
	  Type: Failure Audit
	  Category: Logons
	  Description:
	  MESSAGING\ServiceAccount was validated as
	  /o=Organization/ou=Site/cn=Recipients, Utility/cn=MSExchangeMCA
	  but was unable to log on to
	  /o=Organization/ou=Site/cn=Recipients/cn=mailbox.
	
	CAUSE
	=====
	
	This event is logged when you run MBClean from a server where the user mailboxes
	do not reside. This event is informational only and does not result in any
	failures in running MBCLean. The event can be ignored.
	
	WORKAROUND
	==========
	
	Install MBClean on a server where the user mailboxes are located.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
