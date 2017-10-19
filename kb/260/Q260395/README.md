---
layout: page
title: "Q260395: SMS: Variables May Not Work Properly in a Program Command Line"
permalink: /kb/260/Q260395/
---

## Q260395: SMS: Variables May Not Work Properly in a Program Command Line

	Article: Q260395
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbsms200 kbsms200bug kbPackage kbSoftwareDist kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use environment variables in program command lines, the variable may
	not be expanded (replaced with the actual value of the variable) before you run
	the command. A non-batch file command line receives the actual environment
	variable (for example, %TEMP%) rather than the actual value of the variable.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this behavior, use the command line within a batch file to allow
	the environment variable to be replaced with the actual value.
	
	NOTE: This may not resolve all types of packages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2. This problem was first corrected in Systems
	Management Server version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbsms200 kbsms200bug kbPackage kbSoftwareDist kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
