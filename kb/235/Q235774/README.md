---
layout: page
title: "Q235774: SMS: Hierarchy Is Unsynchronized After Package Deletion"
permalink: kb/235/Q235774/
---

## Q235774: SMS: Hierarchy Is Unsynchronized After Package Deletion

	Article: Q235774
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbPackage
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Packages that are deleted at a Parent Site Server may become orphaned at child
	sites if the child site does not process the replication instructions to delete
	the package.
	
	This could happen for any number of reasons such as the Central site
	administrator deleting a package while a child site was offline. The child sites
	will still show these packages in the console and it is not possible to delete
	them.
	
	If logging is enabled for Distribution Manager, it will show entries similar to
	the following:
	
	~SQL Msg #3606> Arithmetic overflow occurred.~ $<SMS_DISTRIBUTION_MANAGER>
	~SQL Msg #99901> This PkgID (40100002) does not exist in the parent table, SMSPackages.~  $$<SMS_DISTRIBUTION_MANAGER>
	
	This can also cause performance problems for the child site servers when they are
	trying to process and maintain these orphaned packages.
	
	WORKAROUND
	==========
	
	Do not delete packages from the parent site unless all child site servers are
	online.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms orphan
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbPackage 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
