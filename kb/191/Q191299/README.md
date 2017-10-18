---
layout: page
title: "Q191299: SMS: PCMDOS Cannot Regain Control After Running a Package"
permalink: kb/191/Q191299/
---

## Q191299: SMS: PCMDOS Cannot Regain Control After Running a Package

	Article: Q191299
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When PCMDOS starts an installation, it fails to regain control after the
	installation has completed. The following message may be displayed:
	
	  Abnormal program termination. This Error occured while writing to status
	  file. MS-DOS returned error code 3 -ENOENT-. There is no file or directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sp sp4
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
