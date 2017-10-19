---
layout: page
title: "Q164300: DNS Registry Parameter - AddressAnswerLimit"
permalink: /kb/164/Q164300/
---

## Q164300: DNS Registry Parameter - AddressAnswerLimit

	Article: Q164300
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The Windows 95 Domain Name Service (DNS) resolver may have a problem when
	receiving a DNS response packet that contains greater than 28 addresses. For
	example, if you have 29 A records with the same host name, but different IP
	addresses, and a Windows 95 client attempts to resolve that name, the query will
	fail with the following error message:
	
	  Bad IP Address
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain Windows NT 4.0 Service Pack 3 or later. For
	information about how to obtain the latest service pack, please see the
	following article in the Microsoft Knowledge Base.
	
	  ARTICLE-ID: Q152734
	  TITLE : How To Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Windows NT 4.0 Service Pack 3 introduced a new new registry value that lets you
	limit the number of A records returned for a DNS query to between five and
	twenty eight.
	
	To implement this change, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Install Windows NT 4.0 Service Pack 3 or later.
	
	2. Click the Start button, point to Settings, click Control Panel, and then
	
	double-click the Services icon.
	3. Select Microsoft DNS Server Service, and then click Stop. Or from an MS-DOS
	  command prompt type:
	
	  net stop DNS
	
	4. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \DNS\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	5. On the Edit menu, click Add Value.
	
	6. Type the following values:
	
	  Value Name: AddressAnswerLimit
	  Data Type: REG_DWORD
	  Value: A value between 5 and 28
	
	7. Close Registry Editor.
	
	8. Click the Start button, point to Settings, click Control Panel, and then
	  double-click the Services icon. Select the Microsoft DNS Server Service, and
	  then click Start. Or from an MS-DOS command prompt type:
	
	  net start DNS
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
