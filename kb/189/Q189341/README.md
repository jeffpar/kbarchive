---
layout: page
title: "Q189341: XADM: Clearing Out &quot;Connect to Server&quot; List in Administrator"
permalink: /kb/189/Q189341/
---

## Q189341: XADM: Clearing Out &quot;Connect to Server&quot; List in Administrator

	Article: Q189341
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The Exchange Administrator program retains the memory of which Exchange servers
	it was connected to, and at the start of a new session it re- connects to all
	servers that were open at the end of the last session.
	
	This convenience may become an annoyance if some of the servers are no longer
	available or are located across slow links. In such cases, the startup time for
	Exchange Administrator may be lengthened considerably while the slow-to-respond
	or unavailable servers time out.
	
	You can prevent Exchange Administrator from searching for servers, or you can
	reset the drop-down list of servers by the methods described below.
	
	The Connect to Server settings are saved separately for each logon to each
	administrative workstation. You cannot globally reset these lists all at once
	for all administrators on all computers.
	
	MORE INFORMATION
	================
	
	To prevent Exchange Administrator from trying to connect to a server at startup
	of its next session, choose File.Close while the server name is displayed in the
	Connect to Server drop-down box at the left edge of the toolbar. The server is
	still available on the drop-down list of previously connected servers, but
	Administrator will not try to connect to the server until you select it.
	
	To clear the list of servers previously connected to, do the following:
	
	1. Run a single local session of Exchange Administrator. If multiple
	  Administrator sessions are open, this process will not work.
	
	2. In Exchange Administrator, use File.Close to close all windows for all
	  servers, leaving a blank workspace.
	
	3. Exit Exchange Administrator.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	  If you are running Windows NT, you should also update your Emergency Repair
	  Disk (ERD).
	
	4. Start Registry Editor (Regedt32.exe).
	
	5. Go to:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Exchange\MSExchangeAdmin\Desktop
	  
	
	6. Highlight the Servers value and delete it to clear the entire servers list.
	  This key will be re-created the next time you run Exchange Administrator.
	  Alternately, you may edit the Servers value and add or remove specific server
	  names.
	
	7. Quit Registry Editor.
	
	8. Restart Exchange Administrator, and connect to the server of your choice.
	
	Additional query words: Admin reset
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
