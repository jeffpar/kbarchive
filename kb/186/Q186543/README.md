---
layout: page
title: "Q186543: Terminal Server Error Messages: 3000 to 3099"
permalink: /kb/186/Q186543/
---

## Q186543: Terminal Server Error Messages: 3000 to 3099

	Article: Q186543
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
	
	This article describes Terminal Server error messages 3000 to 3099.
	
	MORE INFORMATION
	================
	
	Error 3000
	----------
	
	  Drive *** is nearly full. *** bytes are available. Please warn users and
	  delete unneeded files.
	
	Error 3001
	----------
	
	  *** errors were logged in the last *** minutes. Please review the server's
	  error log.
	
	Error 3002
	----------
	
	  *** network errors occurred in the last *** minutes. Please review the
	  server's error log. The server and/or network hardware may need service.
	
	Error 3003
	----------
	
	  There were *** bad password attempts in the last *** minutes. Please review
	  the server's audit trail.
	
	Error 3004
	----------
	
	  There were *** access-denied errors in the last *** minutes. Please review
	  the server's audit trail.
	
	Error 3006
	----------
	
	  The error log is full. No errors will be logged until the file is cleared or
	  the limit is raised.
	
	Error 3007
	----------
	
	  The error log is 80 full.
	
	Error 3008
	----------
	
	  The audit log is full. No audit entries will be logged until the file is
	  cleared or the limit is raised.
	
	Error 3009
	----------
	
	  The audit log is 80 full.
	
	Error 3010
	----------
	
	  An error occurred closing file ***. Please check the file to make sure it is
	  not corrupted.
	
	Error 3011
	----------
	
	  The administrator has closed ***.
	
	Error 3012
	----------
	
	  There were *** access-denied errors in the last *** minutes.
	
	Error 3020
	----------
	
	  A power failure was detected at ***. The server has been paused.
	
	Error 3021
	----------
	
	  Power has been restored at ***. The server is no longer paused.
	
	Error 3022
	----------
	
	  The UPS service is starting shut down at *** due to low battery.
	
	Error 3023
	----------
	
	  There is a problem with a configuration of user specified shut down command
	  file. The UPS service started anyway.
	
	Error 3025
	----------
	
	  A defective sector on drive *** has been replaced (hotfixed). No data was
	  lost. You should run CHKDSK soon to restore full performance and replenish
	  the volume's spare sector pool. The hotfix occurred while processing a remote
	  request.
	
	Error 3026
	----------
	
	  A disk error occurred on the HPFS volume in drive ***. The error occurred
	  while processing a remote request.
	
	Error 3027
	----------
	
	  The user accounts database (NET.ACC) is corrupted. The local security system
	  is replacing the corrupted NET.ACC with the backup made on *** at ***. Any
	  updates made to the database after this time are lost.
	
	Error 3028
	----------
	
	  The user accounts database (NET.ACC) is missing. The local security system is
	  restoring the backup database made on *** at ***. Any updates made to the
	  database after this time are lost.
	
	Error 3029
	----------
	
	  Local security could not be started because the user accounts database
	  (NET.ACC) was missing or corrupted, and no usable backup database was
	  present. THE SYSTEM IS NOT SECURE.
	
	Error 3030
	----------
	
	  The server cannot export directory ***, to client ***. It is exported from
	  another server.
	
	Error 3031
	----------
	
	  The replication server could not update directory *** from the source on ***
	  due to error ***. Error 3032: Master *** did not send an update notice for
	  directory *** at the expected time.
	
	Error 3033
	----------
	
	  User *** has exceeded account limitation *** on server ***.
	
	Error 3034
	----------
	
	  The primary domain controller for domain *** failed.
	
	Error 3035
	----------
	
	  Failed to authenticate with ***, a Windows NT Domain Controller for domain
	  ***.
	
	Error 3036
	----------
	
	  The replicator attempted to log on at *** as *** and failed.
	
	Error 3037
	----------
	
	  @I *LOGON HOURS
	
	Error 3038
	----------
	
	  Replicator could not access *** on *** due to system error ***.
	
	Error 3039
	----------
	
	  Replicator limit for files in a directory has been exceeded.
	
	Error 3040
	----------
	
	  Replicator limit for tree depth has been exceeded.
	
	Error 3041
	----------
	
	  The replicator cannot update directory ***. It has tree integrity and is the
	  current directory for some process.
	
	Error 3042
	----------
	
	  Network error *** occurred.
	
	Error 3045
	----------
	
	  System error *** occurred.
	
	Error 3046
	----------
	
	  Cannot log on. User is currently logged on and argument TRYUSER is set to NO.
	
	Error 3047
	----------
	
	  IMPORT path *** cannot be found.
	
	Error 3048
	----------
	
	  EXPORT path *** cannot be found.
	
	Error 3049
	----------
	
	  Replicated data has changed in directory ***.
	
	Error 3050
	----------
	
	  Replicator failed to update signal file in directory *** due to *** system
	  error.
	
	Error 3051
	----------
	
	  The Registry or the information you just typed includes an illegal value for
	  "***".
	
	Explanation: You specified invalid values for one or more of the service's
	options.
	
	Action: Retype the command with correct values, or change the values for the
	listed options in the configuration file.
	
	Error 3052
	----------
	
	  The required parameter was not provided on the command line or in the
	  configuration file.
	
	Explanation: This message should occur only on a down level computer. Any action
	to correct the problem should be performed on that computer. You must specify a
	value for the listed option.
	
	Action: Define a value for the option, either from the command line or in the
	configuration file.
	
	Error 3053
	----------
	
	  LAN Manager does not recognize "***" as a valid option.
	
	Explanation: This message should occur only on a down level computer. Any action
	to correct the problem should be performed on that computer. This option is not
	valid for this service.
	
	Action: Check the spelling of this option. If you did not type it from the
	command line, check the configuration file.
	
	Error 3054
	----------
	
	  A request for resource could not be satisfied.
	
	Explanation: The service required more of the listed resource than was
	available.
	
	Action: Increase the amount of this resource. Stopping other services or
	applications may free some resources, such as memory. Also check the disk where
	your pagefile(s) are located. If this disk is full, delete unnecessary files and
	directories from it to clear space.
	
	Error 3055
	----------
	
	  A problem exists with the system configuration.
	
	Explanation: This message should occur only on a down level computer. Any action
	to correct the problem should be performed on that computer. The system is not
	configured correctly.
	
	Action: Contact your network administrator.
	
	Error 3056
	----------
	
	  A system error has occurred.
	
	Explanation: The system error may be an internal LAN Manager or Windows NT
	error.
	
	Action: If the error code is Error 52, you need to delete the duplicate domain
	name the [othodomains] section of your configuration file. If an error code
	beginning with "NET" is displayed, you can use the HELPMSG command to see more
	information about the error as follows. Type:
	
	  " NET HELPMSG message# " (without the quotation marks)
	
	where message# is the actual error number. If no error number was displayed,
	contact technical support.
	
	Error 3057
	----------
	
	  An internal consistency error has occurred.
	
	Explanation: A software error occurred.
	
	Action: Contact technical support.
	
	Error 3058
	----------
	
	  The configuration file or the command line has an ambiguous option.
	
	Explanation: This message should occur only on a down level computer. Any action
	to correct the problem should be performed on that computer. Some options can be
	confused with other options that start with the same letter.
	
	Action: Spell out enough of the option so that it cannot be confused with other
	and options.
	
	Error 3059
	----------
	
	  The configuration file or the command line has a duplicate parameter.
	
	Explanation: This message should occur only on a down level computer. Any action
	to correct the problem should be performed on that computer. An option was used
	more than once in your command or in the configuration file. An option can be
	used only once in a command and once in the configuration file. If an option is
	typed from the command line, it overrides the value in the configuration file.
	
	Action: Do not type the same option twice in a command. Be sure not to use
	different abbreviations that can specify the same option, such as "wrkserv" and
	"wrkservices." If the error was not caused by a command, check the configuration
	file for duplicate options.
	
	Error 3060
	----------
	
	  The service did not respond to control and was stopped with the DosKillProc
	  function.
	
	Explanation: The service did not respond to a control signal. The service may not
	be running correctly or a fatal error might have occurred. Windows NT stopped
	the service.
	
	Action: Contact technical support.
	
	Error 3061
	----------
	
	  An error occurred when attempting to run the service program.
	
	Explanation: The service you specified could not start.
	
	Action: In the [services] section of your configuration file, find the name of
	the program file for this service. Be sure this file exists and is an executable
	file with a filename extension of .EXE or .COM. If the program file exists, it
	may be damaged. If possible, restore the file from a backup version. Otherwise,
	contact technical support.
	
	Error 3062
	----------
	
	  The sub-service failed to start.
	
	Explanation: The specified service could not be started automatically when
	another service was started.
	
	Action: Start the service individually.
	
	Error 3063
	----------
	
	  There is a conflict in the value or use of these options: ***.
	
	Explanation: This message should occur only on a down level computer. Any action
	to correct the problem should be performed on that computer. Two command-line
	options or configuration file entries have conflicting values.
	
	Action: Check the command you typed or the configuration file for conflicting
	ons.
	
	Error 3064
	----------
	
	  There is a problem with the file.
	
	Error 3070
	----------
	
	  memory
	
	Error 3071
	----------
	
	  disk space
	
	Error 3072
	----------
	
	  thread
	
	Error 3073
	----------
	
	  process
	
	Error 3074
	----------
	
	  Security Failure.
	
	Error 3075
	----------
	
	  Bad or missing LAN Manager root directory.
	
	Error 3076
	----------
	
	  The network software is not installed.
	
	Error 3077
	----------
	
	  The server is not started.
	
	Error 3078
	----------
	
	  The server cannot access the user accounts database (NET.ACC).
	
	Error 3079
	----------
	
	  Incompatible files are installed in the LANMAN tree.
	
	Error 3080
	----------
	
	  The LANMAN\LOGS directory is invalid.
	
	Error 3081
	----------
	
	  The domain specified could not be used.
	
	Error 3082
	----------
	
	  The computer name is being used as a message alias on another computer.
	
	Error 3083
	----------
	
	  The announcement of the server name failed.
	
	Error 3084
	----------
	
	  The user accounts database is not configured correctly.
	
	Error 3085
	----------
	
	  The server is not running with user-level security.
	
	Error 3087
	----------
	
	  The workstation is not configured properly.
	
	Error 3088
	----------
	
	  View your error log for details.
	
	Error 3089
	----------
	
	  Unable to write to this file.
	
	Error 3090
	----------
	
	  ADDPAK file is corrupted. Delete LANMAN\NETPROG\ADDPAK.SER and reapply all
	  ADDPAKs.
	
	Error 3091
	----------
	
	  The LM386 server cannot be started because CACHE.EXE is not running.
	
	Error 3092
	----------
	
	  There is no account for this computer in the security database.
	
	Error 3093
	----------
	
	  This computer is not a member of the group SERVERS.
	
	Error 3094
	----------
	
	  The group SERVERS is not present in the local security database.
	
	Error 3095
	----------
	
	  This Windows NT computer is configured as a member of a workgroup, not as a
	  member of a domain. The Netlogon service does not need to run in this
	  configuration.
	
	Error 3096
	----------
	
	  The Windows NT domain controller for this domain could not be located.
	
	Error 3097
	----------
	
	  A primary domain controller is already running in this domain.
	
	Error 3098
	----------
	
	  The service failed to authenticate with the primary domain controller.
	
	Error 3099
	----------
	
	  There is a problem with the security database creation date or serial number.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
