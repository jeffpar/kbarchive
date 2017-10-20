---
layout: page
title: "Q89846: Dr. Watson and Windows 3.1"
permalink: /kb/089/Q89846/
---

## Q89846: Dr. Watson and Windows 3.1

{% raw %}

	Article: Q89846
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbusage kbdisplay kbtool kbtshoot
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dr. Watson (DRWATSON.EXE) is a diagnostic utility that detects system and
	application failures (for example, general protection [GP] faults) and stores
	Windows internal data in a file called DRWATSON.LOG. Certain areas of this file
	may be useful when troubleshooting problems that may exist.
	
	NOTE: Dr. Watson is included in Windows versions 3.1 and 3.11 and Windows for
	Workgroups version 3.1. It is not included with Windows 3.0 or Windows for
	Workgroups 3.11.
	
	MORE INFORMATION
	================
	
	A Dr. Watson icon is not automatically loaded during Windows Setup. If you are
	experiencing a problem in Windows, it is recommended that you create an icon and
	install it in the Startup group. If an error occurs while Dr. Watson is running,
	specific internal data from Windows is captured and written to the DRWATSON.LOG
	file.
	
	How to Read a Dr. Watson Log
	----------------------------
	
	The Dr. Watson log is divided into sections, with each section being separated by
	a blank line.
	
	The Start (and Stop) line records the time and date that Dr. Watson was started.
	A series of start lines indicates Windows with no application errors. A start
	line immediately followed by a Stop line indicates the same thing.
	
	The Failure Report line records the time and date when the error occurred. It
	also tells which version of Dr. Watson was running at the time.
	
	The next two lines are related. The line "<APPLICATION NAME> had a
	<fault description> fault at <module name> <cs:ip register>"
	is a descriptive way of stating the next line (the $tag$ line). The $tag$ line
	divides the error into fields separated by "$". The first field indicates what
	application you were in when the error occurred. The second field indicates the
	probable error. The third field indicates which module probably caused the
	error, and its memory location. The fourth field is the instruction in the stack
	that the application was on when the error occurred. The fifth field is the
	time/date that the error occurred.
	
	The next two log sections indicate what was in the various CPU registers at fail
	time. The 32-bit registers are listed separately in the second register
	section.
	
	The System Info section provides information about the system and Windows.
	Username and Organization are taken from Windows 3.1 files and may be blank from
	Windows 3.0.
	
	The Stack Dump section is divided into frames. You can find out what was in the
	stack before the fault occurred in this section, in the first frame (0), by
	locating its memory location in the stack (the memory location was indicated in
	the third field of the $tag$ line).
	
	The final section lists the applications running from the tasks list. (The number
	of tasks running can be found in the System Info section.)
	
	A User description appears at the end of the log. These lines are preceded by a
	#> (for example, 1>, 2>, and so on).
	
	Troubleshooting with Dr. Watson
	-------------------------------
	
	The Dr. Watson log file is intended for debugging purposes. The more Windows
	knowledge you have, the more useful the Dr. Watson log file will be. At the very
	least, it can help isolate what application and module caused the error. In
	general it is more important which module caused the error than the application
	you were in when the error occurred. For example, the following log in the
	Failure Report section shows an error that could have been associated with the
	display driver:
	
	  Dr. Watson 0.80 Failure Report- Sat May 23 14:30:44 1992 Write had a 'Code
	  Segment (Read)' fault at Display 2:ld70 $tag$WRITE$Code Segment
	  (Read)$Display 2:ld70$mov
	
	In this example, the program that caused the error message was "Write" and the
	module is "Display". The first troubleshooting step in this case would be to
	test Write while using a different video driver.
	
	It is important to remember that Dr. Watson is a diagnostic tool, and not a cure
	for a problem. Having Dr. Watson will not prevent an error from occurring, but
	the information in DRWATSON.LOG can help isolate the problem.
	
	Additional query words: tshoot gpf 3.10 3.11 drwatson dr.watson dr watson GP fault NoWin4
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
