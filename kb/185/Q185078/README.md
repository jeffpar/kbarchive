---
layout: page
title: "Q185078: XADM: Recommendations for Successful Disaster Recovery"
permalink: kb/185/Q185078/
---

## Q185078: XADM: Recommendations for Successful Disaster Recovery

	Article: Q185078
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists some basic considerations for providing the greatest level of
	recoverability in the event of an Exchange Server computer disaster. For a more
	in-depth understanding of the needs and processes involved in disaster recovery,
	refer to the "Microsoft Exchange Disaster Recovery" white paper that can be
	currently reached at the following Microsoft Web site:
	
	  http://www.microsoft.com/Exchange/techinfo/administration/55/BackupRestore.asp
	
	MORE INFORMATION
	================
	
	Environmental Considerations
	----------------------------
	
	Ensure that your servers are not placed in unstable environments. Ensure that
	there is sufficient power for the area. Do not place servers under fire
	sprinklers. Ensure that the servers are physically secure and located in a
	temperature-controlled environment.
	
	Installation Considerations
	---------------------------
	
	Make an offline copy of the Dir.edb file. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q184186 XADM: Recovering Exchange from a Corrupted Directory
	
	Carefully evaluate the write-back caching status of your hard disks and disk
	controllers. Microsoft recommends that you do not implement write-back caching
	directly on the hard disks of your Exchange Server computer. Many disk
	manufacturers do not provide the means to validate or ensure the integrity of
	their hard disk cache.
	
	Using write-back caching on your disk controllers can yield a significant
	performance benefit, but observe certain precautions before you use write-back
	caching on your disk controllers (when you use it in conjunction with Exchange
	Server).
	
	Make sure that your disk controllers provide some sort of battery backup
	mechanism, to safeguard against any interruptions in power. This way, if an
	Exchange Server transaction is in the disk controller cache, it is still written
	to the disk, even in the event of a power interruption.
	
	If an on-board battery backup is not present on your disk controller, the
	Exchange Server transaction may not be successfully written to the disk. This
	may potentially corrupt the Exchange Server database.
	
	Install an uninterruptible power supply (UPS), and test it periodically. If you
	do not have a dedicated UPS, make sure that you perform a test of each power
	supply that supports your Exchange Server computers to make sure they are not
	vulnerable to power outages.
	
	If possible, do not configure your Exchange Server computer as a primary domain
	controller (PDC), to reduce the time required to recover the Exchange Server
	computer.
	
	Review the Application Log in Event Viewer Daily
	------------------------------------------------
	
	This step may save you time and money by catching potential problems early.
	Question any unknown warnings or errors. More important, make sure the events
	are resolved as soon as possible.
	
	Dedicate Recovery Equipment
	---------------------------
	
	It is easier and faster to recover data if you have a computer already standing
	by and configured properly for recovery. Preferably, this computer is identical
	to the production computer, or is capable of supporting all of the production
	data. Equip this computer with enough disk space to run any Exchange Server
	database utility, such as the edbutil /d or eseutil /d commands, which require
	twice the disk space used by the Priv.edb or Pub.edb files.
	
	Create a Disaster Recovery Checklist
	------------------------------------
	
	Maintain an up-to-date document that lists all of the necessary information about
	the Exchange Server computers. Include the following:
	
	1. Directory names for the Exchange Server organization, site, and server.
	
	2. Exchange Server service account (and password, if it is in a secure
	  location).
	
	3. Exchange Server database paths.
	
	4. Exchange Server connector settings.
	
	5. Hardware configuration.
	
	6. Partition settings and sizes.
	
	7. Service packs and hotfixes installed.
	
	8. Domain function - PDC, backup domain controller (BDC), or member server.
	
	Create and Verify Backups
	-------------------------
	
	Use Exchange Server-aware backup software that allows online backups of your
	system. Also verify that the information store maintenance schedule does not
	conflict with your backup times. The schedule can be viewed using the Exchange
	Server Administrator program, in the properties of the <server name>
	object.
	
	Do not assume that backup tapes are good, or that data is being properly backed
	up. As part of your daily routine, review all of the backup logs, and follow up
	on any errors or inconsistencies. Consult with your backup software vendor for
	suggestions and documentation for the latest "best practices" and issues related
	to the software.
	
	*************************************************************************
	The ONLY way to verify that the associated databases (the Priv.edb, Pub.edb,
	and Dir.edb files) are free of corruption is to perform an offline defragment.
	NOTE: Perform this process on a recovery computer a
	minimum of once per tape rotation, using data restored from an online
	backup of the production server.
	*************************************************************************
	
	
	Standardize the tape backup formats. Your recovery equipment must be compatible
	with production tape equipment. If you deploy a new type of tape drive, make
	sure that you use a compatible model for your recovery equipment; additionally,
	the new equipment must be tested before you depend on it.
	
	Perform full online backups often enough to keep the hard disk drives from
	running out of space. Transaction logs are only removed after you perform a full
	online backup successfully.
	
	Disable circular logging. With circular logging enabled, Exchange Server
	overwrites transaction logs, which prevents logs from being replayed in sequence
	after a restore of that backup tape if there is a problem. The restore process,
	with circular logging enabled, only recovers data up until the most recent
	backup was made. Any data after the last backup is lost. Never delete or move
	out LOG files manually.
	
	Maintain an off-site set of backup tapes. Avoid placing all of the mission
	critical information in one location.
	
	Perform Disaster Recovery Drills
	--------------------------------
	
	Conduct drills in a test environment. Use Exchange Server data from your
	production environment; use the backup tapes from the actual Exchange Server
	computers. Record the time that it takes for each process of the recovery to
	finish. For realistic results, do not forewarn the individuals involved in the
	drill.
	
	Consider the Storage Location of the Data
	-----------------------------------------
	
	In some environments it may be preferable to store all of the users' mail on the
	server, because the server has a UPS, and is backed up regularly, and so on.
	However, this creates larger database files and makes a disaster recovery
	process slower, because more time is required to back up and restore the files.
	Also, the time it takes to run utilities against the database increases. As an
	alternative, you can enable archiving on the Exchange Clients, so that the
	clients store messages on the local computers, reducing the size of files on the
	server.
	
	The best choice may be a mixture of both alternatives. If you limit the size of
	the mailboxes on the server, you guarantee that the size of the databases does
	not outgrow the capacity of the recovery computers. Clients that need more
	storage space can move some or all messages to a local drive.
	
	Update Your Systems
	-------------------
	
	Run the Scandisk utility, or the chkdsk -f command, or both, after you make major
	changes to the operating system, or after an application fails unexpectedly.
	Additionally, if the system experiences a stop message (blue screen), run these
	utilities after you address the cause of the failure.
	
	The "Disaster and Recovery Planning" white paper discusses topics relating to
	disaster recovery of an Exchange Server. If you administer an Exchange Server
	computer, Microsoft recommends that you read this document. The white paper can
	be currently reached at:
	
	  http://www.microsoft.com/Exchange/techinfo/administration/55/BackupRestore.asp
	
	
	Additional query words: exfaq
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
