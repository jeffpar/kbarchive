---
layout: page
title: "Q165119: XCON: Site Connector Configuration Basics"
permalink: kb/165/Q165119/
---

## Q165119: XCON: Site Connector Configuration Basics

	Article: Q165119
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother kbsetup kbtshoot
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article will explain the basics of configuring a Microsoft Exchange Site
	Connector.
	
	MORE INFORMATION
	================
	
	Administrative Account: This account is the user who was logged in during the
	installation of Microsoft Exchange Server. This user will receive Permissions
	Admin for the Organization, Site, and Configuration objects. These are the three
	parent objects and the permission will be propagated to all child objects.
	
	Service Account: This should be a Domain User account made prior to installation
	of the Microsoft Exchange Server. This account will receive a Custom role on the
	Organization object and Service Account Admin on the Site and Configuration
	Objects. This account will be granted rights to Log On as a Service and Restore
	Files and Directories. This account can be changed on a single Server Site, but
	requires modifying the Microsoft Exchange Schema and NT Registry permissions.
	
	Environment: The Windows NT pagefile on Intel based servers should have an
	Initial setting equal to physical memory plus 111 megabytes and a Maximum equal
	to 211 megabytes plus physical memory. RISC based servers should have an Initial
	pagefile equal to 61 megabytes greater than physical memory and a Maximum
	pagefile equal to 111 megabytes plus physical memory.
	
	Memory: Run the Microsoft Exchange Optimizer and configure the Microsoft Exchange
	Server as is appropriate for the server. Limit the amount of memory that
	Microsoft Exchange Server may use. This reserves memory for the operating system
	and has been shown to eliminate erratic behavior in the MTA. The following are
	guidelines for Microsoft Exchange memory use. Determine total physical memory
	installed on the server. Multiply this number by .75. Select the Memory Usage
	check box and enter the result of the previous calculation. The rule of thumb is
	use 75 percent of total physical memory for Microsoft Exchange. This reserves 25
	percent of real memory for Windows NT.
	
	Connector configuration methodology is dependent on the NT Domain model(s)
	involved and the type of server on which Microsoft Exchange is installed.
	Confirm the type of server on which Microsoft Exchange is installed, it is
	important to know if the server is Domain Controller or a Member Server.
	Microsoft Exchange Server requires that at least one server be a domain
	controller for domain validation.
	
	If the servers are in the same domain, It is preferable to use the same service
	account. However, this is not a requirement. Selecting different service
	accounts will require use of the override properties on any Site connector
	between Sites with different service accounts.
	
	As a minimum, assign Admin Permissions for the Site and Configuration Objects to
	the User or Group that will be configuring a Site connector. If the Sites use
	different service accounts, enter the service account for the other Site on the
	Override tab of the Site connector.
	======================================================================
	Keywords          : kbother kbsetup kbtshoot 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
