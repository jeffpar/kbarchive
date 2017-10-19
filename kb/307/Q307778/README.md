---
layout: page
title: "Q307778: SMS: Site Component Manager May Not Be Started After Upgrade"
permalink: /kb/307/Q307778/
---

## Q307778: SMS: Site Component Manager May Not Be Started After Upgrade

	Article: Q307778
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Systems Management Server (SMS) version 2.0 Service Pack 4
	(SP4), the SMS Site Component Manager service may not run.
	
	This problem may occur after you apply any SMS service pack.
	
	CAUSE
	=====
	
	This problem can occur if you apply SMS 2.0 SP4 immediately after the initial
	installation of the site. After the initial installation, the installation
	process may not have finished to the point where the SMS services have been
	started.
	
	WORKAROUND
	==========
	
	To work around this problem, start the Site Component Manager service service
	manually by using the Services tool in Control Panel. To prevent the problem,
	after the initial site installation, wait until all SMS services are started
	before you apply a service pack.
	
	SMS services on a primary site include:
	
	  SMS_SITE_COMPONENT_MANAGER
	  SMS_EXECUTIVE
	  SMS_SQL_MONITOR
	
	  SMS Services on a Secondary Site include:
	
	  SMS_SITE_COMPONENT_MANAGER
	  SMS_EXECUTIVE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms sitecomp stopped
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
