---
layout: page
title: "Q159935: &quot;User Not Allowed to Log on at This Computer&quot; Using C2CONFIG"
permalink: /kb/159/Q159935/
---

## Q159935: &quot;User Not Allowed to Log on at This Computer&quot; Using C2CONFIG

{% raw %}

	Article: Q159935
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0;Windows:95
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you run C2CONFIG from the Windows NT 4.0 Resource Kit on an Windows NT
	domain controller, Windows 95 clients logging on to the Windows NT domain report
	the following error messages:
	
	  User not allowed to log on at this computer.
	
	-or-
	
	  You are not allowed to log on from this workstation.
	
	Event ID 533 is logged in the NT Security log. Users are able to log on to a
	Windows NT computer with the same account. The account is configured to allow
	logging on to all workstations.
	
	CAUSE
	=====
	
	The cause is undetermined at this time.
	
	RESOLUTION
	==========
	
	To correct the problem, delete the following key (which was added by C2CONFIG)
	from the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa\CrashOnAuditFail
	
	Additional query words: C2 reskit utils logon
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WinNT:3.5,3.51,4.0;Windows:95
	
	=============================================================================
	

{% endraw %}
