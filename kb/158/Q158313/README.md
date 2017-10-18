---
layout: page
title: "Q158313: SMS: Configuration Command Line Ignores Specified Drive Letter"
permalink: kb/158/Q158313/
---

## Q158313: SMS: Configuration Command Line Ignores Specified Drive Letter

	Article: Q158313
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a shared application is configured to use a specific drive letter (for
	example, drive F), and there is a configuration command line, the client will
	not use that specific drive letter when it attempts to run the configuration
	command line. Instead, it will use the next available drive letter to connect to
	the package share.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
