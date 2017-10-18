---
layout: page
title: "Q193820: How to Move a WINS Database to Another Server"
permalink: kb/193/Q193820/
---

## Q193820: How to Move a WINS Database to Another Server

	Article: Q193820
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The scenarios below describe how to move a Windows Internet Name Service (WINS)
	database from a Windows NT 4.0 Server (server A) to another Windows NT 4.0
	Server (server B).
	
	NOTE: The version of the Microsoft Windows Internet Name Service (WINS) that
	ships with Windows NT 4.0 Service Pack 4 modifies the format of the WINS
	database. It is advisable that both source and destination WINS servers are at
	the same service pack level.
	
	MORE INFORMATION
	================
	
	Scenario 1: Server A and Server B Have the Same TCP/IP Address
	--------------------------------------------------------------
	
	NOTE: If you use NetBIOS names instead of TCP/IP addresses under replication
	partners, and the NetBIOS name of the source and destination WINS servers are
	different, you will need to delete and then readd the replication partners that
	use NetBIOS names. No changes are necessary if you use IP addresses.
	
	On server A, stop the WINS service and do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WINS
	
	3. From the Registry menu, select Save Key. Under filename, enter "winskey",
	  select a remote drive/path, and click Save.
	
	4. Copy the entire contents of %Winnt%\System32\Wins folder (including
	  subfolders) to a temporary location on another computer.
	
	Because server A and server B will be having the same TCP/IP address, you will
	need to shut down server A before starting server B.
	
	After server B is up and running, do the following:
	
	1. Install the WINS service, reapply any previously installed service packs, and
	  restart.
	
	2. Stop the WINS service on server B and copy the %Winnt%\System32\Wins folder
	  (including subfolders) from the temporary location in step 4 above to
	  %Winnt%\System32\Wins directory on server B.
	
	3. Run Registry Editor (Regedt32.exe).
	
	4. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WINS
	
	5. From the Registry menu, select Restore. Point to the path where you saved
	  "winskey", and click Open. You will be prompted to continue with the restore,
	  click YES.
	
	6. Start the WINS service on server B. Do NOT start the WINS service on server A
	  any longer. After it has been verified that server B is fully operational,
	  remove the WINS service from server A.
	
	Scenario 2: Server A and Server B Have Different TCP/IP Addresses
	-----------------------------------------------------------------
	
	- Server A (original WINS server): IP 10.0.0.1
	
	- Server B (new WINS server): IP 20.0.0.1
	
	1. Install the WINS service on server B, reapply any previously installed
	  service packs, and restart.
	
	2. If server B is not on the same segment as server A, create LMHOSTS files
	  under the following directory on each server:
	
	  %Winnt%\System23\Drivers\Etc
	
	  The format of the LMHOSTS file, according to this example, is as follows:
	
	   - On server A:
	
	     20.0.0.1 server B #PRE
	
	   - On server B:
	
	     10.0.0.1 server A #PRE
	
	  After creating the LMHOSTS files above on each server, load the entries into
	  the NetBIOS cache by typing the following on each server:
	
	  nbtstat -R
	
	Perform the following steps on server B:
	
	1. In WINS manager, go to Server and then to Add Wins Server. Add the IP address
	  of server A, and enter server A for the computer name if prompted. If you get
	  an "Access is denied" message, see the following article in the Microsoft
	  Knowledge Base:
	
	  Q180063 Err Msg: The WINS Server Whose IP Address You Have Specified...
	
	2. With WINS Manager pointing to the "local" database on the title bar, select
	  Server/Replication Partners. If server A does not show up under replication
	  partners, select the add button and add its IP address. Then, select it and
	  click the PUSH and PULL fields under the Replication Options window. The IP
	  address or the name of server A should have a check mark next to both PUSH
	  and PULL. Click OK.
	
	3. From the WINS Manager screen, double-click server A. The WINS manager title
	  bar should read the IP address of server A. You are now attached to server
	  A's database.
	
	  Again, go to Server/Replication Partners. If server B does not show up under
	  replication partners, select the add button and add its IP address. Then,
	  select it and click the PUSH and PULL fields under the Replication Options
	  window. The IP address or the name of server B should have a check mark next
	  to both PUSH and PULL. Click OK.
	
	4. At the bottom right hand side of the replication partner's window, click
	  Replicate Now. The database should start replicating.
	
	5. Go to Mappings/Show Database, with the show database title bar showing
	  "local." Select the Show All Mappings option. Make sure server A's entries
	  are beginning to show up in the local database. Depending on the size of the
	  WINS database, this process could take a few minutes or hours.
	
	6. To determine if the data has replicated, in Mapping/Show Database, click Show
	  Selected Owner. Check the highest version ID of the database against the
	  original database. They should be close to the same hex value. Also, check
	  the entries within the original database version ID against the new database
	  version ID. They also should be close.
	
	  After all registrations from server A have been successfully replicated to
	  server B, the WINS service can be stopped at on server A.
	
	7. At this point, all WINS clients that were registering with server A should
	  have their WINS settings changed to register with server B.
	
	  Static TCP/IP clients should have the WINS configuration changed by going to
	  the WINS Address tab found in TCP/IP Properties in the Network utility in
	  Control Panel. These clients will need to be restarted.
	
	  If using DHCP, change scope option 44 to reflect server B's TCP/IP address.
	  DHCP clients will get the new WINS server configuration the next time they
	  renew their DHCP lease. If you need this to take effect immediately, perform
	  an IPCONFIG /RELEASE and IPCONFIG /RENEW on the DHCP clients.
	
	  Even though the registrations are still owned by server A, ownership will be
	  changed to server B over time as the WINS clients renew their registrations
	  with server B.
	
	Additional query words: kbDSupport moving
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
