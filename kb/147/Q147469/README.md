---
layout: page
title: "Q147469: Cannot Change SMS Site Server Computer's NetBIOS Name"
permalink: kb/147/Q147469/
---

## Q147469: Cannot Change SMS Site Server Computer's NetBIOS Name

	Article: Q147469
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig kbDatabase smsconfig smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Systems Management Server (SMS) there is no way to change a site server
	computer's NetBIOS name without reinstalling the site. Reinstalling the site and
	then restoring from a backup does not work.
	
	CAUSE
	=====
	
	The SMS site server name is stored throughout the SQL database and in the
	Windows NT registry. SMS services use UNC names to communicate with and maintain
	the site server. Changing the server's NetBIOS name causes SMS service
	operations to fail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms
	
	======================================================================
	Keywords          : kbnetwork kbConfig kbDatabase smsconfig smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
