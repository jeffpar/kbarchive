---
layout: page
title: "Q188672: XADM: Upgrading to Exchange 5.5 Gives Error ID No: c1032695"
permalink: kb/188/Q188672/
---

## Q188672: XADM: Upgrading to Exchange 5.5 Gives Error ID No: c1032695

	Article: Q188672
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Microsoft Exchange Server 5.5 Upgrade Edition, the
	following error message may be displayed:
	
	  This upgrade program cannot be used to upgrade a promotional copy of
	  Microsoft Exchange Server. You must first install a licensed copy of
	  Microsoft Exchange Server.
	
	  Microsoft Exchange Setup
	  ID no: c1032695
	
	CAUSE
	=====
	
	You are attempting to upgrade an Evaluation Edition of Microsoft Exchange
	Server.
	
	WORKAROUND
	==========
	
	Option 1:
	To directly upgrade to Microsoft Exchange Server 5.5 after using the Evaluation
	Edition of Exchange Server 5.5, you must purchase the full copy of Exchange
	Server 5.5.
	
	Option 2:
	If you mistakenly upgraded your Microsoft Exchange Server 4.0 or 5.0 computer to
	Exchange 5.5 using the Exchange Server Evaluation Edition, follow these steps to
	correctly upgrade your server using the Exchange Server 5.5 Upgrade Edition:
	
	1. Back up your current Exchange Server 5.5 directory and information store.
	
	  Make note of the exact spelling, punctuation, and capitalization of the
	  Organization and Site names and verify the Exchange service account. Note the
	  locations of the directory and information store EDB, LOG, and CHK files.
	  Note which connectors are installed on this server.
	
	2. Run Exchange Server 5.5 Evaluation Edition Setup, and select Remove All. Do
	  NOT connect to a server in the site and remove the affected server from the
	  site.
	
	3. Run Exchange Server Setup from your original distribution media (either
	  Exchange Server 4.0 or 5.0).
	
	  When doing the installation, select the Create a New Site option, NOT the Join
	  Existing Site option. You must re-install with the exact same Organization
	  name, Site Name, and Exchange Service account as noted in step 1. (If
	  changing hardware, the machine name must also be the same and the Domain must
	  be the same as the original.)
	
	  Be sure to add all connectors that were on the original system so that they
	  are upgraded as well. After Setup is complete, run Optimizer to put the
	  directory and information store files on the same drives\paths as the
	  original.
	
	4. After Exchange Server 4.0 or 5.0 Setup has completed, run Setup from your
	  Exchange Server 5.5 Upgrade Edition.
	
	5. Restore your Exchange Server 5.5 Evaluation Edition directory and information
	  store (which were backed up in step 1). If this is a multi- server site,
	  restoring the directory restores the connection to the other servers in the
	  site and resumes replication.
	
	For more information on the recovery process, please refer to the Backup and
	Restore White Paper available on the Microsoft Web site.
	
	MORE INFORMATION
	================
	
	To upgrade to Microsoft Exchange Server 5.5 using the Version Upgrade Edition,
	you must own Microsoft Exchange Server 4.0 or 5.0.
	
	Additional query words: RTM 120 day
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
