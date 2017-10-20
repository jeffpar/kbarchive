---
layout: page
title: "Q149175: Font, Cursor, and Redraw Problems with Adobe Type Manager"
permalink: /kb/149/Q149175/
---

## Q149175: Font, Cursor, and Redraw Problems with Adobe Type Manager

{% raw %}

	Article: Q149175
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
	
	Remote control of a Windows or Windows for Workgroups client with Adobe Type
	Manager installed causes one of the following two behaviors:
	
	- If ATM is enabled, menu and window fonts do not appear in the Quick Viewer
	  window.
	
	- If ATM is disabled, screen redraws are not correct, most icons are not
	  displayed, or the cursor is split in half (with a white space), and each half
	  appears in mirror image.
	
	CAUSE
	=====
	
	The ATM install replaces System.drv with Atmsys.drv in the [BOOT] section of the
	System.ini. It also adds the following line:
	
	     atm.system.drv=system.drv
	
	RESOLUTION
	==========
	
	If the following changes are added to the System.ini [BOOT] section, both
	problems are resolved.
	
	     ;system.drv=atmsys.drv
	     system.drv=system.drv
	     ;atm.system.drv=system.drv
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
