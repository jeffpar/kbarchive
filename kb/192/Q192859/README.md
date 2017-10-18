---
layout: page
title: "Q192859: SMS: SMS 1.2 SP4 Includes SMSIDDUP, DATDUPC, and DATDUPCL"
permalink: kb/192/Q192859/
---

## Q192859: SMS: SMS 1.2 SP4 Includes SMSIDDUP, DATDUPC, and DATDUPCL

	Article: Q192859
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server version 1.2 Service Pack 4 includes the
	following three utilities to help resolve specific database issues:
	
	- SMSIDDUP: Duplicate SMSID Locator
	
	- DATDUPCK: Duplicate Data Key Checker
	
	- DATDUPCL: Duplicate Data Key Cleaner
	
	This article describes these utilities and their application.
	
	
	MORE INFORMATION
	================
	
	These utilities are located in the Support\Debug\<platform> directory of
	the Systems Management Server 1.2 Service Pack 4 source.
	
	SMSIDDUP: Duplicate SMSID Locator
	---------------------------------
	
	The duplicate SMSID locator generates a report, called Smsiddup.log, that
	contains computers that have duplicate SMSIDs.
	
	Usage:
	
	     SMSIDDUP <sql_server_name> <sql_login> <sql_password> <sms_database>
	
	NOTE: If <sql_password> is NULL, use double quotation marks for the
	password field, as in the following example:
	
	     SMSIDDUP SERVER sa "" SMSDB
	
	Alternatively, for interactive operation, you can use:
	
	     SMSIDDUP
	
	Requirements:
	
	SMSIDDUP requires that the SQL Server for Systems Management Server is running
	Microsoft SQL Server 6.5 Service Pack 3 or later. You should run SMSIDDUP from a
	computer that has the Systems Management Server Administrator program installed
	and functioning properly, to ensure that all required DLL files are available.
	
	Additional Information:
	
	In Systems Management Server, it is possible to have two different types of
	duplicates. The Systems Management Server Database Manager will locate first
	type of duplicate. Querying on this type duplicate in the Systems Management
	Server Administrator program will produce multiple records.
	
	However, the Systems Management Server Database Manager will NOT locate the
	second type of SMSID duplicate. In this situation, the data for a given machine
	in the current machine data table refers to a single machine. When a different
	machine using the same SMSID is inserted into the database, Systems Management
	Server moves the "old" machine data to the historical machine data table. In
	this case, Systems Management Server is not "aware" that there is more than one
	machine using the SMSID. Querying on the SMSID in the Systems Management Server
	Administrator program will produce a single record. Viewing the history for the
	Identification group in this record will show that the machine name changes
	frequently (the machine name does not actually change; multiple machines
	actually report using different names).
	
	SMSIDDUP locates this second type of SMSID duplicates. These duplicates can cause
	the Systems Management Server Dataloader to process machine MIF files very
	slowly or to stop responding. These duplicates may also lead to database
	corruption. This second type of SMSID duplicates are commonly the result of
	having a "cloned" Sms.ini file present (that is, an image install of a computer
	was done with an existing Sms.ini file in the image).
	
	To assist in cleaning up the second type of SMSID duplicates, SMSIDDUP produces a
	report containing the SMSID, site code, machine name, domain, and the Last
	Hardware Scan time from any of the second type of SMSID duplicates. You should
	delete these machines from the SMS database, and also delete their Sms.ini
	files. After deleting the machines from the database and also deleting their
	associated Sms.ini files, you can reinventory these machines, and they will be
	assigned a new unique SMSID. As history and unused common/specific records are
	removed from the database, remnants of the second type of duplicates will be
	removed. If the Sms.ini files on these clients are not deleted and the machines
	are simply deleted from the database, they will reappear in the database after
	their next inventory, and you must repeat the cleanup process. To completely
	eliminate this problem, the Sms.ini file on the client must be deleted.
	
	DATDUPCK: Duplicate Data Key Checker
	------------------------------------
	
	The duplicate data key checker generates a report, called Datdupck.log, that
	lists rows in the SMS database with duplicate datakey values.
	
	Usage:
	
	     DATDUPCK <sql_server_name> <sql_login> <sql_password> <sms_database>
	
	Alternatively, for interactive operation, you can use:
	
	     DATDUPCK
	
	Requirements:
	
	DATDUPCK requires that the SQL Server for Systems Management Server is running
	Microsoft SQL Server 6.5 Service Pack 3 or later. You should run DATDUPCK from a
	computer that has the Systems Management Server Administrator program installed
	and functioning properly, to ensure that all required DLL files are available.
	
	Additional Information:
	
	When using Systems Management Server 1.2 Service Pack 2 or earlier to attach
	sites to one another, it is possible for information in the SMS database to be
	duplicated incorrectly. Symptoms of this may appear in data that is stored as
	COMMON rather than SPECIFIC according to the DMTF specifications. Examples of
	this would be in the PC_BIOS or Disk data, although any COMMON storage may be
	affected. Symptoms may be displayed as a duplicate drive C or no drive A for
	certain systems. Other symptoms may exhibit themselves as well, depending on the
	state of the child and parent databases before the site attachment.
	
	For more information, see the following article in the Microsoft Knowledge Base:
	
	  Q168565 SMS: Child Site Attachment May Result in Incorrect Inventory
	
	DATDUPCL: Duplicate Data Key Cleaner
	------------------------------------
	
	The duplicate data key cleaner cleans duplicate datakey inventory from the
	database.
	
	Usage:
	
	     DATDUPCL <sql_server_name> <sql_login> <sql_password> <sms_database>
	
	Alternatively, for interactive operation, you can use:
	
	     DATDUPCL
	
	Requirements:
	
	DATDUPCL requires that the SQL Server for Systems Management Server is running
	Microsoft SQL Server 6.5 Service Pack 3 or later. You should run DATDUPCL from a
	computer that has the Systems Management Server Administrator program installed
	and functioning properly, to ensure that all required DLL files are available.
	
	Additional Information:
	
	The SMS database should be in single user mode, to ensure that no users or SMS
	services are accessing the database at the time DATDUPCL runs. You should make
	sure that all SMS services are stopped and no Systems Management Server
	Administrator consoles are running against the database while DATDUPCL runs.
	
	WARNING: DATDUPCL modifies the SMS database. Before using DATDUPCL, execute these
	DBCC commands from ISQL/W or the SQL Enterprise Manager:
	
	     dbcc checkdb
	     dbcc newalloc
	
	Refer to the "Examining the Error Log and DBCC Output" topic in the SQL Server
	Books Online and verify that there are no errors. If any errors are returned, do
	NOT execute DATDUPCL. Instead, contact Microsoft Product Support Services (PSS).
	If no errors are returned, perform a dump of the SMS database and then proceed.
	
	Depending on the number of duplicate datakey entries, DATDUPCL can delete a large
	amount of information from your SMS database. It is necessary to delete this
	information to clean the duplicate datakeys; the information will be reported by
	means of hardware and software inventory at the next inventory interval. Because
	DATDUPCL can delete a large amount of information, you must ensure that your SMS
	database log size and tempdb size are sufficient. The following are some good
	guidelines for these sizes:
	
	     Tempdb size  = (SMS database size * .25)
	     SMS log size = (SMS database size * .35)
	
	Additional query words: prodsms sp sp4 sp3 sp2 data loader datalodr dataldr hang hangs hung sitecode
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbinfo
	
	=============================================================================
	
