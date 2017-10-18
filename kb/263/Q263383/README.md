---
layout: page
title: "Q263383: Terminal Servers Run Programs with Mandatory &quot;Runs at Logoff&quot;"
permalink: kb/263/Q263383/
---

## Q263383: Terminal Servers Run Programs with Mandatory &quot;Runs at Logoff&quot;

	Article: Q263383
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 26-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Systems Management Server (SMS) client computer that is running Microsoft
	Windows NT Server 4.0, Terminal Server Edition, programs that are advertised
	with the "Assign immediately after this event" option set to Logon do not run by
	design. However, programs that are advertised with the "Assign immediately after
	this event" option set to Logoff do run.
	
	WORKAROUND
	==========
	
	Do not advertise programs with the "Assign immediately after this event" option
	set to Logoff on Terminal Servers. Instead, assign an actual time to run or set
	the advertisement to run with the "As soon as possible" option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
