---
layout: page
title: "Q171402: Help/About Does Not Report More Than 2 GB of RAM"
permalink: kb/171/Q171402/
---

## Q171402: Help/About Does Not Report More Than 2 GB of RAM

	Article: Q171402
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select About Windows NT from the Help menu of a Windows NT Explorer
	interface window, memory available to Windows NT only reports 2 GB of RAM even
	though more than 2 GB of memory is installed. Windows NT Task Manager's
	Performance tab and Windows NT Diagnostics Memory tab both report the correct
	amount of RAM. This only appears after installing Windows NT 4.0 Service Pack 3.
	
	CAUSE
	=====
	
	This is a known problem and is simply a reporting error. Windows NT is accessing
	and using all of the memory installed in the computer, as seen by Windows NT
	Task Manager's Performance tab and Windows NT Diagnostics' Memory tab.
	
	MORE INFORMATION
	================
	
	During testing, it was found that some applications functioned incorrectly when
	having access to more than 2 GB of memory. The incorrect reporting of the amount
	of RAM installed over 2 GB was intentionally implemented to allow applications,
	which were written for a maximum of 2 GB of RAM, to function properly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 3. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
