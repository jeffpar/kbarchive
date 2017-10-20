---
layout: page
title: "Q241393: Page Heap Enhancements for Advanced Debugging in Windows NT4.0"
permalink: /kb/241/Q241393/
---

## Q241393: Page Heap Enhancements for Advanced Debugging in Windows NT4.0

{% raw %}

	Article: Q241393
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbProgramming kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the page heap enhancements available in Windows NT 4.0
	Service Pack 6.
	
	MORE INFORMATION
	================
	
	Page heap enhancements available in Microsoft Windows 2000 have been added to
	Windows NT 4.0 Service Pack 6 to enable advanced debugging for potential heap
	corruption in applications that use large amounts of page heap, such as
	Microsoft Exchange, Microsoft SQL, and Microsoft Internet Information Server
	(IIS).
	
	For example, with these enhancements, the debugger is able to initiate stack
	backtracing and restrict the contents of the page heap.
	
	These page heap enhancements were added for internal use, mainly to debug
	computers supporting the Microsoft.com PRMD (Private Management Domain).
	
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
	
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbinfo
	Solution Type     : kbfix kbpending
	
	=============================================================================
	

{% endraw %}
