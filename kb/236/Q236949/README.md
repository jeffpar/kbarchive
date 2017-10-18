---
layout: page
title: "Q236949: Improper Shutdown Occurrence Is Reported in the Event Viewer Sys"
permalink: kb/236/Q236949/
---

## Q236949: Improper Shutdown Occurrence Is Reported in the Event Viewer Sys

	Article: Q236949
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT4sp6fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you restart a computer running Windows NT after it has been shutdown using
	a utility (such as Shutdown.exe from the Windows NT resource kit) or method that
	calls the InitiateSystemShutdown() API (for example, remote shutdown), the
	following error message may appear in the Windows NT Event Viewer System log
	file:
	
	  Event ID: 6008
	  Source: Event Log
	  Description: The previous system shutdown at time on date was unexpected.
	
	CAUSE
	=====
	
	A remote shutdown issue using the InitiateSystemShutdown() API call was fixed in
	Windows NT 4.0 Service Pack 4. This fix introduced the symptom listed in this
	article.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To prevent the improper shutdown event entry from being written to the Event
	Viewer system log:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Reliability\LastAliveStamp
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value name: TimeStampInterval
	  Data type: REG_DWORD
	  Value: The number, in minutes, between time stamp events written to the log.
	  Setting the value to 0 prevents the "last alive" time stamp from being
	  logged. Only boot and normal shutdown events are then written to the log
	  file.
	
	4. Quit Registry Editor.
	
	Additional query words: dirty
	
	======================================================================
	Keywords          : kberrmsg kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
