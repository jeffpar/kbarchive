---
layout: page
title: "Q266422: SMS: Remote Control May Not Work with Matrox G400 Video Adapters"
permalink: /kb/266/Q266422/
---

## Q266422: SMS: Remote Control May Not Work with Matrox G400 Video Adapters

{% raw %}

	Article: Q266422
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbRemote kbsms200 kbsms200bug kbHelpDesk kbsmsUtil kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Remote Control on a Systems Management Server (SMS) 2.0 client
	computer that is running Microsoft Windows 95 or Microsoft Windows 98, you may
	receive a general protection (GP) fault in Wuser32. This behavior can occur on
	computers that contain a Matrox Millennium G400 video adapter.
	
	WORKAROUND
	==========
	
	There are four possible workarounds:
	
	- Use the Standard VGA driver on the client.
	
	- Disable Remote Control for the site that is experiencing the problem.
	
	- Prevent the SMS client from being installed on the computer that contains the
	  G400 video adapter by using IP subnetting or scripting.
	
	- Contact Matrox support for a driver that does not exhibit this behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbRemote kbsms200 kbsms200bug kbHelpDesk kbsmsUtil kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
