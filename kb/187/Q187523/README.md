---
layout: page
title: "Q187523: XADM: How to Remove Duplicate EventConfig Folders"
permalink: kb/187/Q187523/
---

## Q187523: XADM: How to Remove Duplicate EventConfig Folders

	Article: Q187523
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If a server is removed from a site with the Event Service running and then
	reinstalled in the site, duplicate copies of a Microsoft Exchange Server 5.5
	EventConfig public folder may appear in the Events Root folder. These ghosted
	folder copies cannot be deleted through raw properties in the Exchange Server
	Administrator program and must be deleted using the command line utility
	Events.exe.
	
	MORE INFORMATION
	================
	
	If you start the Exchange Server Setup program and select Remove All with the
	Event Service running, the server you are removing will appear in the drop-down
	lists of servers in the Exchange Server Administrator program. This happens when
	the deletion of the server's corresponding EventConfig public folder is not
	replicated to other servers before the process of removing the server is
	completed. When you reinstall the server in the site, duplicate or ghosted
	EventConfig_<ServerName> folders will appear in the Events Root folder
	beneath the Systems Folder in the Exchange Server Administrator program.
	
	If this happens, removal of the server's second EventConfig folder can be
	accomplished by completing the following steps:
	
	1. In Microsoft Windows NT, click Start, point to Programs, and then select
	  Command Prompt to open a command window.
	
	2. From the Command Prompt, type "net stop MSExchangeES" (without the quotation
	  marks) to stop the Exchange Server Event service.
	
	3. In the Exchsrvr\Bin directory (or the directory where Microsoft Exchange
	  Server is installed), run Events.exe /c:<ServerName>, (where
	  <ServerName> is the name of the server that has the duplicate
	  EventConfig folders). The command /c indicates cleanup mode. This removes the
	  EventConfig folder from the folder hierarchy so that the server no longer
	  appears in the Events Root folder.
	
	  NOTE: When you run Events.exe, the account you are logged on as must be the
	  service account, otherwise, a MAPI error is returned. Also note that each
	  time you run the events /c command, it removes only one folder. So, if you
	  have 4 event config folders for a particular server, you need to run the
	  command a total of four times to get rid of all of the folders.
	
	4. Restart the Event Service by typing "net start MSExchangeES" (without the
	  quotation marks).
	
	5. In the Microsoft Exchange Server Administrator program, press the F5 key to
	  refresh the screen. The duplicate folders should no longer appear.
	
	Additional query words: event config dupe mulitple
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
