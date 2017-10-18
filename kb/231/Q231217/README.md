---
layout: page
title: "Q231217: Registry Key Not Deleted after You Uninstall Software Metering"
permalink: kb/231/Q231217/
---

## Q231217: Registry Key Not Deleted after You Uninstall Software Metering

	Article: Q231217
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 06-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you uninstall Software Metering from a Systems Management Server 2.0
	client, the following registry key is not deleted, even though an entry in the
	Clinst.log file notes the key is deleted:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client Components\License
	  Metering\Installation Properties
	
	Because of this, the License Metering status in the Systems Management Server
	tool in Control Panel may be reported incorrectly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	Microsoft has confirmed this to be a problem in Systems Management Server version
	2.0. This problem has been corrected in the latest U.S. service pack for Systems
	Management Server version 2.0. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
