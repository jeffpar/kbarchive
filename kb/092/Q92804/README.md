---
layout: page
title: "Q92804: PC WSPlus: Changes and Enhancements Made in Schedule+ 1.0a"
permalink: /kb/092/Q92804/
---

## Q92804: PC WSPlus: Changes and Enhancements Made in Schedule+ 1.0a

{% raw %}

	Article: Q92804
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	1.00a
	WINDOWS
	kbother kbusage kb3rdparty kbtlc
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0a 
	-------------------------------------------------------------------------------
	
	Version 1.0a of Microsoft Schedule+ for PC Networks was released in
	November 1992. The following is a description of the changes made in
	version 1.0a.
	
	1. Running Schedule+ without SHARE.EXE:
	
	  SHARE.EXE is required to use Schedule+ offline, but it is not required while
	  working online. To use Schedule+ without SHARE.EXE, you must be using version
	  3.0b or later of Microsoft Mail for Windows and you must be connected to your
	  mail server. If you are working online without SHARE.EXE and you switch to
	  your offline file (by choosing Work Offline from the File menu or by losing
	  the connection to your mail server), Schedule+ will quit. To restart
	  Schedule+ offline, exit Windows, run SHARE.EXE, and then restart Windows and
	  Schedule+.
	
	2. Sharing Data between Schedule+ and the Sharp Wizard:
	
	  Schedule+ can share information with all the Sharp Wizard models, using
	  Sharp's Organizer Link II. The Sharp Wizard/IQ format is an option in the
	  Import Appointments and Export Appointments commands. You can export your
	  appointments to the Sharp Wizard by choosing Export Appointments from the
	  File menu and selecting Sharp Wizard/IQ as the export format. Likewise, you
	  can use the Import Appointments command to import a Wizard calendar into
	  Schedule+. Wizard support is documented only in the Schedule+ README.DOC
	  file. There is no printed documentation or online help describing the Sharp
	  Wizard support.
	
	3. The utility that recovers corrupted calendars is more robust.
	
	4. Window positions are restored as expected after running minimized.
	
	5. It is now possible to import appointments/tasks that include the backslash
	  (\) character.
	
	6. Automatic recovery is much more robust.
	
	7. Offline appointments made on the last day of the month are now merged into
	  the online file.
	
	8. Installation into a directory with international characters now works
	  correctly.
	
	Additional query words: 1.00a schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100a
	Version           : WINDOWS:1.0a
	
	=============================================================================
	

{% endraw %}
