---
layout: page
title: "Q182309: How to Use the Microsoft Mail for PC Networks Serializer"
permalink: /kb/182/Q182309/
---

## Q182309: How to Use the Microsoft Mail for PC Networks Serializer

	Article: Q182309
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Microsoft Mail Post Office Serialization
	utility in conjunction with the Microsoft Select CD Program.
	
	MORE INFORMATION
	================
	
	The Serializer utility must be installed from the disk on which it is furnished
	to a hard disk. The following Caution is taken from the Select CD
	documentation:
	
	CAUTION: You must install the Serializer program on a local hard disk. Do not
	install the Serializer program on a network drive or path, on a RAM drive, or on
	a virtual drive. Attempting to install the Serializer program on a network drive
	or path will result in incorrect Serializer operation and loss of serial number
	range.
	
	To install the Serial.exe program on a hard disk:
	
	1. Place the disk in drive A.
	
	2. At the MS-DOS prompt for the disk drive, type SERIAL and press ENTER.
	
	3. Select Install/Uninstall Serializer to Another Location by pressing the UP or
	  DOWN arrow keys, and then press ENTER. A Serializer message appears, warning
	  that the copy of Serial.exe in the current location will be deleted and
	  prompting you as to whether you want to continue.
	
	4. Type "Y" (without the quotation marks) and press ENTER.
	
	5. Type the complete path to the new location, including the drive letter. This
	  location must already exist. The Serial.exe program will not create
	  subdirectories. The program copies itself to the specified location and
	  deletes the old copy.
	
	6. To exit Serial.exe, press ENTER or ESC on the main menu.
	
	To uninstall the Serial.exe program from the hard disk, use the same procedure,
	substituting the hard drive location in step 1 above and entering A:\ for the
	new path location (step 5).
	
	To serialize an MS Mail (PC) disk created using the Select CD program, do the
	following:
	
	1. Create disk #1 from the Select CD user interface.
	
	2. Exit Windows completely and start the computer in the MS-DOS mode.
	
	3. Change the hard disk drive location to the place where the Serial.exe program
	  was stored.
	
	4. Type "Serial" (without the quotation marks) at the MS-DOS prompt and press
	  ENTER.
	
	5. Select Serialize Setup Diskette using the UP and DOWN arrow keys and press
	  ENTER.
	
	6. Type the letter of the drive that contains the Server 1 Setup disk to be
	  serialized and press ENTER. The Serializer program asks whether you want to
	  reserialize the disk. An unserialized copy of the Server 1 disk contains a
	  serial number placeholder that the Serializer program replaces with a usable
	  serial number.
	
	7. Type "Y" (without the quotation marks) and press ENTER. The disk is
	  serialized and a message displays to the serial number that is used.
	
	8. Note the serial number in a permanent location, such as on the disk label.
	  You need to provide the serial number to postoffice administrators. They can
	  configure other postoffices to communicate with the postoffice you install
	  from the disk.
	
	9. Press ENTER.
	
	10. To exit Serial.exe, press ESC on the main menu.
	
	REFERENCES
	==========
	
	Microsoft Select CD-ROM Kit User's Guide, Chapter 2, Exceptions to Standard
	Installations.
	
	Also see Microsoft Knowledge Base article Q182308, "Postoffice Improperly
	Serialized When Disk 1 Not Serialized."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	Issue type        : kbhowto
	
	=============================================================================
	
