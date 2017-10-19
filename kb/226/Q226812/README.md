---
layout: page
title: "Q226812: SMS: Error Message: Cannot Install SMS Site Manager"
permalink: /kb/226/Q226812/
---

## Q226812: SMS: Error Message: Cannot Install SMS Site Manager

	Article: Q226812
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to perform an express installation of a primary site and in doing
	so remove the Microsoft SMS Service account, and you then try to reset the
	installation, installation is not successful and you receive the following error
	message:
	
	  Cannot Install SMS Site Manager.
	
	CAUSE
	=====
	
	If the SMS Service account is removed, resetting the installation does not
	install SMS Site Component Manager.
	
	Site reset is not responsible for re-creating the service accounts. It can be
	used only to reset the service account password or change the service account
	name.
	
	WORKAROUND
	==========
	
	To work around this issue, you need to re-create the SMSService account. To do
	so, follow these steps:
	
	1. Delete the existing service account, and then run SMS Setup.
	
	2. Select "Modify or reset the current installation", and then change the
	  service account name.
	
	3. Complete the SMS Setup.
	
	The SMSService account is successfully re-created.
	
	
	Additional query words: prodsms sms site manager
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
