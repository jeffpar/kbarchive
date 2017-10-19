---
layout: page
title: "Q186554: Terminal Server Error Messages: 2000 to 2199"
permalink: /kb/186/Q186554/
---

## Q186554: Terminal Server Error Messages: 2000 to 2199

	Article: Q186554
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes Terminal Server error messages 2000 to 2199.
	
	MORE INFORMATION
	================
	
	Error 2000
	----------
	
	  The pixel format is invalid.
	
	Error 2001
	----------
	
	  The specified driver is invalid.
	
	Error 2002
	----------
	
	  The window style or class attribute is invalid for this operation.
	
	Error 2003
	----------
	
	  The requested metafile operation is not supported.
	
	Error 2004
	----------
	
	  The requested transformation operation is not supported.
	
	Error 2005
	----------
	
	  The requested clipping operation is not supported.
	
	Error 2102
	----------
	
	  The workstation driver is not installed.
	
	Explanation: Windows NT is not installed, or your configuration file is
	incorrect.
	
	Action: Install Windows NT, or see your network administrator about possible
	problems with your configuration file.
	
	Error 2103
	----------
	
	  The server could not be located.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The server you
	specified does not exist.
	
	Action: You may have misspelled the server's computer name. To see a list of
	servers in your domain, type:
	
	  "NET VIEW" (without the quotation marks)
	
	Remember to precede computer names with two backslashes, as in the following
	example:
	
	  "\\computername" (without the quotation marks)
	
	Error 2104
	----------
	
	  An internal error occurred. The network cannot access a shared memory
	  segment.
	
	Explanation: An internal error occurred.
	
	Action: Contact technical support.
	
	Error 2105
	----------
	
	  A network resource shortage occurred.
	
	Explanation: The network hardware could not access the resources it needed.
	
	Action: Try the command again later.
	
	Error 2106
	----------
	
	  This operation is not supported on workstations.
	
	Explanation: This operation can be performed only on a server.
	
	Action: See your network administrator if you need more information.
	
	Error 2107
	----------
	
	  The device is not connected.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. This device name is
	not assigned to a shared resource.
	
	Action: Check the spelling of the device name first. To see which local device
	names are assigned to shared resources, type:
	
	  "NET USE" (without the quotation marks)
	
	Error 2114
	----------
	
	  The Server service is not started.
	
	Explanation: The specified server is not started. The server must be started
	before you can run this command.
	
	Action: Use the Services option in Control Panel to start the Server service. Try
	the command again after the server has been started. If you need assistance,
	contact your network administrator.
	
	Error 2115
	----------
	
	  The queue is empty.
	
	Explanation: If you do not see your document listed, it has either completed
	printing, or the printer did not receive your document.
	
	Action: No action is needed.
	
	Error 2116
	----------
	
	  The device or directory does not exist.
	
	Explanation: You specified an unknown device or directory.
	
	Action: Check the spelling of the device or directory name.
	
	Error 2117
	----------
	
	  The operation is invalid on a redirected resource.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The device name you
	specified is assigned to a shared resource.
	
	Action: To perform this operation on this device name, you first must end its
	connection to the shared resource.
	
	Error 2118
	----------
	
	  The name has already been shared.
	
	Explanation: This share name is already in use on this server.
	
	Action: Choose a share name that is not currently used on this server. To see a
	list of resources currently shared on this server, type:
	
	  "NET SHARE" (without the quotation marks)
	
	Error 2119
	----------
	
	  The server is currently out of the requested resource.
	
	Explanation: The server could not access enough of a resource, such as memory, to
	complete this task.
	
	Action: Try again later. If you continue to receive this message, stop some
	nonessential processes or applications and try to complete the task again. If
	you still have problems, your network administrator may need to reconfigure your
	system.
	
	Error 2121
	----------
	
	  Requested addition of items exceeds the maximum allowed.
	
	Explanation: The list of items in the command is too long.
	
	Action: If your command included a list of items, split the list into two smaller
	lists. Type the command with the first list, and then again with the second
	list.
	
	Error 2122
	----------
	
	  The Peer service supports only two simultaneous users.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. On a workstation
	running the Peer service, only you and one other user can have connections to a
	shared resource at the same time.
	
	Action: Retype the command, specifying two as the maximum number of users for the
	resource.
	
	Error 2123
	----------
	
	  The API return buffer is too small.
	
	Explanation: The program you are running created a buffer that is too small for
	the data being used.
	
	Action: The program should correct this problem. If it does not, see your network
	administrator or the vendor who supplied the program.
	
	Error 2127
	----------
	
	  A remote API error occurred.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The program or
	command you were running on a server could not be completed. There may be
	communication problems on the network, or the remote server may be short of
	resources.
	
	Action: Contact your network administrator. Your administrator should make sure
	that the server is configured with enough resources. Specifically, the NUMBIGBUF
	entry in the server's configuration file may need to be increased.
	
	Error 2131
	----------
	
	  An error occurred when opening or reading the configuration file.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The configuration
	file is missing or contains invalid information.
	
	Action: Ask your network administrator to review the contents of the
	configuration file.
	
	Error 2136
	----------
	
	  A general network error occurred.
	
	Explanation: A general failure occurred in the network hardware. This problem may
	be due to a hardware conflict and could have been generated by any number of
	other Server service commands (for example, Replicator).
	
	Action: See your network administrator. The problem could have occurred because
	of the hardware or software installed on your computer.
	
	Error 2137
	----------
	
	  The Workstation service is in an inconsistent state. Restart the computer
	  before restarting the Workstation service.
	
	Explanation: The workstation is in an inconsistent state.
	
	Action: Restart the computer.
	
	Error 2138
	----------
	
	  The Workstation service has not been started.
	
	Explanation: You have tried to use the network before starting the Workstation
	service.
	
	Action: Start the Workstation service by typing:
	
	  "NET START WORKSTATION" (without the quotation marks)
	
	Error 2139
	----------
	
	  The requested information is not available.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. Your command could
	not be completed because the MAILSLOTS entry of your workstation's configuration
	file is incorrect.
	
	Action: Change the MAILSLOTS entry of the configuration file to YES. Then stop
	and restart the Workstation service.
	
	Error 2140
	----------
	
	  An internal Windows NT error occurred.
	
	Explanation: A software error occurred.
	
	Action: Contact technical support.
	
	Error 2141
	----------
	
	  The server is not configured for transactions.
	
	Explanation: The specified server is not configured to accept the command you
	typed.
	
	Action: Ask your network administrator if the server is configured properly. The
	administrator may choose to share the server's IPC$ resource to correct this
	problem.
	
	Error 2142
	----------
	
	  The requested API is not supported on the remote server.
	
	Explanation: The server does not support the request that was sent to it. This
	can happen if two or more versions of networking software are on the network.
	However, no program included with Windows NT should cause this error.
	
	Action: Contact the vendor of the program that was running when the error
	occurred.
	
	Error 2143
	----------
	
	  The event name is invalid.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A software error
	occurred.
	
	Action: Contact technical support.
	
	Error 2144
	----------
	
	  The computer name already exists on the network. Change it and restart the
	  computer.
	
	Explanation: The computer name already exists on the network.
	
	Action: Change the computer name and restart the computer before restarting the
	Workstation service.
	
	Error 2146
	----------
	
	  The specified component could not be found in the configuration information.
	
	Explanation: Windows NT could not find the required information in your
	configuration.
	
	Action: Ask your network administrator to check your configuration. The
	administrator should make sure your system configuration contains all
	information required to run Windows NT and any associated applications.
	
	Error 2147
	----------
	
	  The specified parameter could not be found in the configuration information.
	
	Explanation: Windows NT could not find a particular entry in your configuration.
	
	Action: Ask your network administrator to check your configuration. The
	administrator should make sure your system configuration contains all
	information required to run Windows NT and any associated applications.
	
	Error 2149
	----------
	
	  A line in the configuration file is too long.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A line in the
	configuration file is too long.
	
	Action: Edit the configuration file.
	
	Error 2150
	----------
	
	  The printer does not exist.
	
	Explanation: The printer you have specified is invalid.
	
	Action: Check the spelling of the printer name. To see the list of printers
	shared on this server, type:
	
	  "NET VIEW \\computername" (without the quotation marks)
	
	Error 2151
	----------
	
	  The print job does not exist.
	
	Explanation: There is no print job matching the print job identification number
	you typed.
	
	Action: Be sure you typed the correct print job identification number. To see a
	list of current print jobs, type:
	
	  "NET PRINT \\computername\sharename" (without the quotation marks)
	
	Error 2152
	----------
	
	  The printer destination cannot be found.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. This printer is not
	used by a printer queue.
	
	Action: Check the spelling of the printer name and then retype the command.
	
	Error 2153
	----------
	
	  The printer destination already exists.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. This printer has
	already been installed.
	
	Action: Be sure you typed the correct device name.
	
	Error 2154
	----------
	
	  The printer queue already exists.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You tried to create
	a printer queue with a name that is already in use on this server.
	
	Action: Give the new queue a different name. To see a list of printer queues
	already existing on the server, type:
	
	  "NET PRINT" (without the quotation marks)
	
	Error 2155
	----------
	
	  No more printers can be added.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The server does not
	have enough memory available to add another printer queue.
	
	Action: To free memory, delete an existing printer queue. Then create and share
	the new queue. You can also reconfigure the server to allow more printer queues
	by increasing the value of the MAXQUEUES entry in the server's configuration
	file. This entry defines the maximum number of queues the server can share.
	After you edit the configuration file, stop and start the server's spooler for
	the changes to take effect.
	
	Error 2156
	----------
	
	  No more print jobs can be added.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The server does not
	have enough memory available to add another print job.
	
	Action: Wait a while, and then send the print job again. If the problem persists,
	you may want to contact your network administrator about changing the MAXJOBS
	entry in the server's configuration file. This entry defines the maximum number
	of print jobs allowed on the server at one time. If the configuration file is
	changed, you must stop and restart the server's spooler for the changes to take
	effect.
	
	Error 2157
	----------
	
	  No more printer destinations can be added.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The server does not
	have enough memory available to add another printer.
	
	Action: Change the MAXPRINTERS entry in the server's configuration file. This
	entry defines the maximum number of printers the server can share. Then stop and
	restart the spooler for the changes to take effect.
	
	Error 2158
	----------
	
	  This printer destination is idle and cannot accept control operations.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The specified
	printer is not in use.
	
	Action: Be sure you are referring to the correct printer.
	
	Error 2159
	----------
	
	  This printer destination request contains an invalid control function.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. An internal control
	function is invalid.
	
	Action: Contact technical support.
	
	Error 2160
	----------
	
	  The print processor is not responding.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The spooler is
	failing to communicate with the print processor.
	
	Action: See your network administrator. There may be software problems with the
	print processor or hardware problems with the associated printer.
	
	Error 2161
	----------
	
	  The spooler is not running.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The spooler has not
	been started.
	
	Action: Use the Print Manager to start the spooler.
	
	Error 2162
	----------
	
	  This operation cannot be performed on the print destination in its current
	  state.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The requested
	change cannot be made because a software error occurred.
	
	Action: Contact technical support.
	
	Error 2163
	----------
	
	  This operation cannot be performed on the printer queue in its current state.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The requested
	change cannot be made because a software error occurred.
	
	Action: Contact technical support.
	
	Error 2164
	----------
	
	  This operation cannot be performed on the print job in its current state.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The requested
	change cannot be made because a software error occurred.
	
	Action: Contact technical support.
	
	Error 2165
	----------
	
	  A spooler memory allocation failure occurred.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The spooler ran out
	of memory.
	
	Action: To free memory for the spooler, delete one or more printer queues or
	print jobs, or remove one or more printers from all print queues on the server.
	
	Error 2166
	----------
	
	  The device driver does not exist.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The device driver
	you specified has not been installed for the printer queue.
	
	Action: Check the spelling of the name of the device driver. To use a new device
	driver with this printer queue, you must first use Control Panel to install the
	device driver. For more information about Control Panel, see your operating
	system manual(s).
	
	Error 2167
	----------
	
	  The data type is not supported by the print processor.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The data type of
	the print job is not supported by the queue's print processor.
	
	Action: Use a different print processor for jobs that have this data type, or
	rewrite the application so that it uses a data type the print processor can
	recognize.
	
	Error 2168
	----------
	
	  The print processor is not installed.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The print processor
	you specified has not been installed on the server.
	
	Action: Use Control Panel to install a print processor. For more information
	about the Control Panel, see your operating system manual(s).
	
	Error 2180
	----------
	
	  The service database is locked.
	
	Explanation: Another program is holding the service database lock.
	
	Action: Wait for the lock to be released and try again later. If it is possible
	to determine which program is holding the lock, then end that program.
	
	Error 2181
	----------
	
	  The service table is full.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You cannot start
	another service because you have reached the maximum number of services
	specified in your configuration file.
	
	Action: You can start another service if you first stop a nonessential one. To
	display the list of services that are running, type:
	
	  "NET START" (without the quotation marks)
	
	You could also change the maximum number of services allowed to run
	simultaneously on the computer by changing the value of the NUMSERVICES entry in
	the computer's configuration file. If you need assistance, contact your network
	administrator.
	
	Error 2182
	----------
	
	  The requested service has already been started.
	
	Explanation: You tried to start a service that is already running.
	
	Action: To display a list of active services, type:
	
	  "NET START" (without the quotation marks)
	
	Error 2183
	----------
	
	  The service does not respond to control actions.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A software error
	occurred.
	
	Action: Contact technical support.
	
	Error 2184
	----------
	
	  The service has not been started.
	
	Explanation: You tried to use a service that is not running.
	
	Action: To display a list of active services, type:
	
	  "NET START" (without the quotation marks)
	
	To start a service, type:
	
	  "NET START service" (without the quotation marks)
	
	Error 2185
	----------
	
	  The service name is invalid.
	
	Explanation: You tried to start a service that is not configured on this system.
	
	Action: Check the spelling of the service name or check the configuration
	information for the service using the Services option from Server Manager.
	
	Error 2186
	----------
	
	  The service is not responding to the control function.
	
	Explanation: The service cannot run your command at this time.
	
	Action: Try the command again later. If the problem persists, stop and restart
	the service. However, if the problem continues after you have restarted the
	service, report the problem. Be sure to include the name of the service and the
	command that was refused, to technical support.
	
	Error 2187
	----------
	
	  The service control is busy.
	
	Explanation: The service is not responding to requests now. Another program may
	be controlling the service or there may be a software problem.
	
	Action: Try to stop the service by typing:
	
	  "NET STOP service" (without the quotation marks)
	
	If this fails, stop all programs running on the computer and try typing the NET
	STOP command again. If the problem persists, contact technical support. Be
	prepared to give the name of the service and other information about the system,
	such as the services and applications that were running on the computer, and the
	amount and type of network activity when the problem occurred.
	
	Error 2188
	----------
	
	  The configuration file contains an invalid service program name.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. Your configuration
	file has associated a service with a nonexistent program file.
	
	Action: Be sure that each entry shown in the [services] section of your
	configuration file lists a valid pathname for the service's executable file. If
	you need assistance, contact your network administrator.
	
	Error 2189
	----------
	
	  The service could not be controlled in its present state.
	
	Explanation: The service is not currently accepting requests. If the service is
	starting, it cannot process requests until it is fully started.
	
	Action: Try the operation again in a minute or two. If this problem persists, the
	service may be stuck in a partially running state. Contact technical support. Be
	prepared to give the name of the service and other information about the system,
	such as the services and applications that were running, and the type and amount
	of network activity on the computer at the time of the problem.
	
	Error 2190
	----------
	
	  The service ended abnormally.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The service was not
	running properly and would not respond to a command. The service was
	terminated.
	
	Action: Stop the service by typing:
	
	  "NET STOP service" (without the quotation marks)
	
	Then restart the service by typing:
	
	  "NET START service" (without the quotation marks)
	
	If the problem occurs frequently, contact technical support.
	
	Error 2191
	----------
	
	  The requested pause or stop is not valid for this service.
	
	Explanation: This command is invalid for this service, or the service cannot
	accept the command right now.
	
	Action: If the service normally accepts this command, try typing it again later.
	To display a list of valid commands, type:
	
	  "NET HELP" (without the quotation marks)
	
	Error 2192
	----------
	
	  The service control dispatcher could not find the service name in the
	  dispatch table.
	
	Error 2193
	----------
	
	  The service control dispatcher pipe read failed.
	
	Error 2194
	----------
	
	  A thread for the new service could not be created.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
