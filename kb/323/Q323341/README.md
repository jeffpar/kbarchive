---
layout: page
title: "Q323341: SMS: Software Installation Account Does Not Work on Windows XP"
permalink: /kb/323/Q323341/
---

## Q323341: SMS: Software Installation Account Does Not Work on Windows XP

{% raw %}

	Article: Q323341
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug smsinst
	Last Modified: 28-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an administrator tries to distribute software by using Systems Management
	Server (SMS) 2.0, an administrator can use a defined software installation
	account. You can use this account to run a program under a different user's
	security context. Programs that target Windows XP clients and use this account
	may not work if they contain command line switches or flags.
	
	WORKAROUND
	==========
	
	To work around this problem, use SMSCliToknAcct& to make the program run
	successfully. This option is defined in the program properties by turning on the
	"Run with administrative rights" feature on the Environment tab.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version SMS 2.0 Service Pack 3 (SP3), SMS 2.0 Service Pack 4 (SP4).
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS200SP3 kbSMS200SP4
	Version           : :2.0 SP3,2.0 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
