---
layout: page
title: "Q112457: PC Win: Err Msg: A Disk Error Occurred While Performing..."
permalink: /kb/112/Q112457/
---

## Q112457: PC Win: Err Msg: A Disk Error Occurred While Performing...

	Article: Q112457
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a user selects Mail, Address Book and tries to switch to the Postoffice
	Address List or the Global Address List, the following error message may be
	displayed:
	
	  A disk error occurred while performing the operation
	
	CAUSE
	=====
	
	This error is caused by a locked open address list file (ADMIN.NME or GAL.NME).
	
	RESOLUTION
	==========
	
	If the file is locked open, close the file.
	
	On a Novell Server
	------------------
	
	1. You can determine the status of locked files by starting the RCONSOLE
	  program.
	
	2. Choose the FileOpen/Lock activity.
	
	3. Choose <volume>/<dir>/<subdir>/MASTER.GLB. This will yield
	  a connection number.
	
	4. From Connection Activity, you can determine who has the file open.
	
	On a LAN Manager Server
	-----------------------
	
	1. Check for locked files by running the NET ADMIN command.
	
	2. Select Status, Opened Files.
	
	For Other File Servers
	----------------------
	
	Consult the administrator's guide for that server to determine if a file is
	locked open and by whom.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
