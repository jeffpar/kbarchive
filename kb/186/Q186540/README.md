---
layout: page
title: "Q186540: Terminal Server Error Messages: 2300 to 2399"
permalink: kb/186/Q186540/
---

## Q186540: Terminal Server Error Messages: 2300 to 2399

	Article: Q186540
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
	
	This article describes Terminal Server error messages 2300 to 2399.
	
	MORE INFORMATION
	================
	
	Error 2300
	----------
	
	  This operation is not supported on computers with multiple networks.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You cannot run this
	command on a computer that is on multiple networks.
	
	Action: No action is needed.
	
	Error 2310
	----------
	
	  This shared resource does not exist.
	
	Explanation: The share name you specified does not exist.
	
	Action: Check the spelling of the share name. To display a list of resources
	shared on the server, type:
	
	  "NET SHARE" (without the quotation marks)
	
	Error 2311
	----------
	
	  This device is not shared.
	
	Explanation: The device you specified is not shared.
	
	Action: Check the spelling of the device name. To share the device, type:
	
	  "NET SHARE sharename=devicename" (without the quotation marks)
	
	Error 2312
	----------
	
	  A session does not exist with that computer name.
	
	Explanation: The specified computer does not have a session with the server.
	
	Action: Check the spelling of the computer name. To display a list of
	workstations and users that have sessions with the server, type:
	
	  "NET SESSION" (without the quotation marks)
	
	Error 2314
	----------
	
	  There is not an open file with that identification number.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. There is no open
	file on the server corresponding to the number you specified.
	
	Action: Check the identification number of the open file. To display a list of
	open files and their identification numbers, type:
	
	  "NET FILE" (without the quotation marks)
	
	Error 2315
	----------
	
	  A failure occurred when executing a remote administration command.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The command cannot
	run on the remote server, probably because of a problem with the server's
	operating system configuration.
	
	Action: Have your network administrator check the configuration of the server's
	operating system.
	
	Error 2316
	----------
	
	  A failure occurred when opening a remote temporary file.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The command could
	not be completed because it could not open a temporary file on the server.
	
	Action: See your network administrator. If you need further help, contact
	technical support.
	
	Error 2317
	----------
	
	  The data returned from a remote administration command has been truncated to
	  64K.
	
	Error 2318
	----------
	
	  This device cannot be shared as both a spooled and a non-spooled resource.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You cannot route
	requests from both a printer queue and a communication-device queue to the same
	device.
	
	Action: To assign the device to a printer queue, you must first remove it from
	all communication-device queues. To assign the device to a communication-device
	queue, you must remove it from all printer queues.
	
	Error 2319
	----------
	
	  The information in the list of servers may be incorrect.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A software error
	occurred.
	
	Action: Contact technical support.
	
	Error 2320
	----------
	
	  The computer is not active in this domain.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. Your computer is
	not active in the domain you specified.
	
	Action: To perform tasks in the specified domain, you must add the domain to the
	list of domains in which the workstation is a member.
	
	Error 2321
	----------
	
	  The share must be removed from the Distributed File System before it can be
	  deleted.
	
	Error 2331
	----------
	
	  The operation is invalid for this device.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The command cannot
	be used on a communication-device queue.
	
	Action: If you need further help, contact your network administrator.
	
	Error 2332
	----------
	
	  This device cannot be shared.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The device name you
	typed does not represent a valid local device that can be shared.
	
	Action: Select a valid device name.
	
	Error 2333
	----------
	
	  This device was not open.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You tried to purge
	an empty communication-device queue.
	
	Action: No action is needed.
	
	Error 2334
	----------
	
	  This device name list is invalid.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A software error
	occurred.
	
	Action: Contact technical support.
	
	Error 2335
	----------
	
	  The queue priority is invalid.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A software error
	occurred.
	
	Action: Contact technical support.
	
	Error 2337
	----------
	
	  There are no shared communication devices.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The server is not
	sharing any communication-device queues, so the command you typed is invalid.
	
	Action: No action is needed.
	
	Error 2338
	----------
	
	  The queue you specified does not exist.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The queue name you
	typed does not exist.
	
	Action: Check the spelling of the queue name.
	
	Error 2340
	----------
	
	  This list of devices is invalid.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A software error
	occurred.
	
	Action: Contact technical support.
	
	Error 2341
	----------
	
	  The requested device is invalid.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The device name is
	invalid because it does not represent a physical device or because the device
	hardware is faulty.
	
	Action: Check the spelling of the device name, and then retype the command. If
	the problem persists, contact your network administrator. Your administrator
	should use diagnostics to check that the device hardware is properly installed
	and working. For more assistance, contact your hardware dealer.
	
	Error 2342
	----------
	
	  This device is already in use by the spooler.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. This device is used
	with a printer queue. You cannot use a device with both printer queues and
	communication-device queues.
	
	Action: To use this device with a communication-device queue, you must first
	disconnect all printer queues from it.
	
	Error 2343
	----------
	
	  This device is already in use as a communication device.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. This device is used
	with a communication-device queue. You cannot use a device with both
	communication-device queues and printer queues.
	
	Action: To use this device with a printer queue, you must disconnect all
	communication-device queues from it.
	
	Error 2351
	----------
	
	  This computer name is invalid.
	
	Explanation: The specified computer name is invalid.
	
	Action: Contact technical support.
	
	Error 2354
	----------
	
	  The string and prefix specified are too long.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A software error
	occurred.
	
	Action: Contact technical support.
	
	Error 2356
	----------
	
	  This path component is invalid.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A software error
	occurred.
	
	Action: Contact technical support.
	
	Error 2357
	----------
	
	  Could not determine the type of input.
	
	Explanation: A software error occurred.
	
	Action: Contact technical support.
	
	Error 2362
	----------
	
	  The buffer for types is not big enough.
	
	Explanation: A software error occurred.
	
	Action: Contact technical support.
	
	Error 2370
	----------
	
	  Profile files cannot exceed 64K.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The profile is too
	large. Profile files can be no larger than 64 kilobytes.
	
	Action: Remove unnecessary commands from the profile and try loading it again.
	
	Error 2371
	----------
	
	  The start offset is out of range.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A software error
	occurred.
	
	Action: Contact technical support.
	
	Error 2372
	----------
	
	  The system cannot delete current connections to network resources.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. Loading the profile
	failed because one or more connections between your computer and other network
	computers are active. LAN Manager could not delete the active connections.
	
	Action: If you were trying to load the profile onto a workstation, be sure the
	workstation is not actively using any shared resources. Be sure the current
	directory in each session is not a shared directory. If you were trying to load
	the profile onto a server, you must wait until none of the server's shared
	resources are being actively used. To see which users are actively using the
	server's resources, type:
	
	  "NET FILE" (without the quotation marks)
	
	Error 2373
	----------
	
	  The system was unable to parse the command line in this file.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The profile
	contains an invalid command.
	
	Action: Check the profile. See your network administrator if you need
	assistance.
	
	Error 2374
	----------
	
	  An error occurred while loading the profile file.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The system could
	not open the profile.
	
	Action: The profile file may be damaged. Create a new profile. If you need
	assistance, contact your network administrator.
	
	Error 2375
	----------
	
	  Errors occurred while saving the profile file. The profile was partially
	  saved.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You are logged on
	with an account that does not have sufficient privilege to save the server's
	entire current configuration. Only part of the configuration was saved to the
	profile.
	
	Action: Log on with an account that has administrative privilege (or server
	operator privilege) before saving a server profile.
	
	Error 2377
	----------
	
	  Log file *** is full.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The log file is too
	large.
	
	Action: Clear the log file or increase the MAXERRORLOG entry in the computer's
	configuration file. If you need assistance, contact your network administrator.
	
	Error 2378
	----------
	
	  This log file has changed between reads.
	
	Explanation: You cannot begin reading the log file from the previously
	established position because the log file has changed since the last time you
	read it.
	
	Action: Read the log file from the beginning.
	
	Error 2379
	----------
	
	  Log file *** is corrupt.
	
	Error 2380
	----------
	
	  The source path cannot be a directory.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The source path you
	typed is a directory name, which is not allowed.
	
	Action: You must include a filename or wildcard in the path. To copy all files in
	a directory, type:
	
	  "COPY [source]\*.* destination" (without the quotation marks)
	
	Error 2381
	----------
	
	  The source path is illegal.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You referred to a
	nonexistent drive, directory, or filename, or you typed the command
	incorrectly.
	
	Action: Check the spelling of the source or pathname you have typed. Remember to
	precede computer names with two backslashes, as in the following example:
	
	  "\\computername." (without the quotation marks)
	
	Error 2382
	----------
	
	  The destination path is illegal.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The destination
	path does not exist.
	
	Action: Check the spelling of the destination path. If you need more information,
	see your network administrator.
	
	Error 2383
	----------
	
	  The source and destination paths are on different servers.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A software error
	occurred.
	
	Action: Contact technical support.
	
	Error 2385
	----------
	
	  The Run server you requested is paused.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You tried to run a
	program or command on a server that is paused.
	
	Action: See your network administrator. The administrator must continue the
	server for your command to run.
	
	Error 2389
	----------
	
	  An error occurred when communicating with a Run server.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. LAN Manager found a
	problem while trying to complete the task.
	
	Action: Type the command again in a few minutes. If you continue to receive this
	message, see your network administrator.
	
	Error 2391
	----------
	
	  An error occurred when starting a background process.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. LAN Manager found a
	problem while trying to complete the task.
	
	Action: Type the command again in a few minutes. If you continue to receive this
	message, see your network administrator.
	
	Error 2392
	----------
	
	  The shared resource you are connected to could not be found.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. LAN Manager found a
	problem while trying to complete the task.
	
	Action: Type the command again in a few minutes. If you continue to receive this
	message, see your network administrator.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
