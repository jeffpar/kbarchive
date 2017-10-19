---
layout: page
title: "Q326589: SMS: How to Control SMS_EXECUTIVE Threads w/out SMS Service Mgr"
permalink: /kb/326/Q326589/
---

## Q326589: SMS: How to Control SMS_EXECUTIVE Threads w/out SMS Service Mgr

	Article: Q326589
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbServer kbsms200 kbsmsAdmin
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to control the running state of the threads of the
	SMS_EXECITVE service without using the SMS Service Manager.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can use the registry change the state of each thread installed on a Systems
	Management Server (SMS) 2.0 Site. This is useful when the SMS Service Manager
	will not make a connection. NOTE: Microsoft recommends that you use the SMS
	Service Manager To stop or start threads of SMS_EXECUTIVE, if you can.
	
	To change the state of threads of the SMS_EXECITVE service, follow these steps:
	
	1. In the registry, locate the following key:
	
	  HKLM\Software\Microsoft\SMS\Components\SMS_EXECUTIVE\Threads
	
	  Each thread installed at the site is listed by its full name, for example:
	
	  SMS_NT_LOGON_SERVER_MANAGER
	
	  When you click the thread name, the right pane of Registry Editor displays a
	  list of values for this subkey.
	
	  The values that you are looking for are "Requested Operation" and "Current
	  State".
	
	  NOTE: For a running thread component, the data for the "Requested Operation"
	  value is "None" and the data for "Current State" is "Running".
	
	2. To stop running components, change "Requested Operation" to "Stop".
	
	  To start stopped components, change "Requested Operation" to "Start".
	
	  The changes to the components take effect immediately.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbServer kbsms200 kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
