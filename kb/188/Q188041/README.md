---
layout: page
title: "Q188041: SMS: Considerations When Using Windows NT Trusted Domain Model"
permalink: /kb/188/Q188041/
---

## Q188041: SMS: Considerations When Using Windows NT Trusted Domain Model

	Article: Q188041
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup kbConfig smssetup smsconfigkbfaq
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Windows NT trusted domain model in your Systems Management Server
	sites, you should consider the following:
	
	- There should be one Global Systems Management Server Service Account in the
	  trusted domain. Do not place multiple Local Systems Management Server Service
	  Account in each domain.
	
	- The Systems Management Server Service Account must be a member of the Local
	  Administrators group in all domains in the site.
	
	- The Systems Management Server Service Account must have Log On As A Service
	  rights in all domains in the site.
	
	When installing new sites and when configuring senders, you must specify the
	(trusted) domain and the Systems Management Server Service Account using the
	correct syntax: <domain>\<account>.
	
	You should also note that if you are using the Windows NT master domain model,
	all clients will appear in the Systems Management Server Administrator under the
	master domain by default, even if they belong to another (trusting) domain. To
	prevent this from occurring, and to make it easier to locate a particular
	client, you can modify the Smsls.ini file to make clients appear in a domain
	other than the master domain.
	
	REFERENCES
	==========
	
	See the Systems Management Server version 1.2 Concepts and Planning Guide,
	Chapter 10, "Designing Your System."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbConfig smssetup smsconfig kbfaq
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	
