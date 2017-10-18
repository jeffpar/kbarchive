---
layout: page
title: "Q199160: Performance Tuning Wins and DHCP"
permalink: kb/199/Q199160/
---

## Q199160: Performance Tuning Wins and DHCP

	Article: Q199160
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The Microsoft Windows NT Windows Internet Name Service (WINS) and Dynamic Host
	Configuration Protocol (DHCP) services are usually limited in performance by the
	disk subsystems that hold their databases. This article discusses how to improve
	the performance of these services.
	
	MORE INFORMATION
	================
	
	The Microsoft WINS and DHCP service use the Microsoft Jet database engine. The
	Jet database engine is a high performance system that provides reliable
	transaction processing by confirming to WINS or DHCP that it has positively
	written data to disk. This requires a mechanical operation to be performed and
	confirmed for each database operation. If the database is flooded with
	transactions, the performance of the service will be blocked while waiting for
	the confirmation of disk writes. Therefore, highest performances can only be
	achieved using a high performance hard disk subsystem.
	
	When selecting a disk subsystem, these general rules should be followed:
	
	- SCSI is preferable to IDE.
	
	- Fast wide SCSI is preferable to narrow/standard SCSI.
	
	- RAID level 5 is preferable to a single disk.
	
	- A hardware-based RAID controller is preferable to software RAID.
	
	- More spindles are preferred over fewer spindles, to distribute writes.
	
	- A caching disk controller is preferable to a noncaching controller, but a
	  caching controller must have a battery backup to ensure data integrity.
	
	In all cases, Microsoft recommends consulting the Windows NT Hardware
	Compatibility List (HCL) for computers and subsystems that are certified to run
	with Windows NT.
	
	It is important to stress that a caching controller must have a battery backup,
	because not having one creates the possibility that a controller will confirm to
	the file system that it has successfully written to disk without the write being
	performed. If there is a loss of power or other catastrophic failure, the
	transaction may be lost. Caching controllers with battery backup will commit
	cached transaction to disk when the disk subsystem is restarted, allowing the
	database to be consistent with transactions that have been confirmed.
	
	Another optimization that is available to WINS, but currently not to DHCP, is the
	manual configuration of a log file path. As a performance optimization, the Jet
	database engine quickly writes transaction log files to disk that are then later
	written (committed) to the main database file when time permits. By configuring
	the log file path to a different disk subsystem than the main database file,
	further optimization can be achieved.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The logfile path is configured in the Windows NT registry under the following
	key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Wins 
	  \Parameters\LogFilePath
	
	  Data Type: REG_SZ or REG_EXPAND_SZ
	  Range: Directory
	  Default: %SystemRoot%\System32\WINS
	
	This key should only be configured if the specified log file path points to a
	directory on a high performance subsystem, as writing to log files is usually
	the bottleneck in Wins server performance.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q188027 Performance, Audit Logging, and Fixes to the DHCP Service
	
	  Q184693 DNS/DHCP/WINS Release Notes for Windows NT 4.0 SP4 Update
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbwin2000AdvServ kbwin2000DataServ kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbWinAdvServSearch kbWinDataServSearch kbWinNT400search kbwin2000AdvServSearch kbwin2000DataServSearch kbWinNTS400 kbwin2000Search
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
