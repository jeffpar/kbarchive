---
layout: page
title: "Q235834: SMS: Read Instance on Collection Fails  Produce Collection List"
permalink: /kb/235/Q235834/
---

## Q235834: SMS: Read Instance on Collection Fails  Produce Collection List

	Article: Q235834
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbSecurity kbsms200 kbsms200bug kbsms200fix kbCollections
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When viewing a collection through the Systems Management Server Administrator
	Console, a user may not be able to see members of that collection, even though
	the user has been granted explicit READ instance rights to that collection. In
	addition to granting a user READ rights to a named collection, the READ RESOURCE
	right must also be granted in order for a result list to be produced. This
	workaround is necessary only prior to Systems Management Server Service Pack 1
	(SP1). After the application of SP1 it is only necessary to add READ instance
	permissions to the collection.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sms collection permissions
	
	======================================================================
	Keywords          : kbSecurity kbsms200 kbsms200bug kbsms200fix kbCollections 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
