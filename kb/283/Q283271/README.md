---
layout: page
title: "Q283271: XADM: How to Give Users Permissions to Create Mail-Enabled Users"
permalink: kb/283/Q283271/
---

## Q283271: XADM: How to Give Users Permissions to Create Mail-Enabled Users

	Article: Q283271
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP3, 5.5 SP4 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to give a user or designated group of users the
	minimum permissions to create a mail-enabled user account in Active Directory.
	
	NOTE: This article describes how to change permissions in the Windows 2000
	version of the Active Directory Connector (ADC) only.
	
	MORE INFORMATION
	================
	
	To complete the procedures described in this section, you must have a
	functioning two-way Connection Agreement between the Exchange Server 5.5
	computer and Windows 2000 Active Directory.
	
	First, give the user or group read-only permissions on the Microsoft Exchange
	container:
	
	1. Log on as a domain administrator, and then start the Active Directory Sites
	  and Services snap-in.
	
	2. Click Show Services on the View menu.
	
	3. Click to expand Services, and then click Microsoft Exchange.
	
	4. Open the properties of the Microsoft Exchange object, and then click the
	  Security tab.
	
	5. Click Add, click the user or group that you want to give permissions to,
	  click OK, and then click OK.
	
	Next, give the user or group the appropriate permissions to access the Active
	Directory Connections container:
	
	1. Open the properties of the Active Directory Connections container.
	
	2. Click the Security tab, click Add, click the user or group that you gave
	  read-only permissions to in the preceding procedure, and then click OK.
	
	3. Click Advanced on the Security tab.
	
	4. Find the user or group that you gave read-only permissions to, click
	  View/Edit, and then click "This object and all child objects" in the Apply
	  Onto box.
	
	5. Click OK, click OK, and then click OK.
	
	Finally, make the user or group a member of the Account Operators Built-in group
	so that they can create user accounts:
	
	1. Start the Active Directory Users and Computers snap-in.
	
	2. Click to expand your domain, and then click the Built-in container.
	
	3. Double-click the Account Operators group, and then click the Members tab.
	
	4. Click Add, click the user or group that you want to make a member of this
	  group, click OK, and then click OK.
	
	Additional query words: ADC AD win2k
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbExchangeSearch kbZNotKeyword2 kbExchange550SP3 kbExchange550SP4
	Version           : :2000,5.5 SP3,5.5 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
