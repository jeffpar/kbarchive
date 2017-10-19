---
layout: page
title: "Q235765: SMS: Local Groups Cannot Write Queries Even With Full Rights"
permalink: /kb/235/Q235765/
---

## Q235765: SMS: Local Groups Cannot Write Queries Even With Full Rights

	Article: Q235765
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server version 2.0, administrators often need to be able
	to grant Query rights to another individual or group within the organization.
	
	Prior to Service Pack 1 for Systems Management Server 2.0, Administrators were
	able to grant full query rights to a user or a group (local or global) but only
	the user was able to use the rights. This only worked if the user had been
	granted the rights explicitly.
	
	When a local or global group is granted full query rights and then users were
	assigned to the group, the users within the group could not act on those rights.
	Furthermore, those same users in the groups were able to act on rights granted
	to them to create Collections and Packages.
	
	This problem is specific to creating custom queries in the Administrator Console
	for computers, software, and so forth within the Queries section. It is not an
	issue when creating and running queries in the Status Message Viewer.
	
	When attempting to use the full query rights granted by the Administrator, a
	pre-Service Pack 1 site system should see the Queries, New, Query Context menu
	dimmed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This is an issue in both Single-Byte and Double-Byte character sets of
	Microsoft's Systems Management Server version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : WINDOWS:2.0; winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
