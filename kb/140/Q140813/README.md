---
layout: page
title: "Q140813: Windows Fails w/ Black Screen After Upgrade from SMS 1.0 to 1.1"
permalink: /kb/140/Q140813/
---

## Q140813: Windows Fails w/ Black Screen After Upgrade from SMS 1.0 to 1.1

{% raw %}

	Article: Q140813
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you quit Windows a black screen appears without any text. If you press
	CTRL+ALT+DEL a blue screen appears with the dialog box:
	
	  'WARNING!' The system is either busy or unstable.
	
	You are forced to reboot the client by pressing CTRL+ALT+DEL to continue.
	
	This symptom occurs on a Windows or Windows for Workgroups client with ODI
	support for NetWare after you log on to a NetWare domain Systems Management
	Server logon server that belongs to a site that is upgraded to Systems
	Management Server 1.1. The Systems Management Server therefore has upgraded
	logon-server components. When you log on from the client, phase one of the
	client upgrade begins by copying client components to the client. When the
	copying is complete and you quit from Windows as recommended by the script
	dialog box, the above symptom occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
