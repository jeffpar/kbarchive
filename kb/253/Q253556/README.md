---
layout: page
title: "Q253556: FIX: Error Message: MQ_ERROR_OBJECT_SERVER_NOT_AVAILABLE"
permalink: kb/253/Q253556/
---

## Q253556: FIX: Error Message: MQ_ERROR_OBJECT_SERVER_NOT_AVAILABLE

	Article: Q253556
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbMSMQ kbMQSeriesBridge kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSMQ - MQSeries Bridge 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start Microsoft Windows on a computer where Microsoft Message Queue
	(MSMQ) and the MSMQ - MQSeries Bridge are installed, the MSMQ - MQSeries Bridge
	may not start properly. The following error message is posted to the Application
	event log:
	
	  
	
	  C:\Program Files\MSMQ-MQSeries Bridge\Q2QGW.EXE (thread 212) ->  
	  ControlerThread: Error in e:\bridge40\falconmq\wing\q2q\q2qgw\q2qgw.cpp
	  (from Thu Jun 24 15:07:19 1999), line 372 
	  (compiled 12:20:16 on Aug 17 1999)
	  <<Passing it on>>
	  CQ2QControler::CQ2QControler: Error in
	  e:\bridge40\falconmq\wing\q2q\q2qgw\q2qcntl.cpp (from Thu Jun 24 15:07:18
	  1999), line 598 
	
	  (compiled 12:20:04 on Aug 17 1999)
	  <<Passing it on>>
	  CreateOpenCntlQueues: Error in
	  e:\bridge40\falconmq\wing\q2q\q2qgw\q2qcntl.cpp (from Thu Jun 24 15:07:18
	  1999), line 101 
	
	  (compiled 12:20:04 on Aug 17 1999)
	  <<Passing it on>>
	  CreateOpenCntlQueues: Error in
	  e:\bridge40\falconmq\wing\q2q\q2qgw\q2qcntl.cpp (from Thu Jun 24 15:07:18
	  1999), line 101 
	
	  (compiled 12:20:04 on Aug 17 1999)
	  <<MQCreateQueue failed - error = (c00e004a)
	  MQ_ERROR_OBJECT_SERVER_NOT_AVAILABLE.>>
	
	It is important to note that the last line in the log:
	
	  MQ_ERROR_OBJECT_SERVER_NOT_AVAILABLE
	
	may also occur as follows:
	
	  MQ_ERROR_SERVICE_NOT_AVAILABLE
	  MQ_ERROR_NO_DS
	
	CAUSE
	=====
	
	The MSMQ service notifies the Service Control Manager that it is online, even
	though it is not ready to take Message Queue Information Service requests. This
	behavior is by design in order to allow any dependent services to start without
	having to wait for the MSMQ service to complete its full initialization. This is
	only a problem if a service that depends on the MSMQ needs to issue a Message
	Queue Information Service request immediately.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	With this fix installed, the MSMQ - MQSeries Bridge retries Message Queue
	Information Service operations when an operation fails with one of the following
	error messages:
	
	  MQ_ERROR_OBJECT_SERVER_NOT_AVAILABLE
	  MQ_ERROR_SERVICE_NOT_AVAILABLE
	  MQ_ERROR_NO_DS
	
	The default retry interval is one second, and three retries are attempted. This
	interval can be changed by adding a new DWORD value named MQISRetryDelay to the
	following registry key:
	
	  HKLM\Software\Microsoft\MQBridge\Server
	
	Set the value to the number of milliseconds that you want the server to wait
	between retries.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMSMQ kbMQSeriesBridge kbSNA400sp4fix kbSNA400PreSP4fix 
	Component         : MSMQ
	Technology        : kbAudDeveloper kbMSMQSearch kbMSMQ100
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
