---
layout: page
title: "Q235730: SMS: Remote Control Fails on Win95 Client w/ Nitro 3D Video Card"
permalink: /kb/235/Q235730/
---

## Q235730: SMS: Remote Control Fails on Win95 Client w/ Nitro 3D Video Card

{% raw %}

	Article: Q235730
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 Clients with the Nitro 3D video adapter might experience the
	following problems with Systems Management Server Remote Control Agent:
	
	- As soon as the remote control agent initializes during boot, the client
	  displays a blue screen with a Fatal Exception 0E raised.
	
	-or-
	
	- With the STB Vision add-on installed, the remote control agent initializes,
	  but, when trying to remote control, the client a white screen appears and
	  you're unable to view the client desktop.
	
	WORKAROUND
	==========
	
	On clients that use the STB Nitro 3D video card, do the following:
	
	1. In Control Panel, double-click the Display icon.
	
	2. Click the Settings tab.
	
	3. Click Advanced Properties.
	
	4. Click the Performance tab.
	
	5. Set Hardware acceleration to None.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms RC Quick Windows Viewer wuser
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
