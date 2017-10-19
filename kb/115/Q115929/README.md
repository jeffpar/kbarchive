---
layout: page
title: "Q115929: Enabling PPP Logging in Windows NT"
permalink: /kb/115/Q115929/
---

## Q115929: Enabling PPP Logging in Windows NT

	Article: Q115929
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	You can create a point-to-point protocol (PPP) log file to help diagnose
	connectivity problems between a PPP server and a PPP client when one of the
	computers is a Windows NT Remote Access Service client. You can enable this
	option by changing a value in the Registry.
	
	MORE INFORMATION
	================
	
	To enable PPP logging:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  SYSTEM\CurrentControlSet\Services\RasMan\PPP
	
	3. Select the Logging value.
	
	4. From the Edit menu choose DWORD.
	
	5. Press 1 and choose OK.
	
	  NOTE: A data value of 1 is standard logging, but setting this value to 2 will
	  enable PPP logging in verbose mode.
	
	6. Reboot the Computer.
	
	PPP logging is helpful when used with an understanding of the PPP protocol and in
	conjunction with the following PPP RFCs: 1661 (supercedes 1548), 1549, 1552,
	1334, and 1332.
	
	Logging information is placed in %SYSTEMROOT%\SYSTEM32\RAS\PPP.LOG
	
	If you are using the Routing and Remote Access Service update, the above settings
	no longer apply. For more information regarding how to enable logging in Routing
	and Remote Access, see the following Knowledge Base article:
	
	  TITLE : How to Enable Logging with Routing and Remote Access
	  ARTICLE-ID: Q161426
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
