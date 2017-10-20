---
layout: page
title: "Q213270: Smsman.exe Does Not Display Error Message When Setup Fails"
permalink: /kb/213/Q213270/
---

## Q213270: Smsman.exe Does Not Display Error Message When Setup Fails

{% raw %}

	Article: Q213270
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbsms200
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Installation Wizard (Smsman.exe) does not report an error
	message even though the Systems Management Server 2.0 client installation
	failed.
	
	NOTE: An error message is displayed on the client computer if the initial file
	copy phase does not complete successfully.
	
	MORE INFORMATION
	================
	
	You can use the Systems Management Installation Wizard (Smsman.exe) to manually
	install Systems Management Server 2.0 clients.
	
	The Systems Management Installation Wizard reports that it completed successfully
	if it is able to find a Systems Management Server logon point and successfully
	initiate the client installation.
	
	If the installation fails after the Systems Management Installation Wizard
	initiates the client installation, the error is recorded in the Wnmanual.log
	file located in the \Ms\Sms\Logs folder.
	
	Additional query words: prodsms smssetup
	
	======================================================================
	Keywords          : kbsetup kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
