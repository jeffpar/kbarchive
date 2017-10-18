---
layout: page
title: "Q152105: Quick Viewer Font Problem(s) When You Remote Control to Clients"
permalink: kb/152/Q152105/
---

## Q152105: Quick Viewer Font Problem(s) When You Remote Control to Clients

	Article: Q152105
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Remote Control to access a Windows client, the fonts are not
	displayed correctly. They are spaced out and cannot be read. Some strings are
	truncated, some strings are too long and some strings are overlapped by some
	others.
	
	
	CAUSE
	=====
	
	This problem occurs when a Cirrus Video Adapter and the Cirrus driver V1.24
	(driver GD5434 set to more than 16 colors) are used together.
	
	
	RESOLUTION
	==========
	
	To work around this problem, install a 16 color video driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1.A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
