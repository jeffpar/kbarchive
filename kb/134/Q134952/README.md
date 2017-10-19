---
layout: page
title: "Q134952: FFAPI: COURPUT 201: Failure Submitting Message..."
permalink: /kb/134/Q134952/
---

## Q134952: FFAPI: COURPUT 201: Failure Submitting Message...

	Article: Q134952
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The File Format Application Programming Interface (FFAPI) access components
	SNADPUT.EXE and OSNADPUT.EXE, provided to 3rd party vendors, will return the
	following error code of 201 when the program is unable to successfully deliver a
	message to a postoffice.
	
	  COURPUT returned 201
	  201 - 1 - 140 - Failure submitting message to mail database
	
	CAUSE
	=====
	
	The error is returned to the gateway when either SNADPUT.EXE or OSNADPUT.EXE are
	unable to insert the message into the postoffice database.
	
	The 201 error code can be caused by one of the following conditions:
	
	- Network file contention.
	
	- Insufficient disk space on the postoffice database.
	
	- Postoffice directory structure incomplete or corrupt.
	
	- Insufficient access rights granted to gateway machine.
	
	- Insufficient file handles.
	
	- Network problems accessing the postoffice files.
	
	- Corrupt or incorrect format of Microsoft Mail File Format (MMFF) file.
	
	RESOLUTION
	==========
	
	Network File Contention
	-----------------------
	
	SNADPUT.EXE or OSNADPUT.EXE must access certain files to create a message on a
	postoffice. Gateways that service postoffices that receive high volumes of
	message transfers and are serviced by the External program should consider using
	the mailer disabler (-md) parameter on the External command line or in the
	EXTERNAL.INI file.
	
	The files accessed by SNADPUT.EXE or OSNADPUT.EXE with the -md option are:
	ACCESS.GLB, ACCESS2.GLB, MASTER.GLB, C850SORT.GLB, GROUP.GLB, NETWORK.GLB,
	CONTROL.GLB, INQUEUE3.KEY, and INQUEUE3.MBG.
	
	The 201 error has been reproduced by locking the INQUEUE3.MBG file, and this may
	be the most common cause of the error. These files may be locked by other
	processes temporarily while in use. Postoffices located on Novell NetWare
	servers that operate under high traffic conditions should set the postoffice as
	shareable with few exceptions.
	
	There are certain conditions that dictate that the CONTROL.GLB, TID.GLB,
	FLAG.GLB, and MASTER.GLB should only be accessed by one process at a time; thus,
	it should not be shareable.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q99204 Doc Err: Setting Attributes for High Traffic Network
	
	More information can also be found in the versions 3.2 and 3.5 Microsoft Mail for
	PC Networks "Administrator's Guide," page 25.
	
	This problem can be compounded if the other External or Gateway is operating on a
	slow machine or over a slow link. The External option CompatV20 (-v20) will add
	additional file locking functionality. As a result, it increases the amount of
	network overhead and possibly causes additional network file contention.
	Additional network file contention can be created by improperly running the
	External program from a network drive (page 233 of the "Administrator's
	Guide").
	
	Insufficient Disk Space
	-----------------------
	
	Insufficient disk space on the postoffice database will prevent the client from
	enlarging or creating postoffice files. Novell NetWare file servers can produce
	an insufficient disk space response to the program when the files have become
	ownerless or the purge file has used all available disk space.
	
	Postoffice Directory Structure
	------------------------------
	
	The postoffice directory structure should consist of an initial 19 main
	subdirectories.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q77926 Description of Mail Database Subdirectories
	
	Insufficient Access Rights
	--------------------------
	
	The gateway components should be given full network access rights for the
	postoffice.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q103380 File Scan Rights Required for Novell NetWare
	
	  Q117152 MTA Not Report LAN Man User-Level Security Problems
	
	  Q121798 Err Msg: You Do Not Have the Proper Access...
	
	More information can also be found in the versions 3.2 and 3.5 Microsoft Mail for
	PC Networks "Administrator's Guide."
	
	Insufficient File Handles
	-------------------------
	
	Increase the number of file handles to 50 in the CONFIG.SYS file of the MS-DOS
	workstation running the gateway.
	
	Network Problems
	----------------
	
	The SNADPUT.EXE or OSNADPUT.EXE program utilizes the network to effectively
	perform the file commands that create and manipulate each file. Network problems
	that interfere with the operation of these commands can cause the above error to
	occur.
	
	Microsoft Mail File Format (MMFF) file problems
	-----------------------------------------------
	
	Ensure that the MMFF file submitted by the gateway follows either the Basic or
	Extended Message Format for the SNADPUT.EXE or OSNADPUT.EXE program to properly
	convert (definition beginning on page 50 in the FFAPI SDK).
	
	MORE INFORMATION
	================
	
	The error displayed may consist of three numbers separated by a hyphen (-) (201
	- 1 - 140). The error code number 201 signifies that the error occurred when it
	attempts to insert the message into the database. The 1 can signify the number
	of messages sent per socket connection. The second number will rarely exceed 2.
	The last number refers to the line number of the message indicated by the second
	number. The last number is only valid if the problem was created by a corrupt or
	incorrectly formatted MMFF file.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.0
	
	=============================================================================
	
