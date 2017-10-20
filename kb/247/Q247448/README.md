---
layout: page
title: "Q247448: XADM: Proxy Address Number Mismatch with Exchange 5.5 and ADC"
permalink: /kb/247/Q247448/
---

## Q247448: XADM: Proxy Address Number Mismatch with Exchange 5.5 and ADC

{% raw %}

	Article: Q247448
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create two identical user entries within different Recipients
	containers in Exchange Server 5.5, the users are assigned e-mail proxy addresses
	that are numbered sequentially starting with 2. For example:
	
	  Jane Doe is given an SMTP address of jdoe@test.microsoft.com
	
	  The second Jane Doe is then given an SMTP address of jdoe2@test.microsoft.com
	
	When you use the Microsoft Active Directory Connector (ADC) to synchronize the
	Exchange Server 5.5 directory with Microsoft Windows 2000 Active Directory,
	these entries have display names within Windows 2000 that are numbered
	sequentially starting with 1. For example:
	
	  The first Jane Doe has a display name of Jane Doe
	
	  The second Jane Doe has a display name of Jane Doe-1
	
	This causes an inconsistency with the display names of users and their actual
	proxy e-mail addresses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5
	and Microsoft Active Directory Connector.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
