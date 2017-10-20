---
layout: page
title: "Q153518: Font Display/Screen Redraw Problems w/ WUSER on Compaq Qvision"
permalink: /kb/153/Q153518/
---

## Q153518: Font Display/Screen Redraw Problems w/ WUSER on Compaq Qvision

{% raw %}

	Article: Q153518
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	On a Windows 95 system with an older Compaq Qvision video card, running the
	Remote Control tool (Wuser.exe) can cause font display and screen redraw
	problems. Text in menus is not displayed correctly and when applications are
	minimized, garbage is left on the screen.
	
	These problems occur at higher resolutions and color depths. Standard VGA
	resolution 640x480 16 colors works correctly.
	
	WORKAROUND
	==========
	
	The current workaround is to use 640x480 16 colors video resolution.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: helpdesk usertsr useripx diagnostics win95 wfw prodsms
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

{% endraw %}
