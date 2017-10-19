---
layout: page
title: "Q165064: Group Policies Are Ignored, All Other Policies Work as Expected"
permalink: /kb/165/Q165064/
---

## Q165064: Group Policies Are Ignored, All Other Policies Work as Expected

	Article: Q165064
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Although group policies are ignored, all other policies work as expected.
	
	CAUSE
	=====
	
	The following four reasons can cause this behavior:
	
	- The Grouppol.dll file should be in the Windows\System folder.
	
	- The group in question is not a global group (or group priority is not set in
	  the correct order).
	
	- A policy file for a specific user exists and overwrites group policies.
	
	- The registry has not been updated to include the Grouppol.reg entries.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	The Grouppol.reg entries can be added by double-clicking the Grouppol.reg file.
	(The following entries are added automatically if support for group policies has
	been installed--refer to the Windows 95 Resource Kit, page 494.)
	
	Or, you can manually add the following entries:
	
	- Registry key: HKEY_LOCAL_MACHINE\Network\Logon
	  Value name (STRING): PolicyHandler
	  Value data: GROUPPOL.DLL,ProcessPolicies
	
	- Registry key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\
	  MSNP32\NetworkProvider
	  Value name (STRING): GroupFcn
	  Value data: GROUPPOL.DLL,NTGetUserGroups
	
	- Registry key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\
	  NWNP32\NetworkProvider
	  Value name (STRING): GroupFcn
	  Value data: GROUPPOL.DLL,NWGetUserGroups
	
	Additional query words: 4.00 Policy not applied
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	
