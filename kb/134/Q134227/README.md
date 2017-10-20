---
layout: page
title: "Q134227: PC NTMMTA: External Service Starts Inconsistently"
permalink: /kb/134/Q134227/
---

## Q134227: PC NTMMTA: External Service Starts Inconsistently

{% raw %}

	Article: Q134227
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on a machine running the Microsoft Mail Multitasking MTA for
	Windows NT (NT MMTA) as a service, the External service may not start.
	
	CAUSE
	=====
	
	When you make connections with File Manager, you can use the Reconnect at Logon
	option (default option) so network drives are reestablished when a user logs on.
	If the NT MMTA is running as a service and has many instances, there may not be
	drives available when it tries to dynamically connect. This will cause the
	service to not start.
	
	NOTE: There will be no error. The only way to tell if External was not started is
	to monitor the instance, and the window will open and then close quickly. If you
	look in the Control Panel, Services, it will show the instance has not started.
	
	RESOLUTION
	==========
	
	Do not make permanent connections when you run the NT MMTA on a machine.
	
	MORE INFORMATION
	================
	
	The update of NTMMTA (version 3.5.27) allows you to open File Manager, and map a
	drive letter other than those used by the NTMMTA. It still does not allow you to
	log on to the computer as an account other that the MTA service account.
	
	Version 3.5.27 is available to you on the BBS at either (972) 518-0393 or (972)
	550-0226 with the proper password that you get from a Microsoft Mail Support
	Professional.
	
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
