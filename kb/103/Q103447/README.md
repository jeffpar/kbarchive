---
layout: page
title: "Q103447: PC Ext: Home Postoffice Must Be on Direct Drive"
permalink: kb/103/Q103447/
---

## Q103447: PC Ext: Home Postoffice Must Be on Direct Drive

	Article: Q103447
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the External Mail program (EXTERNAL.EXE) is started from version 3.2 of
	Microsoft Mail for PC Networks, the home postoffice must be assigned a direct
	drive.
	
	MORE INFORMATION
	================
	
	There are two stages to running the External Mail program with direct drives:
	
	1. The Mail Administrator physically connects the machine running the External
	  Mail program to the postoffice's directory on a file server.
	
	2. The Mail Administrator runs the External Mail program, specifying the drive
	  letters of the direct connections.
	
	To specify the drive letters of the direct connections, the Mail administrator
	uses one of the following options:
	
	- In External's .INI file:
	
	  DrivesDirectPO=[drive range]
	
	- On the command line when starting External:
	
	  /DrivesDirectPO=[drive range]
	
	-or-
	
	- D[drive range]
	
	By default, the External Mail program assumes that the first letter in the drive
	range is connected to the home postoffice. For example, if the machine running
	External is connected to postoffices on drives M, N, O, and P, then the
	parameter -Dmp tells External that the home postoffice is on drive M. If,
	however, the home postoffice is one of the other drives in the range (O and P in
	this example), then the administrator must specify the drive letter of the home
	postoffice with one of the following options:
	
	- In the .INI file:
	
	  DriveHomePO=<drive>
	
	- On command line:
	
	  /DriveHomePO=<drive>
	
	-or-
	
	- H<drive>
	
	REFERENCES
	==========
	
	See page 35 in the Microsoft Mail "Multitasking MTA Administrator's Guide," and
	page 240 in the Microsoft Mail version 3.2 "Administrator's Guide."
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
