---
layout: page
title: "Q193041: XADM: Information Store's Directory Query Returns LDAP Error"
permalink: /kb/193/Q193041/
---

## Q193041: XADM: Information Store's Directory Query Returns LDAP Error

{% raw %}

	Article: Q193041
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the information store performs a Lightweight Directory Access Protocol
	(LDAP) query on the directory, an LDAP error may be returned instead of an error
	indicating that no matching objects were found.
	
	CAUSE
	=====
	
	This problem occurs when the information store performs a query based on a
	distinguished name (DN) that does not exist in the directory. When the fields in
	the search filter are converted to internal values, invalid distinguished names
	are not handled properly.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Directory
	
	  File Name     Version
	  ------------------------
	  Dsamain.exe   5.5.2373.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	Additional query words: distinguishedname operations error
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
