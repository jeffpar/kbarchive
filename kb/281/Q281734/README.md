---
layout: page
title: "Q281734: XFOR: Message Sent Time Stamp Off by One Hour After Migrating"
permalink: /kb/281/Q281734/
---

## Q281734: XFOR: Message Sent Time Stamp Off by One Hour After Migrating

{% raw %}

	Article: Q281734
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
	
	After you migrate a user from Lotus cc:Mail to Exchange Server 5.5, the "message
	sent" time stamp may be incorrect by one hour on some messages.
	
	CAUSE
	=====
	
	This problem can occur if you perform the migration after the switch to daylight
	saving time. Daylight saving time is taken into account even if the message was
	sent while the area was still in standard time.
	
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
	
	Component: Lotus Notes Connector
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Mlmig32.dll | 5.5.2654.35 | 
	+---------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	After the fix is applied, the time stamp is calculated depending on the current
	date and the date of the message that is being manipulated.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
