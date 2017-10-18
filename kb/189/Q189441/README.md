---
layout: page
title: "Q189441: Accounts Missing After Migration with DSMN"
permalink: kb/189/Q189441/
---

## Q189441: Accounts Missing After Migration with DSMN

	Article: Q189441
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Services for NetWare version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You install Directory Services Manager for NetWare (DSMN) on a Windows NT
	primary domain controller (PDC) to manage the account database on NetWare
	servers centrally from the Windows NT domain.
	
	After you have finished migration, you notice that some groups and users are not
	replicated properly. For example, you delete members of a group on a NetWare
	server using SYSCON and start a full replication, but the users do not appear in
	the member list.
	
	Also, when you run the DSMDUMP utility, you will see that several groups are
	missing from the Jet Database. This utility ships with DSMN but is not installed
	by default.
	
	You will receive the following error in the application event log:
	
	  Event ID 8005
	  MSSYNC
	
	  The Sync Agent Service change log thread failed to find the last change
	  log entry it processed. Some user and group modifications might be lost.
	
	CAUSE
	=====
	
	Although DSMN detects that it has missed some changes to the Security Accounts
	Database (SAM), it currently only logs this event.
	
	RESOLUTION
	==========
	
	To prevent the problem, set ChangeLogSize to the maximum value.
	
	
	There are workarounds available after the problem already exists.
	
	- Re-create the affected groups. To do this:
	
	  1. Remove all NetWare Servers from DSMN so the NetWare object IDs are
	     retained later.
	
	  2. Select the group in User Manager for Domains and press F8 to create a copy
	     of the original group.
	
	  3. Enter a name for the new temporary group.
	
	  4. Delete the original group.
	
	  5. Select the temporary group and press F8 again.
	
	  6. Enter the name of the original group and press ENTER.
	
	  7. Repeat the above steps for any groups missing in the output of DSMDUMP.
	
	  8. Add the NetWare servers in Synchronization Manager; do not migrate user
	     accounts.
	
	- Reinstalling DSMN
	
	This may be easier for you if you only have a few NetWare Servers. The main
	problem here is that you lose the NetWare password settings if you don't have
	FPNW running on the server. To prevent password changes in the Windows NT domain
	while DSMN is not running it might be a good idea to set Netlogon to Manual
	startup and to stop it before removing DSMN. After you reinstalled DSMN, add the
	NetWare server without migrating the accounts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: Novell
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbServicesNetware400 kbServicesNetwareSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
