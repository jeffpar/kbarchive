---
layout: page
title: "Q150612: Deleting the Schedule+ Data From the Exchange Server"
permalink: /kb/150/Q150612/
---

## Q150612: Deleting the Schedule+ Data From the Exchange Server

	Article: Q150612
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 4.0,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Microsoft Exchange clients for Windows, it might become necessary
	to delete the Microsoft Schedule+ information for your mailbox from the
	Microsoft Exchange Server. This article describes the steps required to perform
	this operation.
	
	CREATING A BACKUP OF YOUR SCHEDULE
	----------------------------------
	
	Before deleting your schedule, you may want to save your schedule data to a text
	file. This can be done by exporting the data to the Schedule+ Interchange (.SC2)
	format.
	
	1. Select File/Export/Schedule+ Interchange.
	
	2. Choose the path and filename of the export file.
	
	3. Select any other options and press OK.
	
	If problems occur while clearing your schedule, you can import the .SC2 file to
	restore your original schedule information.
	
	DELETING THE SCHEDULE+ DATA
	---------------------------
	
	1. Start the Microsoft Schedule+ client while holding down the CTRL and SHIFT
	  keys.
	
	2. You will receive the dialog box:
	
	  You have launched Schedule+ with the CTRL and SHIFT keys held down.
	
	  If you continue, Schedule+ will clear your schedule data. A backup copy of the
	  data will be saved in your Windows directory.
	
	  Are you sure you want to clear your schedule data?
	
	3. Choose YES to continue with the operation.
	
	This will cause a backup file, _schd01.bak to appear in your Windows directory.
	
	If you do not see the warning dialog box, then Schedule+ did not recognize that
	the keys Ctrl + Shift were being pressed. Try launching Schedule+ by double
	clicking on the file SCHDPLS32.EXE while simultaneously pressing the Control and
	Shift keys.
	
	NOTE: There cannot be an existing session opened by either Microsoft Exchange or
	Microsoft Schedule+. If there is an open session, the CTRL+SHIFT has no effect
	when starting Microsoft Schedule+.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : :4.0,7.0
	
	=============================================================================
	
