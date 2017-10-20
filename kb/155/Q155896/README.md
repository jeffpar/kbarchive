---
layout: page
title: "Q155896: XFOR: MTA Causes Application Exception Error in Oxpufret"
permalink: /kb/155/Q155896/
---

## Q155896: XFOR: MTA Causes Application Exception Error in Oxpufret

{% raw %}

	Article: Q155896
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server MTA causes an application exception error during
	the operation of the RAS connector when the RAS connector is being shared by
	other processes on the computer running Windows NT Server.
	
	If symbols are loaded, the Dr. Watson log normally indicates that an exception
	error occurred in the EMSMTA!oxpufret function, often at memory location
	02199613.
	
	CAUSE
	=====
	
	The Microsoft Exchange Server MTA may cause the exception error when a failure
	is returned when it requests dialup or protocol information. The MTA may attempt
	to access the information once the information has been nulled out, causing the
	exception error.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem was corrected in the latest Microsoft
	Exchange 4.0 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: unhandled access violation AV GPF general protection page fault illegal invalid operation crash
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
