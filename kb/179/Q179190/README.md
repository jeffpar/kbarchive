---
layout: page
title: "Q179190: NWRDR May Send Excessive GetNearestServer Requests"
permalink: kb/179/Q179190/
---

## Q179190: NWRDR May Send Excessive GetNearestServer Requests

	Article: Q179190
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The NetWare redirector component (Nwrdr.sys) of Client Services for NetWare
	(CSNW) and Gateway Services for NetWare (GSNW) may send additional
	GetNearestServer Service Advertising Protocol (SAP) requests even after
	receiving a response to its first request.
	
	CAUSE
	=====
	
	NWRDR was originally designed to send a minimum of four SAP requests even if it
	received a response to one of the previous requests.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	After the fix has been applied, there is a new registry parameter that will set
	the minimum number of SAP responses Windows NT must receive. This should be set
	to the number of servers that will be responding or set to four, whichever is
	less.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NwRdr\Parameters
	
	3. From the Edit menu, click Add Value.
	
	4. Enter the following value:
	
	  Value:   MinimumSapResponses
	  Type:    REG_DWORD
	  Data:    1 to 4 (default is 4)
	
	5. Exit Registry Editor.
	
	NOTE: This change to the Windows NT registry requires the computer to be
	restarted to take effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
