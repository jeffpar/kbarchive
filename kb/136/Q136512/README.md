---
layout: page
title: "Q136512: PC WRmt: System Selector Not Display Installed Mail Options"
permalink: kb/136/Q136512/
---

## Q136512: PC WRmt: System Selector Not Display Installed Mail Options

	Article: Q136512
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail System Selector (MAILDRV.EXE) may not display all options for
	installed Mail drivers when you want to choose between Microsoft Mail for PC
	Networks and Microsoft Mail Remote. One of these options may not be available.
	
	CAUSE
	=====
	
	One of the following entries is not correct in the MSMAILPV.INI file.
	
	  [Current]
	  PABID=PAB
	  Transport=Microsoft Mail for PC Networks
	
	NOTE: This entry can also contain Microsoft Mail Remote
	
	  [Transport]
	  MSMAIL=Microsoft Mail for PC Networks
	  ATT=AT&T Mail
	  MSRMT=Microsoft Mail Remote
	
	NOTE: These transport entries should appear in the Installed Mail Drivers text
	box of the Microsoft Mail System Selector.
	
	RESOLUTION
	==========
	
	Verify that the above settings are correct. If they are not correct, add the
	necessary entries.
	
	MORE INFORMATION
	================
	
	If the current driver is Transport=Microsoft Mail for PC Networks, it may also
	be necessary to verify that the MSMAIL.INI file under \WINDOWS\MSMAIL\MSRMT
	contains the following entries or create the file containing:
	
	  [Providers]
	  Name=pabnsp mssfs
	  Logon=mssfs
	  Transport=mssfs
	
	If the current driver is Transport=Microsoft Mail Remote, it may also be
	necessary to verify that the MSMAIL.INI file under \WINDOWS\MSMAIL\MSRMT
	contains the following entries or create the file containing:
	
	  [Providers]
	  Name=pabnsp msrmt
	  Logon=msrmt
	  Transport=msrmt
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
