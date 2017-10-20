---
layout: page
title: "Q149375: XCLN: What is the Personal Forms Library?"
permalink: /kb/149/Q149375/
---

## Q149375: XCLN: What is the Personal Forms Library?

{% raw %}

	Article: Q149375
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Personal Forms Library is one of the containers available to Microsoft
	Exchange users to house Electronic Forms Designer forms. The Personal Forms
	Library is maintained by the default mailbox the user has configured in their
	profile (this can be determined by selecting Tools, Options, Delivery, from the
	Microsoft Exchange client).
	
	Therefore, if the default Inbox is in a Personal Information Store (PST), the
	forms are maintained in the PST. Since PST's are local to the computer, the
	forms available in the Personal Forms Library will also be local to that
	computer.
	
	If the default Inbox is on a Microsoft Exchange Server (the default location),
	the Personal Forms Library will be located and maintained on that Microsoft
	Exchange Server in the Microsoft Exchange database file Priv.edb. If local
	replication is being used, the Personal Forms Library will also be available
	locally. This will allow the forms that are only available in the Personal Forms
	Library to be available offline.
	
	However, in the above case the Inbox and the Personal Forms Library are still two
	distinct stores. If you install or copy a form to your Inbox, it will not appear
	in the Personal Forms Library.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
