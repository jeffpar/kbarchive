---
layout: page
title: "Q185106: XFOR: LinkAge 3.2 Missing Domain Names In Exchange Notes DXA"
permalink: /kb/185/Q185106/
---

## Q185106: XFOR: LinkAge 3.2 Missing Domain Names In Exchange Notes DXA

{% raw %}

	Article: Q185106
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use LinkAge 3.2 Directory Exchange Agent (DXA), you may find that
	Exchange Server recipient addresses are missing the domain name and other Lotus
	Notes address attributes. This creates incorrect or incomplete name mapping from
	Exchange Server to Lotus Notes. Thus causing these addresses to be invalid for
	Lotus Notes. Moreover, these addresses may not propagate to Lotus Notes.
	
	CAUSE
	=====
	
	This problem is caused because the LinkAge Lotus Notes Proxy generator is not
	installed on the same Exchange Server computer(s) from which the names were
	imported. The Lotus Notes Proxy generator is responsible for creating the Lotus
	Notes address for Exchange Server recipients.
	
	WORKAROUND
	==========
	
	To correct this problem, perform the following steps:
	
	1. Run Linkage 3.2 setup from the Linkage program group.
	
	2. Choose the "Install Proxy addressing at the downstream Site(s)" option.
	
	3. Choose Notes Proxy Addressing and fill out the Exchange Server name in your
	  site or organization.
	
	4. Select Yes to generate Notes Proxy addresses for existing Exchange Server
	  users.
	
	5. Send a full reload to the DXA.
	
	Additional query words: LDE DXA SQL
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
