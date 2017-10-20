---
layout: page
title: "Q164930: XADM: Error 1075 During Setup of Exchange 4.0 on NT 4.0"
permalink: /kb/164/Q164930/
---

## Q164930: XADM: Error 1075 During Setup of Exchange 4.0 on NT 4.0

{% raw %}

	Article: Q164930
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbtshoot kbusage
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Exchange Server 4.0 for the first time on a Windows
	NT Server 4.0 computer, after you type the Exchange Service Account, the
	following error message appears:
	
	  Fail On Install Setup was unsuccessful a dependency service does
	  not exist or has been marked for deletion.
	
	If you look in Control Panel Services, you see that the Exchange services are
	there. However, when you try to start the Exchange Service Account service, the
	following error message appears:
	
	  Error 1075: The dependency service does not exist or has been
	  marked for deletion.
	
	CAUSE
	=====
	
	To determine the cause of this problem:
	
	1. In Control Panel Network, click Service and see whether RPC CONFIGURATION is
	  installed. If not, this is the cause. RPC must be installed for Exchange
	  Server to work.
	
	2. If RPC is installed, look in Control Panel Services and see whether you have
	  both of the following:
	
	   - Remote Procedure Call (RPC) Locator
	
	   - Remote Procedure Call (RPC) Service
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. In Control Panel Network, click Service and
	
	2. Remove the RPC Configuration and then add it again.
	
	3. Restart the server then restart Exchange Server.
	
	======================================================================
	Keywords          : kbsetup kbtshoot kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
