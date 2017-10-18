---
layout: page
title: "Q226846: SMS: Domain Account for Software Metering Is Converted to Local"
permalink: kb/226/Q226846/
---

## Q226846: SMS: Domain Account for Software Metering Is Converted to Local

	Article: Q226846
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsMeter
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a domain account is specified for the Software Metering service, and
	Microsoft Systems Management Server (SMS) is installed on a member server, the
	domain account that is entered is converted to a local machine account on the
	member server.
	
	To demonstrate this behavior, follow these steps:
	
	1. In the SMS Administrator Console, click Site Systems under Site Settings.
	  Right-click a member server, and then click Properties.
	
	2. In the member server Site System Properties box, on the Software Metering
	  Server tab, click to select the "Use this site system as a software metering
	  server" check box.
	
	3. Enter a Service account using the following syntax:
	
	  DOMAIN\SWMAccount
	
	4. Navigate to SMS_License_Server under Services in Control Panel.
	
	Note that the account is changed from a domain account to a local account. For
	example, Domain\SWMAccount is changed to SWMAccount.
	
	WORKAROUND
	==========
	
	To work around this issue, create a domain account with attributes that exactly
	match the account on the member server. Provided that all attributes match
	exactly, pass-through authentication should enable this service to log on to the
	domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	
