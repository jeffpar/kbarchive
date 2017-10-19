---
layout: page
title: "Q186374: Enable Auditing of Microsoft Windows NT Server Password Registry"
permalink: /kb/186/Q186374/
---

## Q186374: Enable Auditing of Microsoft Windows NT Server Password Registry

	Article: Q186374
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT Server operating system includes built-in auditing
	capability. This allows administrators to track which user account was used to
	attempt access to files or other objects in an application. Auditing can also be
	used to track logon attempts, shutdowns or restarts of the system, and similar
	events.
	
	MORE INFORMATION
	================
	
	While Windows NT Server has extensive auditing and logging features, some of
	these are not enabled by default. The following directions will let users turn
	on logging for password database access.
	
	1. Ensure that auditing is enabled. To do this:
	
	  a. On User Manager's Policies menu, click Audit.
	
	  b. Click Audit These Events and then click Close.
	
	  Auditing may add performance overhead to your system; therefore, you should
	  carefully determine what should be audited and which users and/or groups to
	  audit. Please refer to the book "Windows NT 3.5 Guidelines for Security,
	  Audit, and Control" for an in-depth discussion on the subject.
	
	2. Using the Services tool in Control Panel, start the Scheduler service and
	  ensure that the Startup settings for Scheduler allow the service to be
	  started as System.
	
	3. Open a command prompt and type the following:
	
	  at <time> /interactive "regedt32.exe"
	
	  where, <time> is replaced with the current time plus about a minute to
	  take care of your command typing time.
	
	4. At <time>, Registry Editor (Regedt32.exe) appears on your desktop. This
	  execution of Regedt32.exe will be running in the system's security context.
	  As such, it will allow you access to the entire registry, including SAM and
	  SECURITY hives. Hence, make changes very carefully. Note that this will not
	  work against a remote registry; you must do this locally on the system you
	  want to modify.
	
	5. The goal is to enable auditing on certain portions of the registry.
	  Therefore, click the HKEY_LOCAL_MACHINE window within Registry Editor.
	
	6. Click the SAM key and then on the Security menu, click Auditing.
	
	7. Click Add and then click Show Users.
	
	8. Add SYSTEM, Domain Admins, Administrator, Backup Operators, and any other
	  groups which have the following user rights, and then click OK:
	
	   - Take ownership of files or other objects
	
	   - Back up files and directories
	
	   - Manage auditing and security log
	
	   - Restore files and directories
	
	   - Add workstations to domain
	
	   - Replace a process level token
	
	9. Select the "Audit Permission on Existing Subkeys" checkbox.
	
	10. Next, select Success and Failure checkboxes for the following entries
	
	   - Query Value
	
	   - Set Value
	
	   - Write DAC
	
	   - Read Control
	
	11. Click OK and then click Yes.
	
	12. Repeat steps 7-11 for the SECURITY key. (This is not required if you just
	  want to audit password keys, but this will allow you to track other security
	  relevant changes to the system).
	
	13. Exit Registry Editor.
	
	14. Stop the Scheduler service. If you want the Scheduler service running, run
	  it under a different user. If required, create a user account for this
	  purpose and allow that account to have only service logon rights (not "Log
	  on Locally" or "Access this Computer from the Network").
	
	You will now have applied auditing to the entire SAM ensuring you will be
	notified through the Event Logger of any failed or successful access to your
	sensitive information by the only accounts which have the ability to access such
	information. Part of a good security policy is an appropriate audit policy,
	which would dictate how the event logs are reviewed, how the information is
	verified, and what actions should be taken for each possible event.
	
	This will turn on auditing on the entire SAM. You can now use the Event Viewer to
	view failed or successful access to your sensitive information by the accounts
	you specified. Note that this may generate a large number of audits as the
	security subsystem will access these keys to do normal logons, and so on. Hence,
	you will need to periodically review and archive these audit trails.
	
	However, you must remember that running untrusted programs from such powerful
	accounts means that these untrusted programs can devise sophisticated attacks
	that will use the powers of such accounts to remove traces of such
	accountability. Hence, the best solution still is that you do not use
	administrative accounts to run untrusted code and users who have access to
	administrative accounts are themselves trusted.
	
	Additional query words: schedule
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	
