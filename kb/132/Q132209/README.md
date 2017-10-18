---
layout: page
title: "Q132209: PC WSPlus: Viewing Free/Busy on Remote Postoffice Via Async"
permalink: kb/132/Q132209/
---

## Q132209: PC WSPlus: Viewing Free/Busy on Remote Postoffice Via Async

	Article: Q132209
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Schedule+, you can View Free/Busy times on a remote postoffice via modem or
	an asynchronous connection if the Schedule Distribution program (SCHDIST.EXE) is
	used on both sides of the asynchronous connection.
	
	MORE INFORMATION
	================
	
	SCHDIST.EXE processes the Free/Busy information into .POF files. SCHDIST.EXE
	then prepares the .POF files for distribution as it converts them into
	attachments within Mail messages. The External Mail program (EXTERNAL.EXE) is
	then responsible for delivering the messages to the other postoffices.
	
	If users on a postoffice are defined via the External-Admin option of the Mail
	Administrator program (ADMIN.EXE) as direct (or indirect) via modem, the
	following access privileges do not work:
	
	- View Free/Busy times with dynamic connections.
	
	- Access privileges of Read Appointments and Tasks or higher.
	
	These access privileges require a persistent network connection.
	
	
	Additional query words: schedule plus 1.00 1.00a async modify create assistant
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
