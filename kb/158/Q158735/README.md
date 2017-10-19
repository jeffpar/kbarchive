---
layout: page
title: "Q158735: SMS: Remote Control Display Problems with Trident Video Card"
permalink: /kb/158/Q158735/
---

## Q158735: SMS: Remote Control Display Problems with Trident Video Card

	Article: Q158735
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Systems Management Server Quick Windows Viewer will experience display
	problems when you remotely control a client computer running Windows for
	Workgroups IPX that has a Trident 8900d video card, if the client's color depth
	is greater than 256 colors. The Quick Windows Viewer will display that client's
	desktop as mostly black, although the icons may be visible.
	
	WORKAROUND
	==========
	
	To work around this problem, reduce the color depth on the client computer to
	256 colors or less.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms rc helpdesk troubleshooting
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
