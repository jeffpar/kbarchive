---
layout: page
title: "Q282289: SMS: Error Message &quot;Cannot Create Account&quot;  During Site Install"
permalink: kb/282/Q282289/
---

## Q282289: SMS: Error Message &quot;Cannot Create Account&quot;  During Site Install

	Article: Q282289
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbConfig kbSecurity kbServer kbsms200 kbsms200bug kbUpgrade
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Systems Management Server (SMS) version 2.0-based site, you
	may receive an error message that indicates the Setup program had been unable to
	create an SMS account. When you examine the SMSSetup.log file in the root of the
	drive where SMS is being installed, you may observe the following log entry:
	
	  Setup cannot create account SMSServer_ABC in domain <Mydomain>. Contact
	  your network administrator.
	
	CAUSE
	=====
	
	This problem can occur when the password that SMS attempts to create does not
	pass the password complexity requirements that are in use in the domain.
	
	By default, SMS creates accounts with random passwords that are at least 14
	characters long that use a combination of upper and lowercase letters, numbers,
	and special characters.
	
	
	WORKAROUND
	==========
	
	To work around this problem, temporarily disable the password restrictions that
	are configured in the domain, or any third-party password security programs that
	are running in the domain.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbsetup kbConfig kbSecurity kbServer kbsms200 kbsms200bug kbUpgrade 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
