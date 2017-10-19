---
layout: page
title: "Q318479: SMS: Err Msg: Cannot Start SMS_Key_Creation_Service, Error..."
permalink: /kb/318/Q318479/
---

## Q318479: SMS: Err Msg: Cannot Start SMS_Key_Creation_Service, Error...

	Article: Q318479
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbtool
	Last Modified: 19-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) version 2.0 Site Server Setup may not work, and
	the following error entry may be logged in the Smssetup.log file:
	
	  Cannot start SMS_Key_Creation_Service, error code = 997
	
	CAUSE
	=====
	
	This issue may occur if the SMS Service account does not have administrator
	access. By default, SMS Setup requires that the Service account have
	administrator access, and stops the installation if you are using a non-domain
	administrator account.
	
	RESOLUTION
	==========
	
	To resolve this issue, give administrator access to the SMS Service account.
	
	MORE INFORMATION
	================
	
	The SMS Service account is the account that is used by the
	SMS_Site_Component_Manager and SMS_Executive services.
	
	The default name for the SMS Service account is SMSService. By default, the
	account is a member of the Domain Administrators global group, and has the
	"Logon as a Service" advanced user right.
	
	For additional information about related topics, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q243602 SMS: How to Change the SMS Service Account Password
	
	  Q294786 SMS: How to Use a Non-Domain Administrator Service Account
	
	For more information about SMS security, please view the "SMS Security
	Essentials" white paper at the following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/techdetails/secessentials.asp
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbtool 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
