---
layout: page
title: "Q146160: Error Exporting Data When Dispdib.dll is Missing"
permalink: /kb/146/Q146160/
---

## Q146160: Error Exporting Data When Dispdib.dll is Missing

{% raw %}

	Article: Q146160
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows 3.x, version 7.0 
	- Microsoft Schedule+ for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to export data from Microsoft Schedule+ 7.0 to the Timex
	DataLink Watch, you will receive an error message if the file Dispdib.dll is not
	located in the Windows\System directory or in the path statement.
	
	On Microsoft Windows 95, the following error will appear:
	
	  There was a problem exporting the data. A problem occurred while accessing
	  the disk.
	
	On Microsoft Windows 3.x, the following error will appear:
	
	  There was a problem exporting the data. The file could not be found.
	
	MORE INFORMATION
	================
	
	To resolve the above error, it is necessary to manually expand the file
	Dispdib.dll from your Windows setup disks or CD-ROM. For the location of this
	file on the Windows 95 distribution media, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q135545 Win95 DMF format floppy
	
	  Q143327 Win95 Non DMT format floppy
	
	  Q135538 CD-ROM
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbSchedule700Win95
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
