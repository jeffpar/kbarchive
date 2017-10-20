---
layout: page
title: "Q140278: PC NTMMTA: Err Msg: Can't Update Service..."
permalink: /kb/140/Q140278/
---

## Q140278: PC NTMMTA: Err Msg: Can't Update Service...

{% raw %}

	Article: Q140278
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you edit the service in the Microsoft Mail Service Manager, and you try to
	save the changes, you may get the following error:
	
	  Error: Can't update service. You many not have the required access to perform
	  this operation.
	
	NOTE: Any changes that were made in the Mail Service Manager screen will not be
	saved.
	
	CAUSE
	=====
	
	When you create a service for the Mail Dispatch or External programs using the
	Microsoft Mail Service Manager, you have to select a Service Account. This
	account will show up in the service parameters for this account in Control
	Panel, Services. You can change which account a service uses in Control Panel,
	Services. Choose the service, and select Startup, Log On As and change the
	account. Then if you edit the service in Microsoft Mail Service Manager, you
	will receive the above error.
	
	RESOLUTION
	==========
	
	1. Change the name of the service account in Control Panel, Services back to the
	  service account that was used when you created the service.
	
	  This is the account that shows up when you edit the service using the
	  Microsoft Mail Service Manager.
	
	2. Delete the service and recreate it.
	
	Additional query words: 3.50 nt mmta mta
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
