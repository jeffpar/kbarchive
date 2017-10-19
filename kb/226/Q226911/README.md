---
layout: page
title: "Q226911: SMS: NetDisc: Cannot Access DHCP Servers in Different Domains"
permalink: /kb/226/Q226911/
---

## Q226911: SMS: NetDisc: Cannot Access DHCP Servers in Different Domains

	Article: Q226911
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network Discovery cannot access Dynamic Host Configuration Protocol (DHCP)
	servers in separate Windows 2000 domains.
	
	CAUSE
	=====
	
	Network Discovery uses the SMSService account to access objects in a domain. By
	default, the SMSService account does not have access to a separate Windows 2000
	domain.
	
	WORKAROUND
	==========
	
	To work around this problem, add the SMSService account to the DHCP Admins group
	in the Windows 2000 domain that contains the DHCP server that is being accessed
	by Network Discovery.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
