---
layout: page
title: "Q268169: SMS: Audit of Successful Use of User Rights Creates Mult Entries"
permalink: /kb/268/Q268169/
---

## Q268169: SMS: Audit of Successful Use of User Rights Creates Mult Entries

	Article: Q268169
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you enable success auditing for "Use of User Rights" on Microsoft Windows
	NT computers or you enable "Audit privilege use" on Microsoft Windows 2000
	computers, numerous entries for the SMSCliSvcAcct& account or the
	SMS&_DomainController account may be displayed in the security log. These
	entries appear whenever the local client service account is used on the computer
	and coincides with the 23 hour configuration interval for the Systems Management
	Server (SMS) Client or the stop and subsequent restart of the SMS client
	service.
	
	MORE INFORMATION
	================
	
	The client service uses the SMS Client Service Account (SMSCliSvcAcct& or
	SMS&_DomainController) to gain access to Windows NT and Windows 2000
	computers. This account exists the entire time that the SMS Client software is
	installed on the client. This account is automatically created during the SMS
	client installation. This account must be a local Administrator and have the
	following rights:
	
	- LogonAsService
	- ActAsPartOfOperatingSystem
	- ReplaceProcessLevelToken
	
	NOTE: SMS automatically configures the above-referenced account with all of the
	necessary rights. Not having these rights does not have an impact on security,
	just functionality.
	
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q264769 Event ID 576 Fills the Security Event Log When Auditing
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
