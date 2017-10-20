---
layout: page
title: "Q158161: XFOR: IMC NDR Resends Do Not Preserve Original Message Options"
permalink: /kb/158/Q158161/
---

## Q158161: XFOR: IMC NDR Resends Do Not Preserve Original Message Options

{% raw %}

	Article: Q158161
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Messages re-sent from Internet Mail Connector (IMC) non-delivery reports (NDRs)
	do not preserve the options, such as sensitivity and priority, associated with
	the original message. When a message goes through content conversion and is
	returned with an NDR, some attributes are lost.
	
	It is not possible to inspect the options exposed in the original message with
	the Send Options button on the General tab of the message's property page,
	because this button is disabled when resending.
	
	MORE INFORMATION
	================
	
	If sending TNEF, the message integrity should be better than non-TNEF.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
