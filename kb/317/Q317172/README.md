---
layout: page
title: "Q317172: XADM: Exchange Server 5.5 and Network-Attached Storage"
permalink: /kb/317/Q317172/
---

## Q317172: XADM: Exchange Server 5.5 and Network-Attached Storage

	Article: Q317172
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	For additional information about this subject in Microsoft Exchange 2000 Server, click the article number below 
	to view the article in the Microsoft Knowledge Base:
	
	  Q317173 XADM: Exchange 2000 Server and Network-Attached Storage
	
	
	SUMMARY
	=======
	
	Microsoft generally recommends that you use a channel attached disk storage
	system (for example, small computer system interface [SCSI], Fiber Channel, or
	integrated device electronics [IDE]) to store your Exchange Server database
	files, because this configuration optimizes performance and reliability for
	Exchange Server. By default, the use of network database files (which are stored
	on a networked server or network-attached storage server) is not enabled on
	Exchange Server 5.5.
	
	For additional information about specific errors and settings associated with
	placing Exchange data files on network-accessed disks, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q314916 XADM: Issues That Might Occur If You Place Exchange Data Files on
	  Network Shares
	
	Using Storage Devices That Are Windows Hardware Quality Lab Certified with Exchange Server 5.5
	----------------------------------------------------------------------------------------------
	
	You can configure Exchange Server 5.5 to store a database on a networked server
	or network-attached storage (sometimes referred to as NAS) server. Servers that
	you use for this purpose must meet the Exchange Server requirements for data
	write ordering and write-through guarantees that are described below.
	
	Microsoft Windows servers that have received a Windows Hardware Quality Lab
	(WHQL) logo as a PC system or server automatically meet the data write ordering
	and write-through guarantees that are required for support as an Exchange Server
	5.5 storage device.
	
	Using Storage Devices That Are Not Windows Hardware Quality Lab Certified with Exchange Server 5.5
	--------------------------------------------------------------------------------------------------
	
	Storage devices that are not WHQL certified might also work with Exchange Server.
	Check with your storage device vendor to ensure that any storage device has been
	designed for use with the version of Exchange Server that you are using, and
	that you deploy and configure it correctly for Exchange Server database use.
	
	If a customer uses a non-WHQL qualified storage device with Exchange 5.5 Server
	that supports the I/O guarantees for transactional database use described in
	this article, Microsoft will provide full support for Exchange Server and
	Exchange Server-based applications. However, issues with, or caused by, the
	device or its storage subsystem will be referred to the device manufacturer. If
	a customer uses a non-WHQL qualified storage device that does not support the
	I/O guarantees for transactional database use described in this article,
	Microsoft cannot provide support for Exchange Server or Exchange Server-based
	applications. Also, contact your device vendor to verify that you have correctly
	deployed and configured the device for transactional database use.
	
	MORE INFORMATION
	================
	
	A network-attached storage system is a file-based storage system that can be
	attached to an Exchange Server computer through the network redirector by using
	a file sharing protocol (such as server message block [SMB], Common Internet
	File System [CIFS], or network file system [NFS]).
	
	For a given storage system, accessing Exchange Server database files through the
	network stack (as opposed to accessing the storage system as a local device)
	might result in some increased risk of data corruption and performance
	degradation.
	
	The likelihood of such problems increases as disk operations increase in
	input/output (I/O) bandwidth requirements and complexity. The level of risk and
	loss of performance varies by device, protocol, network congestion, and
	configuration. As network bandwidth, latency, data access protocols, and storage
	technologies continue to evolve, the gap continues to shrink between the
	performance and reliability that is attainable with locally attached devices
	versus network-attached devices.
	
	The issues that you must consider when you select a disk system and disk access
	technology for Exchange Server 5.5, or any enterprise-level database management
	system (DBMS), include the following.
	
	Performance
	-----------
	
	Exchange Server, like other enterprise messaging systems, can place an extremely
	large load on the disk I/O subsystem. In most large database applications,
	physical I/O configuration and tuning play a significant role in overall system
	performance. There are three major I/O performance factors to consider:
	
	- I/O bandwidth - The aggregate bandwidth, typically measured in megabytes per
	  second, that can be sustained to a database device.
	
	- I/O latency - The latency, typically measured in milliseconds, between a
	  request for I/O by the database system and the point at which the I/O request
	  completes.
	
	- CPU cost - The host CPU cost, typically measured in CPU microseconds, for the
	  database system to complete a single I/O.
	
	Any of these I/O factors can become a bottleneck, and all of these factors must
	be considered when designing an I/O system for a database application.
	
	If disk I/O is processed through the client network stack, the I/O is subject to
	the bandwidth limitations of the network itself. Even when overall bandwidth is
	sufficient, there may be issues of greater latency and increased processing
	demands on the CPU, as compared to locally attached storage. Additionally the
	availability of the network-attached storage should be considered when planning
	an Exchange deployment in which the storage is attached via a network. Microsoft
	recommends you protect the Exchange Server, the storage system, and the
	connecting network with a UPS.
	
	Microsoft recommends that you consult your vendor before you deploy any storage
	solution for Exchange Server databases, to obtain assurance that the end-to-end
	solution is designed for Exchange Server use. Many vendors have best practices
	guides for Exchange Server.
	
	Microsoft also recommends that you benchmark your I/O performance to ensure that
	none of the I/O factors that are described earlier are causing system
	bottlenecks.
	
	Reliability
	-----------
	
	Exchange Server employs a transaction log and associated recovery logic to ensure
	database consistency if a system failure or an unmanaged shutdown occurs. When
	the database manager writes to its transaction logs, the database manager must
	depend on the return of a successful completion code from the operating system
	as a guarantee that the data has been secured to disk, not just to a volatile
	cache that will be lost if there is a system failure. If data guarantees, such
	as write ordering or write-through, are not completely honored by the system,
	then hardware, software, or even power failures might seriously compromise data
	integrity.
	
	In addition, the limits of recoverability are determined by the ability of the
	disk system to ensure that data written to the disk is stored and retrieved
	reliably. Disk systems that can detect imminent failures and salvage or relocate
	affected data are recommended for use with Exchange Server.
	
	Microsoft continues to work with other vendors to identify and resolve problems
	that affect the integrity and recoverability of Exchange Server data. Exchange
	Server includes several internal mechanisms for detecting and isolating
	file-level damage to an Exchange Server database.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q314917 XADM: Understanding and Analyzing Exchange Database Errors -1018,
	  -1019 and -1022
	
	Special Application Requirements
	--------------------------------
	
	The list of requirements for Exchange Server that this section describes is not
	an exhaustive list. Please refer to the vendor documentation and Microsoft
	deployment guides for more comprehensive and up-to-date information.
	
	Backup and Restoration:
	
	The Exchange Server online backup API automatically synchronizes and gathers the
	Exchange Server database and transaction log file data that is required for
	successful restoration. For fault tolerance and performance reasons, Exchange
	Server transaction logs are typically stored on drives that are separate from
	the database files.
	
	Online backup of Exchange Server databases occurs through the same channel as
	normal database access. If this access is across the network, backup and
	restoration operations might greatly increase peak bandwidth requirements.
	
	Several network-attached storage and SAN solution providers have bypassed the
	Exchange Server online backup API to provide specialized out-of-band or very
	rapid backup and restoration functionality. These backups are known generically
	as "snapshot" backups. At the time of this article's publication, vendors that
	implement custom snapshot solutions must ensure independently that they back up
	and synchronize all of the appropriate Exchange Server data files, and that they
	capture those data files in the correct state. These processes might cause
	issues with the reliability and consistency of the databases. For additional
	information about how to ensure that such issues do not occur, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q237767 XADM: Understanding Offline and Snapshot Backups
	
	Knowledge Base article Q237767 describes issues that are associated with snapshot
	backup solutions and provides links to more detailed information. Vendors that
	implement this approach must confirm their ability to ensure that all data
	integrity is maintained.
	
	Clustering:
	
	Microsoft requires that storage systems for Exchange 2000 data on clustered
	servers be certified for cluster implementations and designed to support
	Exchange 2000 data. A storage system that performs well with Exchange 2000 in a
	non-cluster environment may not be suitable for use in a cluster. Exchange 2000
	cluster deployments on non HCL hardware are not supported, regardless if the
	storage meets the rest of the qualifications outlined in this article for
	Network Attached Storage.
	
	Exchange 2000 requires that messaging databases be stored on storage volumes that
	are recognized and registered with the Microsoft Cluster service cluster
	administrator.
	
	Supportability:
	
	Incorrect use of Exchange Server software with a network-attached storage product
	might result in data loss, including total database loss. If data guarantees,
	such as write ordering or write-through, are not completely honored by the
	network-attached storage device or network software, then hardware, software, or
	even power failures might seriously compromise data integrity.
	
	Microsoft recommends that you consult your vendor before you deploy any storage
	solution for Exchange Server databases, to obtain assurance that the end-to-end
	solution is designed for Exchange Server use. Many vendors have best practices
	guides for Exchange.
	
	Additional query words: NTAP Network Appliance Filer Compaq SANWorks Virtual Replicator SWVR EVM EMC Timefinder Symmetrix IBM Shark Hitachi HDS ShadowImage recovery restore exch2kp2w MSCS nas
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
