---
layout: page
title: "Q324080: XADM: Orphaned Mailboxes in Exchange Server 5.5 Directories in a"
permalink: /kb/324/Q324080/
---

## Q324080: XADM: Orphaned Mailboxes in Exchange Server 5.5 Directories in a

{% raw %}

	Article: Q324080
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4,5.5 SP5,SP1,SP2,SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server, versions SP1, SP2, SP3 
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4, 5.5 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you delete an Exchange 2000 mailbox from a mixed Exchange Server 5.5 and
	Exchange 2000 environment, the mailbox vanishes from Active Directory and Site
	Replication Service (SRS), but you can still see the mailbox when you are
	connected to an Exchange Server directory. If you re-create the mailbox, a
	duplicate mailbox appears in the Exchange Server directories with "-1" added to
	the directory name of the mailbox. Exchange Server users see duplicate entries
	in the Global Address List. These users may not be able to send mail to either
	entry and may receive a non-delivery report.
	
	CAUSE
	=====
	
	This issue occurs because mailbox deletions are set to be written to a .csv file
	on the properties of the Active Directory Connector (ADC) recipient Connection
	Agreement that is responsible for the Site/Administrative Group that the
	mailboxes were deleted from.
	
	RESOLUTION
	==========
	
	To resolve this issue, create a new .csv file for each Exchange
	Site/Administrative Group that has duplicate mailboxes, and then paste the first
	line in the Ex55.csv file into each new .csv file.
	
	In the server where the ADC is installed, there is a file named Ex55.csv that is
	created in the Program Files\MSADC\MSADC\<Name of Connection Agreement>
	folder. This .csv file contains a list of all of the deleted Exchange 2000
	mailboxes that were not replicated to the Exchange Server directories.
	
	The first line of the file named ex55.csv is similar to the following line:
	
	  Obj-Class, Mode, Directory Name, Obj-Container
	
	After you paste each entry from the Ex55.csv file to the appropriate new .csv
	file, sort the new .csv file by Exchange Site and then sort by Administrative
	Group. Each entry is similar to the following entry:
	
	  mailbox, delete, user, /o=Organization/ou=Site/cn=Recipients
	
	Next, you must take some additional steps to determine which SRS to import each
	.csv file into.
	
	1. Open the ADC console and view the list of Connection Agreements.
	
	2. Check the properties of each Connection Agreement that starts with "Config
	  CA."
	
	   - On the From Windows tab, you can see a list of the Administrative Groups
	     that Config CA is responsible for.
	
	   - On the Connections tab, the Exchange Server entry specifies the SRS server
	     that corresponds with the Config CA and that is responsible for the
	     Administrative Groups listed in the From Windows tab.
	
	Follow these steps for each Connection Agreement that starts with Config CA to
	determine which SRS databases are responsible for each Administrative Group in
	your organization.
	
	Now you are ready to import the .csv files that you created.
	
	1. Start Exchange Server Administrator, and then connect to the Exchange 2000
	  server that hosts the SRS database.
	
	2. Click Tools, and then click Directory Import.
	
	3. Select the domain that the SRS server belongs to, and then select the SRS
	  server as the MS Exchange Server.
	
	4. Type the name of the .csv file that you created in the Import File box.
	
	5. Click Import, and then wait for Exchange Server directory replication to
	  replicate the deletions in the site.
	
	NOTE: You must follow these steps on a regular basis unless you allow mailbox
	deletions to replicate to Exchange Server directories on the Deletion tab on the
	properties of each recipient Connection Agreement.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q253829 XADM: Description of the Active Directory Connector Deletion
	  Mechanism
	
	  Q249831 XADM: How to Delete Windows 2000 User Accounts Stored in LDF Files by
	  the ADC for Deferred Deletion
	
	  Q288569 XADM: How to Prevent Tombstones from Deleting Exchange Server 5.5
	  Mailboxes
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4 kbExchange550SP5 kbExchange2000ServSP1 kbExchange2000ServSP2
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4,5.5 SP5,SP1,SP2,SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
