---
layout: page
title: "Q171005: SMS: Site Config Manager Service Locks Trusted Service Account"
permalink: /kb/171/Q171005/
---

## Q171005: SMS: Site Config Manager Service Locks Trusted Service Account

	Article: Q171005
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbSCMan smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Site Configuration Manager (SCMAN) does global user group enumeration, a
	Systems Management Server service account for another Systems Management Server
	site may be locked out in the process.
	
	The Scman.log file will have entries similar to the following:
	
	     ~Domain (DOMAINA) user groups previously enumerated
	     $$<SMS_SITE_CONFIG_MANAGER><Wed Jun 18
	
	     15:49:57 1997~><thread=12E>
	     ~Trusted domain: DOMAINB   $$<SMS_SITE_CONFIG_MANAGER><Wed Jun 18
	     15:49:57
	
	     1997~><thread=12E>
	     ~NetServerGetInfo server: SERVER return: 5
	     $$<SMS_SITE_CONFIG_MANAGER><Wed Jun 18
	
	     15:50:03 1997~><thread=12E>
	
	CAUSE
	=====
	
	This problem occurs if the two domains have Systems Management Server service
	accounts that have the same user name, but different passwords. When the domain
	for the site where SCMAN is running is trusted by the other site's domain, Site
	Configuration Manager attempts to enumerate the user groups of the trusted
	domain using its service account. Because the passwords do not match, an error 5
	(access denied) occurs. If account lockout is set at the trusted domain, this
	may result in the trusted domain's Systems Management Server service account
	being locked out.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Change the Systems Management Server Service Account name on the trusted
	  domain.
	
	  -or-
	
	- If the trusted domain is not using Program Group Control (PGC), use the
	  SETGUG utility to shut off global user group enumeration. For more
	  information on the SETGUG utility, see the following article in the Microsoft
	  Knowledge Base:
	
	  Q168724 SMS: List of Tools Available on SMS 1.2 CD
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbSCMan smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
