---
layout: page
title: "Q186132: SMS: One Hour Delay for Mandatory Time w/Mandatory After Option"
permalink: /kb/186/Q186132/
---

## Q186132: SMS: One Hour Delay for Mandatory Time w/Mandatory After Option

	Article: Q186132
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a job in the System Management Server Administrator program and
	set the Mandatory After option to a specific time (for example 5/1/1998 3:00PM),
	Package Command Manager (PCM) in the System Management Server client will
	receive the job and display the mandatory time for a one hour delay (in the
	example, 5/1/1998 4:00PM).
	
	This problem occurs when both of the following conditions are true:
	
	- You have installed System Management Server 1.2 Service Pack 3.
	
	  -and-
	
	- You are using Microsoft Windows 95 client.
	
	This problem does not occur if you are using a Microsoft Windows NT Workstation
	4.0 client with System Management Server 1.2 Service Pack 3.
	
	Note that this problem does not relate to time zone in either the server or the
	client. This means that it occurs even if your client and server are using the
	same time zone and the system times are synchronized.
	
	WORKAROUND
	==========
	
	Manually adjust the mandatory time in the job's properties to one hour earlier
	than the time you need.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2 Service Pack 3. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120SP3
	Version           : :1.2 SP3
	Issue type        : kbprb
	
	=============================================================================
	
