---
layout: page
title: "Q140279: PC NTMMTA: How to Start Services from the Command Line"
permalink: kb/140/Q140279/
---

## Q140279: PC NTMMTA: How to Start Services from the Command Line

	Article: Q140279
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows NT Multitasking MTA (NT MMTA) can be stopped and started
	from the command prompt. You can put the commands in a command (.CMD) file for
	convenience.
	
	MORE INFORMATION
	================
	
	Because the NT MMTA can be configured as a Windows NT Service, it can also be
	stopped and started from the command line. The following examples will explain
	how to stop and start the NT MMTA services.
	
	Steps to Start
	--------------
	
	1. Create a service with the Microsoft Mail Service Manager.
	
	2. Open the Control Panel, and select Services. Look up the name of the instance
	  to be started. For example, the name of the service can be "MS Mail External
	  - (instance1)."
	
	3. Open a command prompt window.
	
	4. Type the following command at the command prompt:
	
	  " Net Start "MS Mail External - (instance1)" " (without the quotation marks)
	
	5. Open the Control Panel, and select Services. Verify that the service is
	  started.
	
	6. Open Microsoft Mail Service Manager and monitor the service to see that it is
	  working properly.
	
	Steps to Stop
	-------------
	
	1. Open the Control Panel, and select Services. Look up the name of the instance
	  that will be stopped. For example, the name of the service is "MS Mail
	  External - (instance1)."
	
	2. Open a command prompt window.
	
	3. Type the following command at the command prompt:
	
	  " Net Stop "MS Mail External - (instance1)" " (without the quotation marks)
	
	4. Open the Control Panel, and select Services. Verify that the service is
	  stopped.
	
	If you have multiple services to be stopped and started, a command file could be
	created with the above commands. This makes it convenient to stop and start
	multiple services. Both the Mail External and Dispatch programs work with this
	method. The following command files are examples that could be used to start and
	stop multiple services:
	
	  START.CMD
	
	  net start "ms mail dispatch - (instance1)"
	  net start "ms mail external - (instance2)"
	  net start "ms mail external - (instance3)"
	
	  STOP.CMD
	
	  net stop "ms mail dispatch - (instance1)"
	  net stop "ms mail external - (instance2)"
	  net stop "ms mail external - (instance3)"
	
	
	  Q114417 Net Help Start <Service> Works only for Windows NT 3.1 Services
	
	
	Additional query words: 3.50 start service command line net
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
