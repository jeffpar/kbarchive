---
layout: page
title: "Q94183: PC WSPlus: Schedule Distribution Command-Line Parameters"
permalink: /kb/094/Q94183/
---

## Q94183: PC WSPlus: Schedule Distribution Command-Line Parameters

{% raw %}

	Article: Q94183
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbother kbtlc
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	You can use the following command-line parameters when you run the schedule
	distribution program (SCHDIST.EXE) for versions 1.0 and 1.0a of Microsoft
	Schedule+ for Windows:
	
	Parameter       Description
	--------------------------------------------------------------------------
	
	-Dxy           Specifies the drives to be processed, where x is the first
	               drive to be processed and y is the last.
	
	-In            Indicates the number of times to cycle through the
	               specified postoffices. If n is left blank, Schedule
	               Distribution runs until it is stopped manually.
	
	-L<path>       Tells the program to generate a log file in the path
	               specified.
	
	-O             Enables free/busy sharing with other applications. Run
	               Schedule Distribution with this option if you use other
	               applications that share free/busy information with
	               Schedule+.
	
	-V             Tells the program to shows more detail in its screen
	               output.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
