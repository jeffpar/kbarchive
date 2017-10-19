---
layout: page
title: "Q237185: &quot;Access Violation&quot; Error Message When You Quit Phone Dialer"
permalink: /kb/237/Q237185/
---

## Q237185: &quot;Access Violation&quot; Error Message When You Quit Phone Dialer

	Article: Q237185
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbWinNT4sp6fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Small Business Server version 4.5 
	- Microsoft BackOffice Server versions 4.0, 4.5 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit Phone Dialer, you may receive an "Access violation" error message,
	and an entry similar to the following example may be written to the Event Viewer
	Application log:
	
	  The application, exe\dialer.dbg, generated an application error.
	  The error occurred on <date> @ <time>
	  The exception generated was c0000005 at address 31313131.
	
	CAUSE
	=====
	
	The Phone Dialer cleanup routine does not properly remove the entries from
	memory if the Dialer.ini file is modified so that the [Last Dialed Numbers]
	section contains an entry with between 128 and 256 characters.
	
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
	4.0, Terminal Server Edition. For additional information, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ400 kbBackOfficeServ450 kbSBServ450
	Version           : winnt:4.0,4.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
