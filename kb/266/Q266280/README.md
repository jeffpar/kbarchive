---
layout: page
title: "Q266280: Changing User Rights from a Batch File or Command Line"
permalink: /kb/266/Q266280/
---

## Q266280: Changing User Rights from a Batch File or Command Line

	Article: Q266280
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the NTRights.exe utility to grant or deny user rights to users and
	groups from a command line or a batch file. The NTRights.exe utility is included
	in the Windows NT Server 4.0 Resource Kit Supplement 3.
	
	MORE INFORMATION
	================
	
	The NTRights.exe utility uses the following syntax:
	
	ntrights +r/-r user_right-u "account_name" -m\\computer_name
	
	Where:
	
	- +r is used to add a user right.
	
	- -r is used to revoke a user right.
	
	- user_right is the user right to grant or revoke.
	
	- "account _name" is the name of the user or group (enclosed in quotation
	  marks) whose user rights are being modified.
	
	- computer_name is the name of the remote computer where the user rights are
	  being changed. If the -m option and the computer name are not specified, the
	  changes occur on the local computer.
	
	To be able to set a right for a user or group, you must have Administrator
	privileges. The following table lists the user rights that can be changed by
	using the NTRights.exe utility.
	
	NOTE: The following user rights are case-sensitive and must be typed exactly as
	they appear below:
	
	+---------------------------------------------------------------------------------+
	| Windows<A0>NT right                | Permits user to                               | 
	+---------------------------------------------------------------------------------+
	| SeAssignPrimaryTokenPrivilege   | Replace a process level token                 | 
	+---------------------------------------------------------------------------------+
	| SeAuditPrivilege                | Generate security audits                      | 
	+---------------------------------------------------------------------------------+
	| SeBackupPrivilege               | Back up files and directories                 | 
	+---------------------------------------------------------------------------------+
	| SeBatchLogonRight               | Log on as a batch job                         | 
	+---------------------------------------------------------------------------------+
	| SeChangeNotifyPrivilege         | Bypass traverse checking                      | 
	+---------------------------------------------------------------------------------+
	| SeCreatePagefilePrivilege       | Create a pagefile                             | 
	+---------------------------------------------------------------------------------+
	| SeCreatePermanentPrivilege      | Create permanent shared objects               | 
	+---------------------------------------------------------------------------------+
	| SeCreateTokenPrivilege          | Create a token object                         | 
	+---------------------------------------------------------------------------------+
	| SeDebugPrivilege                | Debug programs                                | 
	+---------------------------------------------------------------------------------+
	| SeIncreaseBasePriorityPrivilege | Increase scheduling priority                  | 
	+---------------------------------------------------------------------------------+
	| SeIncreaseQuotaPrivilege        | Increase quotas                               | 
	+---------------------------------------------------------------------------------+
	| SeInteractiveLogonRight         | Log on locally                                | 
	+---------------------------------------------------------------------------------+
	| SeLoadDriverPrivilege           | Load and unload device drivers                | 
	+---------------------------------------------------------------------------------+
	| SeLockMemoryPrivilege           | Lock pages in memory                          | 
	+---------------------------------------------------------------------------------+
	| SeMachineAccountPrivilege       | Add workstations to domain                    | 
	+---------------------------------------------------------------------------------+
	| SeNetworkLogonRight             | Access this computer from the network         | 
	+---------------------------------------------------------------------------------+
	| SeProfileSingleProcessPrivilege | Profile single process                        | 
	+---------------------------------------------------------------------------------+
	| SeRemoteShutdownPrivilege       | Force shutdown from a remote system           | 
	+---------------------------------------------------------------------------------+
	| SeRestorePrivilege              | Restore files and directories                 | 
	+---------------------------------------------------------------------------------+
	| SeSecurityPrivilege             | Manage auditing and security log              | 
	+---------------------------------------------------------------------------------+
	| SeServiceLogonRight             | Log on as a service                           | 
	+---------------------------------------------------------------------------------+
	| SeShutdownPrivilege             | Shut down the system                          | 
	+---------------------------------------------------------------------------------+
	| SeSystemEnvironmentPrivilege    | Modify firmware environment values            | 
	+---------------------------------------------------------------------------------+
	| SeSystemProfilePrivilege        | Profile system performance                    | 
	+---------------------------------------------------------------------------------+
	| SeSystemtimePrivilege           | Change the system time                        | 
	+---------------------------------------------------------------------------------+
	| SeTakeOwnershipPrivilege        | Take ownership of files or other objects      | 
	+---------------------------------------------------------------------------------+
	| SeTcbPrivilege                  | Act as part of the operating system           | 
	+---------------------------------------------------------------------------------+
	| SeUnsolicitedInputPrivilege     | Read unsolicited input from a terminal device | 
	+---------------------------------------------------------------------------------+
	
	EXAMPLE: You can use the NTRights.exe utility to selectively revoke the Log on
	locally right on the local computer so that only members of the local
	Administrators group can log on locally. On a Windows NT Workstation 4.0-based
	computer, by default the following groups have the user right Log on Locally:
	
	- Administrators
	
	- Backup Operators
	
	- Everyone
	
	- Guests
	
	- Power Users
	
	- Users
	
	To revoke the Log on locally user right for all groups but the local
	Administrators group, include the following commands in a batch file:
	
	ntrights -r SeInteractiveLogonRight -u "Backup Operators"
	ntrights -r SeInteractiveLogonRight -u "Everyone"
	ntrights -r SeInteractiveLogonRight -u "Guests"
	ntrights -r SeInteractiveLogonRight -u "Power Users"
	ntrights -r SeInteractiveLogonRight -u "Users"
	
	For more information about using the NTRights.exe utility, refer to the
	RKTools.hlp file included in the Windows NT Server 4.0 Resource Kit Supplement
	3.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
