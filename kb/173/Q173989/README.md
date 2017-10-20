---
layout: page
title: "Q173989: SMS: Program Group Control May Cause an Access Violation"
permalink: /kb/173/Q173989/
---

## Q173989: SMS: Program Group Control May Cause an Access Violation

{% raw %}

	Article: Q173989
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgckbbuglist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, an access violation (AV) may occur when Program Group
	Control (PGC) first runs after you log on to the network. Under Windows 95, this
	problem manifests itself as an AV in Kernel32.dll. Windows 16-bit and Windows NT
	platforms can also be affected.
	
	CAUSE
	=====
	
	As PGC starts, it enumerates the user groups to which the user belongs (global
	groups for Windows NT domains, or user groups for NetWare domains), for the
	user's current logon domain, and for each server listed in the user's Sms.ini
	file.
	
	If the user is a member of a substantial number of user groups and also has two
	or more logon server entries listed in the Sms.ini file, this problem may become
	evident during every logon attempt.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodsms groups heap
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
