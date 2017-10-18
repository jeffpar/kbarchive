---
layout: page
title: "Q226115: SMS: Prefer Distribution Point Selection Require Path to Package"
permalink: kb/226/Q226115/
---

## Q226115: SMS: Prefer Distribution Point Selection Require Path to Package

	Article: Q226115
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 02-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The PrefServ.exe tool included in the Back Office Resource Kit 4.5, allows you
	to designate a Preferred Distribution Point on a per-package basis. The
	functionality provided by the PrefServ tool fails unless the full Network
	Abstraction Layer (NAL) path to the distribution server is specified. Use the
	full NAL path to the Preferred Distribution Point package share. For example:
	
	     MSWNET:["SMS_SITE=ABC"]\\SERVERNAME\SHARENAME
	
	CAUSE
	=====
	
	It is only possible to set a Preferred Distribution Point on a per-package
	basis. Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. Microsoft has confirmed this to be a problem in Systems Management
	Server version 2.0.
	
	
	For additional information about this topic, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q205406 SMS CAP and Distribution Point Selection
	
	  Q226113 SMS Client Does Not Use Existing Connection Account for CAP or DP
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server version 2.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q235873 SMS: Specifying Preferred Servers in Systems Management Server 2.0
	
	Additional query words: prodsms util specifed DP
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
