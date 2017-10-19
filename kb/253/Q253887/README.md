---
layout: page
title: "Q253887: XADM: ADC Does Not Match to SID History After a User Is Cloned"
permalink: /kb/253/Q253887/
---

## Q253887: XADM: ADC Does Not Match to SID History After a User Is Cloned

	Article: Q253887
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbWin2000PreSP1Fix kbWin2000sp1Fix
	Last Modified: 08-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you clone the user object associated with a Microsoft Exchange Server 5.5
	mailbox into a domain, the user object is not upgraded. A duplicate object is
	created in Active Directory instead of matching the user object to the
	associated Microsoft Windows NT account.
	
	This may happen when you set up a mirrored domain with Microsoft Windows 2000 and
	then clone a user to copy the old Windows NT 4.0 accounts into your new Windows
	2000 forest.
	
	CAUSE
	=====
	
	In Exchange Server 5.5, mailboxes are linked to their Windows NT accounts by
	means of the Security Identifier (SID). When reading the sidHistory from a
	global catalogue, the ADC doesn't convert it to hexadecimal format so that it
	can be compared with the associated Windows NT account.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 1.Microsoft has confirmed this to be a problem in
	Microsoft Exchange Server version 5.5.
	
	
	Additional query words: xmrp
	
	======================================================================
	Keywords          : exc55 kbWin2000PreSP1Fix kbWin2000sp1Fix 
	Component         : ADC
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
