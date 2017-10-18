---
layout: page
title: "Q292030: The Install Status May Be Missing for Advertised Programs"
permalink: kb/292/Q292030/
---

## Q292030: The Install Status May Be Missing for Advertised Programs

	Article: Q292030
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbClient kbMMC kbsms200 kbsms200bug kbAdvertisement kbCAP kbPackage kbs
	Last Modified: 01-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you advertise programs to Microsoft Windows 95-based or to Microsoft
	Windows 98-based client computers that must be restarted, you may receive a "no
	success" or a "failure status" message in the Status Message Viewer. When you
	examine the Cqmgr32.log file on the client, you may receive the following log
	after the client is restarted:
	
	  -Servicing Destination[CAP List for site W2K,statmsgs.box\]
	  Destination[CAP List for site W2K,statmsgs.box\] is inaccessible
	  -Destination[CAP List for site W2K,statmsgs.box\] retry set to 1
	  Copy cycle finished normally
	  Starting Copy Cycle no. 2
	  'OK to Process' event unsignalled
	  -Servicing Destination[CAP List for site W2K,statmsgs.box\]
	  -Destination[CAP List for site W2K,statmsgs.box\] not yet ready for retry
	  -Destination[CAP List for site W2K,statmsgs.box\] retry set to 1
	  Copy cycle finished normally
	
	NOTE: You must replace the preceding "W2K" site code with the client-assigned
	site code.
	
	CAUSE
	=====
	
	This problem can occur when the After Running option is set to Program restarts
	Computer in the Properties section of the advertised program, and if the program
	requests that the client must be restarted. This problem only occurs when the
	program successfully creates a status .mif file. Typically, this problem occurs
	in environments where users tend to turn off their computers before they leave
	the office.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Rewrite or modify the advertised program, if possible, to suppress the
	  restart process and to change the After Running option to SMS Restarts
	  Computer in the Properties section of the advertised program.
	
	- Ensure that users do not turn off their computers when they leave the office.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	On some clients, Copy Queue Manager may not be able to initialize correctly upon
	startup, which can produce an inaccessible connection to a client access point.
	When the new success status message item is submitted to Copy Queue Manager
	moments later, the message is not successfully copied to the client access
	point, but the message can remain in the queue and can be retried after the next
	wake-up cycle of Copy Queue Manager.
	
	The default Copy Queue Manager cycle is 1380 minutes (23 hours). Users who tend
	to turn off their computers when they leave the office never enable this wake-up
	cycle to reach its schedule. A new Copy Queue Manager cycle can occur after a
	subsequent restart of the client, but the cycle is likely to be unsuccessful
	because of the same initialization failure which caused the initial problem. As
	a consequence, the Copy Queue Manager item is deleted after its configured item
	lifetime which by default is set to every 11520 minutes (eight days).
	
	If the advertised program does not report a status .mif file, refer to the
	related article:
	
	  Q292261 SMS: The Install Status May Be Missing for Advertised Programs That
	  Do Not Generate Status .mif Files
	
	
	Additional query words: prodsms no 10008 10009 only 10005 Windows 95 98
	
	======================================================================
	Keywords          : kberrmsg kbtool kbClient kbMMC kbsms200 kbsms200bug kbAdvertisement kbCAP kbPackage kbsmsAdmin kbStatSum kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
