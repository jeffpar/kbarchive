---
layout: page
title: "Q263173: XADM: Only 100 Accounts Extracted from Active Directory Domain"
permalink: /kb/263/Q263173/
---

## Q263173: XADM: Only 100 Accounts Extracted from Active Directory Domain

{% raw %}

	Article: Q263173
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 19-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you install Exchange Server 5.5 Service Pack 3 on a Microsoft Windows 2000
	Advanced Server-based computer that is a domain controller, and then on the
	Tools menu in the Exchange Server Administrator program, click Extract Windows
	NT Account List to extract the Windows 2000 domain accounts to a .csv file, the
	process may not work and only the first 100 accounts are extracted to the .csv
	file.
	
	CAUSE
	=====
	
	This issue can occur because the Administrator program calls Windows application
	programming interface (API) "NetQueryDisplayInformation" to extract the
	Microsoft Windows NT accounts, but the returned value of the function in Windows
	2000 is different from the returned value of the function in Windows NT 4.0. If
	Exchange Server is running on a Windows 2000-based computer, Exchange Server
	incorrectly processes the returned value when the Windows NT accounts number
	more than 100.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How toObtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
