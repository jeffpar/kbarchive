---
layout: page
title: "Q98120: PC WSPlus: Troubleshooting Corrupted Schedule+ Calendar Files"
permalink: /kb/098/Q98120/
---

## Q98120: PC WSPlus: Troubleshooting Corrupted Schedule+ Calendar Files

{% raw %}

	Article: Q98120
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbother kbtshoot kbtlc
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 1.0 or 1.0a of Microsoft Schedule+ for Windows, you may
	occasionally encounter a corrupted Schedule+ calendar file.
	
	When you use Schedule+ with version 3.0 or 3.2 of Microsoft Mail for PC Networks,
	Schedule+ maintains two copies of your calendar file to prevent loss of data.
	
	When you use Schedule+ as a standalone application, there is only one copy of
	your calendar file. If this becomes corrupted, you must start over or return to
	a backup.
	
	RESOLUTION
	==========
	
	The following steps outline a troubleshooting technique you can use to recover
	the lost calendar information:
	
	1. From the Windows directory, open the user's SCHDPLUS.INI file.
	
	2. Under the [Microsoft Schedule+] heading, add the following line:
	
	  StartUpOffline=1
	
	3. Save the changes and close the SCHDPLUS.INI file.
	
	4. Start Schedule+.
	
	  If Schedule+ allows the user to view the appointments entered in his or her
	  local calendar file, the postoffice copy of the calendar file is corrupted.
	  To replace the user's postoffice calendar file, the Schedule+ administrator
	  must use the MVCAL.EXE program to find and replace the calendar file on the
	  postoffice.
	
	5. From the MS-DOS command prompt in the ADMINSCH directory, type the
	  following:
	
	  MVCAL <username> (-D<drive letter> -P<password>)
	
	  MVCAL will find the calendar file for the user name specified and rename it
	  <username>.BAD. You can specify the postoffice drive with the -D option
	  and your (Schedule+ administrator's) password with the -P option.
	
	6. Switch back to Windows.
	
	7. From the Schedule+ directory on the user's computer, rename the
	  <username>.CAL file to <username>.BAD
	
	  After the calendar file is renamed, a new file will be created the next time
	  the user signs in to Schedule+, both on the user's local computer and on the
	  postoffice in the CAL directory.
	
	8. Restart Schedule+.
	
	MORE INFORMATION
	================
	
	The MVCAL utility is included with Application Note WA0641, "Database
	Maintenance Utilities." You can have this Application Note mailed or faxed to
	you by contacting Microsoft Product Support Services.
	
	Additional query words: schedule plus 1.00 1.00a tshoot troubleshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
