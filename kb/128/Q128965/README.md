---
layout: page
title: "Q128965: PC WSPlus: Compressing Schedule+ Calendar Files"
permalink: /kb/128/Q128965/
---

## Q128965: PC WSPlus: Compressing Schedule+ Calendar Files

{% raw %}

	Article: Q128965
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Schedule+ for Windows, versions 1.0 and 1.0a, does not have any
	auto-compression capabilities for the user's calendar files. Schedule+ will
	overwrite into unused areas within the calendar file. This allows the
	application to keep the file minimal in size, only increasing the file size when
	more file space is required.
	
	MORE INFORMATION
	================
	
	To compress the user's calendar files, follow the procedures below.
	
	NOTE: Please read all the procedures prior to performing these procedures.
	
	
	1. From the Windows directory, open the user's SCHDPLUS.INI file.
	
	2. Under the [Microsoft Schedule+] heading, add the following line:
	
	  StartupOffline=1
	
	3. Save the changes and close the SCHDPLUS.INI file.
	
	4. Start Schedule+.
	
	
	5. From the File menu, choose Export Appointments. Export the user's calendar
	  file information into a USERNAME.SCH file using the Schedule+ format.
	
	6. Delete or Rename the user's local (C:\<PATH>\USERNAME.CAL) and server's
	  MAILDATA\CAL\HEXID.CAL calendar copies.
	
	
	A user's online calendar file is not named with the same eight-digit ID number as
	the user's mail message file (.MMF), nor is it named with the user's name for
	security reasons. You can use either the MVCAL or the DUMPKEY utility to locate
	a specific user's online calendar file.
	
	MVCAL.EXE
	---------
	
	This utility will find the calendar file for the user name specified, and rename
	it <username>.BAD. After the calendar file is renamed, a new file will be
	created the next time the user signs in. This new calendar file will be created
	from the user's local calendar file.
	
	To use this utility, from where MVCAL.EXE is stored, type:
	
	  mvcal <username> [-d<drive> -p<password>]
	
	where,
	
	  <username> is the user with the corrupt calendar file.
	
	  <drive> is the path to the Mail database (the default is M).
	
	  <password> is the password for the Schedule+ Administrator (not the Mail
	  Administrator).
	
	DUMPKEY.EXE
	-----------
	
	To use this utility, use the following MS-DOS command to copy the DUMPKEY.EXE
	file to the CAL directory of the postoffice (this assumes that the Mail database
	is located on drive M):
	
	  copy dumpkey.exe m:\cal\dumpkey.exe
	
	From the MAILDATA\CAL directory, type:
	
	  dumpkey schedule.key > calfiles.txt
	
	(This will redirect the output to a file called CALFILES.TXT for easy viewing.)
	
	1. Have the user login to Schedule+. This will create new server and local
	  calendar files.
	
	2. From the File menu, choose Import Appointments. Import the appointments from
	  the USERNAME.SCH file created in step 5.
	
	Additional query words: schedule plus 1.00 1.00a 3.2 compression calendar
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
