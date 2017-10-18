---
layout: page
title: "Q263399: SMS: Repackager Stops Responding During Visio 2000 Compilation"
permalink: kb/263/Q263399/
---

## Q263399: SMS: Repackager Stops Responding During Visio 2000 Compilation

	Article: Q263399
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbtool kbsms200 kbsms200bug kbPackage kbsmsInst kbsms200preSP3
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to repackage Visio 2000 by using the Systems Management Server
	(SMS) installer utility, the repackage function may stop responding (hang) or
	generate a Dr. Watson error message.
	
	CAUSE
	=====
	
	This problem can occur because Visio 2000 does not support a silent installation
	by using the SMS installer. For Visio 2000, setup technologies shifted from
	InstallShield to the Microsoft Installer (MSI). Unanticipated complications in
	integrating the new MSI technology precluded the inclusion of the silent
	installation feature in Visio 2000.
	
	WORKAROUND
	==========
	
	To work around this problem, corporate deployment of Visio 2000 provides three
	alternatives to silent installation for large organizations:
	
	- Publish by using Windows 2000 Active Directory.
	
	- Use a Windows Terminal Server installation.
	
	- Use a network installation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about this topic, please view the following Microsoft Web
	site:
	
	  http://www.microsoft.com/office/visio/
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbtool kbsms200 kbsms200bug kbPackage kbsmsInst kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
