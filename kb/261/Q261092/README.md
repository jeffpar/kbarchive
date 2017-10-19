---
layout: page
title: "Q261092: XADM: Requirements to Set Security Permission Roles"
permalink: /kb/261/Q261092/
---

## Q261092: XADM: Requirements to Set Security Permission Roles

	Article: Q261092
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how enterprise administrators can set granular security
	permissions on Exchange Server directory objects to ensure that enterprise and
	local administrators have the appropriate security access in an organization.
	
	MORE INFORMATION
	================
	
	By setting granular security, you can allow local administrators access to only
	the server-level directory objects and allow enterprise administrators full
	access to all of the directory objects in the organization.
	
	In traditional configurations, you might configure an Exchange Administrator
	group that has the Permissions Admin role at the organization, site, and
	configuration levels. This group represents the enterprise administrators of the
	organization. However, this particular configuration does not provide any
	granular directory object access for the local administrators.
	
	For example, if you have five enterprise administrators who are responsible for
	supporting the organization at a global level and you also have individual local
	administrators who are responsible for only their server's directory objects in
	a particular site, you need to ensure that the local administrators have
	directory object access to only the appropriate servers. To do so, you need to
	set appropriate permissions that the site and server directory objects inherit.
	
	To set the appropriate permissions:
	
	1. At the server for which the local administrator or administrative group needs
	  full access, open the properties of the server's directory object.
	
	2. Click the Permissions tab, and then add that user or group as Permissions
	  Admin.
	
	  NOTE: Ensure that you click the appropriate directory object (for example,
	  under the <organization> container, the <site> container, and the
	  Servers container, click the <server name> object and just not the
	  Servers container) before you perform step 2. If you select the Servers
	  container in step 1 and then perform step 2, you grant the accounts
	  Permissions Admin role to all of the servers in that site.
	
	3. Open the properties of the site-level directory object.
	
	4. Click the Permissions tab, and then add that user or group as Permissions
	  Admin.
	
	After you perform these steps, the local administrator or administrative group
	has access to not only the site folders, but also to their server properties.
	Additionally, the local administrator or administrative group cannot gain access
	to other server objects in the site. Enterprise administrators should already be
	established with organization-level, site-level, and server-level Permissions
	Admin roles.
	
	When you establish the preceding permissions, note that enterprise administrators
	have full access to change the properties attributes of all system folders.
	However, you can configure more granular permissions with this approach,
	depending on your particular needs.
	
	As with any security implementation, if you change your environment settings, you
	may impact more then one area. You need to plan and test when you apply
	permission changes for your organization.
	
	Additional query words: xmrp
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
