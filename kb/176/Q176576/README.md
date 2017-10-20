---
layout: page
title: "Q176576: XADM: Add/Remove Exchange Server Components Shows Size as Zero"
permalink: /kb/176/Q176576/
---

## Q176576: XADM: Add/Remove Exchange Server Components Shows Size as Zero

{% raw %}

	Article: Q176576
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Server 5.5 setup program again and select
	Add/Remove components, it presents you with the four choices: Microsoft Exchange
	Server, Microsoft Exchange Administrator, Books Online, and Outlook Web Access.
	These components can be installed individually or in varying combinations.
	
	When you choose to Add/Remove components, a dialog box showing the approximate
	disk space requirements for each component should appear. However, only
	Microsoft Exchange Server and Outlook Web Access display space requirements.
	Microsoft Exchange Administrator and Books Online display space requirements as
	0 K, rather than their actual requirements of 5,560k and 17,816k, respectively.
	
	WORKAROUND
	==========
	
	To display the correct space requirements, restart the setup program to add the
	previously removed components on the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
