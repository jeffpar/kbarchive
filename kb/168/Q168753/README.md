---
layout: page
title: "Q168753: XADM: Microsoft Exchange Roles, Rights, and Permissions"
permalink: /kb/168/Q168753/
---

## Q168753: XADM: Microsoft Exchange Roles, Rights, and Permissions

{% raw %}

	Article: Q168753
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Use the Permissions property page to specify the rights that users or groups
	have on the objects within the Exchange Administrator program. You delegate
	permissions to a user or group by assigning them a role.
	
	Roles are sets of rights that define how much access and what type of access a
	user or group has.
	
	ORGANIZATION OBJECT
	-------------------
	
	For the Organization object, Microsoft Exchange provides Administrator,
	Permissions Administrator, Service Account Administrator, and User default
	roles. You can also create custom roles.
	
	Default Roles and Rights for Organization object:
	
	Administrator Role: Add Child, Modify User Attributes, Modify Administrator
	Attributes, and Delete.
	
	Permissions Administrator Role: Add Child, Modify User Attributes, Modify
	Administrator Attributes, Delete, and Modify Permissions.
	
	Service Account Administrator Role: Add Child, Modify User Attributes, Modify
	Administrator Attributes, Delete, Replication, and Modify Permissions.
	
	User Role: Modify User Attributes only.
	
	SITE OBJECT
	-----------
	
	For a Site object, Microsoft Exchange provides Administrator, Permissions
	Administrator, Send As, Service Account Administrator, User, and View Only
	Administrator default roles. You can also create custom roles.
	
	Permissions you set on the Site object are inherited by the site recipients
	container. For example, a user with Mailbox Owner rights at the messaging site
	level automatically inherits Mailbox Owner rights for all recipients in the
	recipients container.
	
	Default Roles and Rights of Site Object:
	
	Administrator Role: Add Child, Modify User Attributes, Modify Administrator
	Attributes, Delete, and Logon Rights.
	
	Permissions Administrator Role: Add Child, Modify User Attributes, Modify
	Administrator Attributes, Delete, Logon Rights, and Modify Permissions.
	
	Send As Role: Send Messages As a Mailbox. This is different from send on behalf
	of permissions, because the person receiving the message cannot tell that the
	message has been sent by someone else.
	
	Service Account Administrator Role: Add Child, Modify User Attributes, Modify
	Administrator Attributes, Delete, Send As, Mailbox Owner, Logon Rights,
	Replication, Modify Permissions.
	
	User Role: Modify User Attributes, Send As, Mailbox Owner Send As Role: Send As
	only.
	
	View Only Administrator Role: Logon Rights only.
	
	CONFIGURATION OBJECT
	--------------------
	
	For the Configuration object, Microsoft Exchange provides Administrator,
	Permissions Administrator, Service Account Administrator, Send As, and User
	roles. You can also create custom roles.
	
	Permissions you set on the Configuration object are inherited by all objects and
	containers within the Configuration object. For example, a user with Modify
	Permissions rights on the Configuration object can modify permissions on all
	subordinate containers and objects.
	
	Default Roles and Rights for Configuration Object:
	
	Administrator Role: Add Child, Modify User Attributes, Modify Administrator
	Attributes, and Delete.
	
	Permissions Administrator Role: Add Child, Modify User Attributes, Modify
	Administrator Attributes, Delete, and Modify Permissions.
	
	Service Account Administrator Role: Add Child, Modify User Attributes, Modify
	Administrator Attributes, Delete, Replication, and Modify Permissions.
	
	Send As Role: Send As Right only.
	
	User Role: Modify User Attributes only.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange rights are defined below. These rights are available for
	assigning permissions to a user or group on the Organization, Site, and
	Configuration objects within Exchange Administrator.
	
	"Add Child" allows a user to create objects below this object.
	
	"Modify User Attributes" allows a user to modify user-level attributes associated
	with an object. A user with this permission can modify the members of a
	distribution list.
	
	"Modify Admin Attributes" allows a user to modify administrator-level attributes
	associated with an object. A user with this permission can modify the job title
	and display name fields in a mailbox.
	
	"Delete" allows a user to delete an object.
	
	"Replication" allows a user to replicate directory information with other
	servers.
	
	"Modify Permissions" allows a user to modify permissions on existing objects.
	Without this permission, a user can grant permissions to new mailboxes but
	cannot modify permissions on existing ones.
	
	"Send As" allows a user to send messages as a mailbox. This is different from
	Send On Behalf Of permissions, because the person receiving the message cannot
	tell that the message has been sent by someone else. You delegate Send On Behalf
	Of permissions using the Delivery Options property page.
	
	"Mailbox Owner" allows a user to log on to a mailbox and use it to send and
	receive messages.
	
	"Logon Rights" allows a user to log on to any server in the site using the
	Administrator program.
	
	ADDITIONAL INFORMATION
	----------------------
	
	The Service Account Administrator role maintains the highest level of rights and
	permissions when assigned to a user or group. By default, the account specified
	as the Exchange Service account is granted the Service Account Administrator
	role on the Organization, Site, and Configuration objects.
	
	Within Exchange Administrator, on the Tools menu, point to Options, and then
	click the Permissions tab to select the option for the Display Rights for Roles
	on Permissions page. When this option is selected, the Exchange Administrator
	program displays the list of rights on the Permissions tabs of Object
	properties.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
