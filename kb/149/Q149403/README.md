---
layout: page
title: "Q149403: XADM: Logon failure During Exchange Server Installation"
permalink: /kb/149/Q149403/
---

## Q149403: XADM: Logon failure During Exchange Server Installation

{% raw %}

	Article: Q149403
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup exc4 exc5 exc55
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You might receive the following error message when you run the Microsoft
	Exchange Server Setup program:
	
	  While attempting to start the MS Exchange System Attendant service, the
	  following error occurred:
	
	  The service did not start due to a logon failure
	  MS Win NT 0xc002042d
	
	CAUSE
	=====
	
	There are two reasons why this error might occur:
	
	- When the Microsoft Exchange Service Account was created, the checkbox labeled
	  User Must Change Password at Next Logon was marked. If you haven't logged
	  into Windows NT using this account and reset the password, when the Microsoft
	  Exchange Setup program attempts to start the Microsoft Exchange System
	  Attendant service, the service will be asked to change the account password.
	  The service will not know how to change the password and it will fail to
	  start.
	
	- An incorrect password for the Microsoft Exchange Service Account was
	  specified.
	
	RESOLUTION
	==========
	
	At this point, the Microsoft Exchange Setup program will display a dialogue
	prompting you to enter the correct account name and password. If you entered an
	incorrect password, you can simply enter the correct one in the dialogue box. If
	the checkbox was marked, you will need to use the Microsoft Windows NT User
	Manager for Domains to clear the checkbox. Then you can go back and enter the
	account information in the dialogue box. In either case, once the correction has
	been made, the Microsoft Exchange Setup program will be able continue.
	
	Additional query words: exfaqad
	
	======================================================================
	Keywords          : kberrmsg kbsetup exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
