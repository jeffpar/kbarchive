---
layout: page
title: "Q235737: SMS: Trusted Domain Accounts Not Listed in Security Wizard"
permalink: /kb/235/Q235737/
---

## Q235737: SMS: Trusted Domain Accounts Not Listed in Security Wizard

{% raw %}

	Article: Q235737
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbSecurity kbsms200 kbsms200bug kbsms200fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server Security Wizard's account drop-down list will not
	list User Accounts or User Groups from a Trusted Domain if the current user is
	logged into an account from the trusting domain.
	
	WORKAROUND
	==========
	
	This is a problem with the account list display pull-down box in the Security
	Wizard interface. Although the accounts are not listed, they can be entered
	manually by typing the Domain\Account for the trusted domain in the dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The behavior in the Systems Management Server Security Manager should be the
	same as the Windows NT User Manager. The Trusted Domain User Accounts/Groups
	should be listed.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSecurity kbsms200 kbsms200bug kbsms200fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
