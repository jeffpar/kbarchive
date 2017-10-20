---
layout: page
title: "Q162353: XADM: Restoring an Exchange Directory"
permalink: /kb/162/Q162353/
---

## Q162353: XADM: Restoring an Exchange Directory

{% raw %}

	Article: Q162353
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtool kbusage exc4 exc5
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you need to restore an Exchange Server computer and you are unable to recover
	the Directory, you can still recover the information in the Private and Public
	Stores. Typical methods to recover the Directory include running edbutil /d /r
	/ds, or eseutil /p /ds in Exchange Server 5.5, or first recovering the Windows
	NT security accounts manager (SAM) database.
	
	MORE INFORMATION
	================
	
	To recover the information in the Private and Public Stores:
	
	NOTE: If you run edbutil /d /r against a directory it is important to export the
	information, reinstall Exchange Server, and then import the information.
	
	1. If possible, from the Exchange Administrator Program, on the Tools menu,
	  click Directory Export and export all Recipient containers on this server. If
	  this server cannot be brought up long enough to get to this point, you can
	  perform the Directory Export from another server, in the same or other site,
	  that contains the Directory information for the users from this server.
	
	2. In Services, in Control Panel, stop the Microsoft Exchange System Attendant.
	  When prompted, click OK to stop all of the other Microsoft Exchange Server
	  services.
	
	3. Copy Pub.edb, Priv.edb, all Edb*.log files, all Res*.log files and Edb.chk to
	  another folder or another server as a backup.
	
	4. Start Setup.exe from the Exchange Server CD, and click Remove All when
	  prompted. Verify and remove all Exchange directories (across all drives if
	  Optimization was run).
	
	5. Start Setup.exe again, and reinstall the server with the same Organization
	  Name and Site Name as before. Be careful to make sure each name is typed
	  exactly as it was before, because both the Organization Name and Site Name
	  are case-sensitive.
	
	  NOTE: Remember to reapply any Service Packs that were applied to the previous
	  install.
	
	6. In Services, in Control Panel, stop the Microsoft Exchange System Attendant.
	  When prompted, click OK to stop all of the other Microsoft Exchange Server
	  services.
	
	7. Move all the files out of the Exchsrvr\Mdbdata folder (across all drives if
	  Optimization was run). Copy to this folder all of the files that were copied
	  to another folder or server in step 1 (Pub.edb, Priv.edb, all Edb*.log files,
	  all Res*.log files and Edb.chk).
	
	8. Start the Microsoft Exchange System Attendant and Microsoft Exchange
	  Directory services in Control Panel, Services.
	
	9. From a command prompt, change the folder to Exchsrvr\Bin, and carry out the
	  following command:
	
	  "Isinteg -patch" (without the quotation marks)
	
	10. Start the remaining Microsoft Exchange Server services in Control Panel,
	  Services.
	
	11. Run the Microsoft Exchange Server Administrator Program against the server
	  you are recovering.
	
	  NOTE: With a new directory it is important to re-establish Mailflow between
	  any outstanding sites and Directory Replication before you proceed to Step
	  12.
	
	12. If there were any other Recipients containers aside from the default
	  Recipients container, re-create them all. It is important that these
	  containers have the same name and are nested (Recipient containers within
	  Recipient containers) under the same containers as they were before the
	  restore.
	
	  NOTE: The users in nested containers may not be recovered if step 1 was not
	  performed. For additional information, click the article number below to
	  view the article in the Microsoft Knowledge Base:
	
	  Q154491 XADM: DS/IS Fails to Re-create Mailboxes in Subcontainers
	
	  If step 1 was successful, perform only step 13 below. If step 1 was not
	  successful, (no CSV file could be created), skip step 13 below and perform
	  steps 14 through 16 below.
	
	13. Using the CSV file created in Step 1, on the Tools menu, click Directory
	  Import and import the Directory entries into the Directory.
	
	14. Select the Server Object (Organization, Site, Configuration, Servers,
	  <servername>), click File, click Properties (or press ALT+ENTER), and
	  then click the Advanced tab.
	
	15. Under DS/IS Consistency adjustment, click All Inconsistencies, and click
	  Adjust.
	
	  At this point, all Users should show up in their respective containers except
	  those users who are in nested containers.
	
	16. Go to the Properties of each individual mailbox on the server. At the bottom
	  of the Properties box, click Primary Windows NT Account, and then click
	  Select an existing Windows NT account, and then select the corresponding
	  Windows NT account from the Add User or Group list.
	
	After these procedures are done, the users should be able to log into the server
	without having lost their mail messages and the public folders should have been
	restored as well.
	
	For additional information on using Edbutil.exe, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q143233 XADM: Command-Line Parameters for Edbutil.exe
	
	For additional information on using Eseutil.exe, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q182903 XADM: ESEUTIL Command Line Parameters
	
	Additional query words: pub edb priv edb* log res* chk setup exe
	
	======================================================================
	Keywords          : kbtool kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
