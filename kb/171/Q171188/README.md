---
layout: page
title: "Q171188: How To Enable the Slow Network Time Out Value"
permalink: kb/171/Q171188/
---

## Q171188: How To Enable the Slow Network Time Out Value

	Article: Q171188
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Computers that start multiple services or run lengthy logon scripts may receive
	the following error if connected to a busy network:
	
	  "A slow network connection has been detected. Would you like to download your
	  profile or use the locally stored copy?"
	
	RESOLUTION
	==========
	
	There are two ways currently available to alter the default Slow Link Timeout
	value to keep this message from appearing on your screen.
	
	Method 1
	--------
	
	You can alter the default Slow Link Timeout value for your Windows NT Workstation
	clients by using the System Policy Editor. To do this, perform the following
	steps:
	
	1. Start System Policy Editor (Poledit.exe).
	
	2. From the File menu, click Open Registry.
	
	3. Click Local Machine.
	
	4. Click Windows NT User Profiles.
	
	5. Click to select the Check box for Slow network connection timeout.
	
	Method 2
	--------
	
	WARNING: Using Registry Editor incorrectly can cause serous problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	If you wish to alter this value in the registry, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe) and find the following subkey:
	
	 HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\WinLogon
	
	2. From the Edit menu, click Add Value and type SlowLinkTimeOut for the Value
	  Name. For DataType: leave at REG_DWORD. This value is in milliseconds (1,000
	  per second.) The minimum value is 0, the maximum is 120,000 (120 seconds) and
	  the default is 2,000 (2 seconds.)
	
	
	MORE INFORMATION
	================
	
	Profiles and Policies are discussed in Chapter 3 of Microsoft's Windows NT
	Server Concepts and Planning Guide and in a Profiles and Policies Whitepaper.
	The whitepaper is available at:
	
	  http://www.microsoft.com/ntserver/management/deployment/planguide/prof_policies.asp
	
	Additional query words: spe ntconfig
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : x86
	
	=============================================================================
	
