---
layout: page
title: "Q216076: XADM: Information Store Folders May Become Slow and Unresponsive"
permalink: kb/216/Q216076/
---

## Q216076: XADM: Information Store Folders May Become Slow and Unresponsive

	Article: Q216076
	Product(s): Microsoft Exchange
	Version(s): 1.0,1.21,4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Enterprise Server 
	- Microsoft Exchange 2000 Server 
	- Microsoft Extended Messaging Application Programming Interface (MAPI), version 1.0 
	- Collaboration Data Objects (CDO), version 1.21 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to open one or more folders in either the private or public
	information store, the process may become very slow or unresponsive. This
	behavior may manifest itself in the following ways:
	
	- Client response is very slow if you access mail in a folder (for example, if
	  you change the status of a item from read to unread, open an item, or delete
	  an item).
	
	- You receive Messaging Application Programming Interface (MAPI) error messages
	  that include the phrase "Client Operation Failed."
	
	- Log files in the Mdbdata folder grow at a steady rate and you observe very
	  little change, if any, in the public folder resources or the mailbox
	  resources.
	
	- If you create a new folder and move the contents of the folder with the
	  behavior to the new folder, you can resolve the issue for a few days, but the
	  behavior later reoccurs.
	
	- If you access particular folders, response is slow or problematic, but other
	  folders in the same database respond as usual. This includes special folders
	  such as gateway folders (for example, the Mts-in and Mts-out folders).
	
	
	CAUSE
	=====
	
	Too many cached restrictions, back links, and searches are being placed on an
	individual folder.
	
	To determine if you are experiencing the behavior discussed in this article,
	perform either one of the following tests:
	
	IMPORTANT: Before you perform Test 1, ensure that you have a full online backup
	of the information store, because Test 1 resets folder views on the server.
	
	Test 1
	------
	
	1. Add the Reset Views registry value for either the public or private
	  information store.
	
	  WARNING: If you use Registry Editor incorrectly, you may cause serious
	  problems that may require you to reinstall your operating system. Microsoft
	  cannot guarantee that you can solve problems that result from using Registry
	  Editor incorrectly. Use Registry Editor at your own risk.
	
	  To add this value, perform one of the following procedures, as applicable:
	
	   - The Public Information Store: To modify the registry key to change the
	     Reset Views value for the public information store, perform the following
	     steps:
	
	     a. Start the Registry Editor (Regedt32.exe).
	
	     b. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  System\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	     c. Add a Reset Views value of the REG_DWORD type.
	
	     d. The default of the Reset Views value, without this registry entry, is
	        0. Set the value to 1.
	
	     e. Quit the Registry Editor.
	
	   - "The Private Information Store": To modify the registry key to change the
	     Reset Views value for the private information store, perform the following
	     steps:
	
	     a. Start the Registry Editor (Regedt32.exe).
	
	     b. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  System\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	     c. Add a Reset Views value of the REG_DWORD type.
	
	     d. The default of the Reset Views value, without this registry entry, is
	        0. Set the value to 1.
	
	     e. Quit the Registry Editor.
	
	2. Stop the information store service, and then restart it.
	
	If this value exists and is set to a non-zero value, the information store
	deletes all of the cached restrictions on the next cleaning interval (during
	information store maintenance) and resets the value to zero. You can determine
	if this has occurred; check the registry key to see if the value has been reset
	to zero. After deletion of the cached restrictions occurs, if the performance of
	the folder is greatly improved, you are experiencing the behavior discussed in
	this article.
	
	Test 2
	------
	
	1. Stop the information store.
	
	2. At a command prompt, go to the Exchsrvr\Bin folder and run the following
	  command:
	
	  isinteg -pri|pub -dump -l logfilename
	
	  WARNING: This command dumps details of all of the folders in the specified
	  database. Depending on the size of the database, the log file that is
	  produced may be quite large.
	
	3. Examine the log file and look for any folders with large numbers of entries
	  under the following fields:
	
	  Search FIDs=
	  Recursive FIDs=
	  Search Backlinks=
	  Categ FIDs=
	
	  For example:
	
	  Search FIDs=0001-000000000418,0001-00000000041B,0001-000000000421,
	  0001-000000000423,0001-000000000424,0001-000000000428,0001-00000000042D
	
	  If this continues for several hundred entries, you are experiencing the
	  behavior discussed in this article.
	
	WORKAROUND
	==========
	
	To work around this behavior, decrease the "Aging Keep Time" value for the
	affected database (either the public or private information store) from the
	default of 8 days to 1 day.
	
	Aging Keep Time
	---------------
	
	To decrease this value, perform one of the following procedures, as applicable:
	
	- Public Information Store: To modify the registry key to change the Aging Keep
	  Time value for the public information store:
	
	  1. Start the Registry Editor (Regedt32.exe).
	
	  2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  System\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	  3. Add an Aging Keep Time value of the REG_DWORD type.
	
	  4. The default for the Aging Keep Time value, without this registry entry, is
	     8 days. Exchange Server 4.0 and 5.0 store this value in milliseconds (8
	     days in milliseconds is 691,200,000: 1000*60*60*24*8 = 691,200,000), and
	     Exchange Server 5.5 stores this value in seconds (8 days in seconds is
	     691,200: 60*60*24*8 = 691,200). To set the new "Aging Keep Time" value to
	     1 day, set the value to either 86,400,000 for Exchange Server 4.0 and 5.0,
	     or 86,400 for Exchange Server 5.5. If you require a lower value, be sure
	     you remember that Exchange Server 4.0 and 5.0 use milliseconds, and
	     Exchange Server 5.5 uses seconds.
	
	     NOTE: This value is entered as decimal.
	
	  5. Quit the Registry Editor.
	
	- Private Information Store: To modify the registry key to change the Aging
	  Keep Time value for the private information store:
	
	  1. Start the Registry Editor (Regedt32.exe).
	
	  2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  System\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	  3. Add an Aging Keep Time value of the REG_DWORD type.
	
	  4. The default for the "Aging Keep Time" value, without this registry entry,
	     is 8 days. Exchange Server 4.0 and 5.0 store this value in milliseconds (8
	     days in milliseconds is 691,200,000: 1000*60*60*24*8 = 691,200,000), and
	     Exchange Server 5.5 stores this value in seconds (8 days in seconds is
	     691,200: 60*60*24*8 = 691,200). To set the new "Aging Keep Time" value to
	     1 day, set the value to either 86,400,000 for Exchange Server 4.0 and 5.0,
	     or 86,400 for Exchange Server 5.5. If you require a lower value, be sure
	     you remember that Exchange Server 4.0 and 5.0 use milliseconds, and
	     Exchange Server 5.5 uses seconds.
	
	     NOTE: This value is entered as decimal.
	
	  5. Quit the Registry Editor.
	
	  6. Stop the information store service, and then restart it.
	
	If this value is still not low enough, then decrease the values until you reach
	an acceptable level of performance. However, you also need to decrease the
	"Aging Clean Interval" value from its default value of 1 day, as outlined in the
	"Aging Clean Interval" section in this article.
	
	Aging Clean Interval
	--------------------
	
	The "Aging Clean Interval" value is the interval (in seconds for Exchange Server
	4.0, 5.0, and 5.5) at which the information store checks for anything that needs
	to be removed from the cache. The default value is 24 hours (or 86,400 seconds).
	To decrease the "Aging Clean Interval" value for either the public or private
	information store, use one of the following methods, as applicable:
	
	- "Public Information Store": To modify the registry key to decrease the Aging
	  Clean Interval value for the public information store:
	
	  1. Start the Registry Editor (Regedt32.exe).
	
	  2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  System\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	  3. Add an "Aging Clean Interval" value of the REG_DWORD type.
	
	  4. The default of the "Aging Clean Interval" value, without this registry
	     entry, is 86,400 (or 1 day in seconds, 60*60*24). Set the new "Aging Clean
	     Interval" value to a number less than 86,400.
	
	     NOTE: This value is entered as decimal.
	
	  5. Quit the Registry Editor.
	
	- "Private Information Store": To modify this registry key to change the "Aging
	  Clean Interval" value for the private information store:
	
	  1. Start the Registry Editor (Regedt32.exe).
	
	  2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  System\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	  3. Add an Aging Clean Interval value of the REG_DWORD type.
	
	  4. The default of the Aging Clean Interval value, if this registry entry is
	     absent, is 86,400 (or 1 day in seconds, 60*60*24). Set the new "Aging
	     Clean Interval" value to a number less than 86,400.
	
	     NOTE: This value is entered as decimal.
	
	  5. Quit the Registry Editor.
	
	  6. Stop the information store service, and then restart it.
	
	For example, to clear the cache twice a day, perform the following steps:
	
	1. Set the "Aging Keep Time" value to a low setting (1 hour = 3,600 seconds).
	
	2. Set the "Aging Clean Interval" value to 43200.
	
	3. The cache is cleared during information store maintenance, so run information
	  store maintenance every 12 hours.
	
	For additional information about information store maintenance, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q159196 XADM: Tasks Controlled by the Information Store Maintenance Schedule
	
	Running Isinteg
	---------------
	
	You can run the Isinteg utility to force cleanup of the cached restrictions
	immediately. The following occurs:
	
	- Your backlinks are purged.
	
	- The restriction tables are deleted.
	
	If there are a large amount of restrictions against a folder and you run the
	isinteg -fix command, these cached searches are all cleared and your folder
	performs normally.
	
	  isinteg -fix -pri -test morefld
	
	  Microsoft Exchange Information Store Integrity Checker v5.5.265
	  Copyright (c) 1986-1997 Microsoft Corp. All rights reserved.
	  Started: 04/28/00 19:06:08
	  Server name: Server.domain.com
	  Store path: D:\exchsrvr\MDBDATA\PRIV.EDB
	  Store size: 1510031360 bytes
	  Output log: isinteg.pri
	  Check mode: check and fix
	  Options: -fix -pri -test morefld
	
	  Starting test 1 of 3, 'Categorization Tables'
	  Finished Categorization Tables. Time: 0h:0m:0s
	  Starting test 2 of 3, 'Restriction Tables'
	  Finished Restriction Tables. Time: 0h:0m:0s
	  Starting test 3 of 3, 'Search Folder Links'
	  Finished Search Folder Links. Time: 0h:0m:23s
	  No reference count tests
	
	MORE INFORMATION
	================
	
	There are two methods you can use to search on a folder with Extended MAPI, the
	Restrict() method and the FindRow() method. The Restrict() method caches the
	restriction on that folder and is not removed for several days. If the view,
	filter, or search is using an ever-changing primary index, a new restriction is
	added each time that the folder is called. This can lead to a severe decrease in
	the performance of the folder, because every time a change is applied, all the
	back links have to be accessed.
	
	For additional information about controlling folder index aging, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q159197 XADM: Controlling Folder Index Aging
	
	Collaboration Data Objects (CDO) 1.21 can also cause the problem. CDOs
	MessageFilter object is implemented as a MAPI Restrict. If possible, CDO code
	which relies on MessageFilter should be replaced with equivalent Extended MAPI
	code using FindRow. This is not always possible though. For instance, CDO code
	which searches appointments cannot be replaced with Extended MAPI because
	Extended MAPI does not understand appointment items. In this case, the CDO code
	should be reevalutated to see if the number of different MessageFilters can be
	reduced.
	
	
	Additional query words: poor slow outlook filter blackberry bes restrict
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbAudDeveloper kbCDOsearch kbMAPISearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword kbZNotKeyword2 kbExchange2000Search kbCDO121 kbExchange2000Serv kbExchange2000EntServ kbMAPIExt
	Version           : :1.0,1.21,4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
