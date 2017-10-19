---
layout: page
title: "Q163713: XADM: Recovering a Single Mailbox from the Online Backup"
permalink: /kb/163/Q163713/
---

## Q163713: XADM: Recovering a Single Mailbox from the Online Backup

	Article: Q163713
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange MS-DOS client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Mailboxes can be recovered onto a recovery server, in a lab, with Online backup
	without disturbing the server in production.
	
	MORE INFORMATION
	================
	
	To recover the mailbox, you need a Recovery Server (one that is in Lab
	environment and not in production) with enough storage capacity as to install
	Microsoft Exchange Server and to restore the entire private information store
	database. The following outlines the procedure for single mailbox recovery from
	the online backup.
	
	1. Log on to a computer running Windows NT Server with the Administrator
	  account.
	
	2. Install Microsoft Exchange Server computer on Windows NT. During the
	  installation, select "Create a new site", and give the same Site and
	  Organization name as the backup.
	
	3. Apply Windows NT and Exchange updates (both Service Packs and Hotfixes) to
	  this recovery server to bring it to the same level as the original server on
	  which the backup was made.
	
	  NOTE: If you do not update to matching service pack or hotfix levels, it can
	  slow down this recovery process greatly, or even prevent its success.
	
	4. Restore the information store from the backup.
	
	   - Please make sure to redirect your restore to the Recovery Server.
	
	   - Before restoring the information store, Circular Logging should match what
	     was used when the Online Backup was performed.
	
	   - Before you restore the information store, make sure all your mdbdata
	     folders on all possible drives are empty.
	
	  For example, if the tape was backed up with Circular Logging disabled in the
	  Server properties/Advanced tab on the production server, then the recovery
	  server should have Circular Logging disabled as well.
	
	5. Start the Microsoft Exchange Administrator program and run the DS/IS
	  consistency adjustment tool. Select All Inconsistencies before you click the
	  Adjust button.
	
	  NOTE TO EXCHANGE SERVER 5.5 USERS: Also check the top check box, which reads
	  "Synchronize with the directory, and create new directory entries for
	  mailboxes that do not have a corresponding directory entry".
	
	6. Open the property page of the mailbox to be recovered.
	
	7. From General/Primary Windows NT Account, click "Select an existing Windows NT
	  account", click OK, and then add "Administrator" account.
	
	8. Close the mailbox property page.
	
	9. Use Microsoft Exchange Client to create the PST, and then copy the contents
	  of the mailbox to the PST.
	
	10. Add this PST to the user's profile on the production server. As an
	  alternative, the user can add the PST to his hard disk.
	
	Microsoft Exchange Server, version 4.0
	--------------------------------------
	
	The above procedure works when all mailboxes are in default Recipients container.
	If you want to recover a mailbox in other container, that container has to be
	manually created prior to running DS/IS consistency adjustment.
	
	For additional information about recovering a mailbox from a second level
	container, please see the following article in the Microsoft Knowledge Base:
	
	  Q154491 XADM: DS/IS Fails to Re-create Mailboxes in Subcontainers
	
	IMPORTANT: The same version of Windows NT and Exchange Server, including service
	packs, must be installed on both the server you are restoring from and the
	server you are restoring to. Also note that the location of the databases and
	logfiles needs to be the same on both servers.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange400NT kbExchange400Win95
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	
