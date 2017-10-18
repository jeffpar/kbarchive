---
layout: page
title: "Q235446: XGEN: Exchange 5.5 SP3 Mailbox Manager Release Notes Updates"
permalink: kb/235/Q235446/
---

## Q235446: XGEN: Exchange 5.5 SP3 Mailbox Manager Release Notes Updates

	Article: Q235446
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains updates to the release notes for the Microsoft Exchange
	Server Mailbox Manager program included with Exchange Server 5.5 Service Pack 3.
	The topics discussed are:
	
	- Services do not failover on primary node in clustered environment.
	- Cannot start Mailbox Manager service on remote server in different domain.
	- User with View Only Admin role can start Mailbox Manager.
	- LDAP must be enabled.
	- Excluded mailbox list is not reset during reinstall.
	
	MORE INFORMATION
	================
	
	Services Do Not Failover on Primary Node in Clustered Environment
	-----------------------------------------------------------------
	
	If Mailbox Manager is running on the primary node in a clustered environment, the
	Exchange Server services may not failover until the Mailbox Manager service is
	stopped manually. To work around this problem, manually add Mailbox Manager to
	the Exchange resource group. To do so:
	
	1. Install Mailbox Manager on all nodes.
	
	2. On the primary node, start the Cluster Administrator program, right-click the
	  group that contains the Exchange Server services, point to New, and then
	  click Resource.
	
	3. Type a name and a description for the resource in the Name and Description
	  boxes, and then click Generic Service in the Resource Type box. Verify that
	  the Exchange group is selected in the Group box, and then click Next.
	
	4. Select the servers you want in the list of possible owners, and then click
	  Next. To select a server, click it, and then click Add.
	
	5. Select the following service dependencies in the list of resource
	  dependencies, and then click Next:
	
	   - Add-ins
	   - Microsoft Exchange Directory
	   - Microsoft Exchange Information Store
	   - Microsoft Exchange Message Transfer Agent
	   - Microsoft Exchange System Attendant
	   - Shared hard disk on which Exchange Server is installed
	
	  To select a service dependency, click it, and then click Add.
	
	6. Type "msexchangemca" (without the quotation marks) in the "Service name" box,
	  and then click Next.
	
	7. Click Add, type "SYSTEM\CurrentControlSet\Services\MSExchangeMCA" (without
	  the quotation marks) in the "Root registry key" box, and then click OK.
	
	8. Click Add, type
	  "SYSTEM\CurrentControlSet\Services\EventLog\Application\MSExchangeMCA"
	  (without the quotation marks) in the "Root registry key" box, and then click
	  OK.
	
	9. Click Finish.
	
	
	Cannot Start Mailbox Manager Service on Remote Server in Different Domain
	-------------------------------------------------------------------------
	
	Mailbox Manager cannot start the Mailbox Manager service on a remote server if
	the remote server is located in a different domain. If you connect to the remote
	server using the Exchange Server Administrator program, view the properties for
	the Mailbox Manager object, click the Schedule tab, and then click Clean Now,
	the following error message is displayed:
	
	  Unable to communicate with the Microsoft Exchange Server Mailbox Manager
	  service. Cannot determine success of cleanup request.
	
	This behavior occurs even if a trust relationship has been established between
	the two domains. To run Mailbox Manager on a remote server that is located in a
	different domain, you must start the Mailbox Manager service on the remote
	server manually.
	
	
	User With View Only Admin Role Can Start Mailbox Manager
	--------------------------------------------------------
	
	If you log on to an Exchange Server computer with a user account that has been
	assigned the View Only Admin role on the site container, you are able to start
	Mailbox Manager. If you start the Exchange Server Administrator program, view
	the properties for the Mailbox Manager object, and then click the Schedule tab,
	the Clean Now button is available. You are unable to modify any of the
	configuration settings, but if you click Clean Now, Mailbox Manager runs using
	the existing settings.
	
	
	LDAP Must Be Enabled
	--------------------
	
	If the Lightweight Directory Access Protocol (LDAP) is disabled at the site
	level, you may be unable to select a server on the Server Selection tab in the
	properties for the Mailbox Manager object. The following message may be
	displayed at the bottom of the dialog box:
	
	  LDAP: Server Down
	
	To prevent this problem from occurring, enable LDAP at the site level. To do so:
	
	1. In the left pane of the Microsoft Exchange Administrator program, click the
	  Protocols object under the appropriate site. Note that the Protocols object
	  appears under the Configuration object.
	
	2. In the right pane, click the LDAP object, and then on the File menu, click
	  Properties.
	
	3. Click the "Enable protocol" check box to select it, and then click OK.
	
	Excluded Mailbox List Is Not Reset During Reinstall
	---------------------------------------------------
	
	When you reinstall the Mailbox Cleanup Agent (MBClean), the list of excluded
	mailboxes is not reset, even though a message appears during installation
	indicating that all configurations will be lost.
	
	
	Additional query words: read-only mca
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
