---
layout: page
title: "Q188549: SMS: Runtime Error R6005/R6009 During Inventory on Win95 Client"
permalink: /kb/188/Q188549/
---

## Q188549: SMS: Runtime Error R6005/R6009 During Inventory on Win95 Client

	Article: Q188549
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Systems Management Server inventory (either by running the
	Smsls.bat logon script at startup or by manually running the Runsms.bat file) on
	a client computer running Windows 95 or Windows 98, you may receive either of
	the following error messages:
	
	- Runtime error R6005 not enough memory on exec
	
	  -or-
	
	- Runtime error R6009 not enough space for environment
	
	CAUSE
	=====
	
	A version of McAfee VShield earlier than 3.18 is installed on the system.
	Earlier versions of VShield may consume more memory, which may not allow Systems
	Management Server inventory to run.
	
	WORKAROUND
	==========
	
	To work around this problem, you can change the load order so that Systems
	Management Server inventory runs before the VShield software is loaded. This
	will allow inventory to be run at startup, by means of SMSLS. To do this,
	perform the following steps:
	
	1. From the McAfee VirusScan95 group, run the VShield Configuration Manager.
	
	2. Click the Detection tab. In the General section, click to disable the 'Load
	  VShield At Startup' option.
	
	
	3. Create a shortcut to Vshwin32.exe and place it in the Startup group, so that
	  VShield continues to load automatically when the computer is started.
	
	4. Restart the computer.
	
	NOTE: If you require the ability to run inventory after VShield is running, you
	can try setting VShield to "Scan Only *.EXE Files". Doing this may allow Systems
	Management Server to run inventory by means of RUNSMS, but may not always work.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post additional
	information here in the Microsoft Knowledge Base as it becomes available.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	MORE INFORMATION
	================
	
	
	McAfee, Network General, PGP, and Helix have merged to create a new company named
	Network Associates.
	
	Additional query words: prodsms run time run-time viruscan virusscan virus scan mcaffee
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
