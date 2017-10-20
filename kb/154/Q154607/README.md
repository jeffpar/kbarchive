---
layout: page
title: "Q154607: XCLN: Folder Deleted From Offline Store Removes Online Folder"
permalink: /kb/154/Q154607/
---

## Q154607: XCLN: Folder Deleted From Offline Store Removes Online Folder

{% raw %}

	Article: Q154607
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure the Microsoft Exchange client for offline synchronization,
	the complete mailbox hierarchy is replicated to the offline folder file (OST),
	even though some of the folders are not configured for offline use. This makes
	it possible for you to delete a non- replicated folder while working offline.
	When you start to work online again and synchronization takes place, the
	non-replicated folder and its contents are deleted from the mailbox.
	
	MORE INFORMATION
	================
	
	This behavior is by product design.
	
	Steps to reproduce:
	-------------------
	
	1. Start Microsoft Exchange client configured for local replication and choose
	  Connect when prompted for a connection type.
	
	2. Create a folder called Test and copy several items to it. Make sure this
	  folder is not configured as an offline folder.
	
	3. Quit Exchange.
	
	4. Start Exchange Client and choose Work Offline when prompted for a connection
	  type. Notice the Test folder appears to be empty, although it is not.
	
	5. Delete the Test folder. No error message results. However, the folder is
	  moved to the Deleted Items folder.
	
	6. Quit Exchange. By default, this will purge the Deleted Items folder and
	  delete the Test folder from the Exchange hierarchy.
	
	7. Start Microsoft Exchange client and choose Connect when prompted for a
	  connection type.
	
	Results:
	The folder hierarchy is automatically synchronized, removing the Test folder and
	its contents.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500Mac kbExchange400Mac kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
