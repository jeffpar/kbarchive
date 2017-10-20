---
layout: page
title: "Q173171: ODE97: Failed Internet Synchronization Leaves Files on Server"
permalink: /kb/173/Q173171/
---

## Q173171: ODE97: Failed Internet Synchronization Leaves Files on Server

{% raw %}

	Article: Q173171
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 23-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SUMMARY
	=======
	
	When you configure Microsoft Replication Manager for Internet synchronization,
	the seventh screen of the Configure Microsoft Replication Manager Wizard asks
	you to provide the alias of an FTP folder. If an Internet synchronization fails,
	a message file is left in this shared FTP folder. For example, this can occur if
	the communications link between the server and the remote computer fails. The
	format of a message file name is rep<xxxx>.msg.
	
	To prevent files that are no longer needed from accumulating on the server, you
	should periodically delete any old message files from the shared FTP folder.
	Even if you happen to delete a message file that has not yet been processed by
	the Synchronizer, the missing message is re-sent the next time you synchronize
	the replicas.
	
	
	MORE INFORMATION
	================
	
	A failed Internet synchronization also leaves temporary files with names that
	are in the format Jet<xxx>.tmp on the server. If you are using Microsoft
	Internet Information Server, however, these files may not be placed in the Temp
	folder because the TEMP environment variable is typically a user variable; the
	FTP service only recognizes system environment variables. Therefore,
	Jet<xxx>.tmp files may accumulate in the server's System Root directory
	(the folder in which Microsoft Windows NT is installed) after a failed internet
	synchronization. You can safely delete these files regardless of where you find
	them.
	
	Steps to Reproduce Behavior
	---------------------------
	
	This example assumes that you have set up your Internet or intranet server for
	replication and that you have configured Microsoft Replication Manager for
	Internet synchronization. For information about setting up Internet or intranet
	replication, search the Microsoft Replication Manager Help Index for "Internet,
	synchronizing replicas" and display the topic, "Setting Up an Internet or
	Intranet Server for Replication."
	
	This example demonstrates the accumulation of message files by temporarily
	stopping the WWW Service on your server.
	
	1. Start Microsoft Access 97 and create a new database on your Internet server.
	
	2. Create a new table with one field.
	
	3. Save the table as tblTable1 and close it.
	
	4. Convert the database to a Design Master.
	
	5. Manage the Design Master with Microsoft Replication Manager 3.5; this assigns
	  an Internet address to the Design Master.
	
	6. In Windows Explorer, copy the Design Master to a shared FTP folder that is
	  accessible over the Internet.
	
	7. On a remote computer, download the file that you copied to the shared FTP
	  folder in step 6.
	
	8. Open the replica on the remote computer.
	
	9. Open tblTable1 and add a record. Close the table.
	
	10. On the Tools menu, point to Replication and click Synchronize Now.
	
	11. In the Synchronize Now dialog box, select a member of the replica set on the
	  Internet and click OK.
	
	12. In the Synchronize Database dialog box, click Synchronize.
	
	13. When you receive the message that synchronization was completed
	  successfully, click Yes.
	
	14. At the server, start Windows Explorer and open the FTP folder that you
	  designated to receive message files. Note that there are no messages
	  remaining in this folder because the Synchronizer has already processed the
	  data exchange.
	
	15. Stop the WWW Service. The folder that you specified as the location for the
	  Synchronizer when you configured Microsoft Replication Manager is now
	  unavailable to the remote computer. However, the FTP folder that you
	  designated to receive message files is still available to the remote
	  computer.
	
	16. In the replica on the remote computer, try to synchronize again with a
	  member of the replica set on the Internet. When you receive the message,
	  "Internal internet failure," click OK.
	
	17. On the server, open the FTP folder that you designated to receive messages;
	  note that it contains a file whose name is in the format
	  rep<xxxx>.msg.
	
	18. Start the WWW Service on the server.
	
	19. In the replica on the remote computer, try to Synchronize again; when you
	  receive the message that the synchronization was completed successfully,
	  click Yes.
	
	20. On the server, open the FTP folder that you designated to receive messages.
	  Note that, although the replica set has been synchronized, the file
	  rep<xxxx>.msg is still present in the folder.
	
	REFERENCES
	==========
	
	For more information about Internet or intranet synchronization, search the
	Microsoft Replication Manager Help Index for "Internet, synchronizing replicas"
	and display the topic "Setting Up an Internet or Intranet Server for
	Replication."
	
	Additional query words: dropbox drop box directory prb inf
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
