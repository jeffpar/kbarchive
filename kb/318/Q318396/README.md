---
layout: page
title: "Q318396: Password Length Limitations for SMS Service Accounts"
permalink: kb/318/Q318396/
---

## Q318396: Password Length Limitations for SMS Service Accounts

	Article: Q318396
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is a good idea to limit the length of passwords for accounts that are used by
	Systems Management Server (SMS) to 14 characters, even though Microsoft Windows
	NT-based domain and local accounts can use very long passwords (in some cases,
	up to 256 characters). Using passwords that are not longer than 14 characters is
	a good idea because:
	
	- SMS may try to encrypt the password, but SMS cannot encrypt passwords that
	  are longer than 14 characters.
	
	- The Password box in the SMS Administrator console is limited to 14
	  characters.
	
	MORE INFORMATION
	================
	
	These SMS service accounts have a 14-character limit for the password:
	
	- The SMS Service account
	- The Windows NT Client Software Installation account
	- The Sender Address account
	- The SMS Client Remote Installation account
	- The Client Connection account
	- The Site System Connection Account
	
	You can specify passwords of up to 36 characters for the SMS service accounts
	during SMS Setup. However, using more than 14 characters in a password causes
	problems after the SMS components begin operations. The symptoms of these
	problems may include account lockouts, SMS components that cannot access
	resources, and account authorization errors.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
