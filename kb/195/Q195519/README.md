---
layout: page
title: "Q195519: XADM: How to Recover When the Transaction Log Drive Fails"
permalink: /kb/195/Q195519/
---

## Q195519: XADM: How to Recover When the Transaction Log Drive Fails

{% raw %}

	Article: Q195519
	Product(s): Microsoft Exchange
	Version(s): WINNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps to recover when the drive containing the
	information store or directory service transaction log files fails because of
	hardware problems.
	
	MORE INFORMATION
	================
	
	Information Store Transaction Logs Lost
	---------------------------------------
	
	Following are the steps if the drive containing the information store transaction
	log files is damaged and all data is lost. These steps assume that the database
	files are on a separate drive from the transaction log files.
	
	1. In Control Panel, Services, set the Exchange Server System Attendant service
	  to Disabled to prevent it from starting up.
	
	2. Replace the faulty drive with a new drive.
	
	3. Create a logical drive with the same name as before and format it.
	
	4. Recreate the Exchsrvr\Mdbdata directory on the new drive.
	
	5. Backup the Priv.edb and Pub.edb on the database drive.
	
	6. Restore the last online backup of the information store.
	
	7. In Control Panel, Services, enable the System Attendant service.
	
	8. Start the Microsoft Exchange Server Services.
	
	At this stage, the information store will start, and will only contain data up to
	the time of the last backup, because the transaction logs containing the data
	generated since the last backup have been lost.
	
	Recovering Data Generated Since the Last Online Backup
	------------------------------------------------------
	
	In order to try and extract data from the Priv.edb and Pub.edb files present at
	the time of the failure, use the following steps.
	
	NOTE: The steps below may or may not work, depending on the state of the database
	files.
	
	1. Install Exchange Server on a recovery server with the same Organization and
	  Site names as the production server.
	
	2. Create a new site, and DO NOT join the existing site.
	
	3. Move out all files from the Exchsrvr\Mdbdata directory.
	
	4. Copy the Priv.edb and Pub.edb files saved from the production server.
	
	5. Repair the databases if necessary, and start the information store.
	
	6. Run the DS/IS consistency adjuster
	
	7. Run ExMerge.exe to merge all data between the last backup and the time of the
	  failure, from the recovery server into the production server.
	
	ExMerge.exe (Microsoft Exchange Mailbox Merge Program) is available on the
	Microsoft BackOffice Resource Kit, Second Edition, as well as from Microsoft
	Product Support Services.
	
	Directory Service Transaction Logs Lost
	---------------------------------------
	
	Following are the steps if the drive containing the directory service transaction
	log files is damaged beyond recovery. These steps assume that the database files
	are on a separate drive from the transaction log files.
	
	1. In Control Panel, Services, set the Microsoft Exchange System Attendant
	  service to Disabled to prevent it from starting up.
	
	2. Replace the faulty drive with a new drive.
	
	3. Create a logical drive with the same name as before and format it.
	
	4. Recreate the Exchsrvr\Dsadata directory.
	
	5. Backup Dir.edb on the database drive.
	
	6. Restore the last online backup of the directory service.
	
	7. In Control Panel, Services, enable the System Attendant service.
	
	8. Start the Microsoft Exchange Services.
	
	Once the directory service starts up, it will contact the other servers in the
	site, and backfill any data generated since the last backup.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINNT:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
