---
layout: page
title: "Q263198: SMS: Err Msg: You Have Referenced the Variable DEST 9. This..."
permalink: /kb/263/Q263198/
---

## Q263198: SMS: Err Msg: You Have Referenced the Variable DEST 9. This...

{% raw %}

	Article: Q263198
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsInst kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 07-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Repackage functionality in Systems Management Server (SMS)
	Installer 2.0 and you install a program on a drive other than the system drive,
	you may receive the following error message:
	
	  You have referenced the variable DEST 9. This variable has not been
	  previously defined.
	
	CAUSE
	=====
	
	This error message occurs if you install a program on a drive other than the
	system drive and files are installed in more than eight different folders. SMS
	Installer is designed to support eight destination subfolders.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsInst kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
