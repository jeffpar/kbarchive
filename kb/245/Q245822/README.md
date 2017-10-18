---
layout: page
title: "Q245822: XGEN: Troubleshooting Exchange w Antivirus Installed"
permalink: kb/245/Q245822/
---

## Q245822: XGEN: Troubleshooting Exchange w Antivirus Installed

	Article: Q245822
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes recommendations for troubleshooting issues on Exchange
	computers that antivirus software is installed on.
	
	MORE INFORMATION
	================
	
	File-Based Antivirus Software
	-----------------------------
	
	You can install file-based scanning antivirus software on an Exchange computer.
	However, never run scanning against the program and database files of an
	Exchange computer.
	
	In addition, never run scanning against the Installable File System (IFS) drive
	(drive M) of an Exchange 2000 server. If you do so, you might receive false
	reports of a virus and you might damage Exchange 2000 databases when you attempt
	to disinfect the file.
	
	In Exchange 2000, drive M is a convenient label for the Exchange IFS. The
	Exchange IFS enables you to view and use the Exchange information store as a
	file system.
	
	NOTE: Drive M can use a letter other than M. This drive is generally referred to
	as drive M; however, if the letter M is already being used, this drive uses
	another drive letter. For additional information about issues that are caused by
	antivirus scanning of drive M, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q299046 XADM: Calendar Items Disappear from User's Folders
	
	  Q298551 XADM: Large Number of Transaction Logs Created
	
	In some situations, you may experience additional issues with the Exchange IFS.
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q305145 XADM: Hiding the IFS Mapping from Windows Explorer
	
	If you need to run a file-based virus scanner on an Exchange computer, remove the
	Exchange-specific files and folders from the scheduled scans and real-time
	scanning. File-based scanning of Exchange 2000 executable files is supported.
	
	IMPORTANT: Never run file-based scanning software against Exchange databases,
	logs, temporary files, the IIS system files, or the IFS drive (drive M).
	Configure antivirus software to avoid scanning the folders that contain these
	files.
	
	You can run file-based antivirus software against the operating system of the
	Exchange computer and against Exchange program files (the Exchsrvr\Bin folder),
	but never run file-based antivirus software against files in the following
	folders:
	
	- Exchange databases and log files (the original location is the
	  Exchsrvr\Mdbdata)
	
	- Exchange MTA files (Exchsrvr\Mtadata)
	
	- Additional log files (Exchsrvr\<server_name>.log)
	
	- Virtual server folder (Exchsrvr\Mailroot)
	
	- Site Replication Service (SRS) files (Exchsrvr\Srsdata)
	
	- Internet Information Service (IIS) system files
	  (%SystemRoot%\System32\Inetsrv)
	
	You can run file-based scanning against the following folders:
	
	- Exchsrvr\Address
	
	- Exchsrvr\Bin
	
	- Exchsrvr\Conndata
	
	- Exchsrvr\Exchweb
	
	- Exchsrvr\Res
	
	- Exchsrvr\Schema
	
	Temporarily disable file-based scanning software during operating system and
	Exchange upgrades; this includes upgrading to new versions of Exchange or the
	operating system, and applying any Exchange or operating system fixes or service
	packs.
	
	When you upgrade an Exchange or operating system product, or apply a service pack
	or fix, it is standard procedure to stop and disable all of the third-party
	services, hardware vendor and operating system monitors, and any agents or
	Exchange monitors before you perform the update or upgrade. Also stop and
	disable any performance monitors, any Microsoft or third-party backup programs,
	and Microsoft Simple Network Management Protocol (SNMP). Then restart the
	Exchange computer before you apply the upgrade or fix. This procedure prevents
	files that the update process needs to access from being locked.
	
	IMPORTANT: This procedure also includes stopping and disabling any antivirus
	programs (including file-based scanning antivirus software) before you upgrade
	any version of Exchange or the operating system and before you apply any
	Exchange or operating system service pack or fix.
	
	Exchange Information Store Scanning Software
	--------------------------------------------
	
	Microsoft provides application programming interfaces (APIs) that give other
	manufacturers the ability to write antivirus programs that scan the information
	store. If this type of software is running on your Exchange computer and you are
	experiencing issues, research the issues and follow normal troubleshooting
	procedures. If these procedures do not resolve the issue, temporarily disable or
	remove the antivirus software to determine whether it is contributing to the
	issue. If the antivirus software is not contributing to the issue, you can
	re-enable the antivirus software.
	
	If the issue stops occurring after you disable or remove the antivirus software,
	contact the manufacturer of the antivirus software for the most recent update.
	If the most recent update of the software does not resolve the issue, continue
	working with the antivirus software manufacturer and Microsoft to pursue a
	resolution to the issue.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q241855 XADM: Information Store Does Not Start with Event ID 145
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words: Third party Norton InocuLAN Scanmail NAI Groupshield Trend
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
