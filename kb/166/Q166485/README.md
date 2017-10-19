---
layout: page
title: "Q166485: Removing Entries in WINS from Other Non-Existent WINS Servers"
permalink: /kb/166/Q166485/
---

## Q166485: Removing Entries in WINS from Other Non-Existent WINS Servers

	Article: Q166485
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The Microsoft Windows NT Server Windows Internet Name Service (WINS) database
	will not delete entries owned by other WINS servers that are no longer
	functioning. A registry entry, PersonaNonGrata, can be used to remove entries
	that are owned by other WINS servers that are no longer a part of the WINS
	replication network.
	
	MORE INFORMATION
	================
	
	In a Microsoft Windows NT network with multiple WINS servers, entries owned by
	WINS servers that are no longer part of the network of replicated databases will
	be replicated indefinitely. This is because WINS must check with an owner server
	before entries are deleted. If a WINS server is no longer in use, other WINS
	servers will err on the side of caution and keep records they cannot verify as
	expired on an owner server. Even if an owner is deleted in WINS Manager, these
	unwanted entries will continue to be replicated from other WINS servers.
	
	The Windows NT registry value PersonaNonGrata allows an administrator to specify
	the IP addresses of owner servers of unwanted records.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	The PersonaNonGrata is not in the registry by default, it must be added manually.
	Perform the following steps to add this entry to the registry:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WINS\Partners
	
	3. On the Edit menu, click Add Value, and then type the following:
	
	     Value Name: PersonaNonGrata
	     Data Type:  REG_MULTI_SZ
	     Value:      IP address of non-existent WINS server that is the 
	                 owner server of the unwanted records being replicated.
	                 (Each IP address should be followed by a carriage 
	                 return.)
	     Default:    (None)
	
	  NOTE: This entry does not go in either the Push or Pull subkey of Partners,
	  but is entered as a value in Partners along with the Push and Pull Subkeys.
	  After entering the value, stop and re- start the WINS service to enable the
	  value.
	
	When a server is given PersonaNonGrata status, it can be deleted as an owner in
	WINS Manager (Mappings-Show Database), and its entries will not be replicated
	from other servers.
	
	Additional query words: delete owner
	
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
