---
layout: page
title: "Q274814: XADM: Services Don't Start Because of Service Account Password"
permalink: /kb/274/Q274814/
---

## Q274814: XADM: Services Don't Start Because of Service Account Password

{% raw %}

	Article: Q274814
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 02-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exchange Server services may not start after a service account password change.
	The following message may be logged in the System event log:
	
	  Event ID: 7013
	  Source: Service Control Manager
	  Logon attempt with current password failed with the following error:
	  Logon failure: unknown user name or bad password.
	
	The following message may be logged several times:
	
	  Event ID: 7001
	  Source: Service Control Manager
	  (Specific Exchange Service)
	  The service did not start due to a logon failure.
	  or
	  The dependency service or group failed to start.
	
	CAUSE
	=====
	
	This issue can occur because Exchange Server services cannot start if the
	password for the Exchange Server service account has been changed in the User
	Manager for Domains utility but not in the Exchange Server Administrator
	program.
	
	RESOLUTION
	==========
	
	On the Exchange Server computer:
	
	1. Update the password for the Exchange Server System Attendant and Directory
	  services:
	
	  a. In Control Panel, double-click Services, and then locate the System
	     Attendant service and the Directory service.
	
	  b. Click Startup for each of these two services, and then update the password
	     to match the updated password in the User Manager for Domains utility.
	
	  c. Start these two services.
	
	2. Change the Exchange Server service account password in the Exchange Server
	  Administrator program:
	
	  a. In the Exchange Server Administrator program, click the Configuration
	     container.
	
	  b. On the File menu, click Properties. The Properties dialog box for the
	     Configuration container is displayed.
	
	  c. Click the Service Account Password tab. The Service Account Password
	     Change dialog box is displayed.
	
	  d. In the Password box, type the new password, and then retype the password
	     in the Confirm Password box.
	
	  e. Click OK. The following message is displayed:
	
	  Initializing Service Account Password Change.
	
	     This message displays the changes that are occurring for all of the servers
	     in the site.
	
	  f. Stop and restart the Exchange Server services on all of the servers in
	     your site to complete the change to the Exchange Server service account
	     password for the Exchange Server site.
	
	MORE INFORMATION
	================
	
	This issue typically occurs when you use the domain Administrator account as the
	Exchange Server service account. If you use the Administrator account to install
	Exchange Server, the Administrator account becomes the Exchange Server service
	account. Microsoft recommends that you create an account other than the
	Administrator account and use that account as the Exchange Server service
	account.
	
	For additional information about the proper procedure for changing the Exchange
	Server service account password, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q157780 XADM: How to Change the Service Account Password
	
	NOTE: If you have more than one server in your site or more than one site in your
	organization, you cannot use the directions in the following article to change
	your Exchange Server service account.
	
	For additional information about how to change the Exchange Server service
	account on a single-server, single-site configuration, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q152808 XADM: How To Change the Service Account
	
	If your have more than one server in your site or more than one site in your
	organization, you can use the procedure in the "How to Change the Microsoft
	Exchange Server 5.5 Service Account" white paper that the following Microsoft
	Knowledge Base article describes to change your Exchange Server service
	account:
	
	  Q266041 The How to Change the Exchange Server 5.5 Service Account White Paper
	  Is Available
	
	You must follow the directions in the "How to Change the Microsoft Exchange
	Server 5.5 Service Account" white paper carefully and completely. If you do not
	follow the directions in this white paper, you may need to reinstall your
	Exchange Server computers. Extreme caution is recommended.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
