---
layout: page
title: "Q236156: XADM: Permissions for Viewing Client Permissions on PF"
permalink: /kb/236/Q236156/
---

## Q236156: XADM: Permissions for Viewing Client Permissions on PF

	Article: Q236156
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	View-Only permissions appear to work for public folders until information store
	maintenance or directory service changes occur. After maintenance is finished, a
	user with View-Only Admin permissions is unable to view a client's permissions
	on the General tab of a public folder.
	
	At the site-level Configuration container, if you configure Windows NT global
	groups or user accounts for View-Only permissions, you do not have the full
	functionality to view permissions of the groups or accounts in the Exchange
	Server directory information tree. When you view public folders in the Exchange
	Server Administrator program, neither the client permissions nor the access
	control list (ACL) is visible, only an ACL showing "Microsoft System Reviewer."
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Admin.exe   | 5.5.2648.0  | 
	+---------------------------+
	| Fradm32.dll | 8.30.2648.0 | 
	+---------------------------+
	| Store.exe   | 5.5.2648.0  | 
	+---------------------------+
	| Mdbmsg.dll  | 5.5.2648.0  | 
	+---------------------------+
	| Gapi32.dll  | 5.5.2648.0  | 
	+---------------------------+
	| Netif.dll   | 5.5.2648.0  | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server Version 5.5.
	This problem was first corrected in Exchange Server 5.5 Service Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Component         : Admin
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
