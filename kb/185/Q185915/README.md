---
layout: page
title: "Q185915: SMS: Background Bitmaps Slow WinNT Remote Control Performance"
permalink: /kb/185/Q185915/
---

## Q185915: SMS: Background Bitmaps Slow WinNT Remote Control Performance

	Article: Q185915
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows NT clients that have large, full-color background bitmaps on
	the desktop can cause Remote Control to perform very slowly.
	
	CAUSE
	=====
	
	Windows NT Remote Control is based on the transfer of individual blocks of
	screen area, including the desktop background. Consequently, a large amount
	desktop background bitmap data may be sent over the network connection during a
	remote control session. There is currently no method to disable transfer of
	background bitmaps by the remote control component in Systems Management Server.
	
	WORKAROUND
	==========
	
	To prevent slow performance related to large bitmaps, ensure that the client
	does not use a background bitmap on the desktop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
