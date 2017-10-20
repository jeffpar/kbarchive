---
layout: page
title: "Q161912: SMS: Winpopup.exe May Cause Windows 95 Shut Down to Fail"
permalink: /kb/161/Q161912/
---

## Q161912: SMS: Winpopup.exe May Cause Windows 95 Shut Down to Fail

{% raw %}

	Article: Q161912
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A client computer running Windows 95 configured with Program Group Control (PGC)
	to automatically start may either stop responding when it is shut down (or
	restarted), or receive a "Fatal Exception 0D" error.
	
	CAUSE
	=====
	
	Running both Systems Management Server Program Group Control (Appctl95.exe) and
	Winpopup.exe simultaneously when the system starts causes this problem to occur.
	
	WORKAROUND
	==========
	
	Smsrun16.exe runs Appctl95.exe. If it is also used to start Winpopup.exe, it
	cannot start Appctl95.exe. To run both of these programs at startup, make the
	following changes on the client computer running Windows 95:
	
	1. Remove Winpopup.exe from the Startup group.
	
	2. Add the following line to the bottom of the [Startup] section of the
	  Smsrun16.ini file. This file is located in the Ms\Sms\Data directory. NOTE:
	  Make sure the path to Winpopup.exe is correct.
	
	        Load=C:\WINDOWS\WINPOPUP.EXE
	
	NOTE: Because all client computers running Windows 95 have a common Smsrun16.ini
	file, using a Systems Management Server Workstation package to replace this file
	with one containing the updated line may simplify step 2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms win95 exit gpf close shutdown hang hangs hung freeze freezes frozen lock locks locked up
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
