---
layout: page
title: "Q192176: XADM: Restoring a Private IS Only with Arcserve6.x"
permalink: /kb/192/Q192176/
---

## Q192176: XADM: Restoring a Private IS Only with Arcserve6.x

	Article: Q192176
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When restoring a private information store server with no public information
	store present, using ARCserve 6.x, you may encounter an error 3355445011 when
	starting the store.
	
	CAUSE
	=====
	
	The Cheyenne ARCserve backup program places entries in the Windows NT Server's
	registry, which forces the information store to search for files that were not
	restored from tape. Because the public information store files were not
	restored, entries for the Pub.edb should not exist in the registry. If private
	and public files exist, when only the private or the public store has been
	restored, the information store will search for both stores during startup, and
	produce an error.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Restore the private information store using ARCserve.
	
	2. After the restore completes, DO NOT START THE SERVICES.
	
	3. Start Registry Editor (Regedt32.exe). Locate the following key in the
	  registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ 
	     MSExchangeIS\Restore in Progress
	
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	4. Modify the following value in the registry.
	
	     Value Name: EDB_RstMap
	     Data Type: REG_MULTI_SZ
	     Value:    \\SERVER1\e$\exchsrvr\MDBDATA\PRIV.EDB
	               \\SERVER1\e$\exchsrvr\MDBDATA\PRIV.EDB
	               \\SERVER1\e$\exchsrvr\MDBDATA\PUB.EDB
	               \\SERVER1\e$\exchsrvr\MDBDATA\PUB.EDB
	
	
	  a. Remove the two lines that have references to the PUB.EDB. This should
	     leave two lines in the value field as below.
	
	        Value Name: EDB_RstMap
	        Data Type: REG_MULTI_SZ
	        Value:    \\SERVER1\e$\exchsrvr\MDBDATA\PRIV.EDB
	                  \\SERVER1\e$\exchsrvr\MDBDATA\PRIV.EDB
	   
	
	     NOTE: The values in the value field above will differ in your environment
	     and should not be changed.
	
	  b. Click OK.
	
	5. Modify the following value in the registry.
	
	     Value Name: EDB_RstMap Size
	     Data Type: DWORD
	     Value: 00000002
	
	
	  Change the value to 00000001
	
	6. Exit the registry editor.
	
	7. Start the Exchange Server information store.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
