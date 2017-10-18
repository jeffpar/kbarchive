---
layout: page
title: "Q295771: SMS: &quot;Restricted Group&quot; Policy Prevents SMS Client Installation"
permalink: kb/295/Q295771/
---

## Q295771: SMS: &quot;Restricted Group&quot; Policy Prevents SMS Client Installation

	Article: Q295771
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Active Directory Restricted Group policies are in effect, the Systems
	Management Server (SMS) 2.0 client may not be installed on computers that are
	running Microsoft Windows 2000 or Microsoft Windows XP.
	
	CAUSE
	=====
	
	If the Group Policy object (GPO) is configured so that the Administrators local
	group is a restricted group, the SMS Client service account (the local account
	on the workstation) may not be able to become a member of the local
	Administrators group. This is required to complete the client installation
	process.
	
	If you add the SMS Client service account to the local Administrators group, the
	next policy refresh removes the account from the group by design.
	
	WORKAROUND
	==========
	
	To work around this problem, add the common SMS client local accounts to the
	Administrators restricted group in the GPO. Add the following accounts to the
	local Administrators group in the Restricted Group policy:
	
	  SMSCliSvcAcct&
	  SMSCliToknAcct&
	
	Make sure to specify the account names without any domain or machine name prefix,
	as listed in this article.
	
	For more information about the Restricted Groups GPO, please refer to the Active
	Directory documentation.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The SMS client automatically adds the two accounts that are listed in this
	article to the local Administrators group on Windows 2000-based and Windows
	XP-based clients. However, if the Restricted Group policy lists these accounts
	as allowed to be members of the Administrators group, these accounts are not
	removed during subsequent GPO refreshes.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
