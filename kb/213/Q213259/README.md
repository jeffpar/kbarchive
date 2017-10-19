---
layout: page
title: "Q213259: SMS: Running Crystal Reports Affects Site Server Performance"
permalink: /kb/213/Q213259/
---

## Q213259: SMS: Running Crystal Reports Affects Site Server Performance

	Article: Q213259
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running several Crystal Reports at one time may affect performance on your site
	server. Monitoring your system with Performance Monitor may show that the
	Crystal Reports agent is using an large amount of CPU time. Also, while the
	reports are being generated, large files in the systems Temp folder may be
	created.
	
	CAUSE
	=====
	
	The site may be set up to allow multiple Crystal Reports to be generated at one
	time, but it does not have the correct configuration settings to enable this
	task.
	
	WORKAROUND
	==========
	
	To work around this behavior, follow these steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the MaximumLoad value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Seagate Software\Crystal
	  Info\Sentinel\MaximumLoad
	
	3. Reduce this value to reduce the number of simultaneous reports that can be
	  generated at one time.
	
	  Do not set the MaximumLoad value to anything below 1. If your site server is
	  capable, increasing this value allows for a greater number of simultaneous
	  reports. This option represents the total number of processes that can run
	  concurrently on an Info Server computer. The setting by default is 1. The
	  setting should be at least 1.
	
	  CAUTION: If this number is set too high, the system cannot multi-process the
	  object efficiently. If this number is set below 1 (for example, 0, -1, -2,
	  and so forth), no job is ever processed at the Info Server.
	
	4. Click OK to save your change, and then quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
