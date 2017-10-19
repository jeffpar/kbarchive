---
layout: page
title: "Q164249: Autodial Heuristics"
permalink: /kb/164/Q164249/
---

## Q164249: Autodial Heuristics

	Article: Q164249
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are cases when the Autodial feature in Windows NT 4.0 will not be invoked.
	The following information describes how autodial works with various name
	resolution procedures.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	For Winsock applications, Autodial is engaged through gethostbyname() and
	connect() failures only. This means that pinging an IP address will not invoke
	Autodial, because a ping sends ICMP packets. However, pinging a DNS hostname
	such as www.microsoft.com will invoke Autodial. This is because ping calls
	gethostbyname() to translate the DNS hostname into an IP address.
	
	If you are connected to a LAN locally, Autodial will only engage when an attempt
	to reach an IP address has failed, and there is already a mapping for the
	address in the registry for Autodial.
	
	Registry entries for Autodial mappings are located at the following location:
	
	HKEY_CURRENT_USER\Software\Microsoft\RAS Autodial\Addresses
	
	If you have booted a using a hardware profile that has no LAN adapter, or you
	have no LAN adapter, Autodial will engage regardless of whether the address is
	in its database or not.
	
	Each entry under the \Addresses key includes a Network value, which corresponds
	with one RAS connectoid (such as 'NETWORK0') under the following Registry key:
	
	HKEY_CURRENT_USER\Software\Microsoft\RAS Autodial\Networks
	
	This Network value enables Autodial to know which RAS connection to dial to
	connect to the specified server.
	
	The registry also holds a database for addresses it will ignore. The entries are
	located at:
	
	HKEY_CURRENT_USER\Software\Microsoft\RAS Autodial
	\Control\DisabledAddresses
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	There are two types of address aliasing that Autodial applies when determining
	which RAS phonebook entry to dial:
	
	- Domain name aliasing: <name1>.microsoft.com is equivalent to
	  <name2>.microsoft.com or any other hostname of the form
	  *.microsoft.com.
	
	- WWW aliasing: www.microsoft.com is equivalent to www.netscape.com or any
	  other hostname of the form 'www.*'.
	
	This means that if the original address is not found in the database, then the
	aliasing rules are applied in attempt to find a suitable RAS phonebook entry.
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
