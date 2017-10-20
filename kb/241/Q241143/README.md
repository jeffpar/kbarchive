---
layout: page
title: "Q241143: Err Msg: Limited Virtual Memory. Your System Is Running..."
permalink: /kb/241/Q241143/
---

## Q241143: Err Msg: Limited Virtual Memory. Your System Is Running...

{% raw %}

	Article: Q241143
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a pagefile on an alternate volume and restart your computer,
	you may receive the following error message:
	
	  Limited Virtual Memory. Your system is running without a properly sized
	  paging file. Please use the virtual memory option of the System applet in the
	  Control Panel to create a paging file, or to increase the initial size of
	  your paging file.
	
	The System tool shows a correct value for the pagefile you created, and an
	incorrect entry for the Pagefile.sys file (pointing towards a temporary
	pagefile) may be visible in Windows Diagnostics.
	
	CAUSE
	=====
	
	This behavior can occur if the system account does not have full control root
	permission.
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that the system account has full control to the
	root and is not a member of a denied access group. The system account should
	have full control over the partition (this is the default).
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q182086 How to Clear the Windows NT Paging File at Shutdown
	
	  Q197379 Configuring Page Files for Optimization and Recovery
	
	  Q123747 Moving the Windows NT Default Paging and Spool File
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
