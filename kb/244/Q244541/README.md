---
layout: page
title: "Q244541: SMS: &quot;NO PERMISSIONS&quot; Security Entries Appear in Admin Console"
permalink: /kb/244/Q244541/
---

## Q244541: SMS: &quot;NO PERMISSIONS&quot; Security Entries Appear in Admin Console

	Article: Q244541
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbConfig kbSecurity kbServer kbsms200 kbCollections
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The security instance of a new object may have a permissions entry of NO
	PERMISSIONS for that class of the object. This entry is created the first time
	that a new user creates an object of that type. For example, the first time a
	new user creates a package, a corresponding security object appears showing NO
	PERMISSIONS. The NO PERMISSIONS result can occur only on collections and
	queries.
	
	For example, if you apply instance-level rights to either a query or a
	collection, two items appear in the Security Rights folder for the user:
	
	- The instance-level rights that were granted
	
	- NO PERMISSIONS for all instances for the class level.
	
	This means that even though a client may have security rights to a specific class
	through group membership, this entry is created.
	
	MORE INFORMATION
	================
	
	To find this entry, click Security Rights in the Administrator console and sort
	by user name. There is an entry that shows the permissions for a new object and
	a NO PERMISSIONS entry. That user can change the NO PERMISSIONS entry to
	Administer.
	
	This is the correct behavior. This class permission is used to provide the
	necessary rights to the object in case the user no longer has the proper
	credentials through group membership. Essentially, if the user's group
	permissions were revoked, the user would have permissions only for the instances
	the user created or items on which the user had granted permissions.
	
	The user who creates the object that adds the NO PERMISSIONS entry can also
	change that NO PERMISSIONS entry to Administer, which seems to grant that user
	full permissions to that class. This is not the case. The only object of that
	class that the user would be able to see after losing permissions through group
	membership are the objects that that particular user created.
	
	If you delete any instance object that has a corresponding NO PERMISSIONS
	security object, the NO PERMISSIONS security object becomes orphaned and is not
	deleted.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbSecurity kbServer kbsms200 kbCollections 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
