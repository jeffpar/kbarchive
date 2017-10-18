---
layout: page
title: "Q295038: SMS: Remote Provider Account Not Removed When Site Uninstalled"
permalink: kb/295/Q295038/
---

## Q295038: SMS: Remote Provider Account Not Removed When Site Uninstalled

	Article: Q295038
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbtool kbDatabase kbsms200 kbsms200bug
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an SMS site is uninstalled where the SMS Provider was installed on a remote
	SQL server, the SMSProvider_Sitecode account (the SMS Remote Provider connection
	account) may remain, and may not be deleted.
	
	WORKAROUND
	==========
	
	To work around this issue, manually remove the SMSProvider_Sitecode account from
	the remote SQL server after the SMS site server is uninstalled.
	
	MORE INFORMATION
	================
	
	The SMSProvider_<sitecode> code account is the SMS Provider Impersonation
	account. This account is created automatically when SQL is not installed on the
	site server and the SMS Provider resides on the SQL server. This account and its
	password are automatically generated during Setup and they are also reset during
	a site reset. This account is used by the SMS provider to gain network access to
	site server resources.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsetup kbtool kbDatabase kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
