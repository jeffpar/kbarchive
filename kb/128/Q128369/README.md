---
layout: page
title: "Q128369: PC WSPlus: Duplicate Appointments in Calendar (.CAL) File"
permalink: kb/128/Q128369/
---

## Q128369: PC WSPlus: Duplicate Appointments in Calendar (.CAL) File

	Article: Q128369
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2002
	
	1.00 1.00a
	WINDOWS
	kbother kbtshoot
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Duplicate appointments may start appear in the Schedule+ user's calendar file.
	This can occur in both the Server calendar file (MAILDATA\CAL\HEXID.CAL) or
	Off-Line calendar file (LocalPath=C:\<path>\USERNAME.CAL parameter in the
	SCHDPLUS.INI file).
	
	RESOLUTION
	==========
	
	1. From the Windows directory, open the user's SCHDPLUS.INI file.
	
	2. Under the [Microsoft Schedule+] heading, add the following line:
	
	  StartupOffline=1
	
	3. Save the changes and close the SCHDPLUS.INI file.
	
	4. Start Schedule+.
	
	
	5. Delete the duplicate appointments from the local file.
	
	6. From the File menu, select Export Appointments. Export the user's calendar
	  file information into a USERNAME.SCH file.
	
	7. Delete or rename the user's local (C:\<path>\username.cal) and Server's
	  MAILDATA\CAL\HEXID.CAL calendar copies.
	
	
	NOTE: A user's online calendar file is not named with the same eight- digit ID
	number as the user's mail message file (.MMF), nor is it named with the user's
	name for security reasons. You can use either the MVCAL or the DUMPKEY utility
	to locate a specific user's online calendar file.
	
	Using MVCAL.EXE
	---------------
	
	This utility will find the calendar file for the user name specified, and rename
	it to <username>.BAD. After the calendar file is renamed, a new file will
	be created the next time the user signs in. This new calendar file will be
	created from the user's local calendar file.
	
	To use this utility, from where MVCAL.EXE is stored, type:
	
	  "mvcal <username> [-d<drive> -p<password>]" (without the
	  quotation marks)
	
	where:
	
	  <username> is the user with the corrupt calendar file.
	
	  <drive> is the path to the Mail database (the default is M).
	
	  <password> is the password for the Schedule+ Administrator (not the Mail
	  Administrator).
	
	Using DUMPKEY.EXE
	-----------------
	
	To use this utility, use the following MS-DOS command to copy the DUMPKEY.EXE
	file to the CAL directory of the postoffice (this assumes that the Mail database
	is located on drive M):
	
	copy dumpkey.exe m:\cal\dumpkey.exe
	
	From the MAILDATA\CAL directory, type:
	
	  dumpkey schedule.key > calfiles.txt
	
	(This will redirect the output to a file called CALFILES.TXT for easy viewing.)
	
	1. Have the user login to Schedule+. This will create new server and local
	  calendar files.
	
	2. From the File menu, select Import Appointments. Import the appointments from
	  the USERNAME.SCH file created in step 6.
	
	MORE INFORMATION
	================
	
	
	When a user makes a change to the local calendar file, the change is copied to
	the user's calendar file on the server when logging onto the server during the
	synchronization process. The complete server calendar file is then copied down
	to the local file.
	
	NOTE: If the users manually copy the local file up to the server, the calendar
	file synchronization process can get into an endless loop, starting the
	duplication of appointments.
	
	If the network operating system is Novell, ensure that users have FileScan rights
	to MAILDATA\CAL. For additional information, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q103901 PC Adm: Minimum NetWare Trustee Assignments for Mail Database
	
	Additional query words: schedule plus 1.00 1.00a duplicate appointment
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : :1.0,1.0a
	
	=============================================================================
	
