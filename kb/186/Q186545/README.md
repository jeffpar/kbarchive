---
layout: page
title: "Q186545: Terminal Server Error Messages: 3200 to 3299"
permalink: /kb/186/Q186545/
---

## Q186545: Terminal Server Error Messages: 3200 to 3299

	Article: Q186545
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
	
	This article describes Terminal Server error messages 3200 to 3299.
	
	MORE INFORMATION
	================
	
	Error 3204
	----------
	
	  The server could not create a thread. The THREADS parameter in the CONFIG.SYS
	  file should be increased.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The server was
	unable to create a thread.
	
	Action: Increase the value of the THREADS entry in the server's Config.sys file.
	The range for this value is 64 to 512.
	
	Error 3205
	----------
	
	  The server could not close ***. The file is probably corrupted.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The server found an
	error while closing the listed file.
	
	Action: The file may be damaged. If it is, restore it from a backup copy.
	
	Error 3206
	----------
	
	  The replicator cannot update directory ***. It has tree integrity and is the
	  current directory for some process.
	
	Explanation: A directory cannot be replicated when it is the current directory of
	a process and its value for INTEGRITY is TREE.
	
	Action: For the directory to be replicated, be sure it is not the current
	directory of any process.
	
	Error 3207
	----------
	
	  The server cannot export directory *** to client ***. It is exported from
	  another server.
	
	Explanation: This server found that another server is exporting the listed
	directory to the listed import server.
	
	Action: Be sure that only one computer is configured as the export server of this
	directory for the listed import computer. Check the EXPORTLIST and EXPORTPATH
	entries in the configuration files of the export servers and the IMPORTLIST and
	IMPORTPATH entries in the configuration file of the import server.
	
	Error 3208
	----------
	
	  The replication server could not update directory *** from the source on ***
	  due to error ***.
	
	Explanation: An error prevented this server from updating the listed directory
	from the export server. The directory cannot be updated until the problem is
	corrected.
	
	Action: Copy the files manually, if necessary, and investigate the cause of the
	listed error.
	
	Error 3209
	----------
	
	  Master *** did not send an update notice for directory *** at the expected
	  time.
	
	Explanation: This server's Replicator service lost contact with the export server
	for the listed directory.
	
	Action: Be sure the Server and Replicator services are running on the export
	server.
	
	Error 3210
	----------
	
	  Failed to authenticate with ***, a Windows NT domain controller for domain
	  ***.
	
	Explanation: This server was denied access to the security database by the domain
	controller. Until this problem is corrected, the server cannot synchronize user
	account information with the domain controller.
	
	Action: Stop and restart the Netlogon service at this server.
	
	Error 3211
	----------
	
	  The replicator attempted to log on at *** as *** and failed.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The Replicator
	service was denied access to the listed export server. Until this problem is
	corrected, the replicator cannot update the local copies of files exported by
	that server.
	
	Action: Be sure that the local computer has an account on the export server. The
	user name and password for this account are specified by the LOGON and PASSWORD
	entries in the local computer's configuration file. If there is no LOGON entry,
	then the local computer name is the user name and no password is necessary.
	
	Error 3212
	----------
	
	  Network error *** occurred.
	
	Explanation: The Replicator service stopped because the listed Windows NT error
	occurred.
	
	Action: To see more information about the error, type
	
	  "NET HELPMSG message#" (without the quotation marks)
	
	where message# is the error number.
	
	Error 3213
	----------
	
	  Replicator limit for files in a directory has been exceeded.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A directory that is
	being replicated can have no more than 200 files.
	
	Action: Remove files from the directory until 200 or fewer remain.
	
	Error 3214
	----------
	
	  Replicator limit for tree depth has been exceeded.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The replication
	tree can be no more than 32 levels deep.
	
	Action: Reorganize the replicated directories so that no path is more than 32
	levels deep.
	
	Error 3215
	----------
	
	  Unrecognized message received in mailslot.
	
	Explanation: A software error occurred.
	
	Action: Contact technical support.
	
	Error 3216
	----------
	
	  System error *** occurred.
	
	Explanation: The Replicator service stopped because the listed system error
	occurred.
	
	Action: Check the cause of the system error.
	
	Error 3217
	----------
	
	  Cannot log on. User is currently logged on and argument TRYUSER is set to NO.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The computer cannot
	locate its copies of the replicated files while a user is logged on and the
	TRYUSER option is set to NO.
	
	Action: No action is needed. The computer will update the files when no user is
	logged on. To have the local computer update files while users are logged on,
	change the value of the TRYUSER entry in the [replicator] section of the
	configuration file to YES.
	
	Error 3218
	----------
	
	  IMPORT path *** cannot be found.
	
	Explanation: The import path specified either from the command line or in the
	configuration file, does not exist.
	
	Action: Check the spelling of the IMPORTPATH entry in the configuration file.
	This entry must specify a directory that exists.
	
	Error 3219
	----------
	
	  EXPORT path *** cannot be found.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The specified
	export path does not exist.
	
	Action: Check the spelling of the EXPORTPATH entry in the configuration file.
	This entry must specify a directory that exists.
	
	Error 3220
	----------
	
	  Replicator failed to update signal file in directory *** due to *** system
	  error.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The listed system
	error caused the Replicator service to fail to update its status.
	
	Action: Check the cause of the system error.
	
	Error 3221
	----------
	
	  Disk Fault Tolerance Error ***
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. An error was
	recorded by the fault-tolerance system. The error is explained in the original
	error message.
	
	Action: Follow the action recommended in the original message.
	
	Error 3222
	----------
	
	  Replicator could not access *** on *** due to system error ***.
	
	Explanation: Because of the listed system error, the Replicator service could not
	access a file on the listed export server.
	
	Action: Be sure the Replicator service's account on the export server has
	permission to read the directories being replicated. The name of this account
	can be displayed and changed using the Services option in Control Panel.
	
	Error 3223
	----------
	
	  The primary domain controller for domain *** has apparently failed.
	
	Explanation: The domain controller for this domain has stopped.
	
	Action: Wait a few minutes and then restart the domain controller. If this is not
	possible, you have the option of promoting another server to be the domain
	controller.
	
	Error 3224
	----------
	
	  Changing machine account password for account *** failed with the following
	  error: ***
	
	Explanation: This server found an error while changing the computer's password at
	the domain controller.
	
	Action: If you are using Windows NT Workstation, ask your network administrator
	to set your computer value back to the default value. Then, using the Network on
	in Control Panel, leave and rejoin the domain. If you are using Windows NT
	Server, use the Synchronize With Domain option in Server Manager to synchronize
	the servers.
	
	Error 3225
	----------
	
	  An error occurred while updating the logon or logoff information for ***.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The current logon
	statistics may not be accurate because an error occurred while logon and logoff
	information was being updated.
	
	Action: No action is needed.
	
	Error 3226
	----------
	
	  An error occurred while synchronizing with primary domain controller ***
	
	Explanation: The local copy of the security database may be out of
	synchronization with that of the domain controller because an error occurred
	while the database was being updated.
	
	Action: Use the Synchronize With Domain option in Server Manager to synchronize
	the security databases.
	
	Error 3230
	----------
	
	  A power failure was detected at the server.
	
	Explanation: The server had a power failure.
	
	Action: The UPS service is shutting down the server. Stop applications that are
	running on the server and have users disconnect from the server.
	
	Error 3231
	----------
	
	  The UPS service performed server shut down.
	
	Explanation: The UPS battery is low, probably because of an extended power
	outage.
	
	Action: No action is needed. The system will start automatically when power is
	restored.
	
	Error 3232
	----------
	
	  The UPS service did not complete execution of the user specified shut down
	  command file.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The UPS service
	could not finish running the specified command file in less than 30 seconds.
	
	Action: Modify the contents of the command file so that it can be completed in 30
	seconds or less.
	
	Error 3233
	----------
	
	  The UPS driver could not be opened. The error code is the data.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The UPS service
	could not access the UPS driver (Upsdrv.os2). The UPS driver might not be
	configured properly.
	
	Action: Be sure that your Config.sys file has a DEVICE line specifying the
	location of the UPS device driver and that the /PORT option of that line
	specifies the serial port that the battery is connected to. If you make changes
	to CONFIG.SYS, you must restart your system for them to take effect.
	
	Error 3234
	----------
	
	  Power has been restored.
	
	Error 3235
	----------
	
	  There is a problem with a configuration of user specified shut down command
	  file.
	
	Error 3236
	----------
	
	  The UPS service failed to execute a user specified shutdown command file ***.
	  The error code is the data.
	
	Error 3250
	----------
	
	  Initialization failed because of an invalid or missing parameter in the
	  configuration file ***.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The Remoteboot
	service could not start because the listed entry was missing from the
	configuration file.
	
	Action: Add the listed entry to the server's configuration file.
	
	Error 3251
	----------
	
	  Initialization failed because of an invalid line in the configuration file
	  ***. The invalid line is the data.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The Remoteboot
	service could not start because of an invalid line in the listed configuration
	file.
	
	Action: Check the listed line.
	
	Error 3252
	----------
	
	  Initialization failed because of an error in the configuration file ***.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The Remoteboot
	service failed to start because of an error in the listed configuration file.
	
	Action: Check the listed file.
	
	Error 3253
	----------
	
	  The file *** has been changed after initialization. The boot-block loading
	  was temporarily terminated.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The listed file was
	changed after the Remoteboot service was started. Loading the boot-block stopped
	temporarily.
	
	Action: Stop and restart the Remoteboot service.
	
	Error 3254
	----------
	
	  The files do not fit to the boot-block configuration file ***. Change the
	  BASE and ORG definitions or the order of the files.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The files in the
	listed boot-block definition file do not fit in the boot block.
	
	Action: Change the order of the files or the value of BASE or ORG.
	
	Error 3255
	----------
	
	  Initialization failed because the dynamic-link library *** returned an
	  incorrect version number.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The Remoteboot
	service could not start because the listed dynamic-link library returned the
	incorrect version number.
	
	Action: Be sure you are using the correct versions of the dynamic-link
	libraries.
	
	Error 3256
	----------
	
	  There was an unrecoverable error in the dynamic-link library of the service.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. An unrecoverable
	error occurred because of a problem with the dynamic-link library of the
	Remoteboot service.
	
	Action: Be sure you are using the correct versions of the dynamic-link
	libraries.
	
	Error 3257
	----------
	
	  The system returned an unexpected error code. The error code is the data.
	
	Explanation: The system returned an unexpected error code. The error code is in
	the data.
	
	Action: Check the cause of the error.
	
	Error 3258
	----------
	
	  The fault-tolerance error log file, LANROOT\LOGS\FT.LOG, is more than 64K.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The fault-tolerance
	system error log is larger than 64 KB.
	
	Action: Run FTADMIN to fix any existing errors and clear them from the error
	log.
	
	Error 3259
	----------
	
	  The fault-tolerance error-log file, LANROOT\LOGS\FT.LOG, had the update in
	  progress bit set upon opening, which means that the system crashed while
	  working on the error log.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The server crashed
	while accessing the fault-tolerance error log, possibly damaging that log. The
	damaged fault-tolerance error log was cleared after its contents were backed up
	to Lanman\Logs\Ft.err.
	
	Action: No action is needed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
