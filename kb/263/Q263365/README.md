---
layout: page
title: "Q263365: SMS: Remote Control Not Removed if Terminal Services Is Enabled"
permalink: /kb/263/Q263365/
---

## Q263365: SMS: Remote Control Not Removed if Terminal Services Is Enabled

{% raw %}

	Article: Q263365
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200preSP3
	Last Modified: 04-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Systems Management Server client is installed on a Microsoft
	Windows 2000 Server computer on which the Terminal Services program is not
	available, Remote Tools are automatically installed and function normally. If
	Terminal Services is subsequently made available, Remote Tools are not
	automatically removed.
	
	CAUSE
	=====
	
	This issue occurs because the Remote Tools Client Agent is not installed if
	Terminal Services is enabled in Application mode on the Terminal Services
	Server.
	
	WORKAROUND
	==========
	
	To remove Remote Tools from Terminal Services on the Windows 2000 Server
	computer, remove the Systems Management Server client, and then re-install the
	client while Terminal Services is running. The Systems Management Server client
	then recognizes that Terminal Services is running on the Windows 2000 Server
	computer and does not install Remote Tools.
	
	NOTE: Remote Tools are not supported on computers running Terminal Services
	Server and SMS 2.0 with SP 2 or earlier. This has been resolved in the latest
	Service Pack (SP3).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP2
	Version           : :2.0,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
