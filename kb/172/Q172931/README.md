---
layout: page
title: "Q172931: Cached Logon Information"
permalink: /kb/172/Q172931/
---

## Q172931: Cached Logon Information

	Article: Q172931
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" online Help topic in Regedit.exe or the
	"Restoring a Registry Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Microsoft Windows NT caches previous users' logon information locally so that
	they can log on if a logon server is unavailable during later logon attempts.
	
	If a domain controller is unavailable and a user's logon information is cached,
	the user will be prompted with a dialog that says:
	
	  A domain controller for your domain could not be contacted. You have been
	  logged on using cached account information. Changes to your profile since you
	  last logged on may not be available.
	
	With caching disabled, the user is prompted with this message:
	
	  The system cannot log you on now because the domain <DOMAIN_NAME> is
	  not available.
	
	MORE INFORMATION
	================
	
	When you logon to Windows NT using cached logon information, if the domain
	controller is unavailable to validate your account, you cannot access network
	resources that require domain validation. However, you can access network
	resources that do not require domain validation.
	
	Through the registry and a resource kit utility (Regkey.exe), you can change the
	number of previous logon attempts that a server will cache. By default, Windows
	NT will remember the 10 most recent logon attempts. The valid range of values
	for this parameter is 0 to 50. A value of 0 turns off logon caching and any
	value above 50 will only cache 50 logon attempts.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you must back up the registry before you edit it.
	
	Cached logon information is controlled by the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\Current Version\Winlogon\ 
	
	  ValueName: CachedLogonsCount
	  Data Type: REG_SZ
	  Values: 0 - 50
	
	
	Any changes you make to this key require that you restart the computer for the
	changes to take effect.
	
	
	Additional query words: reg remote access
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinAdvServSearch
	Version           : :2000,3.51,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbinfo
	
	=============================================================================
	
