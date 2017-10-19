---
layout: page
title: "Q229111: Clients with Different Language Version Replace Printer Settings"
permalink: /kb/229/Q229111/
---

## Q229111: Clients with Different Language Version Replace Printer Settings

	Article: Q229111
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run print servers and their clients in different language versions of
	Windows NT (for example, the servers run the English version and the clients run
	the German version) with non-postscript printers, a client viewing the printer
	settings sees the default settings in the server language.
	
	This may occur even if the user does not have permissions to modify printer
	settings and when they do not click OK.
	
	CAUSE
	=====
	
	This problem occurs because the client detects invalid form and tray names and
	changes the server configurations to the default settings.
	
	This behavior is similar to the issue described in the following Microsoft
	Knowledge Base article:
	
	  Q190835 Paper Bin Displays Incorrect Form to Tray Assignment
	
	RESOLUTION
	==========
	
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
	
	
	WORKAROUND
	==========
	
	To work around this problem, copy Rasddui.dll from the server computer (in the
	server language) to the client computer. For information on how to replace files
	that are in use, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q184408 How to Replace In-Use Windows NT System Files
	
	This behavior also occurs when the client connects to the printer and the file is
	not present or is an older version. However, when you apply a service pack to
	the client computer, this file is overwritten.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	The printer settings (for example, tray and form names) are names to identify
	the setting. These names are localized to different strings for the various
	language versions of Windows NT.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
