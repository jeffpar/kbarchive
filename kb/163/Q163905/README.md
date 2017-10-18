---
layout: page
title: "Q163905: Auditing User Right Assignment Changes"
permalink: kb/163/Q163905/
---

## Q163905: Auditing User Right Assignment Changes

	Article: Q163905
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT can audit when a user or group is added to or removed from a User
	Right. To audit these types of action, choose the auditing category, Security
	Policy Changes in User Manager under the Policies menu, auditing. This is the
	only needed audit category to audit these specific actions. Only the audit
	category File and Object Access will add additional security events, but these
	events simply show objects being opened and handles being closed for user
	account access that populate the Add Users and Groups dialog boxes.
	
	MORE INFORMATION
	================
	
	Below is the sample output from the Security Event Log when a user is added to
	each of the User Right. Although User Manager does not differentiate between
	User Privileges and Rights, in actuality only Privileges are currently audited.
	Actions that are not audited are actually "rights."
	
	
	1. Access this computer from the network: no events
	
	2. Act as part of the operating system: (Advanced Right)
	
	  2/17/97  2:29:19 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeTcbPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	3. Add workstations to domain:
	
	  2/17/97  2:18:11 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeMachineAccountPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	4. Back up files and directories:
	
	  2/17/97  2:19:03 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeBackupPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	5. Bypass traverse checking: (Advanced Right)
	
	  2/17/97  2:30:06 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeChangeNotifyPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	6. Change the system time:
	
	  2/17/97  2:19:57 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeSystemtimePrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	7. Create a pagefile: (Advanced Right)
	
	  2/17/97  2:30:57 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeCreatePagefilePrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	8. Create a token object: (Advanced Right)
	
	  2/17/97  2:31:45 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeCreateTokenPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	9. Create permanent shared objects: (Advanced Right)
	
	  2/17/97  2:32:40 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeCreatePermanentPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	10. Debug programs: (Advanced Right)
	
	  2/17/97  2:33:41 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeDebugPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	11. Force shutdown from a remote system:
	
	  2/17/97  2:20:46 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeRemoteShutdownPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	12. Generate security audits: (Advanced Right)
	
	  2/17/97  2:34:31 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeAuditPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	13. Increase quotas: (Advanced Right)
	
	  2/17/97  2:35:12 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeIncreaseQuotaPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	14. Increase scheduling priority: (Advanced Right)
	
	  2/17/97  2:35:52 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeIncreaseBasePriorityPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	15. Load and unload device drivers:
	
	  2/17/97  2:21:43 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeLoadDriverPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	16. Lock pages in memory: (Advanced Right)
	
	  2/17/97  2:36:57 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeLockMemoryPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	17. Log on as a batch job: (Advanced Right) no events
	
	18. Log on as a service: (Advanced Right) no events
	
	19. Log on locally: no events
	
	20. Manage auditing and security log:
	
	  2/17/97  2:25:18 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeSecurityPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	21. Modify firmware environment values: (Advanced Right)
	
	  2/17/97  2:41:54 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeSystemEnvironmentPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	22. Profile single process: (Advanced Right)
	
	  2/17/97  3:20:18 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeProfileSingleProcessPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	23. Profile system performance: (Advanced Right)
	
	  2/17/97  3:21:11 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeSystemProfilePrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	24. Replace a process level token: (Advanced Right)
	
	  2/17/97  3:21:57 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeAssignPrimaryTokenPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	25. Restore files and directories:
	
	  2/17/97  2:26:13 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeRestorePrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	26. Shut down the system:
	
	  2/17/97  2:27:00 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeShutdownPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	27. Take ownership of files or other objects:
	
	  2/17/97  2:27:41 PM  Security Success Audit  Policy Change  608
	  randymc  RANDYMC1 User Right Assigned:
	  User Right: SeTakeOwnershipPrivilege
	  Assigned To:   S-1-5-21-2092848103-1120294241-1737835142-7944
	  Assigned By:
	  User Name:  randymc
	  Domain:     RANDYMCD
	  Logon ID:   (0x0,0x1EDC)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
