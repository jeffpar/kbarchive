---
layout: page
title: "Q182308: Postoffice Improperly Serialized When Disk 1 Not Serialized"
permalink: kb/182/Q182308/
---

## Q182308: Postoffice Improperly Serialized When Disk 1 Not Serialized

	Article: Q182308
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Select CD to create a set of Microsoft Mail for PC Networks
	installation disks results in the creation of an improperly serialized
	postoffice.
	
	CAUSE
	=====
	
	Disk #1 of the installation set was not properly serialized using the Microsoft
	Mail Post Office Serialization utility included with the Select welcome kit.
	
	RESOLUTION
	==========
	
	To resolve this problem, serialize disk #1 using the Serializer program
	(Serial.exe) installed on a hard disk drive from the disk. Then reinstall the
	postoffice.
	
	STATUS
	======
	
	This is by design.
	
	MORE INFORMATION
	================
	
	In order to serialize an MS Mail (PC) installation created from the Select CD
	media, the user must install the serialization disk on a hard disk drive and
	then run the program Serial.exe from that hard disk. Creation of unique and
	rebuildable postoffices requires each MS Mail (PC) installation set to have a
	separate, serialized disk #1.
	
	Specific instructions on the use of the Serializer utility are contained in
	Chapter 2, Exceptions to Standard Installations, of the Microsoft Select CD- ROM
	Kit User's Guide, which is shipped to the user each month as a part of the
	Select Update Kit. The following Caution is taken from the Select CD
	documentation:
	
	CAUTION: You must install the Serializer program on a local hard disk. Do not
	install the Serializer program on a network drive or path, on a RAM drive, or a
	virtual drive. Attempting to install the Serializer program on a network drive
	or path will result in incorrect Serializer operation and loss of serial number
	range.
	
	Also see Microsoft Knowledge Base article Q182309, "How to Use the Microsoft Mail
	for PC Networks Serializer."
	
	REFERENCES
	==========
	
	Chapter 2, Exceptions to Standard Installations, Microsoft Select CD-ROM Kit
	User's Guide.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	Issue type        : kbprb
	
	=============================================================================
	
