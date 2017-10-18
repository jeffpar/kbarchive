---
layout: page
title: "Q163747: SMS Site to Site Communication May Lock Out Service Account"
permalink: kb/163/Q163747/
---

## Q163747: SMS Site to Site Communication May Lock Out Service Account

	Article: Q163747
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork smssenders kbSMSSenderkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a child site attempts to communicate with its parent site, it incorrectly
	tries to use the Systems Management Server service account before using the LAN
	sender account, which may be different.
	
	The following situation may cause the child site to actually disable the Systems
	Management Server service account being used by the parent site:
	
	1. The parent site exists in domain A and the child site is in domain B; there
	  are no trust relationships.
	
	2. The Systems Management Server service account has the same name but different
	  passwords in each domain.
	
	3. When the child site tries to communicate with the parent site by connecting
	  to the parent site's SMS_SITE share, it attempts to connect with its Systems
	  Management Server service account.
	
	4. If the "Account Lockout" option is enabled in domain A, this may result in
	  the Systems Management Server service account in domain A being disabled.
	  This would essentially cripple the parent site.
	
	WORKAROUND
	==========
	
	To work around this problem, do any one of the following:
	
	- Use Systems Management Server service accounts that do not have the same
	  name. Or, if the service accounts need to have the same name, make certain
	  that the passwords match.
	
	- Disable the "Account Lockout" option in the Account (under User Manager, go
	  to Policies, and then Account).
	
	- Create a trust relationship so that the parent site's domain trusts the child
	  site's domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork smssenders kbSMSSender kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
