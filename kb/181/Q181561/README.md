---
layout: page
title: "Q181561: Windows NT Logon Takes Very Long with SMS and intraNetware"
permalink: kb/181/Q181561/
---

## Q181561: Windows NT Logon Takes Very Long with SMS and intraNetware

	Article: Q181561
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Logging on to a local Windows NT domain takes very long, about an hour. In a
	network monitor trace, you will see many calls like lsarpc: LsarLookupNames with
	names like administrators, administrateurs, and beheerders in the hex part of
	these calls.
	
	MORE INFORMATION
	================
	
	The symptom above can be observed with the following configuration:
	
	- Systems Management Server Remote Control software installed on the clients
	
	- Novell intraNetWare software (which includes a third-party GINA) installed on
	  the clients
	
	- The logon domain has +/- 15 bi-directional trusts
	
	The default configuration of Systems Management Server Remote Control client sets
	up workstations in a way that allows many international administrator groups
	access to the Systems Management Server Remote Control clients. Examples of
	international administrator groups are administrators (English), beheerders
	(Dutch), and administrateurs (French). The complete list contains about 10
	different groups and LsarLookupNames is called for each group separately to
	determine the corresponding security descriptor. If the group name is not found
	locally, all trusts are queried to find a specific group.
	
	If Microsoft Client Services for NetWare (CSNW) is used for NetWare Connectivity,
	the problem does not occur.
	
	RESOLUTION
	==========
	
	One of the following workarounds can be used if Systems Management Server Remote
	Control Software and Novell Connectivity are needed:
	
	- Use Microsoft CSNW.
	
	- Change Systems Management Server Remote Control client configuration to allow
	  only specific international administrator groups access to the Systems
	  Management Server Remote Control clients.
	
	- Do not use a high number of trusts in the logon domain of the Systems
	  Management Server Remote Control clients.
	
	The third party products discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
