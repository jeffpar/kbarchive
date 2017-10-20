---
layout: page
title: "Q171167: XCLN: Schedule+ 7.x Cannot Directly Import Version 1.0 CAL Files"
permalink: /kb/171/Q171167/
---

## Q171167: XCLN: Schedule+ 7.x Cannot Directly Import Version 1.0 CAL Files

{% raw %}

	Article: Q171167
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,7.5; :7.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.5 
	- Microsoft Schedule+ for the Apple Macintosh, version 7.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to import a Microsoft Schedule+ 1.0 calendar (.cal) file to
	Microsoft Schedule+ 7.x using the File Import feature, you may receive the
	following error message:
	
	  The file you selected is either not valid or has an older version number.
	
	MORE INFORMATION
	================
	
	To import a Schedule+ 1.0 .cal file to Schedule+ 7.x, use the appropriate method
	for your situation.
	
	Importing a Single .cal File
	----------------------------
	
	To import a single .cal file, open the .cal file in Schedule+ 7.x, export it as a
	Schedule+ Interchange file, and then import this file. For additional
	information about how to do this, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q147490 How to Import a 1.0 Cal File Into 7.0
	
	Importing Multiple .cal Files
	-----------------------------
	
	To batch import multiple .cal files, use the Microsoft Exchange Migration Wizard,
	which is installed with Microsoft Exchange Server Administration Setup. This
	program can convert the schedule files of multiple users to a Microsoft Exchange
	server. For additional information about the Migration Wizard, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q153121 XADM: Migrating from WGPO to Exchange
	
	  Q150123 Migrated Schedule+ 1.0 Users Are Prompted for Password
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule750
	Version           : WINDOWS:7.0,7.5; :7.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
