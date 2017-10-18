---
layout: page
title: "Q215018: SMS: Cannot Add Local Groups in Manage User Wizard"
permalink: kb/215/Q215018/
---

## Q215018: SMS: Cannot Add Local Groups in Manage User Wizard

	Article: Q215018
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbSecurity kbsms200 kbsms200bug kbsms200fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding class and instance security rights through the Systems Management
	Server "Systems Management Server User Wizard" it is not possible to browse
	local groups or the users or groups of trusted domains. However, it is possible
	to add local groups by manually entering the group and user name using the
	following syntax which is documented with a yellow triangle warning indicator in
	the Systems Management Server User Wizard:
	
	"Use DOMAIN\<user group> to specify a local user group for this site."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSecurity kbsms200 kbsms200bug kbsms200fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
