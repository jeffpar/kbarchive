---
layout: page
title: "Q105768: PC WSPlus: Automatic Recovery and the RECOVER.CAL File"
permalink: kb/105/Q105768/
---

## Q105768: PC WSPlus: Automatic Recovery and the RECOVER.CAL File

	Article: Q105768
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 1.0 and 1.0a of Microsoft Schedule+ for Windows allow automatic
	recovery of a calendar file if it detects an abnormality in the file upon
	starting Schedule+. If an abnormality is found, Schedule+ creates a new file
	named RECOVER.CAL in the directory where the SCHEDULE.EXE file resides.
	
	To view the recovered information from the RECOVER.CAL file, do the following:
	
	1. From the Windows Program Manager, choose Run from the File menu.
	
	2. On the Run line, type SCHDPLUS.INI and press ENTER.
	
	3. Under the [Microsoft Schedule+] line, type the following line:
	
	  StartupOffLine=1
	
	4. Save the changes and exit from Notepad.
	
	5. Find the <username>.CAL file on your local hard disk drive, where
	  <username> is your Schedule+ user name.
	
	6. Rename the <username>.CAL file <username>.OLD.
	
	7. Rename the RECOVER.CAL file <username>.CAL.
	
	8. Start Schedule+. When it tells you that it cannot find your calendar file in
	  the location specified, point it to the file you renamed in step 7. Do not
	  make a new calendar file.
	
	As much information as possible is now displayed on the screen in Schedule+.
	Although some information may be lost, Schedule+ has recovered as much
	information as possible.
	
	To accept this file and all information written within as your new calendar file,
	do the following:
	
	1. From the Schedule+ Options menu, choose General Options.
	
	2. Remove the "X" in the Startup Offline option box. Schedule+ will now attempt
	  to merge the changes (if any) in the new <username>.CAL file with your
	  calendar file on the server.
	
	MORE INFORMATION
	================
	
	If you run Schedule+ off the network and if the Schedule+ executable file
	resides in a read-only directory on a server, Schedule+ will not be able to
	create a RECOVER.CAL file.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
