---
layout: page
title: "Q175954: XADM: Restoring a Deleted Proxy Address Type"
permalink: /kb/175/Q175954/
---

## Q175954: XADM: Restoring a Deleted Proxy Address Type

{% raw %}

	Article: Q175954
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to restore a proxy address type that has been
	removed.
	
	
	MORE INFORMATION
	================
	
	To restore a default address type (MS, X400, SMTP, or cc:Mail), run the
	Microsoft Exchange Server Setup program and select the Reinstall option.
	
	This should add back any missing E-Mail Address Generators in
	Configuration\Addressing\E-Mail Address Generators, and any missing address
	types on the Site Addressing page of the Configuration\Site Addressing object.
	
	Reinstall any service packs that were previous installed.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
