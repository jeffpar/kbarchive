---
layout: page
title: "Q168577: XFOR: Err Msg: All Pipe Instances Are Busy"
permalink: kb/168/Q168577/
---

## Q168577: XFOR: Err Msg: All Pipe Instances Are Busy

	Article: Q168577
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the LinkAge Controller service from Control Panel
	Services, the following messages are logged in the LinkAge Administrator
	program's Log Browser:
	
	  control(01ba) 1 00001:Operating system error {WIN32:231(All pipe
	  instances are busy.)} from NPServer::create
	
	  control(01ba) 1 01054:Error {An unknown error condition has occurred}:
	  Could not create the named pipe server object
	
	  control(01ba) 3 00505:control is ending, last return code was {An
	  unknown error condition has occurred}
	
	  control(019f) 1 00001:Operating system error {WIN32:231(All pipe
	  instances are busy.)} from NPServer::create
	
	  control(019f) 1 01054:Error {An unknown error condition has occurred}:
	  Could not create the named pipe server object
	
	  control(019f) 3 00505:control is ending, last return code was {An
	  unknown error condition has occurred}
	
	CAUSE
	=====
	
	There are two cases when these errors can be generated.
	
	- The LinkAge Controller (Lsmain.exe) is already up and running and a user is
	  trying to start the LinkAge Controller service.
	
	- The LinkAge Controller (Lsmain.exe) is stopped or ends abnormally, but the
	  rest of the underlying controller tasks are still running.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Restart the computer. This is the easiest method.
	
	- Terminate the remaining LinkAge processes with the Windows NT Task Manager,
	  and then restart the LinkAge Controller service. It should restart correctly
	  after all the processes are stopped. Contact a Microsoft Exchange Server
	  Support Professional to assist with this method.
	
	MORE INFORMATION
	================
	
	The LinkAge controller task and all the underlying tasks talk to each other
	through named pipes (that is, inter-process communication). Named pipes are used
	for such things as the scoreboard display on the LinkAge Administrator user
	interface, which displays all the processes and their status, the Windows NT
	Services listing, located in the Control Panel under Services, and the LinkAge
	Connector logs.
	
	If you are trying to start the LinkAge Controller service when it is already
	running, the Named Pipe resources clash, and result in the above errors. You do
	not need to do anything further.
	
	If the Controller task (Lsmain.exe) is stopped for any reason and all the
	underlying tasks remain, and the connector is restarted, the above errors will
	be added to the log, and the connector will not appear to start. It is most
	likely currently up, and mail is most likely still flowing. But no logs or
	status of it being up, other than the NT Task Manager, are available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
