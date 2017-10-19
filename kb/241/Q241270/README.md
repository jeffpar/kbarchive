---
layout: page
title: "Q241270: PRB: Foreign Connected Network Not Available with MQSeries Bridg"
permalink: /kb/241/Q241270/
---

## Q241270: PRB: Foreign Connected Network Not Available with MQSeries Bridg

	Article: Q241270
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbMSMQ kbMQSeriesBridge
	Last Modified: 12-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSMQ - MQSeries Bridge 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure the MSMQ - MQSeries Bridge, the foreign connected network may
	not be available.
	
	CAUSE
	=====
	
	Because Microsoft Message Queue Server (MSMQ) only supports the use of foreign
	connected networks and foreign computers on Windows NT Server Enterprise
	Edition, this problem occurs when you do not complete the Windows NT Server
	Enterprise Edition setup by installing Service Pack 3. If you skip the
	installation of Service Pack 3 and go directly to Service Pack 4 (or later),
	this problem occurs.
	
	RESOLUTION
	==========
	
	To resolve this problem, you must reinstall Windows NT Server Enterprise, and
	then install Service Pack 3 when you are prompted. The following is from the
	Readme.txt file included with Windows NT Server Enterprise Edition:
	
	  
	
	  New Windows NT Server/E Installations:
	
	  Installing a new copy of Windows NT Server/E is a two step process:
	
	- First, install Windows NT Server/E in the same way that you install Windows
	  NT Server.
	
	- After you install Windows NT Server/E, install Service Pack 3. (A prompt
	  reminds you to do this each time you log in, until you have done so.)
	
	  Both steps are required to have a functioning Windows NT Server, Enterprise
	  Edition system.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: MSMQ MQSeries Bridge
	
	======================================================================
	Keywords          : kbMSMQ kbMQSeriesBridge 
	Technology        : kbAudDeveloper kbMSMQSearch kbMSMQ100
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
