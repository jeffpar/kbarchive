---
layout: page
title: "Q185892: Unwanted Popup Message While Printing to an LPR Printer"
permalink: /kb/185/Q185892/
---

## Q185892: Unwanted Popup Message While Printing to an LPR Printer

	Article: Q185892
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
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the
	"Restoring the Registry" online Help topic in Regedit.exe or the
	"Restoring a Registry Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	As you print a job to an LPR printer, a popup message may occur on the server.
	This message can occur if the name of the printer cannot be determined by host
	name resolution method, such as DNS or HOSTS file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	A change was made to the local spooler to optionally automatically retry and not
	display the popup message. You must also install the Lprmon.dll file mentioned
	in the following Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q161969
	  TITLE : LPR Printing Device Reports an Error If Printer Not Available
	
	To enable this feature, use Registry Editor (Regedt32.exe) to add the RetryPopup
	key.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedit32.exe) and locate the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Providers
	
	2. Add the following information:
	
	  Value Name: RetryPopup
	  Data Type:  REG_DWORD
	  Value:      0 to disable popup; 1 to enable popup (default is 1)
	
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
	
