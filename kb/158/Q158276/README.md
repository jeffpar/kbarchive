---
layout: page
title: "Q158276: INF: PC MMTA: NT MMTA Will Not Start As a Service"
permalink: /kb/158/Q158276/
---

## Q158276: INF: PC MMTA: NT MMTA Will Not Start As a Service

	Article: Q158276
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a customer runs the Microsoft Mail Multitasking MTA for Windows NT (NT MMTA)
	as a service with the following INI file, and does not check the "Single
	Postoffice Instance" option, the customer will see the "Server.glb file not
	found on home postoffice. To use dynamic drives, Dynadmin.exe must first be
	run." error in the monitor screen of a Microsoft Mail 3.5 External service in
	the Microsoft Mail Service Manager or the session log that the service creates.
	
	  [external]
	  LogReceive
	  LogSent
	  LogSession
	
	  [external-instance]
	  DriveHomePo=m
	  DrivesDirectPo=m
	  CommType=Async
	  AsyncCommPort=Com2
	  CommScript=Ultra96
	
	WORKAROUND
	==========
	
	To work around this problem, check the "Single Postoffice Instance" option on
	the instance edit page in Microsoft Mail Service Manager.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbprb
	
	=============================================================================
	
