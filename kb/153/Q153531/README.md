---
layout: page
title: "Q153531: Quick Viewer Resizes Incorrectly During Remote Control"
permalink: /kb/153/Q153531/
---

## Q153531: Quick Viewer Resizes Incorrectly During Remote Control

{% raw %}

	Article: Q153531
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	During a remote-control session, when you change from a DOS window to DOS full
	screen, the Quick Windows Viewer resizes correctly. However, when changing from
	DOS full screen to a DOS window, Quick Viewer (QV) does not resize correctly,
	giving only a partial view of the client's screen. The QV window does not allow
	rubber-banding and does not display the Maximize button.
	
	In SMS 1.1, the workaround is to minimize then maximize, which then shows the
	correct view.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
