---
layout: page
title: "Q239070: Print Output Takes More Space After Installing Windows NT SP4"
permalink: kb/239/Q239070/
---

## Q239070: Print Output Takes More Space After Installing Windows NT SP4

	Article: Q239070
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT 4.0 Service Pack 4 (SP4), you may experience a
	problem printing to Hewlett-Packard (HP) 3Si, 4, 4Si, and 5Si printers. The
	output may appear to take more room or pages.
	
	CAUSE
	=====
	
	For SP4, changes were made in the way Windows NT selects which printer font to
	use when a screen font is selected for printing. This may change the print
	output if a larger font is used.
	
	RESOLUTION
	==========
	
	If the printer supports PostScript, use a PostScript driver for the printer.
	When you use the PostScript driver, the problem does not occur.
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
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
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The fix for this problem resolves some of the problems encountered, but there
	still may be a situation in which the font that is selected is not the one that
	was selected previously. You can make the following changes in the registry to
	force the printer font to use. It may take a number of attempts to find the
	previously used font.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\FontSubstitutes
	
	3. On the Edit menu, click Add Value, and then add the name of the font you are
	  using with a data type of REG_SZ.
	
	4. Quit Registry Editor.
	
	You must reboot the computer for these changes to take affect.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
