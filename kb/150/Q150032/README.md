---
layout: page
title: "Q150032: Shared Application Still Running Error After Logoff"
permalink: /kb/150/Q150032/
---

## Q150032: Shared Application Still Running Error After Logoff

	Article: Q150032
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you are using a 16-bit Windows client and running a shared application such as
	Microsoft Word or Excel, and you close the application and immediately log off
	without exiting Windows, you may after a short time receive the following error
	message from Program Group Control:
	
	  You have just logged off with shared applications running. Log back on and
	  close your shared applications.
	
	The message is incorrect because there are no shared applications running.
	
	CAUSE
	=====
	
	Every 60 seconds, Program Group Control checks on the status of the shared
	applications. It goes down its Task List incrementing a variable for each
	running application and checking to see if that application is still running. If
	the application is not running, Program Group Control removes it from its Task
	List but does not decrement the variable. Therefore, the count it keeps of
	running applications is incorrect for the first check after an application has
	been closed. The count is corrected on the second check, 60 seconds later.
	
	WORKAROUND
	==========
	
	Wait at least one minute after closing the last open shared application before
	logging off, if you do not intend to exit Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server version
	1.2.
	
	
	Additional query words: prodsms sharedapp network error message
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
