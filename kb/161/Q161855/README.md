---
layout: page
title: "Q161855: XADM: Restoring a Public Info Store from Earlier Service Pack"
permalink: /kb/161/Q161855/
---

## Q161855: XADM: Restoring a Public Info Store from Earlier Service Pack

	Article: Q161855
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses a way to restore a backup of the public information store
	(Pub.edb) from an earlier Exchange service pack than the one that is currently
	running on the Exchange Server computer.
	
	MORE INFORMATION
	================
	
	When an Exchange service pack is installed, the private and public information
	stores are updated to the current service pack. If you attempt to use a public
	or private store from an earlier service pack, the information store service
	will fail to start, and the error received will reflect that the store is the
	wrong version.
	
	In case the only good backup is one from an earlier service pack, you can take
	steps to get the older information back without having to reinstall all of
	Exchange and each of the service packs. If only the public information store
	needs to be restored, perform the following procedure:
	
	1. Determine which version of Exchange was running when the backup of the public
	  information store was done.
	
	2. In Control Panel, open Services, and stop the information store service.
	
	3. Rename Mdbrest.dll to Mdbrest.xxx. It is located in the EXCHSRVR\BIN
	  directory.
	
	4. Copy the Mdbrest.dll from the SETUP\<platform>\BIN directory of the
	  service pack that is the same as the version as the backed-up public
	  information store.
	
	5. Restore the public information store.
	
	6. Rename Priv.edb to Priv.xxx in the EXCHSRVR\MDBDATA directory.
	
	7. Run ISINTEG -PATCH. You will get a warning stating that the private
	  information store was not found. That is expected because it was just
	  renamed.
	
	8. Start the information store service again.
	
	9. Log on to the Exchange client as a mailbox that has rights to all the public
	  folders. There will be no messages available from the private information
	  store at this time, but all the messages and folders in the public
	  information store will be available.
	
	10. Move all the public folders into a personal folder file (*.pst file) from
	  the client.
	
	11. Shut down the client software, and then stop the information store service
	  again.
	
	12. Rename Pub.edb to Pub.xxx, and rename Priv.xxx back to Priv.edb (from step
	  6). These files are in the EXCHSRVR\MDBDATA directory.
	
	13. Rename or delete Mdbrest.dll in the EXCHSRVR\BIN directory, and then rename
	  Mdbrest.xxx to Mdbrest.dll (from step 3).
	
	14. Run ISINTEG -PATCH. You will get a warning stating that the public
	  information store was not found. That is expected because it was just
	  renamed.
	
	15. Start the information store service again.
	
	16. Log on to the same Exchange client as in step 9, and move all the public
	  folders from the personal folder file up to All Public Folders.
	
	This procedure brings public folders from an earlier service pack and updates
	them to the latest service pack without your having to reinstall Exchange and
	all the service packs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
