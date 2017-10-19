---
layout: page
title: "Q227033: Changing the SMSClient_&lt;SiteCode&gt; Password Can Cause Lockouts"
permalink: /kb/227/Q227033/
---

## Q227033: Changing the SMSClient_&lt;SiteCode&gt; Password Can Cause Lockouts

	Article: Q227033
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article describes potential problems that can occur when Systems Management
	Server (SMS) version 2.0 is deployed in a domain that has the account lockout
	policy enabled. The default setting for account lockout is to lock the account
	after five incorrect logon attempts with an incorrect password and to unlock the
	account after waiting one half hour.
	
	If the Client Connection account (SMSClient_<SiteCode>) password is changed
	in User Manager for Domains, the account is locked out. The SMS 2.0 clients
	store the password for this account locally and attempt to use the old password
	until the client is updated with the new password. The client updates the local
	copy of the password when the install process is run by running Smsls.bat or
	Smsman.exe.
	
	Until every client has run the installation process and updated the password, the
	SMSClient_<SiteCode> account is locked out shortly after it is re-enabled.
	If the client cannot connect to the Client Access Point (CAP), it tries every
	hour. The client never becomes aware of the new passwords until it runs the
	install process. After 60 days without being able to contact the CAP, the client
	uninstalls itself.
	
	WORKAROUND
	==========
	
	To prevent lockouts from occurring, create at least one additional Client
	Connection account and have every SMS 2.0 client run the install process. This
	updates the client with the new account information and allows new clients to
	have access to the CAP. The SMSClient_<SiteCode> account continues to be
	locked out until every client is updated. Administrators can leave this account
	locked out or delete it from User Manager for Domains as well as the SMS 2.0
	interface. Clients that have not been updated continue to use the wrong password
	for the SMSClient_<SiteCode> account, continuing to lock it out if it is
	not deleted, but do not lock out the new Client Connection account.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
