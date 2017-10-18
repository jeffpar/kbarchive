---
layout: page
title: "Q257269: CCM Uses Multiple Domain Prefixes When Installing the Client"
permalink: kb/257/Q257269/
---

## Q257269: CCM Uses Multiple Domain Prefixes When Installing the Client

	Article: Q257269
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbsms200 kbsms200bug kbsms200preSP2fix kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Systems Management Server (SMS) 2.0 in a multi-domain environment,
	the SMS Service account may be locked out and/or generate failed login attempts
	in the domain where SMS is installed and any other domains that are
	trust-related.
	
	CAUSE
	=====
	
	This problem occurs because when Client Configuration Manager (CCM) is
	installing an SMS 2.0 client on a Microsoft Windows NT-based computer, by
	default it uses the SMS Service account unless an SMS Client Remote Installation
	account has been specified. CCM needs administrative rights when it connects to
	a workstation to install the SMS client. If CCM is unable to connect, it appends
	different prefixes to the SMS Service account in an attempt to connect to the
	client. For example, it might try Domain\SMSService first, and if that does not
	work, it may append other domain names that are present in your environment to
	the SMS Service account. If a duplicate SMS Service account in the other domains
	with the same password does not exist, login attempts do not work when CCM
	attempts to use the other domain prefixes.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this problem, use an SMS Client Remote Installation account that
	has access to all workstations in all domains. If CCM is successful in using
	this account, it does not use the SMS Service account.
	
	NOTE: SMS 2.0 Service Pack 2 permits you to specify multiple SMS Client Remote
	Installation Accounts for the same domain or different domains. Not only can SMS
	use multiple client installation accounts, it does not switch domain contexts of
	any account. SMS only uses the accounts that are specified in the properties,
	and the SMS service account. The SMS service account only uses the domain
	context that is specified during setup, and does not switch between available
	domains. This prevents the account from locking out.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server version 2.0 Service Pack 2.
	
	Additional query words: prodsms push
	
	======================================================================
	Keywords          : kbsetup kbtool kbsms200 kbsms200bug kbsms200preSP2fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix kbnofix
	
	=============================================================================
	
