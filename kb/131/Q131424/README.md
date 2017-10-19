---
layout: page
title: "Q131424: PC NTMMTA: Advantages of Running EXTERNAL.EXE as a Service"
permalink: /kb/131/Q131424/
---

## Q131424: PC NTMMTA: Advantages of Running EXTERNAL.EXE as a Service

	Article: Q131424
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT provides Windows NT services to manage network processes
	that run continuously, such as the External and Dispatch programs from Microsoft
	Mail for PC Networks. If you run these programs as Windows NT services, you will
	have several benefits. This article discusses these benefits.
	
	MORE INFORMATION
	================
	
	The following are the benefits from running network processes as Windows NT
	services:
	
	- The External and Dispatch programs can be started automatically when the
	  computer is turned on, without requiring an administrator to log on.
	
	- Specific External and Dispatch instances can be controlled using the Windows
	  NT Service Control Manager.
	
	- Multiple instances of the External and Dispatch programs can run while the
	  workstation is used for other purposes.
	
	- Instances of the External and Dispatch programs can be monitored from any
	  workstation on the network.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
