---
layout: page
title: "Q263368: Membership of User and User Group Collections Is Not Updated"
permalink: /kb/263/Q263368/
---

## Q263368: Membership of User and User Group Collections Is Not Updated

	Article: Q263368
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200 kbCollections kbDiscovery kbQuery kbsms200preSP3
	Last Modified: 21-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to update collection membership, newly created users and groups do
	not appear in the user and user group collections.
	
	CAUSE
	=====
	
	This behavior can occur because these two collections differ from the others in
	Systems Management Server (SMS) because their membership is controlled by
	settings in discovery methods.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Activate Windows NT User Account Discovery and Windows NT Group Discovery,
	  but do not change the polling interval. You should receive a list of both the
	  users and user groups in your domain within their respective collections.
	
	2. Create some new users and global user groups.
	
	3. Right-click either of the collections, point to All Tasks, and then click
	  Update Collection Membership. Although you may expect that the newly created
	  users and groups appear as members of these collections after the update,
	  this does not occur.
	
	Nothing occurs as a result of this action because the membership update only
	re-queries the database and only returns the data that exists therein.
	
	However, after the next discovery cycle has completed (default is one day), the
	new users and groups populate the database. Subsequently pointing to All Tasks,
	and then clicking Update Collection Membership displays the new entries.
	
	The discovery methods are responsible for collecting the data for users and user
	groups. The new data only appears in the database after the next discovery cycle
	completes. Subsequently, updating the collection membership reflects the new
	users and groups.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbsms200 kbCollections kbDiscovery kbQuery kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
