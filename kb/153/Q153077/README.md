---
layout: page
title: "Q153077: LAN Manager and WinNT Servers Running Remoteboot Cannot Coexist"
permalink: /kb/153/Q153077/
---

## Q153077: LAN Manager and WinNT Servers Running Remoteboot Cannot Coexist

	Article: Q153077
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5,3.51; :2.2b,2.2c
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	TITLE: Both LAN Manager and NT domain running Remoteboot cannot coexist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft LAN Manager, versions 2.2b, 2.2c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a computer running LAN Manager Server and Remoteboot is migrated to a
	Windows NT domain with a Windows NT domain controller running Remoteboot (and
	the LAN Manager is left on the Windows NT domain), the following symptoms and
	subsequent error messages occur:
	
	- The LAN Manager RPL client will fail to boot Error: "NON SYSTEM DISK or DISK
	  ERROR"
	
	- The Remoteboot Service on the LAN Manager will fail to start
	
	  Error: "NET 3056 - A system error has occurred."
	
	  Error: "NET 2586 - This server is not configured to support the Remoteboot
	  service."
	
	- When you run RPLINST on the LAN Manager it will fail
	
	  Error: "The remoteboot service requires user-level security. Accounts will
	  not be updated at this time."
	
	CAUSE
	=====
	
	The cause of the problem is that during the migration of the computer running
	LAN Manager, the Upgrade for LAN Manager tools creates an RPLUSER global group.
	The Upgrade for LAN Manager tools either renames the LAN Manager RPLUSER group
	to RPLUSER_OLD or it will allow you to rename the group to a different name
	because a Windows NT RPLUSER local group already exists. The new global group is
	not functional, causing the LAN Manager RPL clients to fail. When you restart
	the LAN Manager Server, the Remoteboot Service will fail to start. If you run
	RPLINST against the LAN Manager, it will fail to complete.
	
	RESOLUTION
	==========
	
	In the Windows NT 'Installation Guide' it explicitly states "On the Windows NT
	Server computer, delete the RPLUSER global group (it is created by the Upgrade
	for LAN Manager tools)". Before you delete the RPLUSER global group, you will
	have to manually add the users from the RPLUSER global group to the RPLUSER
	local group and have the computer running Windows NT Server remoteboot the LAN
	Manager RPL clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbLanManSearch kbLanMan220b kbLanMan220c
	Version           : winnt:3.5,3.51; :2.2b,2.2c
	Issue type        : kbbug
	
	=============================================================================
	
