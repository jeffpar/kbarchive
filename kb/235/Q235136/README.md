---
layout: page
title: "Q235136: SMS: Command Fails When Running an Advertisement Using %windir%"
permalink: /kb/235/Q235136/
---

## Q235136: SMS: Command Fails When Running an Advertisement Using %windir%

	Article: Q235136
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a command line or batch file that uses the %windir% variable, the
	command may fail or the resulting output file content may be empty or incorrect.
	This often occurs with packages that have been migrated from Systems Management
	Server 1.2 to version 2.0.
	
	
	WORKAROUND
	==========
	
	To correct this behavior, replace the %windir% variable with the %systemroot%
	variable. Keep in mind that the %systemroot% variable may not exist on Windows
	95 and Windows 98 machines.
	
	Another method to work around this issue is to start the application using a
	batch file that first executes SET WINDIR=%SYSTEMROOT%. Some applications
	specifically look for WINDIR and can't easily be changed to look for SYSTEMROOT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
