---
layout: page
title: "Q140058: How To Prevent Auditable Activities When Security Log Is Full"
permalink: kb/140/Q140058/
---

## Q140058: How To Prevent Auditable Activities When Security Log Is Full

	Article: Q140058
	Product(s): Microsoft Windows NT
	Version(s): 3.X,4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.X, 4.00 
	- Microsoft Windows NT Server versions 3.X, 4.00 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because the security log is limited in size, and because a large number of
	routine audit records can make it difficult to find records that suggest a
	security problem, you should carefully consider how you audit object access.
	Generating too many audit records require you to review and clear the security
	log more often that is practical.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	If you have set the security log either to "Overwrite Events Older than n Days"
	or "Do Not Overwrite Events (Clear Log Manually)", you may want to prevent
	auditable activities while the log is full so no new audit records can be
	written. To do this:
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE\SYSTEM subtree, go to the following key:
	
	  \CurrentControlSet\Control\Lsa\
	
	3. Add the entry:
	
	  Key: CrashOnAuditFail
	  Type: REG_DWORD
	  Value: 1
	
	4. Save the changes. The Change will take effect the next time the computer is
	  started. Update the Emergency Repair Disk to reflect these changes.
	
	If Windows NT halts as a result of the security log becoming full, the system
	must be restarted and reconfigured to restore it to high-level security. When
	Windows NT restarts, the Security log is full and so no auditable actions are
	recorded until the Security log is cleared.
	
	To recover when windows nt halts because it cannot generate an audit event
	record:
	
	1. Restart the computer and log on using an account in the Administrators group.
	
	2. Use Event Viewer to clear all events from the Security log, archiving the
	  currently logged events. For details, see the "Event Viewer" chapter in the
	  Windows NT Workstation or Windows NT Server System Guide.
	
	3. Use the Registry Editor to delete and replace value entry CrashOnAuditFail,
	  with data type REG_DWORD and value 1, under
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa (as described above).
	
	4. Exit and restart the computer.
	
	NOTE: If the Security log reaches it's size limitation and causes a system halt,
	then the CrashOnAuditFail registry value is automatically changed from "0x1" to
	"0x2" to allow administrative logon to the system. The CrashOnAuditFail value
	must then be manually reset to 0x1 after the Security event log is cleared.
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch
	Version           : :3.X,4.00
	
	=============================================================================
	
