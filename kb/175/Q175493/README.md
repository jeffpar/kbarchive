---
layout: page
title: "Q175493: XADM: Can't Extract Account List if Similar Domain Name Exists"
permalink: /kb/175/Q175493/
---

## Q175493: XADM: Can't Extract Account List if Similar Domain Name Exists

	Article: Q175493
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to extract the Windows NT account list using the Microsoft
	Exchange Administrator program, the Windows NT Domain drop down list box may not
	contain an entry for the local computer's primary domain.
	
	CAUSE
	=====
	
	A trusted domain has a domain name similar to the local domain, with the first
	characters being identical.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	versions 4.0 and 5.0.
	
	We are currently researching this problem in Microsoft Exchange Server version
	4.0 and will post more information here in the Microsoft Knowledge Base as it
	becomes available.
	
	
	A supported fix for Microsoft Exchange Server, version 5.0 is now available, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next Service Pack
	that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
