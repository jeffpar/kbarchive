---
layout: page
title: "Q188357: DSMN Application Log Error Messages"
permalink: kb/188/Q188357/
---

## Q188357: DSMN Application Log Error Messages

	Article: Q188357
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Directory Service Manager for NetWare writes logged errors and warnings to the
	Windows NT Server Application Log. The following list shows some messages you
	might see in the Application Log, and what you should do if you see them.
	
	To view the application log, use Event Viewer. On the Log menu, click
	Application.
	
	Several sections of errors are listed:
	
	- The first section contains errors not associated with an error number.
	
	- The second section of errors, which includes error numbers, list the errors
	  in numerical order, with lowest numbers first.
	
	- The third section lists Jet Database errors.
	
	Many, but not all, of these errors are described in the Microsoft Services for
	NetWare Administrator's Guide for Windows NT Server version 4.0.
	
	MORE INFORMATION
	================
	
	Unnumbered Errors
	-----------------
	
	Error Message:
	
	  Account <USERNAME> cannot be propagated to NetWare servers because the
	  account name is invalid on NetWare servers.
	
	Description:
	
	  One cause for this error may be if the account name contains spaces. NetWare
	  does not support spaces in account names. In particular, this may happen for
	  many built-in Windows NT Server groups (such as PRINT OPERATORS). If you
	  require this group to propagate to NetWare servers, you must change its name
	  to a valid name (example: PRINT_OPERATORS). Otherwise, no administrator
	  action is necessary.
	
	Error Message:
	
	  The Sync Agent Account will not propagate the account <USERNAME> to the
	  NetWare servers because it does not know the password of the account.
	
	Description:
	
	  The account <USERNAME> was NetWare-enabled before Directory Service
	  Manager for NetWare was installed on the server. To cause this account to be
	  propagated, reset the account password.
	
	Error Message:
	
	  The Sync Agent Service will stop because it can only run on the PDC of the
	  domain.
	
	Description:
	
	  This error appears on the old primary domain controller when a new primary
	  domain controller begins running in the domain.
	
	Error Message:
	
	  The Sync Agent Service failed to synchronize the NetWare server
	  <SERVERNAME> due to error 1219 ERROR_SESSION_CREDENTIAL_CONFLICT. The
	  credentials supplied conflict with an existing set of credentials.
	
	Description:
	
	  This error may occur if a NetWare server is participating in a domain as a
	  backup location for the Account Synchronization database. While the database
	  is being backed up to the server, attempts to synchronize the server will
	  fail. As soon as the backup is complete, synchronization attempts will again
	  succeed. No administrator action is necessary.
	
	Numbered Errors
	---------------
	
	31:
	
	  The Sync Agent Service failed to synchronize the server <SERVERNAME>
	  due to error 31.
	
	  The server may be down or affected by timing issues during network
	  communications. The server will be synchronized during the next
	  synchronization period. No administrator action is necessary, unless the
	  errors persist for an extended period. Verify that the server is running and
	  available on the network.
	
	51:
	
	  If Error 51 is immediately followed by error 10253 "The Sync Agent Service
	  failed to modify account <account name> on the NetWare server
	  <SERVERNAME> due to error 10253," the error may be safely ignored. The
	  account will eventually be synchronized correctly.
	
	53:
	
	  The Sync Agent Service failed to synchronize the server <SERVERNAME>
	  due to error 53.
	
	  The remote computer is not available on the network. These errors frequently
	  occur because of timing issues during communication, or they can be logged
	  repeatedly if a server is down or not available on the network.
	
	58:
	
	  The Sync Agent Service could not replicate the database to
	  <SERVERNAME\PATH> because of error 86.
	
	  The password used to access this server to back up the account synchronization
	  database may have been changed. To correct the problem, in Synchronization
	  Manager, select Set Database Backup Options from the NetWare Server menu.
	  Then remove and again add this backup path, specifying the current password
	  for the account used to access the backup path.
	
	59:
	
	  The Sync Agent Service could not replicate database to <SERVERNAME>
	  because of error 59.
	
	  Directory Service Manager for NetWare could not access the server. The server
	  may be down or affected by timing issues during network communications. The
	  server will be synchronized during the next synchronization period. No
	  administrator action is necessary, unless the errors persist for an extended
	  period. Verify that the server is running and available on the network.
	
	67:
	
	  The Sync Agent Service could not replicate the database to
	  <SERVERNAME\PATH> because of error 67.
	
	  The specified path no longer exists on the server. In Synchronization Manager,
	  select Set Database Backup Options from the NetWare Server menu. Then remove
	  this backup path.
	
	240:
	
	  The Sync Agent Service could not replicate the database to
	  \\SERVERNAME\DIRECTORY because of Error 240.
	
	  The 240 error is: ERROR_VC_DISCONNECTED The session was canceled. Non specific
	  Network Error.
	
	1217:
	
	  The Sync Agent Service failed to modify account <<USERNAME>> on
	  the NetWare Server <SERVERNAME> due to error 1219.
	
	  Error_Invalid_Message. The format of the specified message name is invalid.
	
	  Usually due to a single, momentary problem propagating an account. Normal
	  synchronization corrects the problem with intervention.
	
	1219:
	
	  The Sync Agent Service failed to sync the NetWare server <SERVERNAME>
	  due to error 1219 ERROR_SESSION_CREDENTIAL_CONFLICT The credentials supplied
	  conflict with an existing set of credentials.
	
	1220:
	
	  ERROR_REMOTE_SESSION_LIMIT_EXCEEDED
	
	  Indicates that a NetWare server did not have any connections available.
	  Directory Service Manager for NetWare logs this error until connections to
	  the NetWare server are available again. No administrator action is necessary.
	
	1317:
	
	  The Sync Agent Service failed with error 1317 when processing the Password
	  notification for user <USERNAME> ERROR_NO_SUCH_USER. The specified user
	  does not exist.
	
	1317:
	
	  The Sync Agent Service failed to sync the NetWare server <SERVERNAME>
	  due to error 1317 ERROR_NO_SUCH_USER The specified user does not exist.
	
	  Check whether the WINNT_SYNC_AGENT account has been deleted from the NetWare
	  server. This account must not be deleted from a NetWare server that has been
	  added to a domain for management.
	
	1326:
	
	  ERROR_LOGON_FAILURE
	
	  This error may occur during an attempted database backup to one of the
	  assigned backup paths and indicates that the server could not be logged on to
	  at that time. Try the operation again, and check to see that the password is
	  correct.
	
	1376:
	
	  ERROR_NO_SUCH_ALIAS
	
	  May indicate that the account synchronization database has become inconsistent
	  because of a previous lack of disk space on the server. If these errors occur
	  often, restore the account synchronization database using a version that was
	  backed up before the disk space problem occurred.
	
	1332:
	
	  Error: ERROR_NONE_MAPPED
	
	  This error may occur if a group was set for propagation, but the change log
	  indicated the group was previously deleted.
	
	1358:
	
	  ERROR_INTERNAL_DB_CORRUPTION Unable to complete the requested operation
	  because of a catastrophic media failure or data structure corruption on the
	  disk.
	
	1359:
	
	  The Sync Agent Service change log thread failed with error 1359
	  ERROR_INTERNAL_ERROR.
	
	  The Security Account Database contains and internal inconsistency (Also
	  related to the INTERNAL_ERROR above is Error 6: "The Sync Agent Thread failed
	  with Error 6.)
	
	2140:
	
	  NERR_InternalError
	
	  An Internal Windows NT Error occurred. Error has been associated with Database
	  backup. "The Sync Agent Service could not replicate database to
	  \\SERVERNAME\VOLUME\DIRECTORY because of Jet Database error 2140."
	
	2220:
	
	  Error: (nt\public\sdk\inc\lm.h) NERR_GroupNotFound
	
	2221:
	
	  Error (nt\public\sdk\inc\lm.h): NERR_UserNotFound
	
	10217:
	
	  The Sync Agent service failed to modify account <USERNAME> on the
	  NetWare server <SERVERNAME> due to 10217.
	
	  The password is too short. Check to see if domain Account Policy was recently
	  changed to a longer minimum password length. Contact technical support.
	
	10245:
	
	  The Sync Agent service failed to remove account <USERNAME> from the
	  NetWare server <SERVERNAME> due to error 10245. (No Object delete
	  privilege.)
	
	10246:
	
	  The Sync Agent service failed to modify account <USERNAME> on the
	  NetWare server <SERVERNAME> due to error 10246.
	
	10249:
	
	  The Sync Agent service failed to add account <USERNAME> to the group
	  <GROUPNAME> on the NW server to error 10249.
	
	10252:
	
	  The Sync Agent service failed to add account <USERNAME> to group
	  <GROUPNAME> on the NetWare server due to error 10252
	
	10253:
	
	  The Sync Agent Service failed to modify account <USERNAME> on the
	  NetWare server <SERVERNAME> due to error 10253.
	
	  Ignore this error; the account will eventually be synchronized correctly.
	
	10255:
	
	  The Sync Agent service failed to modify account <USERNAME> on the
	  NetWare server <SERVERNAME> due to error 10255.
	
	10256:
	
	  The Sync Agent Service failed to modify account <USERNAME> on the
	  NetWare server <SERVERNAME> due to error 10256
	
	10257:
	
	  Event ID 8032: The Sync Agent Service failed to modify account <Existing
	  Windows NT Acct that was NetWare enabled> on the NetWare server
	  <SERVERNAME> due to error 10257.
	
	Jet Database Errors
	-------------------
	
	Jet Error 530: JET_errBadLogSignature
	
	  The log files probably do not match the database. To correct the problem, run
	  dsmpack. If this is successful, delete all the Jet*.log, Jet*.chk, and
	  Res*.log files in the system32\syncagnt directory. Then start the MSSYNC
	  service again.
	
	Jet Error 1004: JET_wrnColumnNull
	
	  May indicate that the account synchronization database has become
	  inconsistent because of a previous lack of disk space on the server. If these
	  errors occur often, restore the account synchronization database using a
	  version that was backed up before the disk space problem occurred.
	
	Jet Error -1032: JET_errFileAccessDenied
	
	  Check to see if there is enough disk space available on the computers
	  containing the Synchronization Manager database backup paths.
	
	Jet Error -1102: JET_errWriteLock
	
	  A timing issue occurred with propagating an account change to NetWare
	  servers. The account will be propagated in the next cycle, and no
	  administrator action is necessary.
	
	Jet Error -1507: JET_errColumnNotFound
	
	  Indicates that Directory Service Manager for NetWare is trying to propagate
	  to a server which no longer exists in the domain.
	
	Jet Error -1603: JET_errNoCurrentRecord
	
	  A process tried to add a user account to a group after the user account was
	  deleted.
	
	Jet Error -1801: Jet_errDiskFull
	
	  Check to see if there is enough disk space available on the computers
	  containing the Synchronization Manager database backup paths.
	
	Jet Error -1808: JET_errDiskFull
	
	  Free up disk space on the server.
	
	Jet Error -1811: Jet_errFileNotFound
	
	  Check to see if there is enough disk space available on the computers
	  containing the Synchronization Manager database backup paths. If several
	  computers are in the path, the disk space available needs to be checked on
	  each server.
	
	Additional query words: sfn
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
