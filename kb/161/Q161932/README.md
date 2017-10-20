---
layout: page
title: "Q161932: XFOR: MtaCheck Causes Access Violation Exception Error"
permalink: /kb/161/Q161932/
---

## Q161932: XFOR: MtaCheck Causes Access Violation Exception Error

{% raw %}

	Article: Q161932
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The MtaCheck utility causes a Dr. Watson access violation (AV) error with
	exception 0xc0000005, or the MTA causes the same error during its startup and
	recovery processing.
	
	CAUSE
	=====
	
	The database recovery processing done by MtaCheck and the MTA after a fatal
	error runs into a corrupt object, and gets crossed while searching for its
	referencing object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
