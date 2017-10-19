---
layout: page
title: "Q224565: XADM: Addresses Are Displayed with a Double / Character in DDA"
permalink: /kb/224/Q224565/
---

## Q224565: XADM: Addresses Are Displayed with a Double / Character in DDA

	Article: Q224565
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Exchange Server sends a message to an X.400 address containing a slash (/)
	character in the DDA fields, as in the following example:
	
	  c=FR;a=MyProvider;p=MyCompany;dda:a/b/c=A/B/C;
	
	The Delivery Report that comes back is displayed to the originator with an X.400
	address containing two slash characters, as shown in the following example:
	
	  c=FR;a=MyProvider;p=MyCompany;dda:a//b//c=A//B//C;
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2587.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2587.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2587.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
