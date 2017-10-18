---
layout: page
title: "Q254682: XADM: Exchange Server 5.5 Post-SP3 Database Engine Fixes"
permalink: kb/254/Q254682/
---

## Q254682: XADM: Exchange Server 5.5 Post-SP3 Database Engine Fixes

	Article: Q254682
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55kbfixlist
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the article numbers for Exchange Server version 5.5 Database
	Engine bugs that were fixed after Exchange Server 5.5 Service Pack 3 (SP3) was
	released. For information about how to obtain the fixes listed in this article,
	click the article number next to the title of the article about that issue to
	view the article in the Microsoft Knowledge Base.
	
	NOTE: Exchange Server fixes for a particular component are cumulative and contain
	all of the previous fixes for that component. Fixes with a particular version
	number contain all of the fixes that have an earlier version number.
	
	MORE INFORMATION
	================
	
	Exchange Server Database Engine fixes include the following files:
	
	+-------------------------------+
	| File name   | Current version | 
	+-------------------------------+
	| Edbbcli.dll | 5.5.2652.31     | 
	+-------------------------------+
	| Ese.dll     | 5.5.2652.6      | 
	+-------------------------------+
	| Eseback.dll | 5.5.2652.31     | 
	+-------------------------------+
	
	Fixes Released on May 25, 2000
	------------------------------
	
	The following files are modified:
	
	- Edbbcli.dll incremented to version 5.5.2652.31
	- Ese.dll incremented to version 5.5.2652.6
	- Eseback.dll added and incremented to version 5.5.2652.31
	
	The following fixes are included:
	
	  Q245664 XADM: Backup of Exchange Server Does Not Finish from a Terminal
	  Server Client
	
	
	  Q253216 XADM: Online Backup Does Not Detect Corruption on a Multiprocessor
	  Computer if Buffer Size Is Larger than 64 Kilobytes
	  Q254812 XADM: Message Transfer Agent Backlogs to Private and Public
	  Information Store
	  Q260695 XADM: Third-Party Backup Program May Stop Working After Applying Fix
	
	Fixes Released on February 28, 2000
	-----------------------------------
	
	NOTE: The Eseback.dll file is not included with these fixes. This file is added
	later.
	
	The following files are modified:
	
	- Edbbcli.dll incremented to version 5.5.2651.44
	- Ese.dll incremented to version 5.5.2651.81
	
	The following fixes are included:
	
	  Q241516 XADM: Exchange Server Becomes Unresponsive Approximately Every 24
	  Days
	  Q242063 XADM: Recovery May Incorrectly Increment the Checkpoint File
	  Q243601 XADM: Backups Time Out on Large Databases when Database Scrubbing Is
	  Enabled
	
	Additional query words: jet
	
	======================================================================
	Keywords          : exc55 kbfixlist
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
