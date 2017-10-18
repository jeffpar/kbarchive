---
layout: page
title: "Q131151: PC DirSync: Removing Users from Directory Synchronization"
permalink: kb/131/Q131151/
---

## Q131151: PC DirSync: Removing Users from Directory Synchronization

	Article: Q131151
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create a user, there is an option to include the user in Directory
	Synchronization (Dir-Sync). If the user is included in Dir-Sync, but the
	requirement to keep the user in the Postoffice Address List but remove the user
	from Dir-Sync is needed, you can Modify the user; select N to not include the
	user in Dir-Sync. This will create a Delete transaction in the REQTRANS.GLB that
	will delete the user from all Requestors participating in Dir-Sync.
	
	MORE INFORMATION
	================
	
	An alternative method is to use Import. Use a text editor to create a file with
	the following format:
	
	  D in Col 1   Alias name in  3 - 33 ,  in col 34 address
	  type:network/po/username
	
	For example:
	
	  D  User1 alias                  PCM:NET1/PO1/USER1
	
	Use the following command to import the file into a Requestor (preferably the
	Dir-Sync server):
	
	  Import Admin -ppassword   -E  -ffilename.txt  -ddrive
	
	The deletion will be sent to all the participating Requestors for deletion from
	their .USR files without effecting the address in the Postoffice Address List.
	
	Additional query words: 3.00 3.20 3.20a 3.50 import dirsync delete usr
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	
	=============================================================================
	
