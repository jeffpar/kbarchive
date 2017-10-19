---
layout: page
title: "Q157475: Access Denied When Trying to Add ACL Entries"
permalink: /kb/157/Q157475/
---

## Q157475: Access Denied When Trying to Add ACL Entries

	Article: Q157475
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Normally you can modify the security of an object where you have the Change
	Permissions right or when you own the object. However, after you apply Windows
	NT 4.0 Service Pack 3 or the Windows NT 3.51 SEC-FIX, you may receive the
	following error message when you attempt to add entries to Access Control Lists
	(ACL):
	
	  Access Denied
	
	NOTE: You can successfully add entries with the Windows NT Cacls.exe utility.
	
	For additional information on SEC-FIX, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q143474 Restricting Information Available to Anonymous Logon Users
	
	CAUSE
	=====
	
	You receive the above error message because Windows NT ACL editor cannot
	determine the product type of the server.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ 
	  SecurePipeServers\winreg\AllowedPaths
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Click Machine, and then on the Edit menu, click Multi String.
	
	4. Add the following:
	
	  System\CurrentControlSet\Control\ProductOptions
	
	5. Click OK and then quit Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	You can also resolve this problem by granting the user (or a group the user is a
	member of) access to the winreg key. For additional information on the winreg
	key, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q153183 How to Restrict Access to NT Registry from a Remote Computer
	
	
	MORE INFORMATION
	================
	
	The ACL editor must know what entries to place into the list of available
	domains. Domain controllers (ProductType LanManNT) do not have their own machine
	name in the list of domains, while member servers and Windows NT workstations
	(ServerNT and Winnt) do. The ACL editor tries to find out about the domain role
	of the remote server by accessing the ProductType value from the following
	registry key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ProductOptions
	
	SEC-FIX restricts registry access to the users listed in the ACL for the
	following registry key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg
	
	If you do not have access to this key, you are only permitted to access the
	registry keys listed in the AllowedPaths\Machine value in the winreg key. If the
	ProductOptions key is not listed under AllowedPaths\Machine, users trying to add
	ACLs on remote servers might receive an Access Denied error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
