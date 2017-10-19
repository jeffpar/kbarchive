---
layout: page
title: "Q87221: PROFS: Where Incoming/Outgoing Mail Files Are Stored"
permalink: /kb/087/Q87221/
---

## Q87221: PROFS: Where Incoming/Outgoing Mail Files Are Stored

	Article: Q87221
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For all mail exchanged between the LAN and host by means of the Microsoft Mail
	Gateway to IBM PROFS and OfficeVision, temporary files are created in the VMGATE
	directory of the mail system database.
	
	For LAN mail going to the host, HostDisp (or VMGATE) extracts mail items and
	places them in a file called CSIOUT.DAT. When the program is ready to transfer
	these messages to the host, it copies CSIOUT.DAT to PROFSIN.DAT. The PROFSIN.DAT
	file is then used by the 3270 emulator's SEND program to transfer the messages
	to the gateway VM ID's 191 "A" disk.
	
	For host mail coming into the LAN, the 3270 emulator's RECEIVE program creates a
	file called PROFSOUT.DAT in the VMGATE directory. This file is immediately
	copied to CSIIN.DAT by the HostDisp (or VMGATE) program. When HostDisp is ready
	to insert this mail into the database, it creates a temporary work file called
	CSIWORK.DAT.
	
	All of the files mentioned above are deleted if the mail transfer is successful.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan mail exchange files
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	
