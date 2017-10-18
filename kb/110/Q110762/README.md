---
layout: page
title: "Q110762: PC Gen: README.TXT: Mail 3.2 Serializer Utility"
permalink: kb/110/Q110762/
---

## Q110762: PC Gen: README.TXT: Mail 3.2 Serializer Utility

	Article: Q110762
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Serializer Utility, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Serializer utility is only available from the
	Microsoft Select CD. The following is the text of the README.TXT file included
	with the Serializer utility.
	
	README
	------
	
	Microsoft Mail Version 3.2 Serializer Utility
	---------------------------------------------
	
	This README describes the Microsoft Mail version 3.2 Serializer utility and how
	you use it. This entire file must be read prior to using the Serializer.
	
	Installation Notes
	------------------
	
	The Serializer should NOT be installed to ANY network drive or path. Installation
	is supported only on local drives on the machine in which the Serializer
	diskette is placed and run from. Attempting to install the Serializer to a
	network drive or path will result in incorrect Serializer operation and loss of
	serial number range.
	
	The Serializer should not be installed on a RAM drive or virtual drive.
	
	What is the Serializer?
	-----------------------
	
	The Serializer utility allows you to create unique Microsoft Mail version 3.2
	Setup disks from the disks created by the Select CD process. Serialization
	ensures that each postoffice has a unique serial number, which is required for
	proper operation of Microsoft. Each Serializer contains a unique set of serial
	numbers that it uses to validate the disks you create. Each serial number in the
	set is used only once. When all serial numbers have been used, the Serializer
	expires.
	
	When Should You Use the Serializer?
	-----------------------------------
	
	Microsoft Mail version 3.2 Setup disks created from Select CDs dated August 1993
	and later will not install without prior serialization. Only copies of Server
	Disk 1 (the Mail Setup disk) require serialization; no other Microsoft Mail
	disks require serialization.
	
	Supplied Files
	--------------
	
	SERIAL.EXE is the MS-DOS based Serializer program that allows creation of unique
	Mail Setup disks. It is the only file supplied.
	
	Using the Serializer
	--------------------
	
	1. Before you use the Serializer, first create the Mail Setup disk(s) you will
	  need by copying the Server Disk 1 files from the Select CD to a floppy disk
	  using the Select CD disk creation utility, SELECT.EXE.
	
	2. Run SERIAL.EXE.
	
	  SERIAL.EXE displays three options:
	
	   - Serialize Setup Diskette
	
	   - View Next Serial Number to Be Used
	
	   - Install/Uninstall Serializer to Another Location
	
	  The three options are described in the following section.
	
	  Serialize Setup Diskette prompts you for the drive that contains the Mail
	  Setup disk to be serialized, and then serializes the disk. If the disk has
	  already been serialized, you have the option to reserialize the disk with a
	  new serial number.
	
	  View Next Serial Number to Be Used displays the next unique serial number that
	  will be used by the Serializer the next time a serialization is performed. It
	  also displays the last serial number available in the set.
	
	  Install/Uninstall Serializer to Another Location allows you to move the
	  Serializer to a specified location. With this option, the Serializer will
	  copy itself to the specified location and delete the old copy. The first time
	  you run the Serializer, you must run it from the floppy disk. The only option
	  available will be to move the Serializer to another location. Once this is
	  done, the Serializer may be run from the new location and all options will be
	  available.
	
	  * See Installation Notes above.
	
	3. To exit the Serializer utility, from the main menu, press the ESC key.
	
	Maintaining a Unique Copy of the Serializer
	-------------------------------------------
	
	  CAUTION: If the Serializer is copied or modified by any means other than the
	  menu option described in the preceding section, Microsoft cannot ensure that
	  the serial numbers are unique. This includes copies for backup purposes. To
	  assist in maintaining uniqueness, the Serializer will run only from the
	  directory in which it is installed, and copied versions will not run from
	  different directories.
	
	Each Serializer is unique, since the set of serial numbers it contains is unique.
	You must make sure that there is only one valid copy of the Serializer and that
	this copy is not accidentally deleted. After the Serializer has used each of its
	serial numbers, it will expire and will no longer be able to run. At that time,
	you can delete the Serializer.
	
	Backing up the Serializer and Mail Setup Disk
	---------------------------------------------
	
	You should install the single valid copy of the Serializer on a secure drive that
	is backed up daily to ensure ease of recovery in the event of hardware failure
	and subsequent data loss.
	
	You should store each serialized Mail Setup disk in a secure location with a
	clearly marked serial number to ensure ease of recovery from hardware failure.
	
	Additional query words: 3.20 selectcd MS Select MSSelect
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailSerializer320
	Version           : :3.2
	
	=============================================================================
	
