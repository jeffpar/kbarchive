---
layout: page
title: "Q168140: XCON: NDR &quot;Invalid Parameters&quot;"
permalink: /kb/168/Q168140/
---

## Q168140: XCON: NDR &quot;Invalid Parameters&quot;

{% raw %}

	Article: Q168140
	Product(s): Microsoft Exchange
	Version(s): Windows:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message originates from a third-party message transfer agent (MTA) by way
	of an X.400 connection to the Microsoft Exchange MTA with an administrative
	management domain (ADMD) that is a space, a non-delivery report (NDR) is
	generated with the message text "invalid parameters."
	
	CAUSE
	=====
	
	This happens because the MTA improperly handles a numeric ADMD. Many third-party
	MTAs generate a numeric character 0 for a space rather then an alphanumeric
	null. Microsoft Exchange Server properly supports this in all O/R address fields
	but not in other parts of the message envelope (for example, MTSID,
	Bilateral-Info, External and Internal-Trace-Info).
	
	The Microsoft Exchange Server 4.0 MTA does not properly handle the numeric ADMDs;
	however, the Microsoft Exchange Server 5.0 MTA is able to properly distinguish
	between numeric and alphanumeric ADMD fields.
	
	WORKAROUND
	==========
	
	To work around this issue, do one of the following:
	
	- Change the third-party ADMD to something other than a space.
	
	  -Or-
	
	- Upgrade to Microsoft Exchange Server 5.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 4.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Interop ISOCORE
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : Windows:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
