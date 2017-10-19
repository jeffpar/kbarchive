---
layout: page
title: "Q326952: XADM: &quot;Permission Problem&quot; Err Msg with Directory Replication"
permalink: /kb/326/Q326952/
---

## Q326952: XADM: &quot;Permission Problem&quot; Err Msg with Directory Replication

	Article: Q326952
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you manually force Intrasite Directory Replication (update the directory
	from within the site), you may receive the following error message:
	
	  The requested operation failed due to a permission problem encountered while
	  accessing a remote directory. Check that your account has permission to
	  perform this operation. Then check that the directory service on this server
	  has permission to set up replication on a remote directory. Both directory
	  services must be running under the same service account, and the service
	  account must have the Service Account Admin role on the site object.
	  0xc1030b22
	
	Additionally, the following event ID message is logged in the Application event
	log:
	
	  Event Type: Warning
	  Event Source: MSExchangeAdmin
	  Event Category: (4)
	  Event ID: 2019
	  Description:
	  An error occurred updating the replica of naming context '/o=ORGANIZATION' on
	  server 'SERVER'. The replica will be updated on server 'SERVER' during the
	  course of any normal replication updates. 0xc1030b22 - The requested
	  operation failed due to a permissions problem encountered while accessing a
	  remote directory. Check that your account has permission to perform this
	  operation. Then check that the directory service on this server has
	  permission to set up replication on a remote directory. Both directory
	  services must be running under the same service account, and the service
	  account must have the Service Account Admin role on the site object.
	
	CAUSE
	=====
	
	This behavior can occur if the account that you use to run the Microsoft
	Exchange Server Administrator program does not have "Modify Admin Attributes"
	permission on the Configuration container.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Start the Exchange Server Administrator program.
	
	2. Make sure the Permissions tab is visible for all objects.
	
	  a. On the Tools menu, click Options, and then click the Permissions tab.
	
	  b. Click to select the "Show Permissions page for all objects" and "Display
	     rights for roles on Permissions page" check boxes.
	
	  c. Click OK.
	
	3. Right-click the Configuration container, click Properties, and then click the
	  Permissions tab.
	
	4. Click the user account that manually forces Intrasite Directory Replication,
	  and then click to select the "Modify Admin Attributes" permission check box.
	
	NOTE: Instead of editing the permissions, you can directly grant the user account
	the Administrator Role, which automatically has the following permissions:
	
	- Add Child
	- Modify User Attributes
	- Modify Administrator
	- Attributes
	- Delete
	
	MORE INFORMATION
	================
	
	The Access Category property of an attribute determines the permissions that a
	user must have to modify the attribute. The Access Category property value
	definitions are as follows:
	
	- 0: Only the system can modify the attribute
	
	- 1: Users with Modify Admin Attributes permission can modify the attribute
	
	- 2: Users with Modify User Attributes permission can modify the attribute
	
	- 3: Users with Modify Permissions rights can modify the attribute
	
	For example, the Exchange Phone Number attribute, which is mapped to the
	Lightweight Directory Access Protocol (LDAP) telephoneNumber attribute, has an
	Access Category value of 2, which means that users with "Modify Users
	Attributes" permission on the object can change the value.
	
	To discover all of the properties you can modify according to a permission,
	follow the procedure described in this section. WARNING: If you use the raw mode
	of the Exchange Server Administrator program (admin /r) incorrectly, serious
	problems may occur that may require you to reinstall Microsoft Windows NT
	Server, Microsoft Exchange Server, or both. Microsoft cannot guarantee that
	problems that result from using raw mode incorrectly can be solved. Use raw mode
	at your own risk.
	
	1. Start the Exchange Server Administrator program in raw mode by typing the
	  following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. On the View menu, click Raw Directory.
	
	3. In the right pane, double-click Schema.
	
	4. Double-click the attribute that you want to modify.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q168753 XADM: Microsoft Exchange Roles, Rights, and Permissions
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
