---
layout: page
title: "Q199234: SMS: Systems Management Server 2.0 System Accounts"
permalink: kb/199/Q199234/
---

## Q199234: SMS: Systems Management Server 2.0 System Accounts

	Article: Q199234
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 21-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The purpose of this article is to help administrators understand the number of
	accounts that may be created as sites are added to the Systems Management Server
	hierarchy. Systems Management Server 2.0 creates and uses more domain accounts
	than are used in Systems Management Server 1.2. A typical Systems Management
	Server 2.0 installation will create the accounts listed in the MORE INFORMATION
	section of this article on the site server if it is the only computer with
	Systems Management Server 2.0 installed.
	
	MORE INFORMATION
	================
	
	The accounts are as follows:
	
	- SMS Client Network Connection Account
	  This domain account is created by Setup. Only one per site is created;
	  however, the administrator can create as many accounts as are required to
	  address specific security issues.
	
	- SMS Server Network Connection Account
	  Setup creates one of these accounts per site.
	
	- SMS Remote Service Account
	  You may have more than two of these accounts, depending on the number of
	  remote client access points (CAPs) that have been installed.
	
	- SMSCliToknAcct& Account
	  This is an internal Systems Management Server account. Only one of these
	  accounts is created per domain, regardless of the number of sites installed
	  within that domain.
	
	- SMS&_<Domain_Controller_Name> Account
	  One of these accounts is created for each domain controller in the enumerated
	  domain, regardless of the number of sites within that domain.
	
	To calculate the number of accounts that Systems Management Server will generate
	upon installation of the hierarchy, use the following guidelines:
	
	SMS Client Network Connection account:   1 x <number of sites in domain>
	SMS Server Network Connection account:   1 x <number of sites>
	SMS Remote Service account:              2 x <number of CAPs per site>
	                                        (default is 1 CAP per site)
	SMSCliToknAcct& account:                 1 x <number of domains>
	SMS&_<DC_Name> account:                  1 x <number of DCs in the 
	                                        enumerated domain, regardless of
	                                        the number of sites
	
	The following is an example.
	
	A medium-sized company containing 10 domain controllers; there are nine resource
	domains and one master domain. Each domain controller is its own Systems
	Management Server site server. The total number of accounts created may be
	similar to the following:
	
	SMS Client Network Connection account:   1 x 10 =  10   1 site per domain
	SMS Server Network Connection account:   1 x 10 =  10
	SMS Remote Service account:              2 x 10 =  20
	SMSCliToknAcct& account:                 1 x 10 =  10
	SMS&_<DC_Name> account:                  1 x 10 =  10
	                                         Total :  60 accounts
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
