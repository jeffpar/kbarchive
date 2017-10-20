---
layout: page
title: "Q164155: SMS: Doset32.exe Produces a Bad Image Error"
permalink: /kb/164/Q164155/
---

## Q164155: SMS: Doset32.exe Produces a Bad Image Error

{% raw %}

	Article: Q164155
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC kbsmsUtil smspgc smsutilkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use Doset32.exe, the following error message appears:
	
	  The application or DLL C:\WINNT\SMSSETU_.DLL is not a valid Windows image NT
	  image. Please check this against your installation diskette.
	
	You cannot run the Doset32.exe application.
	
	CAUSE
	=====
	
	The Doset32.exe executable image improperly calls the wrong DLL. It should
	actually call Smssu32.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	Additional query words: prodsms SMSSETU_.DLL doset32 dosetup
	
	======================================================================
	Keywords          : kbnetwork kbPGC kbsmsUtil smspgc smsutil kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
