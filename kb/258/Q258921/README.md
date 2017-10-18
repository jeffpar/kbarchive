---
layout: page
title: "Q258921: XADM: ILS Servername and ILS Username Attributes in Exchange"
permalink: kb/258/Q258921/
---

## Q258921: XADM: ILS Servername and ILS Username Attributes in Exchange

	Article: Q258921
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the Exchange Server Administrator program to open the properties of
	an Exchange Server mailbox, the ILS server name and ILS user name attributes are
	displayed on Advanced tab of the individual mailboxes. These additional
	properties are similar to the City or Phone attributes that are displayed on the
	General tab of the mailbox. The ILS server name and ILS user name attributes are
	only informational; you cannot use them to log on to an Internet List Service
	(ILS) directory, such as those in Microsoft Site Server or Microsoft NetMeeting.
	
	MORE INFORMATION
	================
	
	To query these additional attributes, either use Lightweight Directory Access
	Protocol (LDAP) calls in code or use a utility such as Ldp.exe, which is
	included on the Microsoft Windows 2000 Resource Kit CD-ROM.
	
	ILS directories, such as those in NetMeeting, cannot be dynamically populated by
	specifying these additional fields.
	
	Additional query words: User
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
