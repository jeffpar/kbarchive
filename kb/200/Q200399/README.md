---
layout: page
title: "Q200399: SMS: Upgrading to SMS 2.0 When Packages Rely on MSTEST Directory"
permalink: /kb/200/Q200399/
---

## Q200399: SMS: Upgrading to SMS 2.0 When Packages Rely on MSTEST Directory

{% raw %}

	Article: Q200399
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MSTEST folder no longer exists in the Microsoft Systems Management Server
	(SMS) 2.0 directory structure. In SMS 1.2, the path to this folder is
	\sms\site.srv\maincfg.box\mstest.
	
	The missing MSTEST directory might affect migration from SMS 1.2 to SMS 2.0. All
	Packages built in SMS 1.2 that use files that are stored in the MSTEST directory
	are unable to find these files when they are converted to SMS 2.0. As a result,
	the package does not work.
	
	MORE INFORMATION
	================
	
	When you upgrade to SMS 2.0, you need to follow these steps to ensure that
	packages dependent on files from the MSTEST directory continue to work
	properly:
	
	Before SMS 2.0 Upgrade
	
	1. You need to move the files in the MSTEST directory (that the SMS package
	  depends on) to the package source directory.
	
	2. You need to send a job for the package that includes the Job Target and the
	  Send Phase with the Even if Previously Sent option selected (you do not need
	  to select the Distribute Phase and Run Phase). SMS recompresses the package
	  file and includes the files that used to be in the MSTEST directory. This
	  ensures that the package will work properly when it is converted during the
	  SMS 1.2 to SMS 2.0 upgrade.
	
	After SMS 2.0 Upgrade
	
	There are two ways to ensure that the converted package works properly after an
	SMS 2.0 upgrade:
	
	- Remove the converted package and re-create it using a package source that
	  includes the files that used to be in the MSTEST directory. This is the
	  recommended way to ensure that the package works properly.
	- Once the package has been decompressed to the SMS 2.0 Distribution Points,
	  copy the files that used to be in the MSTEST directory to the package
	  directory for the package.
	
	Additional query words: prodsms swdist32
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
