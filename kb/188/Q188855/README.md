---
layout: page
title: "Q188855: Security Privilege Must be Enabled to View Security Event Log"
permalink: /kb/188/Q188855/
---

## Q188855: Security Privilege Must be Enabled to View Security Event Log

{% raw %}

	Article: Q188855
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Security Privilege Must be Enabled to View Security Event Log
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 Service Pack 4 includes a bug fix in the Event Log service that
	requires SE_SECURITY_NAME privilege, also know as the Security privilege, to be
	enabled in order to view and manage the security event log. By default, Windows
	NT grants the privilege to Administrators and local System. However, the
	privilege must also be enabled in the program accessing the security event log
	in order to take effect.
	
	This article updates information found in the following Microsoft Knowledge Base
	article:
	
	  ARTICLE-ID: Q129126
	  TITLE : New Access Privileges for Event Log, Audit Log and Registry
	
	Prior to this change, members of the Administrators group and services running as
	local System could open the security log for read or change access without
	enabling the Security privilege. If the privilege was removed from the
	Administrators group, members of the Administrators group could still manage the
	security log. This change enforces the security model that if Administrators do
	not have the privilege granted to manage the security log, they will not be able
	to manage log simply because they are members of the Administrators group.
	However, Administrators can always grant themselves the Security privilege to
	manage the security log, although this event can be audited.
	
	ISVs that provide programs to manage the security event log must enable the
	privilege constant, SE_SECURITY_NAME, in their program. This privilege is
	required to view and manage security event log information.
	
	A sample program on how to enable privileges in Windows NT is available in the
	Platform SDK under the following topic: Windows Base Services; Security; Access
	Control; Using Access Control; Enabling and Disabling Privileges. Refer to the
	SDK for documentation on interfaces: LookupPrivilegeValue and
	AdjustTokenPrivileges for more information.
	
	Background:
	
	Windows NT privileges are granted to users or groups to allow them to manage
	system resources. Privileges are granted to users or groups in the User Manager
	under the Security Menu, User Rights option. The privilege to manage the
	security log is identified as "Manage auditing and security log". Having the
	privilege granted is not sufficient for use. Before you can perform the
	operation defined by the privilege, the privilege must be enabled in the
	security access token in order to take effect. The model allows privileges to be
	enabled only for specific system operations and then disabled when they are no
	longer needed.
	
	
	Additional query words: sp4
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
