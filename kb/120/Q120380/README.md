---
layout: page
title: "Q120380: Missing Information in Security Event Detail Description"
permalink: /kb/120/Q120380/
---

## Q120380: Missing Information in Security Event Detail Description

{% raw %}

	Article: Q120380
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10
	
	WINDOWS
	
	kbtshoot kbsetup
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The descriptions for event details in the security event log are incomplete.
	
	CAUSE
	=====
	
	There are two possible causes:
	
	- Incomplete or damaged dynamic link library files have been used to create
	  event details in the security event log.
	
	- Registry entries referencing the library are incorrect or missing.
	
	RESOLUTION
	==========
	
	1. Check for the existence of \%systemroot%\system32\msaudite.dll
	
	2. Expand msaudite.dl_ from the appropriate platform directory on the CD-ROM or
	  from disk 15 of the 3.5" installation disks.
	
	3. Find and verify the three registry values below:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	- HKEY_LOCAL_MACHINE on local machine at:
	
	  \System\CurrentControlSet\Services\Eventlog\Security\Security
	
	- CategoryMessageFile:REG_EXPAND_SZ:%SystemRoot%\System32\MsAuditE.dll
	
	- EventMessageFile:REG_EXPAND_SZ:%SystemRoot%\System32\MsAuditE.dll
	
	MORE INFORMATION
	================
	
	Example: Successful Logon
	-------------------------
	
	  User Name:               joeb
	  Domain:                  UNIVERSAL
	  Logon ID:                [0x0,0x13B8]
	  Logon Type:              2
	  Logon Process:           User32
	  Authentication Package:
	
	MICROSOFT_AUTHENTICATION_PACKAGE_V1_0
	
	Example: Incomplete Description
	-------------------------------
	
	The description for Event ID [528] in Source [Security] could not be found. It
	contains the following insertion string(s): joeb,
	UNIVERSAL,[0x0,0x13B8],2,User32, MICROSOFT_AUTHENTICATION_PACKAGE_V1_0.
	
	Additional query words: 3.10 prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
