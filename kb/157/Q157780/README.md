---
layout: page
title: "Q157780: XADM:  How to Change the Service Account Password"
permalink: kb/157/Q157780/
---

## Q157780: XADM:  How to Change the Service Account Password

	Article: Q157780
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 16-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to change the Microsoft Exchange Server service
	account password after the initial Microsoft Exchange Server installation.
	
	MORE INFORMATION
	================
	
	To change the Microsoft Exchange Server service account password:
	
	1. In the Microsoft Exchange Administrator program, click the Configuration
	  container.
	
	2. On the File menu, click Properties. Now you see the Properties dialog box for
	  the Configuration container.
	
	3. Click the Service Account Password tab. This displays a Service Account
	  Password Change dialog box.
	
	4. In the Password box, type the new password, and retype the password in the
	  Confirm Password box.
	
	5. Click OK.
	
	  The following message is displayed:
	
	  Initializing Service Account Password Change.
	
	  This dialog box displays the changes occurring for all the servers in the
	  site.
	
	  When this procedure is complete, the following message is displayed:
	
	  This action has changed the password for the Windows NT Services installed by
	  Microsoft Exchange Server. The password for the Service Account must also be
	  changed in the Windows NT User Manager, or the Services will fail to start.
	
	  To change the service account password in User Manager:
	
	  a. In the Administrative Tools Group on the primary domain controller (PDC)
	     or backup domain controller (BDC), select the User Manager for Domains.
	
	  b. Click the Exchange Server service account.
	
	  c. On the toolbar, click User, and then click Properties.
	
	  d. In the User Properties dialog box, type the new password in the Password
	     box. Retype the password in the Confirm Password box.
	
	  e. Click OK.
	
	     On a cluster server, an additional message is displayed:
	
	  The following is a list of servers that are part of a Microsoft Cluster
	  Server and are part of this site configuration:
	
	  <Exchange Network Name>
	
	  You need to change the service account permissions on these servers manually.
	
	     To change the service account permissions on these servers manually:
	
	     1. On both nodes of the cluster, in Control Panel, double-click Services.
	
	     2. Click Startup, and then click Log On As.
	
	     3. Manually change the password for all Exchange Services.
	
	6. Stop and restart the Microsoft Exchange Server services on all servers in
	  your site. This completes the change of the Microsoft Exchange Server service
	  account password of the Exchange Server site.
	
	  NOTE: You may need to change the password manually on any third-party services
	  that use the Exchange Server service account. Some examples are anti-virus
	  applications, third-party connectors and gateways, BackOffice Resource Kit
	  utilities, and the Mbclean utility. Also, you may need to run a Winmsd
	  Complete report to determine whether other services are using the old service
	  account password.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
